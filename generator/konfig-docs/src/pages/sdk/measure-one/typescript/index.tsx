import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MeasureOneTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="measure-one-typescript-sdk"
      metaDescription={`Automate your business workflows and lower your costs with MeasureOne, the most comprehensive and accurate platform for income, employment, education, insurance verification, and more. Benefit from unmatched scale with 10,000+ data sources, breakthrough processing speeds, and best-in-class consumer-permissioned data and document upload workflows for optimal conversion. MeasureOne is committed to protecting customer data and maintains the highest security standards, including SOC2 compliance. With a variety of integration options from no-code to a universal API, your data needs are covered. For more information, visit measureone.com.`}
      company="MeasureOne"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/measureone/logo.png"
      companyKebabCase="measure-one"
      clientNameCamelCase="measureOne"
      homepage="measureone.com"
      lastUpdated={new Date("2024-03-29T22:55:31.557Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/measureone/favicon.png"
      // Missing contactUrl
      contactEmail="support@measureone.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/measureone/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["consumer_data_access_and_verification"]}
      methods={[
  {
    "url": "/v3/invitations/new",
    "method": "invitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invitations",
    "typeScriptTag": "invitations",
    "description": "Create a new Invitation",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "individual_id",
        "schema": "string",
        "description": "",
        "example": "idv_Cevp4Jw9CIsEeNjpgAAjy2EZt3R"
      },
      {
        "name": "validity",
        "schema": "number",
        "description": "",
        "example": 259200
      },
      {
        "name": "link_only",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "requester_name",
        "schema": "string",
        "description": "",
        "example": "string value"
      },
      {
        "name": "additional_message",
        "schema": "string",
        "description": "",
        "example": "Please use this invitation for University of Michigan Ann Arbor"
      },
      {
        "name": "institution_name",
        "schema": "string",
        "description": "",
        "example": "University of Michigan Ann Arbor"
      },
      {
        "name": "query_type",
        "schema": "array",
        "description": ""
      },
      {
        "name": "requestor_name",
        "schema": "string",
        "description": "",
        "example": "string value"
      },
      {
        "name": "datasource",
        "schema": "object",
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/invitations/get",
    "method": "get",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invitations",
    "typeScriptTag": "invitations",
    "description": "Get the list of invitations",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "filters",
        "schema": "object",
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/invitations/get_by_id",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invitations",
    "typeScriptTag": "invitations",
    "description": "Get details of an Invitation",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1faOM8Q4efEWIjzdE2SBM2kLq4O"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/invitations/expire",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invitations",
    "typeScriptTag": "invitations",
    "description": "Expire an Invitation",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1faOM8Q4efEWIjzdE2SBM2kLq4O"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/individuals/new",
    "method": "createNewIndividual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Create a new Individual",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "middle_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "attending_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "name_prefix",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name_suffix",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "last_activity_at",
        "schema": "number",
        "required": false,
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/individuals/get_by_id",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Get details of an Individual",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Object representing details of an Individual identified by MeasureOne"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/individuals/get_items",
    "method": "getItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Individuals",
    "typeScriptTag": "individuals",
    "description": "Get Items for an individual",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "individual",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "datarequest_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/items/new",
    "method": "submitNewItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Submit a new item",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "individual_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "datarequest_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "datasource_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATASOURCE_ID"
      },
      {
        "name": "media_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source_data_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE_DATA_TYPE"
      },
      {
        "name": "duplicates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "refresh_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source_data",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "processing_status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "confidence",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "integer",
        "required": false,
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/items/upload",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Upload files",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "files",
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/items/get_by_id",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Get item details",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/items/get_files",
    "method": "downloadZipFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Get item files",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/items/get_pdf",
    "method": "downloadPdfItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Get PDF item",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "itm_Cevp4Jw9CIsEeNjpgAAjy2EZt3R"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/checkcodes/get",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Checkcodes",
    "typeScriptTag": "checkcodes",
    "description": "Get checkcodes",
    "parameters": [
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "session_id",
        "schema": "string",
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/services/get_academic_summary",
    "method": "getAcademicSummary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Education",
    "typeScriptTag": "education",
    "description": "Get academic summary",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "datarequest_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      },
      {
        "name": "individual",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transaction_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "trx_1fGUhrSFQ1L4Jd2rOeQiHQgt986"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/services/get_enrollment_status",
    "method": "getEnrollmentStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Education",
    "typeScriptTag": "education",
    "description": "Get enrollment status",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "datarequest_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      },
      {
        "name": "individual",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transaction_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "trx_1fGUhrSFQ1L4Jd2rOeQiHQgt986"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/services/meritscore",
    "method": "calculateMeritScore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Education",
    "typeScriptTag": "education",
    "description": "Get MeritScore",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/services/gradscore",
    "method": "calculateGradScore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Education",
    "typeScriptTag": "education",
    "description": "Get GradScore",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/services/get_digest_by_id",
    "method": "getDigestById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Education",
    "typeScriptTag": "education",
    "description": "Get M1_DIGEST for Transcript",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/services/get_income_summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Income & Employment",
    "typeScriptTag": "income &Employment",
    "description": "Get income summary",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "datarequest_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      },
      {
        "name": "individual",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transaction_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "trx_1fGUhrSFQ1L4Jd2rOeQiHQgt986"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/services/get_employment_summary",
    "method": "getEmploymentSummary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Income & Employment",
    "typeScriptTag": "income &Employment",
    "description": "Get employment summary",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "datarequest_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      },
      {
        "name": "individual",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transaction_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "trx_1fGUhrSFQ1L4Jd2rOeQiHQgt986"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/services/get_income_employment_details",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Income & Employment",
    "typeScriptTag": "income &Employment",
    "description": "Get income employment details (https://docs.measureone.com",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "datarequest_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      },
      {
        "name": "individual",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transaction_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "trx_1fGUhrSFQ1L4Jd2rOeQiHQgt986"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/services/get_insurance_details",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Insurance",
    "typeScriptTag": "insurance",
    "description": "Get insurance details",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "datarequest_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      },
      {
        "name": "individual",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transaction_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "trx_1fGUhrSFQ1L4Jd2rOeQiHQgt986"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/services/get_realized_gains",
    "method": "getRealizedGains",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tax Records",
    "typeScriptTag": "taxRecords",
    "description": "Get Realized Gains",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "datarequest_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      },
      {
        "name": "individual",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transaction_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "trx_1fGUhrSFQ1L4Jd2rOeQiHQgt986"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/auth/generate_access_token",
    "method": "generateAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys and Access",
    "typeScriptTag": "apiKeysAndAccess",
    "description": "Generate Access Token",
    "parameters": [
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
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
        "description": "Authentication with the API Failed"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/auth/invalidate",
    "method": "invalidateAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys and Access",
    "typeScriptTag": "apiKeysAndAccess",
    "description": "Invalidate Access Token",
    "parameters": [
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "access_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6fd5122a-9a91-4bd6-1219-d6e71fd123b0"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/auth/generate_public_token",
    "method": "generatePublicToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys and Access",
    "typeScriptTag": "apiKeysAndAccess",
    "description": "Generate Public Token",
    "parameters": [
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "validity",
        "schema": "number",
        "description": "",
        "default": 900
      },
      {
        "name": "scopes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "policy",
        "schema": "object",
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/datasources/get",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Datasources",
    "typeScriptTag": "datasources",
    "description": "Get / Search Data Sources",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "undefined",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise."
      },
      {
        "name": "filters",
        "schema": "object",
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/datarequests/new",
    "method": "createNewRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Requests",
    "typeScriptTag": "dataRequests",
    "description": "Create a new Data Request",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "individual_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "idv_Cevp4Jw9CIsEeNjpgasjy2EZt3R"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "created_at",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "third_party_requester",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "requester_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "request_details",
        "schema": "object",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "delivery_details",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "refresh_policy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "widget_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "consent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "invitation_links",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "last_activity_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_activity_at",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "event_logs",
        "schema": "array",
        "required": false,
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/datarequests/generate_invitation_link",
    "method": "generateInvitationLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Requests",
    "typeScriptTag": "dataRequests",
    "description": "Generate invitation link for the Data Request",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      },
      {
        "name": "expires_at",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1675605305012
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/datarequests/notify_user",
    "method": "notifyUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Requests",
    "typeScriptTag": "dataRequests",
    "description": "Invite the Individual to complete the Data Request",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      },
      {
        "name": "notifications",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "additional_message",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/datarequests/get_invitation_link",
    "method": "getInvitationLinks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Requests",
    "typeScriptTag": "dataRequests",
    "description": "Get shareable invitation links for Data Request",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/datarequests/get_by_id",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Requests",
    "typeScriptTag": "dataRequests",
    "description": "Get the details of Data Request",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      },
      {
        "name": "get_x_auth_token_credentials",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "get_consent",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/datarequests/expire_invitation_link",
    "method": "expireInvitationLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Requests",
    "typeScriptTag": "dataRequests",
    "description": "Expire invitation link for Data Request",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1faOM8Q4efEWIjzdE2SBM2kLq4O"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/datarequests/get",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Requests",
    "typeScriptTag": "dataRequests",
    "description": "Get the list of Data Requests",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "filters",
        "schema": "object",
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of data requests"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/datarequests/update",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Requests",
    "typeScriptTag": "dataRequests",
    "description": "Update a Data Request",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "individual_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INDIVIDUAL_ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "request_details",
        "schema": "object",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "created_at",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "third_party_requester",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "requester_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery_details",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "refresh_policy",
        "schema": "object",
        "required": false,
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v3/datarequests/refresh_now",
    "method": "refreshDataOnDemand",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Requests",
    "typeScriptTag": "dataRequests",
    "description": "Refresh data on demand",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "description": "Version number of the MeasureOne API you wish to integrate."
      },
      {
        "name": "contentType",
        "schema": "string",
        "description": "Content-type of the request payload. MeasureOne accepts content in application/json format unless specified otherwise"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "dr_1faOM8Q4efEWIjzdE2SBM2kLq4O"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Successful Response"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication with the API Failed"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
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
      apiTitle="MeasureOne API"
      apiBaseUrl="https://api.measureone.com"
      apiVersion="3.0"
      endpoints={36}
      sdkMethods={36}
      schemas={298}
      parameters={189}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/measureone/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/measureone/openapi.yaml"
      developerDocumentation="docs.measureone.com"
    />
  );
}
  