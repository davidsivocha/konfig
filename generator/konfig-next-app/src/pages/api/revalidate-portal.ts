import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { githubGetReferenceResources } from '@/utils/github-get-reference-resources'
import { clearGithubApiCache } from '@/utils/github-api-redis-cache'
import { generateDemosDataFromGithub } from '@/utils/generate-demos-from-github'
import { githubGetKonfigYamls } from '@/utils/github-get-konfig-yamls'
import { createOctokitInstance } from '@/utils/octokit'
import { collectAllDocuments } from '@/utils/collect-all-documents'

const requestBodySchema = z.object({
  owner: z.string(),
  repo: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { owner, repo } = requestBodySchema.parse(req.body)

  await clearGithubApiCache()

  const toRevalidate = [`/${owner}/${repo}/reference`]

  // revalidate reference page
  const { navbarData } = await githubGetReferenceResources({ owner, repo })
  navbarData.forEach(({ links }) => {
    links.forEach(({ link }) => {
      toRevalidate.push(link)
    })
  })

  const demos = await generateDemosDataFromGithub({
    orgId: owner,
    portalId: repo,
  })

  if (demos.result !== 'error') {
    for (const demo of demos.portal.demos) {
      const path = `/${owner}/${repo}/${demo.id}`
      toRevalidate.push(path)
    }
  }

  const octokit = await createOctokitInstance({ owner, repo })
  const konfigYamls = await githubGetKonfigYamls({ owner, repo, octokit })
  if (konfigYamls !== null) {
    for (const konfigYaml of konfigYamls) {
      if (konfigYaml.content.portal?.documentation !== undefined) {
        const links = collectAllDocuments({
          docConfig: konfigYaml.content.portal.documentation,
        })
        for (const link of links) {
          toRevalidate.push(`/${owner}/${repo}/docs/${link.id}`)
        }
      }
    }
  }

  const revalidated: string[] = []

  for (const path of toRevalidate) {
    try {
      await res.revalidate(path, { unstable_onlyGenerated: true })
      revalidated.push(path)
    } catch (e) {
      if (e instanceof Error) {
        if (e.message.includes('404')) {
          console.log(`Tried to revalidate ${path} but got 404`)
          continue
        }
      }
      throw e
    }
  }

  return res.json({
    revalidated,
  })
}