import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function CrusoeTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="crusoe-typescript-sdk"
      metaDescription={`Crusoe exists to bring energy to ideas. We are the pioneers of clean computing infrastructure that reduces both the costs and the environmental impact of the world's expanding digital economy. By unlocking stranded sources of energy to power cloud and data center services, we are creating the climate-aligned future of compute-intensive innovation that reduces rather than adds to emissions. The world's appetite for computation, energy, and progress will never stop growing. Crusoe is here to bring energy to ideas in ways that are aligned with the needs of our climate.`}
      company="Crusoe"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crusoe/logo.png"
      companyKebabCase="crusoe"
      clientNameCamelCase="crusoe"
      homepage="crusoecloud.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crusoe/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crusoe/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["data_center","clean_computing_infrastructure","environmental_impact_reduction","emissions_reduction"]}
      methods={[
  {
    "url": "/capacities",
    "method": "listAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Capacities",
    "typeScriptTag": "capacities",
    "description": "Lists available Crusoe Cloud capacity with optional filters on location and product name.",
    "parameters": [
      {
        "name": "productName",
        "schema": "array",
        "description": "",
        "example": "[a100.1x, a100.2x]"
      },
      {
        "name": "location",
        "schema": "array",
        "description": "",
        "example": "[us-northcentral1-a, us-northcentral1-b]"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/compute/images",
    "method": "listAvailableVmImages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Lists all VM images available for use.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/compute/images/{image_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Images",
    "typeScriptTag": "images",
    "description": "Retrieve details about a VM image.",
    "parameters": [
      {
        "name": "imageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/featureflags",
    "method": "getUserFlags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature-Flags",
    "typeScriptTag": "featureFlags",
    "description": "Get feature flags for the currently logged in user.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/locations",
    "method": "listUsableLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Lists all Crusoe Cloud locations usable for resource hosting.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/billing/intent",
    "method": "getIntent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Retrieve an intent to facilitate a Stripe action.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "intentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTENT_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/entities",
    "method": "removeOrganization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Entities",
    "typeScriptTag": "entities",
    "description": "Delete an organization owned by the logged in user.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/entities",
    "method": "getDetailsAllActive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entities",
    "typeScriptTag": "entities",
    "description": "Retrieve details about all active organizations the logged in user belongs to.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/entities",
    "method": "createNewOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Entities",
    "typeScriptTag": "entities",
    "description": "Create a new organization owned by the logged in user.",
    "parameters": [
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Crusoe Energy"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/entities",
    "method": "updateOrganizationDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Entities",
    "typeScriptTag": "entities",
    "description": "Update details for an organization that the logged in user owns.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Crusoe Energy"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/projects",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Retrieve details about projects that the logged in user belongs to or owns.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "description": "",
        "example": "ee2a6bc3-aed5-4756-8995-9990a53d3a17"
      },
      {
        "name": "projectName",
        "schema": "string",
        "description": "",
        "example": "default"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/projects",
    "method": "createOwnedProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a new project that will be owned by the logged in user.",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Admin"
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/projects",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update details for a project that the logged in user owns.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "f058d0db-2fa4-4cf2-8cf1-dfbcfe05a814"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Crusoe Energy"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/projects/{project_id}",
    "method": "deleteOwnedProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete a project that the logged in user owns.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/projects/{project_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Retrieve details about a project that the logged in user belongs to or owns.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ee2a6bc3-aed5-4756-8995-9990a53d3a17"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/prospects",
    "method": "createNewProspect",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Create a new prospective customer in Crusoe Cloud.",
    "parameters": [
      {
        "name": "company",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "crusoe"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "john@crusoeenergy.com"
      },
      {
        "name": "expected_capacity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "<64 GPUs"
      },
      {
        "name": "expected_commitment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1 year"
      },
      {
        "name": "expected_service",
        "schema": "array",
        "required": true,
        "description": "",
        "example": "[Nvidia H100, Nvidia L40S]"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "john"
      },
      {
        "name": "referral",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "marketing event"
      },
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "portal"
      },
      {
        "name": "use_case",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "training model to minimize energy usage"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/usage",
    "method": "getProjectUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage",
    "typeScriptTag": "usage",
    "description": "Get project-level usage for products in Crusoe Cloud.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "projects",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "d8f58dfd-dd86-4ee4-8f01-643e6d0f15bb"
        ]
      },
      {
        "name": "resourceTypes",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "persistent-ssd",
          "a40.1x"
        ]
      },
      {
        "name": "regions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "us-east1",
          "us-northcentral1"
        ]
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "\"2022-07-01\""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "\"2023-08-08\""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/usage/export",
    "method": "exportResourceUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage",
    "typeScriptTag": "usage",
    "description": "Get resource-level usage for products in Crusoe Cloud.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "projects",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "d8f58dfd-dd86-4ee4-8f01-643e6d0f15bb"
        ]
      },
      {
        "name": "resources",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "d8f58dfd-dd86-4ee4-8f01-643e6d0f15bb"
        ]
      },
      {
        "name": "resourceTypes",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "persistent-ssd",
          "a40.1x"
        ]
      },
      {
        "name": "regions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "us-east1",
          "us-northcentral1"
        ]
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "\"2022-07-01\""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "\"2023-08-08\""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/usage/options",
    "method": "getOptionFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage",
    "typeScriptTag": "usage",
    "description": "Get options which exist for filters for /usage and /usage/export routes.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "UsageOptions contains the values which exist for the fields which we allow filtering\non for the usageByProjectGet endpoint."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/instance-groups",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instance-Groups",
    "typeScriptTag": "instanceGroups",
    "description": "Lists all instance groups.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ListInstanceGroupsResponse is the resource response type for GET\nrequests to the InstanceGroup endpoint."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/instance-groups",
    "method": "createInstanceGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Instance-Groups",
    "typeScriptTag": "instanceGroups",
    "description": "Create an instance group.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-instance-group"
      },
      {
        "name": "template_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "7e6a6c5a-1314-409a-9e4f-3cc9f2a68fcc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/instance-groups/{instance_group_id}",
    "method": "removeInstanceGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Instance-Groups",
    "typeScriptTag": "instanceGroups",
    "description": "Delete an instance group.",
    "parameters": [
      {
        "name": "instanceGroupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/instance-groups/{instance_group_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instance-Groups",
    "typeScriptTag": "instanceGroups",
    "description": "Retrieve details about an instance group.",
    "parameters": [
      {
        "name": "instanceGroupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/instance-groups/{instance_group_id}",
    "method": "updateInstanceGroup",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Instance-Groups",
    "typeScriptTag": "instanceGroups",
    "description": "Update an instance group.",
    "parameters": [
      {
        "name": "instanceGroupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "my-instance-group"
      },
      {
        "name": "template_id",
        "schema": "string",
        "description": "",
        "example": "7e6a6c5a-1314-409a-9e4f-3cc9f2a68fcc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/instance-templates",
    "method": "listAvailableVmTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instance-Templates",
    "typeScriptTag": "instanceTemplates",
    "description": "Lists all VM instance templates available for use.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ListInstanceTemplatesResponseV1Alpha5 is the resource response type for GET\nrequests to the InstanceTemplates endpoint."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/instance-templates",
    "method": "createVmTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Instance-Templates",
    "typeScriptTag": "instanceTemplates",
    "description": "Create a VM instance template, for use in bulk VM creation.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "disks",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ib_partition_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "09ae8411-0fbb-411c-898c-2b8f19622ae1"
      },
      {
        "name": "image_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ubuntu:20.04"
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "us-northcentral1-a"
      },
      {
        "name": "public_ip_address_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "static"
      },
      {
        "name": "shutdown_script",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "\"#!/bin/bash\\necho'goodbye'\""
      },
      {
        "name": "ssh_public_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCspdG97nTS/h4PEPq2QD2RYVK1jxFXLFZuSDMI8Rtxpucl6LDZLOghEYoj13lxKQnGtcsM3Iu68lh+4YgZe7CbI6cc/TxPbeAX2HJTqDh0J7+GAlLBHK9tsepC0QlhIDiazJptOPDZ3cesCBXdxSnzEbhDaqgYOfl393cp1fCeOKRIDWEP3H9CM25dCbWF66sTDziLsojJ9dMnxhgKm9/JkZc5gYncLT/2Ey+VWfV9Fs65mGUrBbQOn3c8S/nEk6WRcYn4PFOnIp0Mz+Chb50iCJrW677pllLnkTGSU+4c0H9J5z4HDG0I+91RoiQ0QsayFTYO1JtSn+THLuq98V+D"
      },
      {
        "name": "startup_script",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "\"#!/bin/bash\\necho'hello'\""
      },
      {
        "name": "subnet_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "09ae8411-0fbb-411c-898c-2b8f19622ae1"
      },
      {
        "name": "template_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-instance-template"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a100.2x"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/instance-templates/{instance_template_id}",
    "method": "deleteVmTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Instance-Templates",
    "typeScriptTag": "instanceTemplates",
    "description": "Delete a VM instance template.",
    "parameters": [
      {
        "name": "instanceTemplateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/instance-templates/{instance_template_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instance-Templates",
    "typeScriptTag": "instanceTemplates",
    "description": "Retrieve details about a VM instance template.",
    "parameters": [
      {
        "name": "instanceTemplateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/bulk-instances",
    "method": "createBulkInstances",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VMs",
    "typeScriptTag": "vMs",
    "description": "Create new VM instances owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 6
      },
      {
        "name": "instance_template",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "instance_template_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "09ae8411-0fbb-411c-898c-2b8f19622ae1"
      },
      {
        "name": "locations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name_prefix",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-vm"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/instances",
    "method": "getAllOwnedInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VMs",
    "typeScriptTag": "vMs",
    "description": "Retrieve details about all VMs that the logged in user owns or has access to.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "ids",
        "schema": "string",
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "names",
        "schema": "string",
        "description": "",
        "example": "my-first-vm"
      },
      {
        "name": "types",
        "schema": "string",
        "description": "",
        "example": "a40.2x,a100.8x"
      },
      {
        "name": "locations",
        "schema": "string",
        "description": "",
        "example": "us-east1,us-northcentral1"
      },
      {
        "name": "states",
        "schema": "string",
        "description": "",
        "example": "STATE_RUNNING"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "",
        "example": "20"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "",
        "example": "name"
      },
      {
        "name": "nextToken",
        "schema": "string",
        "description": "",
        "example": "bXktZmlyc3Qtdm0"
      },
      {
        "name": "prevToken",
        "schema": "string",
        "description": "",
        "example": "bXktZmlyc3Qtdm0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/instances",
    "method": "createInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VMs",
    "typeScriptTag": "vMs",
    "description": "Create a new VM instance owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "commitment_period",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 6
      },
      {
        "name": "disks",
        "schema": "array",
        "required": false,
        "description": "",
        "example": "[{disk_id: \"09ae8411-0fbb-411c-898c-2b8f19622ae1\", mode: \"read-write\", attach_type: \"data\"},"
      },
      {
        "name": "host_channel_adapters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ubuntu:20.04"
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "us-northcentral1-a"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-first-vm"
      },
      {
        "name": "network_interfaces",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "shutdown_script",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "\"#!/bin/bash\\necho'goodbye'\""
      },
      {
        "name": "ssh_public_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCspdG97nTS/h4PEPq2QD2RYVK1jxFXLFZuSDMI8Rtxpucl6LDZLOghEYoj13lxKQnGtcsM3Iu68lh+4YgZe7CbI6cc/TxPbeAX2HJTqDh0J7+GAlLBHK9tsepC0QlhIDiazJptOPDZ3cesCBXdxSnzEbhDaqgYOfl393cp1fCeOKRIDWEP3H9CM25dCbWF66sTDziLsojJ9dMnxhgKm9/JkZc5gYncLT/2Ey+VWfV9Fs65mGUrBbQOn3c8S/nEk6WRcYn4PFOnIp0Mz+Chb50iCJrW677pllLnkTGSU+4c0H9J5z4HDG0I+91RoiQ0QsayFTYO1JtSn+THLuq98V+D"
      },
      {
        "name": "startup_script",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "\"#!/bin/bash\\necho'hello'\""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a100.2x"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/instances/operations",
    "method": "getStatusOfOperations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VM-Operations",
    "typeScriptTag": "vmOperations",
    "description": "Get status of asynchronous operations",
    "parameters": [
      {
        "name": "resourceId",
        "schema": "string",
        "description": "",
        "example": "452580d7-41d1-4b63-b4d7-4e4e21e95f96"
      },
      {
        "name": "state",
        "schema": "array",
        "description": "",
        "example": [
          "IN_PROGRESS"
        ]
      },
      {
        "name": "lowerTimeBound",
        "schema": "string",
        "description": "",
        "example": "2021-12-03T19:58:34Z"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/instances/operations/{operation_id}",
    "method": "getStatusOfOperation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VM-Operations",
    "typeScriptTag": "vmOperations",
    "description": "Get the status of a single asynchronous operation",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "operationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Individual resources that use Operations should populate the `metadata` field\nwith resource-specific information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/instances/{vm_id}",
    "method": "deleteInstance",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "VMs",
    "typeScriptTag": "vMs",
    "description": "Delete a VM that the logged in user owns.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vmId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/instances/{vm_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VMs",
    "typeScriptTag": "vMs",
    "description": "Retrieve details about a particular VM.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vmId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "InstanceV1Alpha5 contains identifying information about a vm instance for\nvms.instances endpoints."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/instances/{vm_id}",
    "method": "changeState",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "VMs",
    "typeScriptTag": "vMs",
    "description": "Change the state of a VM the logged in user owns.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vmId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START"
      },
      {
        "name": "commitment_period",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 6
      },
      {
        "name": "host_channel_adapters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "network_interfaces",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "a100.2x"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/instances/{vm_id}/attach-disks",
    "method": "attachDisksToInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VMs",
    "typeScriptTag": "vMs",
    "description": "Attach disks to a VM the logged in user owns.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vmId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "attach_disks",
        "schema": "array",
        "required": true,
        "description": "",
        "example": "[{disk_id: \"09ae8411-0fbb-411c-898c-2b8f19622ae1\", mode: \"read-write\", attachment_type: \"data\"}, {disk_id: \"b1f86d1b-42d2-490d-adb0-cc1029abf653\", mode: \"read-only\", attachment_type: \"data\"}]"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/instances/{vm_id}/detach-disks",
    "method": "detachDiskFromInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VMs",
    "typeScriptTag": "vMs",
    "description": "Detach disks from a VM the logged in user owns.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vmId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "detach_disks",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "09ae8411-0fbb-411c-898c-2b8f19622ae1",
          "123e4567-e89b-12d3-a456-426614174000"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/compute/vms/types",
    "method": "getAvailableTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VMs",
    "typeScriptTag": "vMs",
    "description": "Retrieve information about the types of VMs that are available to purchase along with their prices.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/ib-networks",
    "method": "getAllDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IB-Networks",
    "typeScriptTag": "ibNetworks",
    "description": "Retrieve details for all Infiniband networks.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/ib-networks/{ib_network_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IB-Networks",
    "typeScriptTag": "ibNetworks",
    "description": "Retrieve details for an Infiniband network.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "ibNetworkId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/ib-partitions",
    "method": "getAllPartitionsBelongsToUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IB-Partitions",
    "typeScriptTag": "ibPartitions",
    "description": "Retrieve details for all Infiniband partitions that belongs to the user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/ib-partitions",
    "method": "createNewPartition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IB-Partitions",
    "typeScriptTag": "ibPartitions",
    "description": "Create a new Infiniband partition owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "ib_network_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "36c0b0d9-8b68-4869-addb-227b06b64ee0"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-ib-partition"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/ib-partitions/{ib_partition_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IB-Partitions",
    "typeScriptTag": "ibPartitions",
    "description": "Delete an Infiniband partition owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "ibPartitionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/ib-partitions/{ib_partition_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IB-Partitions",
    "typeScriptTag": "ibPartitions",
    "description": "Retrieve details for an Infiniband partition that belongs to the user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "ibPartitionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/load-balancers",
    "method": "getAllDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load-Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Retrieve details about all load balancers that belong to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/load-balancers",
    "method": "createOwnedBalancer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Load-Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Create a new load balancer owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "algorithm",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "random"
      },
      {
        "name": "destinations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "health_check",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "us-northcentraleast1-a"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-load-balancer"
      },
      {
        "name": "protocols",
        "schema": "array",
        "required": true,
        "description": "",
        "example": "[tcp]"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "internal_ipv4"
      },
      {
        "name": "vpc_subnet_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "09ae8411-0fbb-411c-898c-2b8f19622ae1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/load-balancers/operations",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load-Balancer-Operations",
    "typeScriptTag": "loadBalancerOperations",
    "description": "Get status of asynchronous operations",
    "parameters": [
      {
        "name": "resourceId",
        "schema": "string",
        "description": "",
        "example": "452580d7-41d1-4b63-b4d7-4e4e21e95f96"
      },
      {
        "name": "state",
        "schema": "array",
        "description": "",
        "example": [
          "IN_PROGRESS"
        ]
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/load-balancers/operations/{operation_id}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load-Balancer-Operations",
    "typeScriptTag": "loadBalancerOperations",
    "description": "Get status of a single asynchronous operation",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "operationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Individual resources that use Operations should populate the `metadata` field\nwith resource-specific information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/load-balancers/{load_balancer_id}",
    "method": "removeOwnedBalancer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Load-Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Delete a load balancer owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "loadBalancerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/load-balancers/{load_balancer_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Load-Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Retrieve details for a load balancer that belongs to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "loadBalancerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/load-balancers/{load_balancer_id}",
    "method": "updateAsyncOperation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Load-Balancers",
    "typeScriptTag": "loadBalancers",
    "description": "Patch (https://docs.crusoecloud.com/ a load balancer owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "loadBalancerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "destinations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "health_check",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "my-load-balancer"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-firewall-rules",
    "method": "getAllDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Firewall-Rules",
    "typeScriptTag": "vpcFirewallRules",
    "description": "Retrieve details about all VPC firewall rules that belong to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-firewall-rules",
    "method": "createNewRule",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VPC-Firewall-Rules",
    "typeScriptTag": "vpcFirewallRules",
    "description": "Create a new VPC firewall rule owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "allow"
      },
      {
        "name": "destination_ports",
        "schema": "array",
        "required": false,
        "description": "",
        "example": "[80, 443, 3000-8080]"
      },
      {
        "name": "destinations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ingress"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-firewall-rule"
      },
      {
        "name": "protocols",
        "schema": "array",
        "required": true,
        "description": "",
        "example": "[tcp, udp]"
      },
      {
        "name": "source_ports",
        "schema": "array",
        "required": false,
        "description": "",
        "example": "[80, 443, 3000-8080]"
      },
      {
        "name": "sources",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "vpc_network_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "09ae8411-0fbb-411c-898c-2b8f19622ae1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-firewall-rules/operations",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Firewall-Rule-Operations",
    "typeScriptTag": "vpcFirewallRuleOperations",
    "description": "Get status of asynchronous operations",
    "parameters": [
      {
        "name": "resourceId",
        "schema": "string",
        "description": "",
        "example": "452580d7-41d1-4b63-b4d7-4e4e21e95f96"
      },
      {
        "name": "state",
        "schema": "array",
        "description": "",
        "example": [
          "IN_PROGRESS"
        ]
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-firewall-rules/operations/{operation_id}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Firewall-Rule-Operations",
    "typeScriptTag": "vpcFirewallRuleOperations",
    "description": "Get status of a single asynchronous operation",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "operationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Individual resources that use Operations should populate the `metadata` field\nwith resource-specific information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-firewall-rules/{vpc_firewall_rule_id}",
    "method": "deleteRule",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "VPC-Firewall-Rules",
    "typeScriptTag": "vpcFirewallRules",
    "description": "Delete a VPC firewall rule owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vpcFirewallRuleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-firewall-rules/{vpc_firewall_rule_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Firewall-Rules",
    "typeScriptTag": "vpcFirewallRules",
    "description": "Retrieve details for a VPC firewall rule that belongs to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vpcFirewallRuleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-firewall-rules/{vpc_firewall_rule_id}",
    "method": "updateOwnedRule",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "VPC-Firewall-Rules",
    "typeScriptTag": "vpcFirewallRules",
    "description": "Patch (https://docs.crusoecloud.com/ a VPC firewall rule owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vpcFirewallRuleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "destination_ports",
        "schema": "array",
        "description": "",
        "example": "[80, 443, 3000-8080]"
      },
      {
        "name": "destinations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "my-firewall-rule"
      },
      {
        "name": "protocols",
        "schema": "array",
        "description": "",
        "example": "[tcp, udp]"
      },
      {
        "name": "source_ports",
        "schema": "array",
        "description": "",
        "example": "[80, 443, 3000-8080]"
      },
      {
        "name": "sources",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-networks",
    "method": "getAllDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Networks",
    "typeScriptTag": "vpcNetworks",
    "description": "Retrieve details about all VPC networks that belong to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-networks",
    "method": "createNewVpcNetwork",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VPC-Networks",
    "typeScriptTag": "vpcNetworks",
    "description": "Create a new VPC network owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "cidr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "172.27.0.0/16"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-cool-vpc-network"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-networks/operations",
    "method": "getStatusAsynchronousOperations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Network-Operations",
    "typeScriptTag": "vpcNetworkOperations",
    "description": "Get status of asynchronous operations",
    "parameters": [
      {
        "name": "resourceId",
        "schema": "string",
        "description": "",
        "example": "452580d7-41d1-4b63-b4d7-4e4e21e95f96"
      },
      {
        "name": "state",
        "schema": "array",
        "description": "",
        "example": [
          "IN_PROGRESS"
        ]
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-networks/operations/{operation_id}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Network-Operations",
    "typeScriptTag": "vpcNetworkOperations",
    "description": "Get status of a single asynchronous operation",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "operationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Individual resources that use Operations should populate the `metadata` field\nwith resource-specific information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-networks/{vpc_network_id}",
    "method": "deleteOwnedNetwork",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "VPC-Networks",
    "typeScriptTag": "vpcNetworks",
    "description": "Delete a VPC network owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vpcNetworkId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-networks/{vpc_network_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Networks",
    "typeScriptTag": "vpcNetworks",
    "description": "Retrieve details for a VPC network that belongs to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vpcNetworkId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-networks/{vpc_network_id}",
    "method": "updateAsyncOperation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "VPC-Networks",
    "typeScriptTag": "vpcNetworks",
    "description": "Patch (https://docs.crusoecloud.com/ a VPC network owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vpcNetworkId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-cool-vpc-network"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-subnets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Subnets",
    "typeScriptTag": "vpcSubnets",
    "description": "Retrieve details about all VPC subnets that belong to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-subnets",
    "method": "createNewSubnet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "VPC-Subnets",
    "typeScriptTag": "vpcSubnets",
    "description": "Create a new VPC subnet owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "cidr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "172.27.0.0/16"
      },
      {
        "name": "location",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "us-east"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-cool-vpc-subnet"
      },
      {
        "name": "vpc_network_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "36c0b0d9-8b68-4869-addb-227b06b64ee0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-subnets/operations",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Subnet-Operations",
    "typeScriptTag": "vpcSubnetOperations",
    "description": "Get status of asynchronous operations",
    "parameters": [
      {
        "name": "resourceId",
        "schema": "string",
        "description": "",
        "example": "452580d7-41d1-4b63-b4d7-4e4e21e95f96"
      },
      {
        "name": "state",
        "schema": "array",
        "description": "",
        "example": [
          "IN_PROGRESS"
        ]
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-subnets/operations/{operation_id}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Subnet-Operations",
    "typeScriptTag": "vpcSubnetOperations",
    "description": "Get status of a single asynchronous operation",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "operationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Individual resources that use Operations should populate the `metadata` field\nwith resource-specific information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-subnets/{vpc_subnet_id}",
    "method": "deleteOwnedSubnet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "VPC-Subnets",
    "typeScriptTag": "vpcSubnets",
    "description": "Delete a VPC subnet owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vpcSubnetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-subnets/{vpc_subnet_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VPC-Subnets",
    "typeScriptTag": "vpcSubnets",
    "description": "Retrieve details for a VPC subnet that belongs to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vpcSubnetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/networking/vpc-subnets/{vpc_subnet_id}",
    "method": "updateAsyncOperation",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "VPC-Subnets",
    "typeScriptTag": "vpcSubnets",
    "description": "Patch (https://docs.crusoecloud.com/ a VPC subnet owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "vpcSubnetId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-cool-vpc-subnet"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/disks",
    "method": "getAllDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Disks",
    "typeScriptTag": "disks",
    "description": "Retrieve details about all disks that belong to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/disks",
    "method": "createOwnedDisk",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Disks",
    "typeScriptTag": "disks",
    "description": "Create a new disk owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "block_size",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 4096
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "us-northcentral1-a"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my-disk"
      },
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "10GiB"
      },
      {
        "name": "snapshot_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "persistent-ssd"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/disks/operations",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Disk-Operations",
    "typeScriptTag": "diskOperations",
    "description": "Get status of asynchronous operations",
    "parameters": [
      {
        "name": "resourceId",
        "schema": "string",
        "description": "",
        "example": "452580d7-41d1-4b63-b4d7-4e4e21e95f96"
      },
      {
        "name": "state",
        "schema": "array",
        "description": "",
        "example": [
          "IN_PROGRESS"
        ]
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/disks/operations/{operation_id}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Disk-Operations",
    "typeScriptTag": "diskOperations",
    "description": "Get status of a single asynchronous operation",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "operationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Individual resources that use Operations should populate the `metadata` field\nwith resource-specific information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/disks/{disk_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Disks",
    "typeScriptTag": "disks",
    "description": "Delete a disk owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "diskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/disks/{disk_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Disks",
    "typeScriptTag": "disks",
    "description": "Retrieve details for a disk that belongs to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "diskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/disks/{disk_id}",
    "method": "resizeDiskSize",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Disks",
    "typeScriptTag": "disks",
    "description": "Resize a disk that the logged in user owns.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "diskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "size",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "10GiB"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/snapshots",
    "method": "listUserSnapshots",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Retrieve details about all disk snapshots that belong to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/snapshots",
    "method": "createDiskSnapshot",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Create a new snapshot for a disk owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "disk_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123e4567-e89b-12d3-a456-426614174000"
      },
      {
        "name": "role_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "09ae8411-0fbb-411c-898c-2b8f19622ae1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/snapshots/operations",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snapshot-Operations",
    "typeScriptTag": "snapshotOperations",
    "description": "Get status of asynchronous operations",
    "parameters": [
      {
        "name": "resourceId",
        "schema": "string",
        "description": "",
        "example": "452580d7-41d1-4b63-b4d7-4e4e21e95f96"
      },
      {
        "name": "state",
        "schema": "array",
        "description": "",
        "example": [
          "IN_PROGRESS"
        ]
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/snapshots/operations/{operation_id}",
    "method": "getStatusSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snapshot-Operations",
    "typeScriptTag": "snapshotOperations",
    "description": "Get status of a single asynchronous operation",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "operationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Individual resources that use Operations should populate the `metadata` field\nwith resource-specific information."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/snapshots/{snapshot_id}",
    "method": "deleteOwnedSnapshot",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Delete a disk snapshot owned by the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "snapshotId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{project_id}/storage/snapshots/{snapshot_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Retrieve details about a disk snapshot that belongs to the logged in user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      },
      {
        "name": "snapshotId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ab4a6b00-aa5f-408e-a9fb-ac6de5eb45ab"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/identities",
    "method": "deleteUserAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Identities",
    "typeScriptTag": "identities",
    "description": "Delete the account for the logged in user.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/identities",
    "method": "getUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Identities",
    "typeScriptTag": "identities",
    "description": "Retrieve user details for the logged in user.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Identity of a user is returned."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/identities",
    "method": "updateUserDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Identities",
    "typeScriptTag": "identities",
    "description": "Update user details for the logged in user.",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John Doe"
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Admin"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Identity of a user is returned."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/ssh-keys",
    "method": "deleteUserSshKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "SSH-Keys",
    "typeScriptTag": "sshKeys",
    "description": "Delete an SSH public key registered to the logged in user.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6e28cad3-98e6-47a9-a9fc-1cd83a7f25c1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/ssh-keys",
    "method": "listUserKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SSH-Keys",
    "typeScriptTag": "sshKeys",
    "description": "Retrieve the list of SSH public keys registered to the logged in user.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/ssh-keys",
    "method": "registerNewKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SSH-Keys",
    "typeScriptTag": "sshKeys",
    "description": "Register a new SSH public key to the logged in user.",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John Doe"
      },
      {
        "name": "public_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICpuH/fqCFLbAConChyVH6rZzSaxlnHSwQk6qvtPsf5E"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/tokens",
    "method": "deleteOwnedToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Delete an API token owned by the logged in user.",
    "parameters": [
      {
        "name": "accessKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WTUzcGibQ82y9_01h4MCdQ"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/tokens",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Retrieve all active/expired API tokens for the logged in user.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/tokens",
    "method": "generateOwnedToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Create a new token owned by the logged in user.",
    "parameters": [
      {
        "name": "alias",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "token1"
      },
      {
        "name": "expires_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2021-12-03T19:58:34Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Crusoe Cloud API Gateway"
      apiBaseUrl="https://api.crusoecloud.com/v1alpha5"
      apiVersion="v1alpha5"
      endpoints={56}
      sdkMethods={95}
      schemas={108}
      parameters={262}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crusoe/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crusoe/openapi.yaml"
      developerDocumentation="docs.crusoecloud.com/"
    />
  );
}
  