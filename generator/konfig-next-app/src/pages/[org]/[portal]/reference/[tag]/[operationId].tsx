import { generateShadePalette } from '@/utils/generate-shade-palette'
import {
  AppShell,
  Navbar,
  useMantineColorScheme,
  useMantineTheme,
  Header,
  Box,
  Group,
  MantineProvider,
} from '@mantine/core'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { NAVBAR_WIDTH, ReferenceNavbar } from '@/components/ReferenceNavbar'
import {
  GithubResources,
  githubGetReferenceResources,
} from '@/utils/github-get-reference-resources'
import {
  type OperationObject,
  Spec,
  getOperations,
  RequestBodyObject,
  SchemaObject,
  ResponseObject,
  SecurityScheme,
  Demo,
} from 'konfig-lib'
import { Parameter } from '@/components/OperationParameter'
import { sortParametersByRequired } from '@/utils/sort-parameters-by-required'
import { NavbarDataItem } from '@/components/LinksGroup'
import { OperationReferenceMain } from '@/OperationReferenceMain'
import Script from 'next/script'
import Head from 'next/head'
import { generateDemosDataFromGithub } from '@/utils/generate-demos-from-github'
import { ReferenceHeader } from '@/components/ReferenceHeader'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

/**
 * create a getStaticProps function that gets the konfig.yaml file.
 *
 * 1. Use the first two subpaths as /[owner]/[repo] and the GitHub Search API
 * through githubSearchFiles.
 * 2. Use the githubGetFileContent and KonfigYaml.parse to retrieve the
 * konfig.yaml contents and return it as a props
 */

export type StaticProps = Omit<GithubResources, 'spec'> & {
  spec: Spec['spec']
  operationId: string
  operation: OperationObject
  servers: string[]
  title: string
  owner: string
  demos: string[] // demo ids
  hasDocumentation: boolean
  repo: string
  oauthTokenUrl: string | null
  pathParameters: Parameter[]
  queryParameters: Parameter[]
  headerParameters: Parameter[]
  cookieParameters: Parameter[]
  requestBodyProperties: Record<string, SchemaObject> | null
  requestBodyRequired: string[] | null
  responses: Record<string, ResponseObject>
  securityRequirements: Record<string, string[]> | null
  securitySchemes: Record<string, SecurityScheme> | null
}

export const getStaticProps: GetStaticProps<StaticProps> = async (ctx) => {
  const owner = ctx.params?.org
  const repo = ctx.params?.portal
  const tag = ctx.params?.tag
  const operationId = ctx.params?.operationId

  if (owner === undefined || repo === undefined)
    throw Error('Missing owner/repo parameters')

  if (tag === undefined || operationId === undefined)
    throw Error('Missing tag/operationId parameters')

  if (Array.isArray(owner) || Array.isArray(repo))
    throw Error('Got unexpected array type for parameters')

  if (Array.isArray(tag) || Array.isArray(operationId))
    throw Error('Got unexpected array type for parameters')

  const { spec, ...props } = await githubGetReferenceResources({ owner, repo })

  const demos = await generateDemosDataFromGithub({
    orgId: owner,
    portalId: repo,
  })

  if (spec.specDereferenced === null) throw Error('specDereferenced is null')

  // find any tokenUrl in the spec from the oauth2 security scheme
  // if found then set oauthTokenUrl to that value
  // if not found then set oauthTokenUrl to null
  let oauthTokenUrl: string | null = null
  if (spec.specDereferenced.components?.securitySchemes) {
    for (const securityScheme of Object.values(
      spec.specDereferenced.components.securitySchemes
    )) {
      if ('$ref' in securityScheme) throw Error('Spec should be dereferenced')
      if (securityScheme.type === 'oauth2') {
        oauthTokenUrl =
          securityScheme.flows?.clientCredentials?.tokenUrl ?? null
      }
    }
  }

  let operation: OperationObject | null = null
  const operations = getOperations({ spec: spec.specDereferenced })
  for (const op of operations) {
    if (op.operation.operationId === operationId) operation = op
  }
  if (operation === null)
    throw Error(`Operation with operation ID ${operationId} not found`)

  // find links group with operation id that matches operation in metadata.operationId and set initiallyOpened to true
  // if not found then set initiallyOpened to false
  // also sets "active" to true to make it highlighted in the navbar
  props.navbarData = props.navbarData.map(
    (item: NavbarDataItem): NavbarDataItem => {
      const hasOperation = item.links.find((link) => {
        if (link.metadata?.operationId === operationId) {
          link.active = true
          return true
        }
        return false
      })
      item.initiallyOpened = hasOperation ? true : false
      return item
    }
  )

  const requestBody = (operation.operation.requestBody ??
    null) as RequestBodyObject | null

  // extract all properties from requestBody schema for every media type into a map of media type -> properties
  const allRequestBodyProperties: Record<
    string,
    Record<string, SchemaObject>
  > = {}
  if (requestBody?.content) {
    for (const mediaType in requestBody.content) {
      const mediaTypeObject = requestBody.content[mediaType]
      if (mediaTypeObject.schema === undefined) continue
      if ('$ref' in mediaTypeObject.schema)
        throw Error('Spec should be dereferenced')
      if (mediaTypeObject.schema?.properties) {
        allRequestBodyProperties[mediaType] = mediaTypeObject.schema
          .properties as Record<string, SchemaObject>
      }
    }
  }

  // put all required properties into a map of media type -> required properties
  const allRequestBodyRequired: Record<string, string[]> = {}
  if (requestBody?.content) {
    for (const [mediaType, mediaTypeObject] of Object.entries(
      requestBody.content
    )) {
      if (mediaTypeObject.schema?.required) {
        allRequestBodyRequired[mediaType] = mediaTypeObject.schema.required
      }
    }
  }

  // extract the first mediaType from requestBody and create two variables: requestBodyProperties and requestBodyRequired
  // if no requestBody then set requestBodyProperties and requestBodyRequired to null
  let requestBodyProperties: Record<string, SchemaObject> | null = null
  let requestBodyRequired: string[] | null = null
  if (requestBody?.content) {
    const firstMediaType = Object.keys(requestBody.content)[0]
    requestBodyProperties = allRequestBodyProperties[firstMediaType] ?? null
    requestBodyRequired = allRequestBodyRequired[firstMediaType] ?? null
  }

  // put responses into a map of response code -> response object
  const responses: Record<string, ResponseObject> = {}
  if (operation.operation.responses) {
    for (const [responseCode, responseObject] of Object.entries(
      operation.operation.responses
    )) {
      responses[responseCode] = responseObject as ResponseObject
    }
  }
  const operationParameters = (operation.operation?.parameters ??
    []) as Parameter[]

  const pathParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'path')
  )
  const queryParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'query')
  )
  const headerParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'header')
  )
  const cookieParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'cookie')
  )

  // get global security requirements from spec and operation-specific security
  // requirements, merge them together, and map them to the corresponding
  // security schema under securitySchemes. If no security requirements are
  // found, set securityRequirements to null
  let securityRequirements: Record<string, string[]> | null = null
  if (spec.specDereferenced.security) {
    securityRequirements = {}
    for (const securityRequirement of spec.specDereferenced.security) {
      for (const [securitySchema, scopes] of Object.entries(
        securityRequirement
      )) {
        securityRequirements[securitySchema] = scopes
      }
    }
  }
  if (operation.operation.security) {
    if (securityRequirements === null) securityRequirements = {}
    for (const securityRequirement of operation.operation.security) {
      for (const [securitySchema, scopes] of Object.entries(
        securityRequirement
      )) {
        securityRequirements[securitySchema] = scopes
      }
    }
  }
  let securitySchemes: Record<string, SecurityScheme> | null = null
  if (
    securityRequirements &&
    spec.specDereferenced.components?.securitySchemes
  ) {
    for (const [security, scopes] of Object.entries(securityRequirements)) {
      if (security in spec.specDereferenced.components.securitySchemes) {
        if (securitySchemes === null) securitySchemes = {}
        securitySchemes[security] = spec.specDereferenced.components
          .securitySchemes[security] as SecurityScheme
      }
    }
  }

  // Dylan: note that we can't do this because TypeScript SDK throws an error if security is not provided
  //
  // if security is set to "[]" on the operation then no security should exist
  // if (operation.operation.security?.length === 0) {
  //   securityRequirements = null
  //   securitySchemes = null
  // }

  const servers = spec.spec.servers?.map((server) => server.url)
  if (servers === undefined) throw Error('No servers found in spec')
  if (servers.length === 0) throw Error('No servers found in spec')

  // return a 404 if "portal" property is not configured
  if (props.konfigYaml.portal === undefined)
    return {
      notFound: true,
    }

  return {
    props: {
      ...props,
      title: props.konfigYaml.portal.title,
      operationId,
      operation,
      spec: spec.spec,
      servers,
      requestBody,
      pathParameters,
      queryParameters,
      owner,
      repo,
      headerParameters,
      oauthTokenUrl,
      cookieParameters,
      hasDocumentation: props.konfigYaml.portal?.documentation !== undefined,
      requestBodyProperties,
      demos:
        demos.result === 'error'
          ? []
          : demos.portal.demos.map((demo) => demo.id),
      requestBodyRequired,
      securityRequirements,
      securitySchemes,
      responses,
    },
  }
}

const Operation = ({
  konfigYaml,
  navbarData,
  pathParameters,
  queryParameters,
  headerParameters,
  cookieParameters,
  title,
  requestBodyProperties,
  demos,
  requestBodyRequired,
  securityRequirements,
  securitySchemes,
  servers: initialServers,
  operation,
  owner,
  hasDocumentation,
  repo,
  oauthTokenUrl: originalOauthTokenUrl,
  responses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { colors } = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  const [basePath, setBasePath] = useState<string | null>(initialServers[0])
  const [servers, setServers] = useState(initialServers)
  const [oauthTokenUrl, setOauthTokenUrl] = useState(originalOauthTokenUrl)
  const [oauthTokenUrls, setOauthTokenUrls] = useState<string[]>(
    originalOauthTokenUrl ? [originalOauthTokenUrl] : []
  )

  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  return (
    <MantineProvider
      theme={{
        colorScheme,
        colors: {
          brand:
            konfigYaml.portal?.primaryColor !== undefined
              ? generateShadePalette(konfigYaml.portal?.primaryColor)
              : colors.blue,
        },
        primaryColor: 'brand',
      }}
    >
      <Head>
        <title>
          {operation.operation.summary ??
            `${operation.method} ${operation.path}`}
        </title>
      </Head>
      <Script
        src={`https://unpkg.com/${konfigYaml.generators.typescript?.npmName}@${konfigYaml.generators.typescript?.version}/dist/browser.js`}
      />
      <AppShell
        styles={{
          main: {
            background: colorScheme === 'dark' ? colors.dark[8] : undefined,
          },
        }}
        navbarOffsetBreakpoint="lg"
        asideOffsetBreakpoint="lg"
        navbar={
          <Navbar
            hiddenBreakpoint="lg"
            hidden={!opened}
            width={{ lg: NAVBAR_WIDTH }}
            sx={{
              overflowY: 'scroll',
              height:
                'calc(100% - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem));',
            }}
          >
            <ReferenceNavbar
              setOauthTokenUrl={setOauthTokenUrl}
              oauthTokenUrls={oauthTokenUrls}
              originalOauthTokenUrl={originalOauthTokenUrl}
              setOauthTokenUrls={setOauthTokenUrls}
              servers={servers}
              setServers={setServers}
              owner={owner}
              repo={repo}
              basePath={basePath}
              setBasePath={setBasePath}
              oauthTokenUrl={oauthTokenUrl}
              setOpened={setOpened}
              navbarData={navbarData}
              originalServers={initialServers}
            />
          </Navbar>
        }
        header={
          <ReferenceHeader
            hasDocumentation={hasDocumentation}
            opened={opened}
            setOpened={setOpened}
            title={title}
            demos={demos}
          />
        }
      >
        <OperationReferenceMain
          originalOauthTokenUrl={originalOauthTokenUrl}
          owner={owner}
          servers={servers}
          repo={repo}
          konfigYaml={konfigYaml}
          oauthTokenUrl={oauthTokenUrl}
          pathParameters={pathParameters}
          queryParameters={queryParameters}
          headerParameters={headerParameters}
          cookieParameters={cookieParameters}
          requestBodyProperties={requestBodyProperties}
          requestBodyRequired={requestBodyRequired}
          responses={responses}
          securitySchemes={securitySchemes}
          operation={operation}
          basePath={basePath ?? servers[0]}
        />
      </AppShell>
    </MantineProvider>
  )
}
export default Operation