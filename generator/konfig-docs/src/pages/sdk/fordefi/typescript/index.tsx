import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function FordefiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="fordefi-typescript-sdk"
      metaDescription={`The future of institutional web3 wallets.

For builders, traders, and operators, Fordefi's comprehensive MPC wallet platform and web3 gateway enables you to securely self-custody your private keys, seamlessly connect to thousands of dApps across any blockchain, protect your workflows with granular policies, and manage your digital asset operations all-in-one place.`}
      company="FORDEFI"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fordefi/logo.png"
      companyKebabCase="fordefi"
      clientNameCamelCase="fordefi"
      homepage="fordefi.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fordefi/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fordefi/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["cryptocurrency","web_3","mpc_wallet"]}
      methods={[
  {
    "url": "/api/v1/blockchains",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blockchains",
    "typeScriptTag": "blockchains",
    "description": "List Chains",
    "parameters": [
      {
        "name": "chainTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "onlyInteractedWith",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of blockchains."
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/blockchains/suggested-fees",
    "method": "getSuggestedFees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blockchains",
    "typeScriptTag": "blockchains",
    "description": "Get Suggested Fees",
    "parameters": [
      {
        "name": "chains",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "chainTypes",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List Users",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "The types of the users to filter on."
      },
      {
        "name": "roles",
        "schema": "array",
        "required": false,
        "description": "The roles of the users to filter on."
      },
      {
        "name": "states",
        "schema": "array",
        "required": false,
        "description": "The states of the users to filter on.  Is one of: <ul><li>`active`: The user can perform all actions in the Fordefi platform.<li>`onboarding`: The user has been approved but still needs to activate the account.<li>`pending_approval`: The user has been invited but not yet approved.<li>`deleted`: The user has been deleted.</ul>"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "The unique identifiers of the users."
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupIds",
        "schema": "array",
        "required": false,
        "description": "The unique identifiers of the user groups."
      },
      {
        "name": "groupIdsNot",
        "schema": "array",
        "required": false,
        "description": "The unique identifiers of the user groups to exclude."
      },
      {
        "name": "statesOnGroups",
        "schema": "array",
        "required": false,
        "description": "The states of the user groups to filter group_ids on. Is one of: <ul><li>`active`: The user group is active.<li>`pending_addition`: The user is pending to be added to the group.<li>`pending_removal`: The user is pending to be removed from the group.</ul>"
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/users/{id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get User",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the user to retrieve.",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/user-groups",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "List User Groups",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "states",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "userGroupIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedBy",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/user-groups/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Groups",
    "typeScriptTag": "userGroups",
    "description": "Get User Group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the user group to retrieve.",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vaults",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "List Vaults",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "vaultIds",
        "schema": "array",
        "required": false,
        "description": "Vault IDs to filter on."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "vaultTypes",
        "schema": "array",
        "required": false,
        "description": "Vault types to filter on."
      },
      {
        "name": "vaultStates",
        "schema": "array",
        "required": false,
        "description": "Vault states to filter on."
      },
      {
        "name": "keysetIds",
        "schema": "array",
        "required": false,
        "description": "List of keyset IDs to filter on."
      },
      {
        "name": "keyHolderIds",
        "schema": "array",
        "required": false,
        "description": "List of key holder IDs to filter on."
      },
      {
        "name": "vaultGroupIds",
        "schema": "array",
        "required": false,
        "description": "List of vault group IDs to filter on. Filter applies to current and pending vault groups."
      },
      {
        "name": "excludeVaultGroupIds",
        "schema": "array",
        "required": false,
        "description": "List of vault group IDs to exclude."
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vaults",
    "method": "createNewVault",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "Create Vault",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vaults/export",
    "method": "exportWithAssets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "Export Vaults With Assets",
    "parameters": [
      {
        "name": "vaultsIds",
        "schema": "array",
        "required": false,
        "description": "Vault IDs to filter on."
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vaults/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "Get Vault",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the vault to retrieve.",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vaults/{id}/assets/{asset_id}",
    "method": "getAsset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "Get Vault Asset",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the vault to retrieve.",
        "example": "ID"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "ID of the asset to retrieve.",
        "example": "ASSET_ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents an owned asset on Fordefi's platform"
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vaults/{id}/assets",
    "method": "getAssets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "Get Vault Assets",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the vault to retrieve.",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "assetIds",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vaults/{id}/name",
    "method": "renameVault",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "Rename Vault",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the vault to rename.",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vaults/{id}/addresses",
    "method": "listAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "List Vault Addresses",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the vault.",
        "example": "ID"
      },
      {
        "name": "sortBy",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "required": false,
        "description": "List of addresses to filter on."
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vaults/{id}/addresses",
    "method": "createAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "Create Address",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the vault to create address in.",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address_type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vaults/addresses/{id}/name",
    "method": "renameAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "Rename Vault Address",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the vault address to rename.",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/vault-groups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vault Groups",
    "typeScriptTag": "vaultGroups",
    "description": "List Vault Groups",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "vaultGroupIds",
        "schema": "array",
        "required": false,
        "description": "Vault group IDs to filter on."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accessLevel",
        "schema": "string",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/assets/owned-assets/{id}",
    "method": "getOwnedAsset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Get Owned Asset",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the asset to retrieve.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents an owned asset on Fordefi's platform"
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/assets/owned-assets",
    "method": "listOwnedAssets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "List Owned Assets",
    "parameters": [
      {
        "name": "vaultIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "chains",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "endUserIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "assetIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "isHidden",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/assets",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Update Asset Configuration",
    "parameters": [
      {
        "name": "asset",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "hidden",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/assets/prices",
    "method": "getPrices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Fetch Asset Prices",
    "parameters": [
      {
        "name": "asset_identifiers",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transactions/export",
    "method": "exportCsvList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Export Transactions",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of transactions to export, 1000 if not set.",
        "default": 1000
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transactions/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get Transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the transaction to retrieve.",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transactions",
    "method": "listAllInOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List Transactions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "createdBefore",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "vaultIds",
        "schema": "array",
        "required": false,
        "description": "The filter applies both to transactions that have been signed by the vault and also to transactions that have interacted with the vault. "
      },
      {
        "name": "chains",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "initiatorIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "states",
        "schema": "array",
        "required": false,
        "description": "State of the transaction. Can be one of:<ul> <li>`pending`</li> <li>`finalized`, which can be one of: <ul><li>`completed` </li> <li>`aborted` </li>  <li>`error_pushing_to_blockchain` </li> <li>`reverted`  </li> <li>`accelerated` </li>  <li>`canceled` </li>  </ul><li>`approved` </li> </ul>"
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "subTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "signerTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "transactionIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "endUserIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "isHidden",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeFullResponse",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "sortBy",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transactions",
    "method": "createNewTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Create Transaction",
    "parameters": [
      {
        "name": "xSignature",
        "schema": "string",
        "required": false,
        "description": "Signature of the body. Base64 encoded string. If the request is made programatically by an API user, signing of the request is required and is intended to protect you from malicious backends. ",
        "example": "SGVsbG8="
      },
      {
        "name": "xTimestamp",
        "schema": "integer",
        "required": false,
        "description": "Timestamp of the signature. Integer. Specify an Epoch date. If the request is made programatically by an API user, the timestamp of the request is required and is intended to protect you from replay attacks."
      },
      {
        "name": "xIdempotenceId",
        "schema": "string",
        "required": false,
        "description": "Optional idempotence ID of a transaction."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transactions/{id}/approve",
    "method": "approveTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Approve Transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the transaction to approve.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transactions/{id}/abort",
    "method": "abortTransactionAndShowBalanceChange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Abort Transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the transaction to abort.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transactions/{id}/release",
    "method": "releaseTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Release Transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the transaction to release.",
        "example": "ID"
      },
      {
        "name": "xSignature",
        "schema": "string",
        "required": false,
        "description": "Signature of the body. Base64 encoded string. If the request is made programatically by an API user, signing of the request is required and is intended to protect you from malicious backends. ",
        "example": "SGVsbG8="
      },
      {
        "name": "xTimestamp",
        "schema": "integer",
        "required": false,
        "description": "Timestamp of the signature. Integer. Specify an Epoch date. If the request is made programatically by an API user, the timestamp of the request is required and is intended to protect you from replay attacks."
      },
      {
        "name": "type",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "release_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELEASE_TYPE"
      },
      {
        "name": "signer_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fail_on_prediction_failure",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transactions/describe",
    "method": "getBlockchainFeePriceAndEstimateTransactionFee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Describe Transaction",
    "parameters": [],
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transactions/predict",
    "method": "simulateTransactionAndShowBalanceChange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Predict Transaction",
    "parameters": [],
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/transactions/{id}/update-spam-state",
    "method": "updateSpamState",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Update Transaction Spam State",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the transaction to update spam state.",
        "example": "ID"
      },
      {
        "name": "is_spam",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/addressbook/contacts",
    "method": "listContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Address Book",
    "typeScriptTag": "addressBook",
    "description": "List Contacts",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "contactIds",
        "schema": "array",
        "required": false,
        "description": "The contact IDs to filter by."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "states",
        "schema": "array",
        "required": false,
        "description": "The states to filter by."
      },
      {
        "name": "chainTypes",
        "schema": "array",
        "required": false,
        "description": "The chain types to filter by."
      },
      {
        "name": "chains",
        "schema": "array",
        "required": false,
        "description": "The chain unique ids to filter by."
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/webhooks/test",
    "method": "testWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Test Webhook",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/webhooks/trigger/transaction/{id}",
    "method": "triggerTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Trigger Transaction Webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the transaction to send events for.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/keysets",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Keysets",
    "typeScriptTag": "keysets",
    "description": "List Keysets",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "keysetIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sortBy",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/keysets",
    "method": "createKeyset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Keysets",
    "typeScriptTag": "keysets",
    "description": "Create Keyset",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/keysets/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Keysets",
    "typeScriptTag": "keysets",
    "description": "Get Keyset",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the keyset to retrieve.",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/end-users",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "List End Users",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "The unique identifiers of the users."
      },
      {
        "name": "externalId",
        "schema": "string",
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
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/end-users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Create End User",
    "parameters": [
      {
        "name": "external_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/end-users/{id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "End Users",
    "typeScriptTag": "endUsers",
    "description": "Get End User",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the end user to retrieve.",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorization-tokens",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authorization Tokens",
    "typeScriptTag": "authorizationTokens",
    "description": "List Authorization Tokens",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "The unique identifiers of the users."
      },
      {
        "name": "userTypes",
        "schema": "array",
        "required": false,
        "description": "User types to filter. Only end users are currently supported."
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorization-tokens",
    "method": "issueToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorization Tokens",
    "typeScriptTag": "authorizationTokens",
    "description": "Issue Authorization Token",
    "parameters": [
      {
        "name": "user_type",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/authorization-tokens/{id}",
    "method": "deleteToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Authorization Tokens",
    "typeScriptTag": "authorizationTokens",
    "description": "Delete Authorization Token",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the authorization token to delete.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/web-devices",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Web Devices",
    "typeScriptTag": "webDevices",
    "description": "List Web Devices",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page number to fetch.",
        "default": 1
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page.",
        "default": 50
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
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
      apiTitle="Fordefi API"
      apiBaseUrl="https://api.fordefi.com/"
      apiVersion="0.2.0"
      endpoints={37}
      sdkMethods={43}
      schemas={526}
      parameters={160}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fordefi/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fordefi/openapi.yaml"
      developerDocumentation="docs.fordefi.com/reference/api-overview"
    />
  );
}
  