import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RiveryTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="rivery-typescript-sdk"
      metaDescription={`Whether you're building out your data stack or transitioning to the cloud, managing your data workflows to analyze your business can be a real challenge.

Developing an in-house solution requires valuable resources and upkeep, while integrating several tools adds new layers of complexity.

Rivery's SaaS platform provides a fully-managed solution for data ingestion, data transformation, data orchestration, reverse ETL and more, with built-in support for your data operations development and deployment lifecycles.

Designed to be nimble for non-technical users and with advanced capabilities for experts, Rivery enables you to manage data workflows as the foundation of a modern data stack.

If you're looking to accelerate your time to value, get in touch today.`}
      company="Rivery"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rivery/logo.png"
      companyKebabCase="rivery"
      clientNameCamelCase="rivery"
      homepage="rivery.io"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rivery/favicon.png"
      contactUrl="https://docs.rivery.io/"
      contactEmail="contact@rivery.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rivery/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["data_transformation","data_sync"]}
      methods={[
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/dataframes",
    "method": "dataframes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataframes",
    "typeScriptTag": "dataframes",
    "description": "Get Dataframes",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page in the paginated list.",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The current page number in the paginated list.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Dataframe response properties to return as a paginated list\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/dataframes",
    "method": "dataframe",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dataframes",
    "typeScriptTag": "dataframes",
    "description": "Add Dataframe",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "connection_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "unique_name"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Dataframe response properties to return\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/dataframes/{dataframe_name}",
    "method": "dataframe",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dataframes",
    "typeScriptTag": "dataframes",
    "description": "Delete Dataframe",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "dataframeName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATAFRAME_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/dataframes/{dataframe_name}",
    "method": "dataframe",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataframes",
    "typeScriptTag": "dataframes",
    "description": "Get Dataframe",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "dataframeName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATAFRAME_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Dataframe response properties to return\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/dataframes/{dataframe_name}",
    "method": "dataframe",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dataframes",
    "typeScriptTag": "dataframes",
    "description": "Update Dataframe",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "dataframeName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATAFRAME_NAME"
      },
      {
        "name": "connection_settings",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Dataframe response properties to return\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/dataframes/{dataframe_name}/download",
    "method": "dataframe",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dataframes",
    "typeScriptTag": "dataframes",
    "description": "Download Dataframe",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "dataframeName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATAFRAME_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Operation properties to return.\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/dataframes/{dataframe_name}/clear",
    "method": "clearValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dataframes",
    "typeScriptTag": "dataframes",
    "description": "Clear Dataframe Values",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "dataframeName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATAFRAME_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Operation properties to return.\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/activities_statistics",
    "method": "getStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get Activities Statistic",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": true,
        "description": "The start UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": true,
        "description": "The end UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": "A list of statuses to filter"
      },
      {
        "name": "groupId",
        "schema": "array",
        "required": false,
        "description": "The ID of the group to filter"
      },
      {
        "name": "isScheduled",
        "schema": "string",
        "required": false,
        "description": "A flag that indicates whether the river is scheduled. If not set then activities of all rivers will be returned"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Get statistics for rivers that has the search query in their name"
      },
      {
        "name": "riverType",
        "schema": "array",
        "required": false,
        "description": "The river type"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Activity statistics response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/activities_statistics",
    "method": "getRiverActivitiesStatistic",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get River Activities Statistic",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": true,
        "description": "The start UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": true,
        "description": "The end UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Statistics response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/activities_targets",
    "method": "getRiverActivityTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get River Activities Targets",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": true,
        "description": "The start UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": true,
        "description": "The end UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "runGroupId",
        "schema": "string",
        "required": false,
        "description": "Filter by the run group ID"
      },
      {
        "name": "subRiverId",
        "schema": "string",
        "required": false,
        "description": "Filter by the sub river ID"
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": "A list of statuses. Only targets with those statuses will be returned"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Indicates by which parameter to sort the targets"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Target response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/activities_run_groups",
    "method": "listRunGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "List River Activities Run Groups",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": true,
        "description": "The start UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": true,
        "description": "The end UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "targetName",
        "schema": "string",
        "required": false,
        "description": "Filter by the target table name"
      },
      {
        "name": "subRiverId",
        "schema": "string",
        "required": false,
        "description": "Filter by the sub river ID"
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": "A list of statuses. Only run groups with this statuses will be returned."
      },
      {
        "name": "cacheContextId",
        "schema": "string",
        "required": false,
        "description": "Cache context id is an internal query parameter for cache purposes"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response for the activity run groups"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/activities_run_groups/{run_group_id}",
    "method": "getRunGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get River Activities Run Groups",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "runGroupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUN_GROUP_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The run group details with statistics"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/activities_sub_rivers",
    "method": "getSubRiverActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get River Activities Sub Rivers",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": true,
        "description": "The start UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": true,
        "description": "The end UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "targetName",
        "schema": "string",
        "required": false,
        "description": "Filter by the target table name"
      },
      {
        "name": "runGroupId",
        "schema": "string",
        "required": false,
        "description": "Filter by the run group ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response of the sub river"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/runs",
    "method": "getRiverRuns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get River Activities Runs",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": true,
        "description": "The start UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": true,
        "description": "The end UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "targetName",
        "schema": "string",
        "required": false,
        "description": "Filter by the target table name"
      },
      {
        "name": "runGroupId",
        "schema": "string",
        "required": false,
        "description": "Filter by the run group ID"
      },
      {
        "name": "subRiverId",
        "schema": "string",
        "required": false,
        "description": "Filter by the sub river ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 20
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Indicates by which parameter to sort the runs"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cacheContextId",
        "schema": "string",
        "required": false,
        "description": "Cache context id is an internal query parameter for cache purposes"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The activity run response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/runs/{run_id}",
    "method": "getRiverActivitiesRun",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get River Activities Run",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUN_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A run"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/runs/{run_id}/logic_steps",
    "method": "getLogicStepsStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get River Activities Run Logic Steps",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUN_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "run's logic step"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/runs/{run_id}/variables",
    "method": "getRunVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get Activities Logic Variables",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUN_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The activities logic variables response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/runs/{run_id}/logic_steps/{step_id}/logs",
    "method": "getLogicStepLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get Activities Logic Step Log",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUN_ID"
      },
      {
        "name": "stepId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STEP_ID"
      },
      {
        "name": "iterationNumber",
        "schema": "integer",
        "required": false,
        "description": "The step iteration number",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "run's logic step logs"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/activities",
    "method": "activities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get Activities",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": true,
        "description": "The start UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": true,
        "description": "The end UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "array",
        "required": false,
        "description": "The ID of the group to filter"
      },
      {
        "name": "isScheduled",
        "schema": "string",
        "required": false,
        "description": "A flag that indicates whether the river is scheduled. If not set then activities of all rivers will be returned"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 20
      },
      {
        "name": "cacheContextId",
        "schema": "string",
        "required": false,
        "description": "Cache context id is an internal query parameter for cache purposes"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search for a specific river by river name"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "riverType",
        "schema": "array",
        "required": false,
        "description": "The river type"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "General activities response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/runs/{run_id}/logs",
    "method": "getRunLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get Run Logs",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUN_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/versions",
    "method": "listVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "List River Versions",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page in the paginated list.",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The current page number in the paginated list.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "River Versions response.\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/versions/{version_id}",
    "method": "getVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Get River Version",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "River Versions properties to return.\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}",
    "method": "river",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Delete River",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}",
    "method": "river",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Get River",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "River properties to return"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}",
    "method": "river",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Beta Endpoints",
    "typeScriptTag": "betaEndpoints",
    "description": "Edit River",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "river_name"
      },
      {
        "name": "kind",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "main_river",
        "default": "main_river"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "group_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "55fr7d4270fdca16cac18261"
      },
      {
        "name": "group_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "river_group_1"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "schedulers",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "cross_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deployment_definition",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "River properties to return"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers",
    "method": "rivers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "List Rivers",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The current page number in the paginated list.",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page in the paginated list.",
        "default": 20
      },
      {
        "name": "groupName",
        "schema": "string",
        "required": false,
        "description": "The river group name"
      },
      {
        "name": "groupId",
        "schema": "array",
        "required": false,
        "description": "The river group id"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "The river name"
      },
      {
        "name": "schedule",
        "schema": "string",
        "required": false,
        "description": "The river schedule status"
      },
      {
        "name": "riverStatus",
        "schema": "array",
        "required": false,
        "description": "The river status"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "The river sort by filter"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "The river sort order filter"
      },
      {
        "name": "riverType",
        "schema": "array",
        "required": false,
        "description": "The river type"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List rivers response object."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers",
    "method": "river",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Beta Endpoints",
    "typeScriptTag": "betaEndpoints",
    "description": "Add River",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "river_name"
      },
      {
        "name": "kind",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "main_river",
        "default": "main_river"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "group_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "55fr7d4270fdca16cac18261"
      },
      {
        "name": "group_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "river_group_1"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "schedulers",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "cross_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deployment_definition",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "River properties to return"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/cdc_config",
    "method": "deleteCdcConfig",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Delete Cdc Config",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/cdc_config",
    "method": "getCdcConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Get Cdc Config",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The cdc config request class."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/cdc_config",
    "method": "setCdcConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Set Cdc Config",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "config",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/cancel_run",
    "method": "cancelRun",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Cancel River Run",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "run_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "run_group_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "General response schema contains only details"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/run",
    "method": "river",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Run River",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "runSubRivers",
        "schema": "boolean",
        "required": false,
        "description": "A flag that indicates whether to run all active sub rivers of the master river",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Run response properties to return\nThe response is a list since in the case of sub rivers that are multiple runs,\nand we want to be able to return them all"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/sub_rivers/{sub_river_id}/run",
    "method": "triggerSubRiverRun",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Run Sub River",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "subRiverId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUB_RIVER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Run response properties to return\nThe response is a list since in the case of sub rivers that are multiple runs,\nand we want to be able to return them all"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/variables",
    "method": "getVariables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Get River Variables",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page in the paginated list.",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The current page number in the paginated list.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Final river variables paginated response for all variables in a single river.\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/variables",
    "method": "updateRiverVariable",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Rivers",
    "typeScriptTag": "rivers",
    "description": "Update River Variable",
    "parameters": [
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page in the paginated list.",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The current page number in the paginated list.",
        "default": 1
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Final river variables paginated response for all variables in a single river.\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments",
    "method": "environments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "List Environments",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "isDeployableEnvironments",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page in the paginated list.",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The current page number in the paginated list.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list environments response to return as a paginated list"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}",
    "method": "environment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "Get Environment",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Environments properties to return.\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/scim_provisioning",
    "method": "deleteScimProvisioning",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Delete Scim Provisioning",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/scim_provisioning",
    "method": "getScimProvisioningStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Scim Provisioning Status",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SCIM token get status"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/scim_provisioning",
    "method": "addOrUpdateScimProvisioning",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Add Or Update Scim Provisioning",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SCIM Token create or update response."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/audit_events",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit Events",
    "typeScriptTag": "auditEvents",
    "description": "List Audit Events",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "The start UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "The end UTC date time. Time format YYYY-MM-DDTHH:MM:SS or YYYY-MM-DDTHH:MM:SS.mmmmmm If end_time is supplied without start_time the start_time will be the previous day of the end_time",
        "example": "2020-01-01T12:00:00"
      },
      {
        "name": "userId",
        "schema": "array",
        "required": false,
        "description": "A list of users id's who initiated the event",
        "example": "5eda28ee6b028e1ce7a2b5ed"
      },
      {
        "name": "eventType",
        "schema": "array",
        "required": false,
        "description": "A list of entity types",
        "example": "connections"
      },
      {
        "name": "entityType",
        "schema": "array",
        "required": false,
        "description": "A list of event types",
        "example": "delete"
      },
      {
        "name": "entityLogicalKey",
        "schema": "string",
        "required": false,
        "description": "A unique logical identifier of an entity, usually the cross_id",
        "example": "5eda28ee6b028e1ce7a2b5ec"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Audit events pagination response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/audit_events/{event_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit Events",
    "typeScriptTag": "auditEvents",
    "description": "Get Audit Event",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "The id of the audit event",
        "example": "eac285a5a9ae4ada9ccd49889a651e16"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Audit events response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/connections/{connection_cross_id}",
    "method": "connection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Connections",
    "typeScriptTag": "connections",
    "description": "Delete Connection",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "connectionCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONNECTION_CROSS_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/teams",
    "method": "teams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List Teams",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 20
      },
      {
        "name": "displayName",
        "schema": "string",
        "required": false,
        "description": "The internal display name of the team",
        "example": "Marketing team"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "The team source local (https://api.rivery.io/documentation or external (Active Directory)",
        "example": "rivery"
      },
      {
        "name": "remoteDisplayName",
        "schema": "string",
        "required": false,
        "description": "The remote display name of the team",
        "example": "Core team"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Sorted the results by attributes"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "teamId",
        "schema": "array",
        "required": false,
        "description": "List of team ids",
        "example": [
          "65ce173412f5e196b2b9b163"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List user teams response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/teams",
    "method": "team",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Create Team",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Some description"
      },
      {
        "name": "display_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Rivery Core Team"
      },
      {
        "name": "environments",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "633ede20f1fc5500111fd7b3": {
            "role": "viewer"
          },
          "5f887c764c40e5598f717676": {
            "role": "viewer"
          }
        },
        "default": {}
      },
      {
        "name": "is_all_environment_admin",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base user team model properties to return."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/teams/{team_id}",
    "method": "team",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Delete Team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/teams/{team_id}",
    "method": "team",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get Team",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base user team model properties to return."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/teams/{team_id}",
    "method": "team",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Patch Team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Some description"
      },
      {
        "name": "display_name",
        "schema": "string",
        "description": "",
        "example": "Rivery Core Team"
      },
      {
        "name": "environments",
        "schema": "object",
        "description": "",
        "example": {
          "633ede20f1fc5500111fd7b3": {
            "role": "viewer"
          },
          "5f887c764c40e5598f717676": {
            "role": "viewer"
          }
        }
      },
      {
        "name": "is_all_environment_admin",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base user team model properties to return."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/teams/{team_id}",
    "method": "team",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Update Team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Some description"
      },
      {
        "name": "display_name",
        "schema": "string",
        "description": "",
        "example": "Rivery Core Team"
      },
      {
        "name": "environments",
        "schema": "object",
        "description": "",
        "example": {
          "633ede20f1fc5500111fd7b3": {
            "role": "viewer"
          },
          "5f887c764c40e5598f717676": {
            "role": "viewer"
          }
        }
      },
      {
        "name": "is_all_environment_admin",
        "schema": "boolean",
        "description": "",
        "example": true,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base user team model properties to return."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/copy",
    "method": "river",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Beta Endpoints",
    "typeScriptTag": "betaEndpoints",
    "description": "Copy River",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Copy river response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/restore",
    "method": "river",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Beta Endpoints",
    "typeScriptTag": "betaEndpoints",
    "description": "Restore River Version",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      },
      {
        "name": "version_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5f7d4270fdca16cac18261"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "River properties to return"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/enable_cdc",
    "method": "cdc",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Beta Endpoints",
    "typeScriptTag": "betaEndpoints",
    "description": "Enable Cdc",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Operation properties to return.\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{account_id}/environments/{environment_id}/rivers/{river_cross_id}/disable_cdc",
    "method": "cdc",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Beta Endpoints",
    "typeScriptTag": "betaEndpoints",
    "description": "Disable Cdc",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "environmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENVIRONMENT_ID"
      },
      {
        "name": "riverCrossId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RIVER_CROSS_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Operation properties to return.\n    "
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/predefined_metadata/columns",
    "method": "getPredefinedColumns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beta Endpoints",
    "typeScriptTag": "betaEndpoints",
    "description": "Get Predefined Columns",
    "parameters": [
      {
        "name": "datasourceId",
        "schema": "string",
        "required": true,
        "description": "The datasource of the columns.",
        "example": "shopify"
      },
      {
        "name": "report",
        "schema": "string",
        "required": true,
        "description": "The report id",
        "example": "orders"
      },
      {
        "name": "columnName",
        "schema": "string",
        "required": false,
        "description": "Name of the column to filter",
        "example": "id"
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page in the paginated list.",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The current page number in the paginated list.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response for the get predefined columns."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/predefined_metadata/tables",
    "method": "listPredefinedTables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beta Endpoints",
    "typeScriptTag": "betaEndpoints",
    "description": "Get Predefined Tables",
    "parameters": [
      {
        "name": "datasourceId",
        "schema": "string",
        "required": true,
        "description": "The datasource of the columns.",
        "example": "shopify"
      },
      {
        "name": "reportName",
        "schema": "string",
        "required": false,
        "description": "Name of the report to filter",
        "example": "orders"
      },
      {
        "name": "itemsPerPage",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page in the paginated list.",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The current page number in the paginated list.",
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response for the get predefined tables."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/predefined_metadata/metadata",
    "method": "getPredefinedMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beta Endpoints",
    "typeScriptTag": "betaEndpoints",
    "description": "Get Predefined Metadata",
    "parameters": [
      {
        "name": "datasourceId",
        "schema": "string",
        "required": true,
        "description": "The datasource of the columns.",
        "example": "shopify"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "The report id",
        "example": "predefined_orders"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response for the get predefined metadata."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/river_source/metadata",
    "method": "getSourceMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beta Endpoints",
    "typeScriptTag": "betaEndpoints",
    "description": "Get Source Metadata",
    "parameters": [
      {
        "name": "sourceName",
        "schema": "string",
        "required": true,
        "description": "The source name",
        "example": "shopify"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response for the get source metadata."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Rivery API"
      apiBaseUrl="https://api.rivery.io"
      apiVersion="1.0.0"
      endpoints={42}
      sdkMethods={60}
      schemas={209}
      parameters={302}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rivery/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rivery/openapi.yaml"
      developerDocumentation="api.rivery.io/documentation"
    />
  );
}
  