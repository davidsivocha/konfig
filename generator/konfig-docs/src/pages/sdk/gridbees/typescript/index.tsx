import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function GridbeesTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="gridbees-typescript-sdk"
      metaDescription={`Gridbees 🚀 is an API-first headless e-commerce platform for companies in all types of fields of activity who wish to digitize their processes or who have already started their digital transformation.

Gridbees🚀 aggregates their very heterogeneous flows, harmonizes them and processes them for forwarding them to the front office in a homogeneous manner, increasing the efficiency and performance of e-merchants. The end consumer will thus benefit from a smooth shopping experience.
Connectivity, technical know-how, support, agility and flexibility : these assets allow us to provide you with a real digital toolbox, modular and customizable, dedicated to the sales path, around 4 themes :

✅ product and offer management

✅ commercial and promotional animation

✅ the purchasing process

✅ customer service

Gridbees' team is specialized in integrations, offering a highly customizable solution that quickly and easily interconnects with any third party.

Because Gridbees 🚀 is much more than a software solution, entrust us with your most complex e-commerce projects for a tailor-made solution !

Discover all the tools and request your demo on : https://www.gridbees.com/en/

Your contact :
🗣 @Bruno Teplier
🗣 @Faisal Nisar
📧 sales@gridbees.com`}
      company="Gridbees"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gridbees/logo.webp"
      companyKebabCase="gridbees"
      clientNameCamelCase="gridbees"
      homepage="www.gridbees.com/"
      lastUpdated={new Date("2024-03-29T23:26:19.590Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gridbees/favicon.jpg"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gridbees/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["e_commerce","ecommerce","retail"]}
      methods={[
  {
    "url": "/contact/search",
    "method": "getContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to retrieve contacts. The total number of contacts in the response is a parameter of the service.\nContact your administrator to know or modify this value.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "contactids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "unicitykeys",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countrycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "walletnumid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalnumid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "marketcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shopcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "companyname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attribute",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attributevalue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startbirthdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endbirthdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startlastpurchasedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endlastpurchasedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastupdatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showstatusdetails",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showdeletedaddresses",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contact/stream",
    "method": "getContactsStream",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to retrieve contacts. The response is a stream.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "contactids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "unicitykeys",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countrycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "walletnumid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalnumid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "marketcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shopcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "companyname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attribute",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attributevalue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startbirthdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endbirthdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startlastpurchasedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endlastpurchasedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastupdatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showstatusdetails",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showdeletedaddresses",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contact/set",
    "method": "createNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to create a new contact.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "person",
        "schema": "object",
        "description": ""
      },
      {
        "name": "legalentity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "identitydocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "paymentdata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "loyaltycards",
        "schema": "array",
        "description": ""
      },
      {
        "name": "trackingdata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "statusdetail",
        "schema": "object",
        "description": ""
      },
      {
        "name": "businesscreationdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contact/upsert",
    "method": "upsertContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to create or modify a contact.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "person",
        "schema": "object",
        "description": ""
      },
      {
        "name": "legalentity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "identitydocuments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "paymentdata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "loyaltycards",
        "schema": "array",
        "description": ""
      },
      {
        "name": "trackingdata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "statusdetail",
        "schema": "object",
        "description": ""
      },
      {
        "name": "businesscreationdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contact/get/{contactid}",
    "method": "getContact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to retrieve a given contact.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contact/delete/{contactid}",
    "method": "deleteContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to delete a contact.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contact/addattributes",
    "method": "addContactAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to add a custom attribute with its value to a contact.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contact/deleteattributes",
    "method": "deleteAttribute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to delete a custom attribute with its value from a contact.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webaccount/activate",
    "method": "activateUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to activate an user.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webaccount/check",
    "method": "checkUserExist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to check if an user exist.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webaccount/delete",
    "method": "deleteWebAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to delete an web account.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "webaccountid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webaccount/get/{webaccountid}",
    "method": "getWebAccountDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to get details of an web account.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webaccount/login",
    "method": "logWebAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to log a web account.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webaccount/resetpassword",
    "method": "resetWebAccountPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to reset the password of a web account.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webaccount/search",
    "method": "searchWebAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to search web accounts.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "webaccountid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isactivated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "optinphone",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "optinmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "optinemail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinphone",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinemail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webaccount/set",
    "method": "createWebAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to create a web account.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "webaccountid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isactivated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "optinphone",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "optinmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "optinemail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinphone",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinemail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webaccount/stream",
    "method": "getWebAccountsStream",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to retrieve web accounts. The response is a stream.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "webaccountid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isactivated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "optinphone",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "optinmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "optinemail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinphone",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinemail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webaccount/update",
    "method": "updateWebAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service replaces a web account by the provided web account object.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "webaccountid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "login",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isactivated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "optinphone",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "optinmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "optinemail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinphone",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinmail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "partneroptinemail",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/supplier/delete",
    "method": "deleteSupplier",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to delete a supplier.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "supplierid",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/supplier/get/{supplierid}",
    "method": "getSupplierDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to get details of a supplier.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/supplier/search",
    "method": "searchSuppliers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to search suppliers.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "supplierid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "description": ""
      },
      {
        "name": "displayname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "legalentity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isconnected",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/supplier/set",
    "method": "createSupplier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to create a new supplier.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "supplierid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "description": ""
      },
      {
        "name": "displayname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "legalentity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isconnected",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/supplier/stream",
    "method": "getSuppliersStream",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to retrieve suppliers. The response is a stream.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "supplierid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "description": ""
      },
      {
        "name": "displayname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "legalentity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isconnected",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/supplier/upsert",
    "method": "modifySupplier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to modify a supplier.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "supplierid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "description": ""
      },
      {
        "name": "displayname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "legalentity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "blocked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isconnected",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phones",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/delete",
    "method": "mailDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to delete a mail.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "mailid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/get/{mailid}",
    "method": "getMailDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to get details of a mail.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/receive",
    "method": "receiveMail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to receive mails.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "mailid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mailids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "contactids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ordernums",
        "schema": "array",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "withwords",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withoutwords",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isreserved",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/reprocess",
    "method": "reprocessMail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to reprocess mails. The response is a stream.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "mailid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mailids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "contactids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ordernums",
        "schema": "array",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "withwords",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withoutwords",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isreserved",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/search",
    "method": "mailSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to search mails by various criterias.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "mailid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mailids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "contactids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ordernums",
        "schema": "array",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bcc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "withwords",
        "schema": "string",
        "description": ""
      },
      {
        "name": "withoutwords",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isreserved",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/send",
    "method": "createMail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to create and send a new mail.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "mailid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackingdata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "trackings",
        "schema": "array",
        "description": ""
      },
      {
        "name": "person",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isreserved",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "reservationdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendandarchive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/set",
    "method": "createNewMail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to create a new mail.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "mailid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackingdata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "trackings",
        "schema": "array",
        "description": ""
      },
      {
        "name": "person",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isreserved",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "reservationdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendandarchive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/stream",
    "method": "getMailStream",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to retrieve mails. The response is a stream.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "mailid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackingdata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "trackings",
        "schema": "array",
        "description": ""
      },
      {
        "name": "person",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isreserved",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "reservationdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendandarchive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/upsert",
    "method": "modifyMail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to modify a mail.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "mailid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackingdata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "trackings",
        "schema": "array",
        "description": ""
      },
      {
        "name": "person",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sentdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isreserved",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "reservationdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sendandarchive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/delete",
    "method": "deleteMailTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to delete a mail template.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mailtemplateid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/get/{mailtemplateid}",
    "method": "getMailTemplateDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to get details of a mail template.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/search",
    "method": "searchMailTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to search templates of mail by various criterias.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mailtemplateid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/set",
    "method": "createMailTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to create a new mail template.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mailtemplateid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maildata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "campaigncode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/stream",
    "method": "getMailTemplateStream",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to retrieve mail templates. The response is a stream.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mailtemplateid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/template/upsert",
    "method": "modifyMailTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to modify a mail template.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mailtemplateid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maildata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "campaigncode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification/delete",
    "method": "deleteNotification",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to delete a notification.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "notificationid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "justificationcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ordernum",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoicenumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentbookingid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emitterid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claimtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claimcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claimjuscode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification/get/{notificationid}",
    "method": "getNotificationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to get details of a notification.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification/search",
    "method": "searchNotificationByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to search notifications by various criterias.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "notificationid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "justificationcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ordernum",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoicenumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentbookingid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emitterid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claimtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claimcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claimjuscode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification/set",
    "method": "createNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to create a new notification.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "notificationid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "eventtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topic",
        "schema": "string",
        "description": ""
      },
      {
        "name": "justificationcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "retentiondelay",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "retentionunit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "trackingdata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emitterid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claims",
        "schema": "array",
        "description": ""
      },
      {
        "name": "cancellations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "exclusions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification/stream",
    "method": "getNotificationsStream",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to retrieve notifications. The response is a stream.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "notificationid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "justificationcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ordernum",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoicenumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentbookingid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emitterid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claimtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claimcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claimjuscode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notification/upsert",
    "method": "modifyNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to modify a notification.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "notificationid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "description": ""
      },
      {
        "name": "eventtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topic",
        "schema": "string",
        "description": ""
      },
      {
        "name": "justificationcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "retentiondelay",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "retentionunit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "trackingdata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emitterid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "claims",
        "schema": "array",
        "description": ""
      },
      {
        "name": "cancellations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "exclusions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/wallet/delete",
    "method": "deleteWallet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to delete a wallet.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "walletid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "walletids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contactids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "wallettype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "loyaltycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "operationtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ordernum",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ordernums",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/wallet/get/{walletid}",
    "method": "getWalletDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to get details of a wallet.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/wallet/search",
    "method": "searchWalletByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to search wallets by various criterias.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "walletid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "walletids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contactids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "wallettype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "loyaltycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "operationtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ordernum",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ordernums",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/wallet/set",
    "method": "createNewWallet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to create a new wallet.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "walletid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "wallettype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "operationtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vouchernumid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "promotionid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isused",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ordernums",
        "schema": "array",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountdetail",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/wallet/stream",
    "method": "getWalletStream",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to retrieve wallets. The response is a stream.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "walletid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "walletids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contactids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "wallettype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "loyaltycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "operationtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ordernum",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ordernums",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/wallet/upsert",
    "method": "modifyWallet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customer Service",
    "typeScriptTag": "customerService",
    "description": "This service is used to modify a wallet.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "walletid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "wallettype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "operationtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vouchernumid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "promotionid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isused",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ordernums",
        "schema": "array",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "amountdetail",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/offer/set",
    "method": "createNewOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offer Service",
    "typeScriptTag": "offerService",
    "description": "This service is used to create a new offer.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offerid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offertype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offerdescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "codification",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "description": ""
      },
      {
        "name": "subscription",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pricing",
        "schema": "object",
        "description": ""
      },
      {
        "name": "medias",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdby",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedby",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/offer/upsert",
    "method": "createOrUpdateOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offer Service",
    "typeScriptTag": "offerService",
    "description": "This service is used to create or update a new offer. Based on unicitykey, the service checks if the offer already exists or not.\nIf exists, the offer is updated otherwise is created.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offerid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offertype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offerdescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "codification",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "description": ""
      },
      {
        "name": "subscription",
        "schema": "object",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pricing",
        "schema": "object",
        "description": ""
      },
      {
        "name": "medias",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdby",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedby",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/offer/publish",
    "method": "pullPublishOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offer Service",
    "typeScriptTag": "offerService",
    "description": "This service is used to pull offers to publish or unpublish.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "offerid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offerids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "unicitykeys",
        "schema": "array",
        "description": ""
      },
      {
        "name": "unicitycodes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "offertype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "productcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "productgroupcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "companycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countrycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "platformcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendorcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "marketcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastupdatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/offer/delete/{offerid}",
    "method": "deleteOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offer Service",
    "typeScriptTag": "offerService",
    "description": "This service is used to delete an offer.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "offerid",
        "schema": "string",
        "required": true,
        "description": "Offer identifier",
        "example": "OFFERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/product/publish",
    "method": "pullPublishProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Product Service",
    "typeScriptTag": "productService",
    "description": "This service is used to pull products to publish.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "productid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "productids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "unicitykeys",
        "schema": "array",
        "description": ""
      },
      {
        "name": "typology",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countrycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupcodes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      },
      {
        "name": "platformcodes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contentids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contenttypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "servicetypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "studios",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tvodtiers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "subscriptiontiers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startupdatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endupdatedate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customdata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attributes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/promotion/upsert",
    "method": "upsertPromotion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Promotion Service",
    "typeScriptTag": "promotionService",
    "description": "This service is used to create or update a promotion. If the promotionid field is filled, the service will search the concerned promotion and update it.\n\nIn case of update, the promotion stored is the database is replaced by the input promotion is the request. No merge is done.\n\nIf pomotionid is not filled or filled but not found, a new promotion is created.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "promotionid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "usagelimit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usagelimitDetails",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "promotioncodes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "medias",
        "schema": "array",
        "description": ""
      },
      {
        "name": "combinablepromo",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "commissiondiscountprice",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "createdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/promotion/set",
    "method": "createNewPromotion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Promotion Service",
    "typeScriptTag": "promotionService",
    "description": "This service is used to create a new promotion.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unicitykey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "usagelimit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usagelimitDetails",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "promotioncodes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "medias",
        "schema": "array",
        "description": ""
      },
      {
        "name": "rules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "combinablepromo",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "commissiondiscountprice",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/promotion/search",
    "method": "searchPromotions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Promotion Service",
    "typeScriptTag": "promotionService",
    "description": "This service is used to search promotions.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "promotionid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "promotionids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "businesslinecode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countrycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "languagecode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "haspromocode",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "marketcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usagelimit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/promotion/publish",
    "method": "informMerchantAboutPromotion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Promotion Service",
    "typeScriptTag": "promotionService",
    "description": "This service informs the merchant about promontions (conditions and actions).\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "businesslinecode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countrycode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "promotionid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "haspromocode",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "marketcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "conditionnames",
        "schema": "array",
        "description": ""
      },
      {
        "name": "discountnames",
        "schema": "array",
        "description": ""
      },
      {
        "name": "businesskeys",
        "schema": "array",
        "description": ""
      },
      {
        "name": "offertypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "offercodes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "productcodes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "channelcodes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "vendorcodes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/promotion/delete/{promotionid}",
    "method": "deletePromotionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Promotion Service",
    "typeScriptTag": "promotionService",
    "description": "This service is used to delete a promotion. If the promotion was already loaded, the pricing service will unload the deleted promotion.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/valorization/valorize",
    "method": "valorizeBasket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pricing Service",
    "typeScriptTag": "pricingService",
    "description": "This service is used to calculate all prices of a basket.\nThe service discards all input prices coming within the request and set all known prices inside the basket. If a price hasn’t been found, the service returns an error.\nThe input basket is controlled before to be valorized. The checklist is:\n-  existence of at least one basket line\n-  each basket line must have a unique offer identifier, and the offer is published\n-  the requested quantity is a positive value\n-   if a vendor exists and not blocked\n-  Check the validity of the promocode if given\n\nThe service set the price:\n-  for each offer of the basket\n-  for each additionnal services attached to the offers\n\nIf for a basket line, many prices exist due to for example a typology of price (National price, local, advertising price, …), the service applies the business logic to find the good price.\n\nOnce all prices and all checks are OK, the service applies all active promotions on the basket.\nAn active promotion, is published promotion such as the period include the submission date of the basket.\n\nPromotions are divided into:\n-  a list of conditions (minimum of basket amount, a specific product, ..)\n-  a list of benefits (discount in percentage, added offer, discount on delivery fees, …)\n\nIf for a given active promotion, the basket satisfies all the conditions, then all the benefits are applied to the basket.\nAt the end, the service calculates some hash control to guaranty the prices won’t be altered.\nThe hash is stored in the amount node of the basket and each lines.\nIf you use Gridbees Booking service, those hash will be recalculated by the booking service.\nThe value of the hash in the request will be compared with the value obtained by the booking service.\n\nThe service uses these fields to create the hash:\n- amount.grossamount\n- amount.netamount\n- amount.commissionamount\n- amount.totaltopay\n- amount.totaltorefund\n- amount.discountamount\n- amount.additionalserviceamount\n- amount.additionalassemblyamount\n- amount.additionalrecoveryamount\n- amount.feesdiscountamount\n- amount.discountamount\n- amount.adjustedamount\n- amount.fees\n- ordertracking .vendorcode\n- line.offerid\n- line.quantity\n- line.offerbookingdate\n- line.offerbookinghour\n\nThe service uses the algorithm SHA-256 to generate the hash by adding a secret key.\n\n<table id=\"t01\">\n<caption>Pricing Error Codes</caption>\n<tr>\n<th>Error Code</th>\n<th>Description</th>\n</tr>\n<tr>\n<td>PROMONOTMARKET</td>\n<td>The promotion code doesn’t exist in the market</td>\n</tr>\n<tr>\n<td>PROMOEXPIRED</td>\n<td>Promotion code expired</td>\n</tr>\n<tr>\n<td>PROMONOTEXISTS</td>\n<td>Promotion code not exists</td>\n</tr>\n<tr>\n<td>PROMONOTPUPLISHED</td>\n<td>Promotion not published</td>\n</tr>\n<tr>\n<td>VOUCHEREXPIRED</td>\n<td>Coupon code is expired</td>\n</tr>\n<tr>\n<td>VOUCHERUSED</td>\n<td>Coupon code is already burned</td>\n</tr>\n<tr>\n<td>OFFERNOTEXIST</td>\n<td>Offer not exists</td>\n</tr>\n<tr>\n<td>PRICENOTFOUND</td>\n<td>Offer exists but the price isn’t found</td>\n</tr>\n<tr>\n<td>PROMOCODENOTSATISFIED</td>\n<td>Promotion code is valid, but not all the conditions are satisfied</td>\n</tr>\n<tr>\n<td>PAYMENTMODECHANGED</td>\n<td>The merchant payment mode has changed </td>\n</tr>\n<tr>\n<td>VENDORNOTEXIST</td>\n<td>Vendor not exists</td>\n</tr>\n<tr>\n<td>VENDORBLOCKED</td>\n<td>Vendor is blocked</td>\n</tr>\n\n<tr>\n<td>PAYMENTISPENDING</td>\n<td>Payment is pending</td>\n</tr>\n<tr>\n<td>ORDERNOTFOUND</td>\n<td>Order not found for the cancellation</td>\n</tr>\n</table>\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "profile",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "ordertracking",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "comtracking",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "businesscreationdate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lines",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/booking/availabilities",
    "method": "refreshTheoreticalStocks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This service is used to refresh the theoretical stocks of the suppier for a given period\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "availabilitylines",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/booking/availability",
    "method": "checkAvailability",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This method is used to know the actual quantity of a given offer with refined detail in the call such as the travel date.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "availability",
        "schema": "object",
        "description": ""
      },
      {
        "name": "availabilitycontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/booking/request",
    "method": "reserveOffers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This method is used to reserve some offers. This action will block the stock of the requested quantity for each offer.\nMost of the time, this request is done to guaranty to the client the reservation is blocked for a duration (configuration parameter).\n\nDuring this duration, the merchant application will have time to process the payment of the reservation.\n\nAll amount information comes from a [pricing service](https://assets-global.website-files.com).\nIf you use the Gridbees price valorization service, the list of data coming for this valorization service are:\n-  All Amount nodes\n-  Marketing information such as promotion code,\n-  List of all rules applied to the orders\n- Hash control data to guaranty the quality of the data\n\nOnce the payment has been made, the reservation must be confirmed, otherwise the system will un the reservation after the duration and unblock the stoks.\n\nThe service applies some operations such as:\n-  If a vendor is filled, some controls on the vendor conditions\n-  All mandatory fields are present including passenger’s information\n-  Calculation on hash amounts to guaranty the non-alteration\n\nThe service returns:\n- in case of success (ordercontext.status = OK), the order reference (ordertracking.transactionnumber) of the reservation\n- otherwise (ordercontext.status = KO), the business error code (ordercontext.code)\n\n<table id=\"t01\">\n<caption>Booking Error Codes</caption>\n<tr>\n<th>Error Code</th>\n<th>Description</th>\n</tr>\n<tr>\n<td>HASHCONTROLERROR</td>\n<td>Hash control failed. Check the fields coming from Pricing service to fill in your request</td>\n</tr>\n<tr>\n<td>VENDORNOTEXISTORBLOCKED</td>\n<td>Merchant code not found or blocked</td>\n</tr>\n<tr>\n<td>ORDERNOTFOUND</td>\n<td>Order not found</td>\n</tr>\n<tr>\n<td>MAXPAIDNOTALLOWED</td>\n<td>Total paid is not allowed for this payment mode</td>\n</tr>\n<tr>\n<td>NOTIFICATIONNOTFOUND</td>\n<td>The terms of sales in the request have not been found</td>\n</tr>\n<tr>\n<td>OFFERNOTEXIST</td>\n<td>Offer not exists</td>\n</tr>\n<tr>\n<td>BOOKINGALREADYCONFIRMED</td>\n<td>this booking is already confirmed</td>\n</tr>\n<tr>\n<td>BOOKINGNOTFOUND</td>\n<td>Booking not found</td>\n</tr>\n<tr>\n<td>BOOKINGCANCELFAILED</td>\n<td>Failed to release the stock for this booking</td>\n</tr>\n<tr>\n<td>ERRORCANCELLED</td>\n<td>Order not paid or already cancelled</td>\n</tr>\n<tr>\n<td>NOTIFICATIONRETENTIONDELAYEXPIRED</td>\n<td>For cancellation request, if the delay to cancel is expired, this error code is sent</td>\n</tr>\n</table>\n\n<table id=\"t01\">\n<caption>Order status</caption>\n<tr>\n<th>Status Type</th>\n<th>Status Code</th>\n<th>Description</th>\n</tr>\n<tr>\n<td>Operational</td>\n<td>PENDING</td>\n<td>The order is not confirmed and is waiting for the confirmation. The stock isn’t blocked for a pending order.</td>\n</tr>\n<tr>\n<td>Operational</td>\n <td>PROCESSED</td>\n <td>The order is confirmed. The stocks are reserved.</td>\n</tr>\n<tr>\n<td>Operational</td>\n <td>CANCELLED</td>\n <td>The order is cancelledand the stocks are released</td>\n</tr>\n<tr>\n<td>Payment</td>\n <td>PENDING</td>\n <td>The payment of this order isn’t completed</td>\n</tr>\n<tr>\n<td>Payment</td>\n <td>PAID</td>\n <td>The payment of the order is completed</td>\n</tr>\n<tr>\n<tr>\n<td>Payment</td>\n <td>CANCELLED</td>\n <td>The payment is cancelled</td>\n</tr>\n<tr>\n<td>Refund</td>\n <td>PENDING</td>\n <td>Refund is pending</td>\n</tr>\n<tr>\n<td>Refund</td>\n <td>REFUSED</td>\n <td>Reund is efused</td>\n</tr>\n<tr>\n<td>Refund</td>\n <td>CANCELLED</td>\n <td>The payment is cancelled</td>\n</tr>\n<tr>\n<td>Refund</td>\n <td>PAID</td>\n <td>Refuns is paid</td>\n</tr>\n<tr>\n<td>FILTERING</td>\n <td>TOREPROCESS</td>\n <td>Technical error. The order must be reprocessed</td>\n</tr>\n</table>\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "order",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ordercontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/booking/confirm",
    "method": "confirmOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This method is used to confirm an order done by a call to booking/request service. The request is the same than the booking request call, but complete by payment information.\nThe service applies some operations such as:\n-  The existence of the bookig in Gridbees database (search based on the orderid field) and make some coherence controls.\n-  Overdue payment or not balanced payment\n-  Burns “one shot used” promotional vouchers\n-  Sends email to the customer in some conditions (deferred promotion detected, email template detected, ...)\n-  Stores and controls different payment modes used to pay the order\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "orderid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDERID"
      },
      {
        "name": "ordertracking",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "payment",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/booking/cancel",
    "method": "cancelOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This service is used to cancel an order and release if needed the stock.\nAn order can be cancelled if it has been already paid or not already cancelled.\nThe service searches for the order and calculates the cancellation fees according to the terms of sales.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "orderid",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "vendorcode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cancellationdate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ordernumid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/booking/update",
    "method": "updateOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This method is used to updat an existing pending or confirmed order. Depending of the configuration, some changes are considered major and others minor. The list of major fields must be set during the configuration of a new client.\nFor an input request, if there are major changes:\n- The order is reavaluated by the pricing service to check the new balance\n- The stock availability of the original order is released if the availability of the new order is confirmed.\n- The original order is replaced by the new order\n\nThis service doesn't merge data from the original order with the new order. So you need to fill all necessary fields in the new order.\n\nIf the original oder was already confirmed and paid, the requested changes may generate some cancellation fees depending of the cancellation terms.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "order",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ordercontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/booking/paymentconfirmation",
    "method": "confirmPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This method is to confirm a payment based on a payment reference. The payment could be for one or many orders.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "payment",
        "schema": "object",
        "description": ""
      },
      {
        "name": "paymentcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/booking/paymentcancellation",
    "method": "cancelPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This method is to cancel a payment based on payment references. The payment could be for one or many orders.\nThe system tries to find related orders by querying on these filters :\n- movementtype = CASHING\n- payment status = PENDING\n- paymentmode if filled\n- paymentcode if filled\n- externalpaymentreference if filled\n- paymentdetailid if filled\n- vendorcode if filled\n- accountid if filled\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "accountid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vendorcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isrefused",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "syncorderstatus",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "cause",
        "schema": "string",
        "description": ""
      },
      {
        "name": "details",
        "schema": "object",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/order/search",
    "method": "searchBookings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This method is used to search bookings. The total results of bookings in the response is limited by a parameter (default 100 results).\n\nYou must refine your search criteria if you didn't find your order.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "orderid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "paymentmode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoicenumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ordertype",
        "schema": "string",
        "description": "",
        "example": "BOOKING, ORDER, QUOTATION"
      },
      {
        "name": "codification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "structure",
        "schema": "object",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "booking",
        "schema": "object",
        "description": ""
      },
      {
        "name": "transactionnumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "firstname",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "paymentstatus",
        "schema": "string",
        "description": "",
        "example": "PAID, PENDING"
      },
      {
        "name": "orderstatus",
        "schema": "string",
        "description": "",
        "example": "PROCESSED, PENDING"
      },
      {
        "name": "startdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enddate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startexpirationdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endexpirationdate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/order/purchase",
    "method": "directConfirmPurchase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This method is used to directly confirm a purchase without having to call booking/request.\nThis means that inventory management is unnecessary with this method since no stock will be blocked.\nThe input request is supposed to be reliable, and the order will be stored as-is.\nIf the order reference isn't filled (ordertracking.transactionnumber), the service will set this field with a unique internal reference.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "order",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ordercontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/order/updatestatus",
    "method": "updateOrderStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Booking Service",
    "typeScriptTag": "bookingService",
    "description": "This method is used to update the order statuses.\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "orderid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDERID"
      },
      {
        "name": "latest",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/masterdata/upsert",
    "method": "upsertMasterData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "MasterData Service",
    "typeScriptTag": "masterDataService",
    "description": "This method is used to create or updata a master data\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "masterdataid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mdobject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MDOBJECT"
      },
      {
        "name": "mddatatype",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mdaxis",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MDAXIS"
      },
      {
        "name": "mdtype",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parentcode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "genericcode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalref",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "backend",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "translations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/masterdata/search",
    "method": "searchMasterData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "MasterData Service",
    "typeScriptTag": "masterDataService",
    "description": "This method is used to search master data\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "masterdataid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mdobject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mddatatype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mdaxis",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mdtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parentcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      },
      {
        "name": "genericcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalref",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/display/upsert",
    "method": "upsertDataModel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "MasterData Service",
    "typeScriptTag": "masterDataService",
    "description": "This method is used to create or updata a data model\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "displayid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tenantid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mdobject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MDOBJECT"
      },
      {
        "name": "tabcode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mdtype",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parentcode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "genericcode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "script",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "backend",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "displaytabs",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "translations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/display/search",
    "method": "searchMasterData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "MasterData Service",
    "typeScriptTag": "masterDataService",
    "description": "This method is used to search master data\n",
    "parameters": [
      {
        "name": "xAccessId",
        "schema": "string",
        "required": true,
        "description": "Access ID",
        "example": "X-ACCESS-ID"
      },
      {
        "name": "displayid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mdobject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tabcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mdtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parentcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "codes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "genericcode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestcontext",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Promotion Engine"
      apiBaseUrl="https://mock.gridbees.com/"
      apiVersion="v1"
      endpoints={77}
      sdkMethods={77}
      schemas={199}
      parameters={921}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gridbees/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gridbees/openapi.yaml"
      developerDocumentation="www.gridbees.com/resources/api-documentation"
    />
  );
}
  