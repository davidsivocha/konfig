import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SoftLedgerTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="soft-ledger-typescript-sdk"
      metaDescription={`SoftLedger provides real-time visibility to critical financial data.

Our cloud-native accounting software and APIs help organizations manage their distributed operations and assets.  This includes a full-featured general ledger, accounts receivable, accounts payable, inventory management, crypto asset management, and more.`}
      company="SoftLedger"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/softledger/logo.png"
      companyKebabCase="soft-ledger"
      clientNameCamelCase="softLedger"
      homepage="softledger.com/"
      lastUpdated={new Date("2024-03-27T21:35:27.963Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/softledger/favicon.png"
      // Missing contactUrl
      contactEmail="support@softledger.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/softledger/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","cloud","accounting","financial_services"]}
      methods={[
  {
    "url": "/oauth/token",
    "method": "requestToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Request Token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE"
      },
      {
        "name": "tenantUUID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TENANTUUID"
      },
      {
        "name": "audience",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUDIENCE"
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_SECRET"
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
    "url": "/reports/accountBalance",
    "method": "getConsolidatedBalance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Financials",
    "typeScriptTag": "financials",
    "description": "Account Balance by Currency",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "LedgerAccountId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTTYPE"
      },
      {
        "name": "consolidated",
        "schema": "boolean",
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
    "url": "/reports/aging/bills",
    "method": "getAgingBills",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Financials",
    "typeScriptTag": "financials",
    "description": "AP Aging Bills",
    "parameters": [
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "vendorId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 25
      },
      {
        "name": "consolidated",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "includeDraft",
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
      }
    ]
  },
  {
    "url": "/reports/aging/Invoices",
    "method": "getAgingInvoices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Financials",
    "typeScriptTag": "financials",
    "description": "AR Aging Invoices",
    "parameters": [
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "customerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 25
      },
      {
        "name": "consolidated",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "includeDraft",
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
      }
    ]
  },
  {
    "url": "/reports/aging/ap",
    "method": "getApprovedBillsAging",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Financials",
    "typeScriptTag": "financials",
    "description": "AP Aging",
    "parameters": [
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START"
      },
      {
        "name": "consolidated",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "includeDraft",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
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
    "url": "/reports/aging/ar",
    "method": "getAgingAr",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Financials",
    "typeScriptTag": "financials",
    "description": "AR Aging",
    "parameters": [
      {
        "name": "locationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START"
      },
      {
        "name": "consolidated",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "includeDraft",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
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
    "url": "/reports/financialFormula",
    "method": "calculateCurrentPeriodIncome",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Financials",
    "typeScriptTag": "financials",
    "description": "Current Period Income",
    "parameters": [
      {
        "name": "formulaType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FORMULATYPE"
      },
      {
        "name": "colType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLTYPE"
      },
      {
        "name": "colIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "LocationId",
        "schema": "integer",
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
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "key: colId\nvalue: balance for the specified colId\n"
      }
    ]
  },
  {
    "url": "/reports/financialReport",
    "method": "generateReportData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Financials",
    "typeScriptTag": "financials",
    "description": "Entity Report",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "status",
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
    "url": "/reports/financials",
    "method": "generateDimensionReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Financials",
    "typeScriptTag": "financials",
    "description": "Dimension Report",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "objectIds",
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
    "url": "/reports/generalLedger",
    "method": "getGeneralLedgerBalances",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Financials",
    "typeScriptTag": "financials",
    "description": "General Ledger",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "consolidated",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "number:DESC"
      },
      {
        "name": "where",
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
    "url": "/reports/trialBalance",
    "method": "getTrialBalance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Financials",
    "typeScriptTag": "financials",
    "description": "Trial Balance",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USD"
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "dateRanges",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "number:DESC"
      },
      {
        "name": "where",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "DimensionType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DimensionId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "consolidated",
        "schema": "boolean",
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
    "url": "/fx-revalue/rates/{AccountingPeriodId}",
    "method": "getRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FX Revalue",
    "typeScriptTag": "fxRevalue",
    "description": "Get Rates",
    "parameters": [
      {
        "name": "accountingPeriodId",
        "schema": "integer",
        "required": true,
        "description": "AccountingPeriod._id value",
        "example": 0
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
    "url": "/fx-revalue/rates/{AccountingPeriodId}",
    "method": "saveRatesForPeriod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "FX Revalue",
    "typeScriptTag": "fxRevalue",
    "description": "Save Rates",
    "parameters": [
      {
        "name": "accountingPeriodId",
        "schema": "integer",
        "required": true,
        "description": "AccountingPeriod._id value",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "rates",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/fx-revalue/adjustments/{AccountingPeriodId}",
    "method": "deleteAdjustments",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "FX Revalue",
    "typeScriptTag": "fxRevalue",
    "description": "Delete Adjustments",
    "parameters": [
      {
        "name": "accountingPeriodId",
        "schema": "integer",
        "required": true,
        "description": "AccountingPeriod._id value",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/fx-revalue/adjustments/{AccountingPeriodId}",
    "method": "postEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "FX Revalue",
    "typeScriptTag": "fxRevalue",
    "description": "Post Adjustments",
    "parameters": [
      {
        "name": "accountingPeriodId",
        "schema": "integer",
        "required": true,
        "description": "AccountingPeriod._id value",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      }
    ]
  },
  {
    "url": "/status/{type}",
    "method": "jobStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Get Status",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "API type",
        "example": "TYPE"
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
    "url": "/addresses",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "label:ASC"
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
    "url": "/addresses",
    "method": "createNewAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Create",
    "parameters": [
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "line1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "line2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isDefault",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Vendor",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
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
    "url": "/addresses/{id}",
    "method": "deleteAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Address Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/addresses/{id}",
    "method": "updateOneAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Address Id",
        "example": "ID"
      },
      {
        "name": "label",
        "schema": "string",
        "description": ""
      },
      {
        "name": "line1",
        "schema": "string",
        "description": ""
      },
      {
        "name": "line2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isDefault",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Vendor",
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
    "url": "/addresss/{id}",
    "method": "getOneAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Address Id",
        "example": "ID"
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
    "url": "/audit-logs",
    "method": "listDescendingByDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit Logs",
    "typeScriptTag": "auditLogs",
    "description": "Search",
    "parameters": [
      {
        "name": "where",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
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
    "url": "/batch-payments",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "referenceNumber:DESC"
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
    "url": "/batch-payments",
    "method": "createNewBatchPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "Create",
    "parameters": [
      {
        "name": "paymentDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTDATE"
      },
      {
        "name": "postedDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCENUMBER"
      },
      {
        "name": "memo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CashAccountId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ClearingAccountId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Bills",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/batch-payments/{id}/approve",
    "method": "approve",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "Approve",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BatchPayment._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/batch-payments/{id}/bills",
    "method": "getBills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "Bills",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BatchPayment._id",
        "example": "ID"
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
    "url": "/batch-payments/{id}/bills/count",
    "method": "getBillsCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "Bills Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BatchPayment._id",
        "example": "ID"
      },
      {
        "name": "credit",
        "schema": "boolean",
        "description": "If true, only returns AP Credits i.e. bills with a negative amount.\n\nIf false or not specified, only returns bills with a positive amount.\n",
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
    "url": "/batch-payments/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/batch-payments/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Batch Payment Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/batch-payments/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BatchPayment._id",
        "example": "ID"
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
    "url": "/batch-payments/{id}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "Payments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BatchPayment._id",
        "example": "ID"
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
    "url": "/batch-payments/{id}/payments/count",
    "method": "getPaymentsCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "Payments Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BatchPayment._id",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Filter by AP or AR payments\n\nIf not specified, all payment types will be returned\n"
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
    "url": "/batch-payments/{id}/void",
    "method": "voidBatchPayment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Batch Payments",
    "typeScriptTag": "batchPayments",
    "description": "Void",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BatchPayment._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "voidDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/bills",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:ASC"
      },
      {
        "name": "credit",
        "schema": "boolean",
        "description": "If true, only returns AP Credits i.e. bills with a negative amount.\n\nIf false or not specified, only returns bills with a positive amount.\n",
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
    "url": "/bills",
    "method": "createBill",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVOICEDATE"
      },
      {
        "name": "postingDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSTINGDATE"
      },
      {
        "name": "dueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ICLocationId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ICLocation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Vendor",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "APAccountId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "APAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "PurchaseOrderId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PurchaseOrder",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "BillLineItems",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/bills/lines",
    "method": "searchLines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Line Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "Bill.invoiceNumber:ASC"
      },
      {
        "name": "credit",
        "schema": "boolean",
        "description": "Filter by credit status of the Bill.\nOperates as follows:\n  - If 'credit' is false, lines from Bills that have 'Bill.amount' greater than or equal to zero will be returned\n  - If 'credit' is true, lines from Bills that have 'Bill.amount' less than zero will be returned\n  - If 'credit' is not provided, all lines will be returned\n"
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
    "url": "/bills/unpaid",
    "method": "getUnpaid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Unpaid Bills",
    "parameters": [
      {
        "name": "filterCurrency",
        "schema": "string",
        "description": "Provide this to only show unpaid bills in the specified currency.\n\nThis parameter is optional.\n"
      },
      {
        "name": "filterLocationId",
        "schema": "string",
        "description": "Ref: \"Location\"._id\n\nProvide this to only show unpaid bills from the specified location.\n\nBills from child locations of the provided location are not included.\n\nThis parameter is optional.\n"
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
    "url": "/bills/{id}/approve",
    "method": "approveBill",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Approve",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bill._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/bills/count",
    "method": "countItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "credit",
        "schema": "boolean",
        "description": "If true, only returns AP Credits i.e. bills with a negative amount.\n\nIf false or not specified, only returns bills with a positive amount.\n",
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
    "url": "/bills/lines/count",
    "method": "getLineCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Line Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "credit",
        "schema": "boolean",
        "description": "Filter by credit status of the Bill.\nOperates as follows:\n  - If 'credit' is false, lines from Bills that have 'Bill.amount' greater than or equal to zero will be returned\n  - If 'credit' is true, lines from Bills that have 'Bill.amount' less than zero will be returned\n  - If 'credit' is not provided, all lines will be returned\n"
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
    "url": "/bills/count/unpaid",
    "method": "countUnpaid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Count Unpaid",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "filterCurrency",
        "schema": "string",
        "description": "Provide this to only show unpaid bills in the specified currency.\n\nThis parameter is optional.\n"
      },
      {
        "name": "filterLocationId",
        "schema": "string",
        "description": "Ref: \"Location\"._id\n\nProvide this to only show unpaid bills from the specified location.\n\nBills from child locations of the provided location are not included.\n\nThis parameter is optional.\n"
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
    "url": "/bills/{id}/line",
    "method": "createLineItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Create Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bill._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUANTITY"
      },
      {
        "name": "taxAmount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCodeId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCode",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Item",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenterId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Job",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ProductId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Product",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/bills/{id}",
    "method": "deleteOneBill",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bill Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/bills/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bill._id",
        "example": "ID"
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
    "url": "/bills/{id}",
    "method": "updateOneBill",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bill Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ICLocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ICLocation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Vendor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "APAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "APAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "PurchaseOrderId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "PurchaseOrder",
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
    "url": "/bills/line/{id}",
    "method": "deleteLine",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Delete Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BillLine._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/bills/line/{id}",
    "method": "updateLineItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Update Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "BillLineItem._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TaxCodeId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "TaxCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Item",
        "schema": "object",
        "description": ""
      },
      {
        "name": "CostCenterId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "CostCenter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ProductId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Product",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Custom1Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Custom1",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Custom2Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Custom2",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Custom3Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Custom3",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LedgerAccount",
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
    "url": "/bills/{id}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Payments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bill._id",
        "example": "ID"
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
    "url": "/bills/{id}/void",
    "method": "voidBill",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bills",
    "typeScriptTag": "bills",
    "description": "Void",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Bill._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/cash-receipts",
    "method": "searchSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cash Receipts",
    "typeScriptTag": "cashReceipts",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:ASC"
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
    "url": "/cash-receipts",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Receipts",
    "typeScriptTag": "cashReceipts",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NUMBER"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "receiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVEDATE"
      },
      {
        "name": "postingDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSTINGDATE"
      },
      {
        "name": "applyToInvoices",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "UnappliedCashAccountId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "UnappliedCashAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/cash-receipts/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cash Receipts",
    "typeScriptTag": "cashReceipts",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/cash-receipts/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cash Receipts",
    "typeScriptTag": "cashReceipts",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Cash Receipt Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/cash-receipts/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cash Receipts",
    "typeScriptTag": "cashReceipts",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Cash Receipt Id",
        "example": "ID"
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
    "url": "/cash-receipts/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cash Receipts",
    "typeScriptTag": "cashReceipts",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Cash Receipt Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "receiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "LedgerAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "Location",
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
    "url": "/cash-receipts/{id}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cash Receipts",
    "typeScriptTag": "cashReceipts",
    "description": "Payments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "CashReceipt._id",
        "example": "ID"
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
    "url": "/cash-receipts/{id}/void",
    "method": "voidOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cash Receipts",
    "typeScriptTag": "cashReceipts",
    "description": "Void",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Cash Receipt Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/coins",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "symbol:ASC"
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
    "url": "/coins",
    "method": "createNewCoin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Create",
    "parameters": [
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SYMBOL"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "impair",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "isFiat",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "rateId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/coins/{CoinId}/crypto-transactions",
    "method": "listCryptoTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Crypto Transactions",
    "parameters": [
      {
        "name": "coinId",
        "schema": "string",
        "required": true,
        "description": "Coin._id",
        "example": "COINID"
      },
      {
        "name": "walletId",
        "schema": "string",
        "required": false,
        "description": "Wallet._id\nLimits results to transactions that involve the specified wallet\n"
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "Filters for Wallets (https://api-docs.softledger.com/ in the specified location. Defaults to Global Location when not set."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
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
    "url": "/coins/{CoinId}/summary",
    "method": "getSummaryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Id Summary",
    "parameters": [
      {
        "name": "coinId",
        "schema": "string",
        "required": true,
        "description": "Coin._id",
        "example": "COINID"
      },
      {
        "name": "hideZero",
        "schema": "boolean",
        "description": "exclude zero balance coins"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "date to filter by. defaults to \"now\" ISO DateTime"
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "Filters for Wallets (https://api-docs.softledger.com/ in the specified location. Defaults to Global Location when not set."
      },
      {
        "name": "consolidated",
        "schema": "boolean",
        "description": "True = match on the Location & its children. False = match only wallets in this location."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "name:ASC"
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
    "url": "/coins/{CoinId}/crypto-transactions/count",
    "method": "countCryptoTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Count",
    "parameters": [
      {
        "name": "coinId",
        "schema": "string",
        "required": true,
        "description": "Coin._id value",
        "example": "COINID"
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "Filters for Wallets (https://api-docs.softledger.com/ in the specified location. Defaults to Global Location when not set."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
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
    "url": "/coins/{id}",
    "method": "deleteCoin",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Coin Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/coins/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Coin Id",
        "example": "ID"
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
    "url": "/coins/{id}",
    "method": "updateOneCoin",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Coin Id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "impair",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hidden",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "rateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rateSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
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
    "url": "/coins/list/{rateId}",
    "method": "getByRateId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Known Coin",
    "parameters": [
      {
        "name": "rateId",
        "schema": "string",
        "description": "RateId for the Coin"
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
    "url": "/coins/list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Known Coins",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "Case Insensitive filter for symbol or name of coin"
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
    "url": "/coins/{id}/rate",
    "method": "getRate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Coin Rate",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "_id of Coin to get rate for\nRef: Coin._id\n",
        "example": "ID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date to provide rate on",
        "example": "DATE"
      },
      {
        "name": "fiat",
        "schema": "string",
        "description": "Fiat currency to show rate in\nRef: Currency.code\n",
        "default": "USD"
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
    "url": "/coins/summary",
    "method": "getSummaryCoins",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Coins",
    "typeScriptTag": "coins",
    "description": "Summary",
    "parameters": [
      {
        "name": "showHidden",
        "schema": "boolean",
        "description": "include hidden coins"
      },
      {
        "name": "hideZero",
        "schema": "boolean",
        "description": "exclude zero balance coins"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "date to filter by. defaults to \"now\" ISO Date"
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "Filters for Wallets (https://api-docs.softledger.com/ in the specified location. Defaults to Global Location when not set."
      },
      {
        "name": "consolidated",
        "schema": "boolean",
        "description": "True = match on the Location & its children. False = match only wallets in this location."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "name:ASC"
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
    "url": "/consolidation-rates",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consolidation Rates",
    "typeScriptTag": "consolidationRates",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:ASC"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include data from this Parent Location and its children only\n"
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
    "url": "/consolidation-rates",
    "method": "upsertRate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Consolidation Rates",
    "typeScriptTag": "consolidationRates",
    "description": "Upsert",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/consolidation-rates/{id}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consolidation Rates",
    "typeScriptTag": "consolidationRates",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ConsolidationRate._id",
        "example": "ID"
      },
      {
        "name": "system",
        "schema": "boolean",
        "required": false,
        "description": "Set this to true to return the system generated rate values for this record",
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
    "url": "/consolidation-rates/populate",
    "method": "populateRates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Consolidation Rates",
    "typeScriptTag": "consolidationRates",
    "description": "Populate",
    "parameters": [
      {
        "name": "AccountingPeriodId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/consolidation-rates/{id}/reset",
    "method": "resetRate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Consolidation Rates",
    "typeScriptTag": "consolidationRates",
    "description": "Reset Rate",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ConsolidationRate._id",
        "example": "ID"
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
    "url": "/contacts",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "name:ASC"
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
    "url": "/contacts",
    "method": "createNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isPrimary",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Vendor",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
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
    "url": "/contacts/{id}",
    "method": "deleteOneContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Contact Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/contacts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Contact Id",
        "example": "ID"
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
    "url": "/contacts/{id}",
    "method": "updateOneContact",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Contact Id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isPrimary",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Vendor",
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
    "url": "/cost-centers",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cost Centers",
    "typeScriptTag": "costCenters",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "id:ASC"
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
    "url": "/cost-centers",
    "method": "createCostCenter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cost Centers",
    "typeScriptTag": "costCenters",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/cost-centers/count",
    "method": "countGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cost Centers",
    "typeScriptTag": "costCenters",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
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
    "url": "/cost-centers/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cost Centers",
    "typeScriptTag": "costCenters",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Cost Center Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/cost-centers/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cost Centers",
    "typeScriptTag": "costCenters",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Cost Center Id",
        "example": "ID"
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
    "url": "/cost-centers/{id}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cost Centers",
    "typeScriptTag": "costCenters",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Cost Center Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inactive",
        "schema": "boolean",
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
    "url": "/crypto-transactions/cost-basis",
    "method": "cancelCostBasisProcess",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Cost Basis",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/crypto-transactions/cost-basis",
    "method": "getNextCostBasis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Cost Basis",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/crypto-transactions/cost-basis",
    "method": "startCostBasisProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Cost Basis",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      }
    ]
  },
  {
    "url": "/crypto-transactions/{id}/layers",
    "method": "listCostLayersDescending",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Cost Layers",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Transaction id to get cost layers for",
        "example": "ID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of cost layers to return",
        "example": "TYPE"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
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
    "url": "/crypto-transactions/count",
    "method": "getTransactionsCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Count",
    "parameters": [
      {
        "name": "coinId",
        "schema": "string",
        "description": "Coin._id\nLimits results to the specified coin\n"
      },
      {
        "name": "walletId",
        "schema": "string",
        "description": "Wallet._id\nLimits results to the specified wallet\n"
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "Filters for Wallets (https://api-docs.softledger.com/ in the specified location. Defaults to Global Location when not set."
      },
      {
        "name": "costLayers",
        "schema": "boolean",
        "description": "Only returns Crypto Transactions that have unused cost layers.",
        "default": false
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
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
    "url": "/crypto-transactions",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Search",
    "parameters": [
      {
        "name": "coinId",
        "schema": "string",
        "description": "Coin._id\nLimits results to the specified coin\n"
      },
      {
        "name": "walletId",
        "schema": "string",
        "description": "Wallet._id\nLimits results to the specified wallet\n"
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "Filters for Wallets (https://api-docs.softledger.com/ in the specified location. Defaults to Global Location when not set."
      },
      {
        "name": "costLayers",
        "schema": "boolean",
        "description": "Only returns Crypto Transactions that have unused cost layers.",
        "default": false
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "date:DESC"
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
    "url": "/crypto-transactions",
    "method": "createNewTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Create",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "rCoinId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sCoinId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fCoinId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rWalletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sWalletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fWalletId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rQty",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "sQty",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "fQty",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "sPrice",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "rPrice",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "fPrice",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalSource",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "txHash",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenterId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ProductId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3Id",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/crypto-transactions/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Crypto Transaction Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/crypto-transactions/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Crypto Transaction Id",
        "example": "ID"
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
    "url": "/crypto-transactions/{id}",
    "method": "updateOneTransaction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Crypto Transaction Id",
        "example": "ID"
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rCoinId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sCoinId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fCoinId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rWalletId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sWalletId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fWalletId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rQty",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "sQty",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "fQty",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "qtyPicked",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sPrice",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "rPrice",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "fPrice",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencyRate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "txHash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "integer",
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
    "url": "/crypto-transactions/merge",
    "method": "mergeTransactions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Merge",
    "parameters": [
      {
        "name": "depositId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEPOSITID"
      },
      {
        "name": "withdrawalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WITHDRAWALID"
      },
      {
        "name": "useDepositMetaData",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/crypto-transactions/create-journals",
    "method": "startJournalProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Crypto Transactions",
    "typeScriptTag": "cryptoTransactions",
    "description": "Create Journals",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      }
    ]
  },
  {
    "url": "/currency",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Search",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/currency",
    "method": "createNewCurrency",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Create",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SYMBOL"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "rounding_method",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "fraction",
        "schema": "number",
        "required": false,
        "description": "",
        "default": 2
      },
      {
        "name": "custom",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/currency/{code}/forex-rates",
    "method": "getForexRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Search",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Currency Code",
        "example": "CODE"
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
    "url": "/currency/{code}",
    "method": "deleteCurrency",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Delete",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Currency Code",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/currency/{code}",
    "method": "getOneCurrency",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Get one",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Currency Code",
        "example": "CODE"
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
    "url": "/currency/{code}",
    "method": "updateCurrency",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Update",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Currency Code",
        "example": "CODE"
      },
      {
        "name": "symbol",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rounding_method",
        "schema": "number",
        "description": ""
      },
      {
        "name": "fraction",
        "schema": "number",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
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
    "url": "/custom/{name}",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Dimensions",
    "typeScriptTag": "customDimensions",
    "description": "Search",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Custom Dimension Object Type Name",
        "example": "NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "id:ASC"
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
    "url": "/custom/{name}",
    "method": "createNewCustomDimension",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Dimensions",
    "typeScriptTag": "customDimensions",
    "description": "Create",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Custom Dimension Object Type Name",
        "example": "NAME"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom/{name}/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Dimensions",
    "typeScriptTag": "customDimensions",
    "description": "Count",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Custom Dimension Object Type Name",
        "example": "NAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
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
    "url": "/custom/{name}/{id}",
    "method": "deleteDimension",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Dimensions",
    "typeScriptTag": "customDimensions",
    "description": "Delete",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Custom Dimension Object Type Name",
        "example": "NAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Custom Dimension Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/custom/{name}/{id}",
    "method": "getOneDimension",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Dimensions",
    "typeScriptTag": "customDimensions",
    "description": "One",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Custom Dimension Object Type Name",
        "example": "NAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Custom Dimension Id",
        "example": "ID"
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
    "url": "/custom/{name}/{id}",
    "method": "updateDimension",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Dimensions",
    "typeScriptTag": "customDimensions",
    "description": "Update",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Custom Dimension Object Type Name",
        "example": "NAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Custom Dimension Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inactive",
        "schema": "boolean",
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
    "url": "/customers",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "id:ASC"
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
    "url": "/customers",
    "method": "createNewCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "terms",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultDaysDue",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "Address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Contacts",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/customers/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
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
    "url": "/customers/{id}",
    "method": "deleteCustomer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/customers/{id}",
    "method": "getOneCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer Id",
        "example": "ID"
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
    "url": "/customers/{id}",
    "method": "updateOneCustomer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "terms",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultDaysDue",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "inactive",
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
    "url": "/customers/{id}/invoices",
    "method": "getInvoicesFor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Invoices",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer._id",
        "example": "ID"
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
    "url": "/customers/{id}/payments",
    "method": "getCustomerPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Payments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer._id",
        "example": "ID"
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
    "url": "/customers/{id}/email/statement",
    "method": "emailStatement",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Email Statement",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/customers/{id}/pdf/statement",
    "method": "getStatementPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Statement PDF",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base64 Buffer of the PDF\n"
      }
    ]
  },
  {
    "url": "/custom-fields/{type}/{property}",
    "method": "deleteProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Delete",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type for custom field",
        "example": "TYPE"
      },
      {
        "name": "property",
        "schema": "string",
        "required": true,
        "description": "Property in the custom field",
        "example": "PROPERTY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/custom-fields/{type}",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Search",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type for custom field",
        "example": "TYPE"
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
    "url": "/custom-fields/{type}",
    "method": "upsertField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Upsert",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type for custom field",
        "example": "TYPE"
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "property",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
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
    "url": "/emails",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "All",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "description": "number of records to skip",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "Dimension Object Type",
        "example": "OBJECTTYPE"
      },
      {
        "name": "objectId",
        "schema": "integer",
        "required": true,
        "description": "Dimension Object Id",
        "example": 0
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
    "url": "/emails/{messageid}",
    "method": "getMessageDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Message Details",
    "parameters": [
      {
        "name": "messageid",
        "schema": "string",
        "required": true,
        "description": "Message id",
        "example": "MESSAGEID"
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
    "url": "/fx-remeasure/{AccountingPeriodId}/journals",
    "method": "deleteJournals",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "FX Remeasure",
    "typeScriptTag": "fxRemeasure",
    "description": "Delete Journals",
    "parameters": [
      {
        "name": "accountingPeriodId",
        "schema": "string",
        "required": true,
        "description": "AccountPeriod._id",
        "example": "ACCOUNTINGPERIODID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/fx-remeasure/{AccountingPeriodId}/journals",
    "method": "postJournals",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "FX Remeasure",
    "typeScriptTag": "fxRemeasure",
    "description": "Post Journals",
    "parameters": [
      {
        "name": "accountingPeriodId",
        "schema": "string",
        "required": true,
        "description": "AccountPeriod._id",
        "example": "ACCOUNTINGPERIODID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/fx-remeasure/{AccountingPeriodId}/balances",
    "method": "getBalancesForPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FX Remeasure",
    "typeScriptTag": "fxRemeasure",
    "description": "Get Balances",
    "parameters": [
      {
        "name": "accountingPeriodId",
        "schema": "string",
        "required": true,
        "description": "AccountPeriod._id",
        "example": "ACCOUNTINGPERIODID"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "currency:ASC"
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
    "url": "/fx-remeasure/{AccountingPeriodId}",
    "method": "getCurrentRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FX Remeasure",
    "typeScriptTag": "fxRemeasure",
    "description": "Get Rates",
    "parameters": [
      {
        "name": "accountingPeriodId",
        "schema": "string",
        "required": true,
        "description": "AccountPeriod._id",
        "example": "ACCOUNTINGPERIODID"
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
    "url": "/fx-remeasure/{AccountingPeriodId}",
    "method": "upsertRates",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "FX Remeasure",
    "typeScriptTag": "fxRemeasure",
    "description": "Upsert Rates",
    "parameters": [
      {
        "name": "accountingPeriodId",
        "schema": "string",
        "required": true,
        "description": "AccountPeriod._id",
        "example": "ACCOUNTINGPERIODID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/inventory/cost-basis",
    "method": "getNextCostBasisRun",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stock Adjustments",
    "typeScriptTag": "stockAdjustments",
    "description": "Cost Basis",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/inventory/cost-basis",
    "method": "startCostBasisProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stock Adjustments",
    "typeScriptTag": "stockAdjustments",
    "description": "Cost Basis",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      }
    ]
  },
  {
    "url": "/invoices",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:DESC"
      },
      {
        "name": "credit",
        "schema": "boolean",
        "description": "If true, only returns AR Credits i.e. invoices with a negative amount.\n\nIf false or not specified, only returns invoice with a positive amount.\n",
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
    "url": "/invoices",
    "method": "createNewInvoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Create",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "invoiceDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVOICEDATE"
      },
      {
        "name": "postedDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSTEDDATE"
      },
      {
        "name": "dueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ICLocationId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ICLocation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ShippingAddressId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "BillingAddressId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ARAccountId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ARAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "TemplateId",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "Template with name 'Default' and format = 'pdf'"
      },
      {
        "name": "SalesOrderId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SalesOrder",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "InvoiceLineItems",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/lines",
    "method": "searchLines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Search Lines",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "Invoice.invoiceDate:DESC"
      },
      {
        "name": "credit",
        "schema": "boolean",
        "description": "Filter by credit status of the Invoice.\nOperates as follows:\n  - If 'credit' is false, lines from Invoices that have 'Invoice.amount' greater than or equal to zero will be returned\n  - If 'credit' is true, lines from Invoices that have 'Invoice.amount' less than zero will be returned\n  - If 'credit' is not provided, all lines will be returned\n"
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
    "url": "/invoices/lines/count",
    "method": "countLines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Count Lines",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "credit",
        "schema": "boolean",
        "description": "Filter by credit status of the Invoice.\nOperates as follows:\n  - If 'credit' is false, lines from Invoices that have 'Invoice.amount' greater than or equal to zero will be returned\n  - If 'credit' is true, lines from Invoices that have 'Invoice.amount' less than zero will be returned\n  - If 'credit' is not provided, all lines will be returned\n"
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
    "url": "/invoices/unpaid",
    "method": "getUnpaidInvoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Unpaid Invoices",
    "parameters": [
      {
        "name": "filterCurrency",
        "schema": "string",
        "description": "Provide this to only show unpaid invoices in the specified currency.\n\nThis parameter is optional.\n"
      },
      {
        "name": "filterLocationId",
        "schema": "string",
        "description": "Ref: \"Location\"._id\n\nProvide this to only show unpaid invoices from the specified location.\n\nInvoices from child locations of the provided location are not included.\n\nThis parameter is optional.\n"
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
    "url": "/invoices/count",
    "method": "countItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/invoices/{id}/line",
    "method": "createLineItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Create Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Invoice._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unitAmount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNITAMOUNT"
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUANTITY"
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "taxAmount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCodeId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCode",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Item",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenterId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Job",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ProductId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Product",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/invoices/{id}",
    "method": "deleteOneInvoice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Invoice Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/invoices/{id}",
    "method": "updateOneInvoice",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Invoice Id",
        "example": "ID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invoiceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ICLocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ICLocation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ShippingAddressId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "BillingAddressId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ARAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ARAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "TemplateId",
        "schema": "integer",
        "description": "",
        "default": "Template with name 'Default' and format = 'pdf'"
      },
      {
        "name": "SalesOrderId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "SalesOrder",
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
    "url": "/invoices/line/{id}",
    "method": "deleteLine",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Delete Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "InvoiceLine._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/invoices/line/{id}",
    "method": "updateLineItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Update Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "InvoiceLineItem._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "taxAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TaxCodeId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "TaxCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Item",
        "schema": "object",
        "description": ""
      },
      {
        "name": "CostCenterId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "CostCenter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ProductId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Product",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Custom1Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Custom1",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Custom2Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Custom2",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Custom3Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Custom3",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LedgerAccount",
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
    "url": "/invoices/{id}/email",
    "method": "sendEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Email",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Invoice._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/invoices/{id}/issue",
    "method": "issueInvoice",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Issue",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Invoice._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/invoice/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Invoice._id",
        "example": "ID"
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
    "url": "/invoices/{id}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Payments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Invoice._id",
        "example": "ID"
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
    "url": "/invoices/{id}/pdf",
    "method": "getPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "PDF",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Invoice._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base64 Buffer of the PDF\n"
      }
    ]
  },
  {
    "url": "/invoices/{id}/void",
    "method": "voidInvoice",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Invoices",
    "typeScriptTag": "invoices",
    "description": "Void",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Invoice._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postedDate",
        "schema": "string",
        "description": "",
        "default": "NOW"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/items",
    "method": "getFilteredItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:ASC"
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
    "url": "/items",
    "method": "createNewItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalIds",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "salePrice",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0"
      },
      {
        "name": "purchasePrice",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sku",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "inventory"
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "InvoiceAccountId",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "Settings.defaultItemInvoiceAccountId"
      },
      {
        "name": "InvoiceAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "BillAccountId",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "Settings.defaultItemInventoryAccrualId"
      },
      {
        "name": "BillAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "InventoryAccountId",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "Settings.defaultItemInventoryAssetId"
      },
      {
        "name": "InventoryAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "CogsAccountId",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "Settings.defaultItemCOGSId"
      },
      {
        "name": "CogsAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/items/count",
    "method": "countFilteredItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
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
    "url": "/items/{id}",
    "method": "deleteItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Item Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/items/{id}",
    "method": "getOneItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Item Id",
        "example": "ID"
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
    "url": "/items/{id}",
    "method": "updateOneItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Item Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalIds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salePrice",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purchasePrice",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sku",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "InvoiceAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "InvoiceAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "BillAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "BillAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "InventoryAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "InventoryAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "CogsAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "CogsAccount",
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
    "url": "/items/{id}/stock/summary",
    "method": "getStockSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Summary",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Item Id",
        "example": "ID"
      },
      {
        "name": "childWh",
        "schema": "boolean",
        "description": "Determine if the summary balances include stock from child warehouses"
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
    "url": "/jobs",
    "method": "getFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:ASC"
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
    "url": "/jobs",
    "method": "createJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NUMBER"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "CustomerId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/count",
    "method": "countJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
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
    "url": "/jobs/{id}",
    "method": "deleteJobById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Job Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/jobs/{id}",
    "method": "getOneJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Job Id",
        "example": "ID"
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
    "url": "/jobs/{id}",
    "method": "updateJobWebhooks",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Job Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "number",
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
    "url": "/journals",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journals",
    "typeScriptTag": "journals",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "status",
        "schema": "string",
        "description": "`editable` returns draft journals that can be edited directly.\n\n`icdoc` returns draft intercompany document journals that can be edited directly.\n\n`draft` returns journals that aren't posted.\n\n`posted` returns journals that are posted.\n\nNot set returns all journals.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:ASC"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include transactions from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/journals",
    "method": "createNewJournal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Journals",
    "typeScriptTag": "journals",
    "description": "Create",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "entryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTRYTYPE"
      },
      {
        "name": "sourceLedger",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCELEDGER"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFERENCE"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "customCurrencyRate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "reverseDate",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "First day of month after posted date."
      },
      {
        "name": "icDoc",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "Transactions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/journals/{id}",
    "method": "deleteOneJournal",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Journals",
    "typeScriptTag": "journals",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Journal Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/journals/{id}",
    "method": "getJournalById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journals",
    "typeScriptTag": "journals",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Journal _id",
        "example": "ID"
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
    "url": "/journals/{id}",
    "method": "updateOneJournal",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Journals",
    "typeScriptTag": "journals",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Journal Id",
        "example": "ID"
      },
      {
        "name": "entryType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sourceLedger",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customCurrencyRate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "reverseDate",
        "schema": "string",
        "description": "",
        "default": "First day of month after posted date."
      },
      {
        "name": "icDoc",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "Transactions",
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
    "url": "/journals/lines",
    "method": "searchLines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journals",
    "typeScriptTag": "journals",
    "description": "Search Lines",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "postedDate:ASC"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include transactions from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/journals/lines/count",
    "method": "getLinesCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Journals",
    "typeScriptTag": "journals",
    "description": "Lines Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/journals/{id}/post",
    "method": "postDraftJournal",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Journals",
    "typeScriptTag": "journals",
    "description": "Post",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Journal Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/ledger-accounts",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ledger Accounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:ASC"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Filter accounts by type (https://api-docs.softledger.com/, if not provided all types will be returned"
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
    "url": "/ledger-accounts",
    "method": "createNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ledger Accounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NUMBER"
      },
      {
        "name": "naturalBalance",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATURALBALANCE"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "reportGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subtype",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBTYPE"
      },
      {
        "name": "includeLocationChildren",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "canDelete",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "revalue_fx",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ICAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ICAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/ledger-accounts/count",
    "method": "countFilteredItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ledger Accounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Filter accounts by type (https://api-docs.softledger.com/, if not provided all types will be returned"
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
    "url": "/ledger-accounts/{id}",
    "method": "deleteAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Ledger Accounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Ledger Account Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/ledger-accounts/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ledger Accounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Ledger Account Id",
        "example": "ID"
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
    "url": "/ledger-accounts/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ledger Accounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Ledger Account Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "naturalBalance",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reportGroup",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeLocationChildren",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "revalue_fx",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ICAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ICAccount",
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
    "url": "/ledger-accounts/subtypes/{param}",
    "method": "deleteSubtype",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Ledger Accounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Delete Subtype",
    "parameters": [
      {
        "name": "param",
        "schema": "string",
        "required": true,
        "description": "subtype",
        "example": "PARAM"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/ledger-accounts/subtypes/{param}",
    "method": "getAllSubtypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ledger Accounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Get All Subtypes for type",
    "parameters": [
      {
        "name": "param",
        "schema": "string",
        "required": true,
        "description": "Ledger Account Type",
        "example": "PARAM"
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
    "url": "/ledger-accounts/subtypes",
    "method": "getAllSubtypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ledger Accounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Get All Subtypes",
    "parameters": [
      {
        "name": "mapgroups",
        "schema": "boolean",
        "description": "If provided, will return subtypes with group mappings as a collection;\n\nIf not provided, will return all subtypes as an array of strings;\n"
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
    "url": "/ledger-accounts/subtypes",
    "method": "upsertSubtypeReportGroupMappings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Ledger Accounts",
    "typeScriptTag": "ledgerAccounts",
    "description": "Upsert Subtypes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/locations/{id}/accounts",
    "method": "searchAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Search Accounts",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:ASC"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Location _id",
        "example": "ID"
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
    "url": "/locations",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "id:ASC"
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
    "url": "/locations",
    "method": "createLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "imageURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entityName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entityEmail",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entityPhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FXGLAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Parent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "FXGLAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/locations/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
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
    "url": "/locations/{id}",
    "method": "deleteOneLocation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Location Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/locations/{id}",
    "method": "getOneLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Location _id",
        "example": "ID"
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
    "url": "/locations/{id}",
    "method": "updateOneLocation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Location Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "imageURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "entityName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "entityEmail",
        "schema": "string",
        "description": ""
      },
      {
        "name": "entityPhone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "FXGLAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Parent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "FXGLAccount",
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
    "url": "/locations/{id}/descendants",
    "method": "getDescendants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Descendants",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Location Id",
        "example": "ID"
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
    "url": "/locations/me",
    "method": "getMyLocationTree",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Me",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/part-numbers",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Part Numbers",
    "typeScriptTag": "partNumbers",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "_id:ASC"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
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
    "url": "/part-numbers",
    "method": "createNewPartNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Part Numbers",
    "typeScriptTag": "partNumbers",
    "description": "Create",
    "parameters": [
      {
        "name": "VendorId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ItemId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "partNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/part-numbers/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Part Numbers",
    "typeScriptTag": "partNumbers",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Part Number Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/part-numbers/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Part Numbers",
    "typeScriptTag": "partNumbers",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Part Number Id",
        "example": "ID"
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
    "url": "/part-numbers/{id}",
    "method": "updateOnePartNumber",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Part Numbers",
    "typeScriptTag": "partNumbers",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Part Number Id",
        "example": "ID"
      },
      {
        "name": "partNumber",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "_id:ASC"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Filter by AP or AR payments\n\nIf not specified, all payment types will be returned\n"
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
    "url": "/payments",
    "method": "createNewPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Create",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalCheckId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalCheckBankId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "checkNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "paymentDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTDATE"
      },
      {
        "name": "postedDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "memo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "BillId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "VendorCreditId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CashReceiptId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "AddressId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "InvoiceId",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{id}/approve",
    "method": "approvePayment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Approve",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/payments/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Filter by AP or AR payments\n\nIf not specified, all payment types will be returned\n"
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
    "url": "/payments/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/payments/{id}",
    "method": "getPaymentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment Id",
        "example": "ID"
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
    "url": "/payments/{id}",
    "method": "updatePayment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment Id",
        "example": "ID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalCheckId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalCheckBankId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "checkNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "AddressId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "memo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
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
    "url": "/payments/{id}/void",
    "method": "voidPayment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Void",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postedDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/periods/{id}/close/{task}",
    "method": "closeTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Periods",
    "typeScriptTag": "periods",
    "description": "Close",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Period Id",
        "example": "ID"
      },
      {
        "name": "task",
        "schema": "string",
        "required": true,
        "description": "Task to close",
        "example": "TASK"
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
    "url": "/periods/{id}/open/{task}",
    "method": "openTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Periods",
    "typeScriptTag": "periods",
    "description": "Open",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Period Id",
        "example": "ID"
      },
      {
        "name": "task",
        "schema": "string",
        "required": true,
        "description": "Task to open",
        "example": "TASK"
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
    "url": "/periods",
    "method": "getAllPeriods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Periods",
    "typeScriptTag": "periods",
    "description": "Get All",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/preferences",
    "method": "getDescendingPreferences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Preferences",
    "typeScriptTag": "preferences",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
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
    "url": "/preferences",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Preferences",
    "typeScriptTag": "preferences",
    "description": "Create",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/preferences/{id}",
    "method": "deletePreference",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Preferences",
    "typeScriptTag": "preferences",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Preference Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/preferences/{id}",
    "method": "getPreferenceById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Preferences",
    "typeScriptTag": "preferences",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Preference Id",
        "example": "ID"
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
    "url": "/preferences/{id}",
    "method": "updatePreference",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Preferences",
    "typeScriptTag": "preferences",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Preference Id",
        "example": "ID"
      },
      {
        "name": "data",
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
    "url": "/products",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "id:ASC"
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
    "url": "/products",
    "method": "createNewProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
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
    "url": "/products/{id}",
    "method": "deleteProduct",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/products/{id}",
    "method": "getOneProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "ID"
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
    "url": "/products/{id}",
    "method": "updateProductWebhooks",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Product Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inactive",
        "schema": "boolean",
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
    "url": "/purchase-orders/{id}/stock-adjustments",
    "method": "getStockAdjustments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Stock Adjustments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PurchaseOrder._id",
        "example": "ID"
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
    "url": "/purchase-orders",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:ASC"
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
    "url": "/purchase-orders",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "issueDate",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "NOW"
      },
      {
        "name": "deliveryDate",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "NOW"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "TemplateId",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "Template with name 'Default' and format = 'pdf'"
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ICLocationId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ICLocation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Vendor",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "WarehouseId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Warehouse",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "InventoryReceivingAccountId",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "Ref: Settings.defaultInventoryAccrualId"
      },
      {
        "name": "InventoryReceivingAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ShippingAddressId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "BillingAddressId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "POLineItems",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/purchase-orders/lines",
    "method": "searchLinesFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Search Lines",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "idx:ASC"
      },
      {
        "name": "receivableOnly",
        "schema": "boolean",
        "description": "Set this to true to only return lines that can be received\n\nCriteria for receivable lines is as under:\n  - Line's 'quantity' is not equal to 'quantityReceived'\n  - Line's parent PO is not of status 'Created', 'Fulfilled' or 'Voided'\n\nSetting this to false will return all lines\n",
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
    "url": "/purchase-orders/{id}/lines",
    "method": "searchLines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Search Lines by Purchase Order",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PurchaseOrder._id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "idx:ASC"
      },
      {
        "name": "receivableOnly",
        "schema": "boolean",
        "description": "Set this to true to only return lines that can be received\n\nCriteria for receivable lines is as under:\n  - Line's 'quantity' is not equal to 'quantityReceived'\n  - Line's parent PO is not of status 'Created', 'Fulfilled' or 'Voided'\n\nSetting this to false will return all lines\n",
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
    "url": "/purchase-orders/count",
    "method": "countItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/purchase-orders/lines/count",
    "method": "countLines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Count Lines",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "receivableOnly",
        "schema": "boolean",
        "description": "Set this to true to only return lines that can be received\n\nCriteria for receivable lines is as under:\n  - Line's 'quantity' is not equal to 'quantityReceived'\n  - Line's parent PO is not of status 'Created', 'Fulfilled' or 'Voided'\n\nSetting this to false will return all lines\n",
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
    "url": "/purchase-orders/{id}/line",
    "method": "createLineItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Create Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Purchase Order._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idx",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUANTITY"
      },
      {
        "name": "taxAmount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCodeId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCode",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Item",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "SalesOrderId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SOLineItemId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenterId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Job",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ProductId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Product",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/purchase-orders/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PurchaseOrder id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/purchase-orders/{id}",
    "method": "getOrderById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Purchase Order._id",
        "example": "ID"
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
    "url": "/purchase-orders/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Purchase Order._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveryDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "TemplateId",
        "schema": "integer",
        "description": "",
        "default": "Template with name 'Default' and format = 'pdf'"
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ICLocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ICLocation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Vendor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "WarehouseId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Warehouse",
        "schema": "object",
        "description": ""
      },
      {
        "name": "InventoryReceivingAccountId",
        "schema": "integer",
        "description": "",
        "default": "Ref: Settings.defaultInventoryAccrualId"
      },
      {
        "name": "InventoryReceivingAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ShippingAddressId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "BillingAddressId",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/purchase-orders/line/{id}",
    "method": "deleteLine",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Delete Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "POLineItem id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/purchase-orders/line/{id}",
    "method": "updateLineItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Update Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "POLineItem._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idx",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUANTITY"
      },
      {
        "name": "taxAmount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCodeId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCode",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Item",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "SalesOrderId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SOLineItemId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenterId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Job",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ProductId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Product",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/purchase-orders/{id}/email",
    "method": "sendEmailToVendor",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Email",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PurchaseOrder._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/purchase-orders/{id}/issue",
    "method": "issueOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Issue",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PurchaseOrder._id",
        "example": "ID"
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
    "url": "/purchase-orders/{id}/pdf",
    "method": "getPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "PDF",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PurchaseOrder._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base64 Buffer of the PDF\n"
      }
    ]
  },
  {
    "url": "/purchase-orders/{id}/unissue",
    "method": "unissueOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Unissue",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "PurchaseOrder._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/purchase-orders/{id}/void",
    "method": "voidOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Purchase Orders",
    "typeScriptTag": "purchaseOrders",
    "description": "Void",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Purchase Order Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/recurring-jobs",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurring Jobs",
    "typeScriptTag": "recurringJobs",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "name:ASC"
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
    "url": "/recurring-jobs",
    "method": "createNewRecurringJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurring Jobs",
    "typeScriptTag": "recurringJobs",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "eventType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTTYPE"
      },
      {
        "name": "eventQueue",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTQUEUE"
      },
      {
        "name": "TemplateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "intervalType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVALTYPE"
      },
      {
        "name": "intervalAmount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "intervalDay",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/recurring-jobs/{id}",
    "method": "deleteOneJob",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Recurring Jobs",
    "typeScriptTag": "recurringJobs",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Recurring Job Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/recurring-jobs/{id}",
    "method": "updateOneJob",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Recurring Jobs",
    "typeScriptTag": "recurringJobs",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Recurring Job Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "intervalType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "intervalAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "intervalDay",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
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
    "url": "/roles",
    "method": "listAllRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "All",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/roles/{id}/permissions",
    "method": "getPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Role id",
        "example": "ID"
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
    "url": "/sales-orders/{id}/accept",
    "method": "acceptSalesOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Accept",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SalesOrder Id",
        "example": "ID"
      },
      {
        "name": "orderDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDERDATE"
      },
      {
        "name": "deliveryDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERYDATE"
      },
      {
        "name": "TemplateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/sales-orders/{id}/stock-adjustments",
    "method": "getStockAdjustments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Stock Adjustments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SalesOrder._id",
        "example": "ID"
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
    "url": "/sales-orders",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:ASC"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "A CSV string containing the statuses you'd like to filter for \njoined with commas (https://api-docs.softledger.com/. ex: 'quote,pending,order'. This \nquery param is optional. \n\n- If you pass this param in addition to a \"status\" filter both will be used. \n- If you pass nothing for this param and a \"status\" filter, the filter will be used. \n- If you pass no status filter and you pass this param, this param will be used.\n"
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
    "url": "/sales-orders",
    "method": "createNewSalesOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Create",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "order"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "quoteDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "quoteExpiration",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "orderDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deliveryDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ICLocationId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ICLocation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ShippingAddressId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "BillingAddressId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "TemplateId",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "Template with name 'Default' and format = 'pdf'"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "externalRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOLineItems",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/sales-orders/lines",
    "method": "listLinesFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Line Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "SalesOrder.number:ASC"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Use this to control whether to return fulfillable/unfulfillable lines\n\nSet this to 'fulfill' to return lines that can be fulfilled, criteria for fulfillable lines as under:\n  - Line's 'quantity' is not equal to 'quantityFulFilled'\n  - Line's parent SO is not in status 'Quote', 'Rejected', 'Pending', 'Fulfilled', 'Voided', or 'Complete'\n  - Line is an item line\n  - Line does not have a linked POLine\n\nSet this to 'unfulfill' to return lines that can be unfulfulleed, criteria as under:\n  - Line has some fulfillments i.e. 'quantityFulfilled' is greater than 0\n  - Line's parent SO is not in 'Complete' status\n  - Line is an item line\n\nNot setting this will return all lines\n"
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
    "url": "/sales-orders/lines/count",
    "method": "getLinesCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Lines Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Use this to control whether to count fulfillable/unfulfillable lines\n\nSet this to 'fulfill' to count lines that can be fulfilled, criteria for fulfillable lines as under:\n  - Line's 'quantity' is not equal to 'quantityFulFilled'\n  - Line's parent SO is not in status 'Quote', 'Rejected', 'Pending', 'Fulfilled', 'Voided', or 'Complete'\n  - Line is an item line\n  - Line does not have a linked POLine\n\nSet this to 'unfulfill' to count lines that can be unfulfulleed, criteria as under:\n  - Line has some fulfillments i.e. 'quantityFulfilled' is greater than 0\n  - Line's parent SO is not in 'Complete' status\n  - Line is an item line\n\nNot setting this will count all lines\n"
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
    "url": "/sales-orders/{id}/complete",
    "method": "completeOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Complete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SalesOrder Id",
        "example": "ID"
      },
      {
        "name": "completeDate",
        "schema": "string",
        "description": "",
        "default": "NOW"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No Content Success"
      }
    ]
  },
  {
    "url": "/sales-orders/count",
    "method": "countAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Count All",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/sales-orders/{id}/line",
    "method": "createLineItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Create Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SOLineItem Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idx",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUANTITY"
      },
      {
        "name": "taxAmount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCodeId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TaxCode",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Item",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenterId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CostCenter",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Job",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ProductId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Product",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom1",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom2",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3Id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Custom3",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/sales-orders/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Sales Order Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/sales-orders/{id}",
    "method": "getOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Sales Order._id",
        "example": "ID"
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
    "url": "/sales-orders/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SalesOrder Id",
        "example": "ID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quoteDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quoteExpiration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orderDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deliveryDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ICLocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ICLocation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "CustomerId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Customer",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ShippingAddressId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "BillingAddressId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "TemplateId",
        "schema": "integer",
        "description": "",
        "default": "Template with name 'Default' and format = 'pdf'"
      },
      {
        "name": "reference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "externalRef",
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
    "url": "/sales-orders/line/{id}",
    "method": "deleteLine",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Delete Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SOLineItem._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/sales-orders/line/{id}",
    "method": "updateLine",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Update Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SOLineItem._id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idx",
        "schema": "number",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "taxAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TaxCodeId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "TaxCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Item",
        "schema": "object",
        "description": ""
      },
      {
        "name": "CostCenterId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "CostCenter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "JobId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ProductId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Product",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Custom1Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Custom1",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Custom2Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Custom2",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Custom3Id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Custom3",
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
    "url": "/sales-orders/{id}/email",
    "method": "emailToCustomer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Email",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SalesOrder._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/sales-orders/line/{id}/fulfill",
    "method": "fulfillLineItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Fulfill Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SOLineItem Id",
        "example": "ID"
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUANTITY"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "NOW"
      },
      {
        "name": "WarehouseId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "dontRunCostBasis",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/sales-orders/{id}/issue",
    "method": "issueSalesOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Issue",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Sales Order._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/sales-orders/{id}/lines",
    "method": "searchOrderLines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Order Line Search",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SalesOrder Id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "SalesOrder.number:ASC"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Use this to control whether to return fulfillable/unfulfillable lines\n\nSet this to 'fulfill' to return lines that can be fulfilled, criteria for fulfillable lines as under:\n  - Line's 'quantity' is not equal to 'quantityFulFilled'\n  - Line's parent SO is not in status 'Quote', 'Rejected', 'Pending', 'Fulfilled', 'Voided', or 'Complete'\n  - Line is an item line\n  - Line does not have a linked POLine\n\nSet this to 'unfulfill' to return lines that can be unfulfulleed, criteria as under:\n  - Line has some fulfillments i.e. 'quantityFulfilled' is greater than 0\n  - Line's parent SO is not in 'Complete' status\n  - Line is an item line\n\nNot setting this will return all lines\n"
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
    "url": "/sales-orders/{id}/lines/count",
    "method": "getLinesCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Order Lines Count",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SalesOrder Id",
        "example": "ID"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Use this to control whether to count fulfillable/unfulfillable lines\n\nSet this to 'fulfill' to count lines that can be fulfilled, criteria for fulfillable lines as under:\n  - Line's 'quantity' is not equal to 'quantityFulFilled'\n  - Line's parent SO is not in status 'Quote', 'Rejected', 'Pending', 'Fulfilled', 'Voided', or 'Complete'\n  - Line is an item line\n  - Line does not have a linked POLine\n\nSet this to 'unfulfill' to count lines that can be unfulfulleed, criteria as under:\n  - Line has some fulfillments i.e. 'quantityFulfilled' is greater than 0\n  - Line's parent SO is not in 'Complete' status\n  - Line is an item line\n\nNot setting this will count all lines\n"
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
    "url": "/sales-orders/{id}/pdf",
    "method": "getPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "PDF",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SalesOrder._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base64 Buffer of the PDF\n"
      }
    ]
  },
  {
    "url": "/sales-orders/{id}/reject",
    "method": "rejectSalesOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Reject",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SalesOrder Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/sales-orders/{id}/uncomplete",
    "method": "uncompleteOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Uncomplete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "SalesOrder Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No Content Success"
      }
    ]
  },
  {
    "url": "/sales-orders/line/{id}/unfulfill",
    "method": "unfulfillLineItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Unfulfill Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Sales Order Line _id",
        "example": "ID"
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUANTITY"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "NOW"
      },
      {
        "name": "WarehouseId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Warehouse",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "runCostBasis",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ReturnAccountId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "ReturnAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/sales-orders/{id}/void",
    "method": "voidSalesOrder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sales Orders",
    "typeScriptTag": "salesOrders",
    "description": "Void",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Sales Order Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "GET",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings",
    "method": "updateWebhooks",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update",
    "parameters": [
      {
        "name": "ccInvoice",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "costingMethod",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailOnInvoiceIssued",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emailOnSalesQuoteIssued",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emailOnPurchaseOrderIssued",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "companyEIN",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateFormat",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useLocationOnDocuments",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "displayItem",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postCRJournal",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "confirmDelete",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "postVCJournal",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showProducts",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "currencyAsCodeUI",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "currencyAsCodePDF",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "intercompanyEliminations",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hideLocationFromFinancials",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "intercompanyEliminations2",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "defaultLineItemType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showCostCenters",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "showJobs",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "autoApproveARPayments",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "autoApproveAPPayments",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emailOnARCreditIssued",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hideTaxInvoice",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hideTaxBill",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hideTaxPO",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hideTaxSO",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "pdfDateFormat",
        "schema": "string",
        "description": "",
        "default": "YYYY-MM-DD"
      },
      {
        "name": "wipSalesOrders",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "defaultUpdateItemPriceReceive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "splitPartialReceives",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "draftBillPayments",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom1_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom1_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom1_invoice",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom1_bill",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom1_po",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom1_so",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom2_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom2_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom2_invoice",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom2_bill",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom2_po",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom2_so",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom3_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom3_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom3_invoice",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom3_bill",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom3_po",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "custom3_so",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "invoiceAmountPrecision",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billAmountPrecision",
        "schema": "string",
        "description": ""
      },
      {
        "name": "poAmountPrecision",
        "schema": "string",
        "description": ""
      },
      {
        "name": "soAmountPrecision",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cryptoPricePrecision",
        "schema": "string",
        "description": ""
      },
      {
        "name": "InvoiceEmailTemplateId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "POEmailTemplateId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "SOEmailTemplateId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "ARCreditEmailTemplateId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultWIPId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultSalesTaxId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultOtherComprehensiveIncomeId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultAccumulatedOtherComprehensiveIncomeId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultRetainedEarningsId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultBillPaymentId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultAPICPayableId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultAPICReceivableId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultARICPayableId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultARICReceivableId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultUnappliedCreditId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultUnappliedCashId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultAccountsReceivableId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultAccountsPayableId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultCashId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultInventoryAccrualId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultItemInventoryAccrualId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultItemInvoiceAccountId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultItemInventoryAssetId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultItemCOGSId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultRevId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "defaultABDId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "inventoryCostingMethod",
        "schema": "string",
        "description": "",
        "default": "fifo"
      },
      {
        "name": "cryptoHomeCurrency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "immaterialCostBasisErrorLedgerAccountId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "immaterialCostBasisErrorReference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "immaterialCostBasisErrorThreshold",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/settings/sequence",
    "method": "getSequenceNumbers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "GET Sequence",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings/sequence",
    "method": "updateSequenceNumbers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update Sequence",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "number",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/shipment-receipts",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipment Receipts",
    "typeScriptTag": "shipmentReceipts",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "_id:ASC"
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
    "url": "/shipment-receipts",
    "method": "createNewShipmentReceipt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Shipment Receipts",
    "typeScriptTag": "shipmentReceipts",
    "description": "Create",
    "parameters": [
      {
        "name": "dateReceived",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATERECEIVED"
      },
      {
        "name": "postedDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dontRunCostBasis",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ShipmentReceiptLines",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/shipment-receipts/lines",
    "method": "getLinesFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipment Receipts",
    "typeScriptTag": "shipmentReceipts",
    "description": "Line Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "_id:ASC"
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
    "url": "/shipment-receipts/lines/count",
    "method": "getLinesCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipment Receipts",
    "typeScriptTag": "shipmentReceipts",
    "description": "Lines Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
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
    "url": "/shipment-receipts/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipment Receipts",
    "typeScriptTag": "shipmentReceipts",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
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
    "url": "/shipment-receipts/{id}",
    "method": "getOneReceipt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shipment Receipts",
    "typeScriptTag": "shipmentReceipts",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ShipmentReceipt._id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/shipment-receipts/line/{id}/void",
    "method": "voidLine",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shipment Receipts",
    "typeScriptTag": "shipmentReceipts",
    "description": "Void Line",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ShipmentReceiptLine._id",
        "example": "ID"
      },
      {
        "name": "runCostBasis",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/statements",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/statements",
    "method": "createNewStatement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "balance",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BALANCE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "LedgerAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/statements/{id}/close",
    "method": "closeStatement",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Close",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Statement Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/statements/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Statement Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/statements/{id}",
    "method": "getOneStatement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Statement Id",
        "example": "ID"
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
    "url": "/statements/{id}/open",
    "method": "reopenStatement",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Open",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Statement Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/statements/transactions/reconcile",
    "method": "reconcileTransactions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Reconcile",
    "parameters": [
      {
        "name": "TransactionIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/statements/transactions/unreconcile",
    "method": "unreconcileTransactions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "UnReconcile",
    "parameters": [
      {
        "name": "TransactionIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/stock-adjustments",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stock Adjustments",
    "typeScriptTag": "stockAdjustments",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "transactionDate:DESC"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include Stock Adjustments that have a Warehouse with this \nLocation and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/stock-adjustments",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stock Adjustments",
    "typeScriptTag": "stockAdjustments",
    "description": "Adjust Stock",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "dontRunCostBasis",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "transactionDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTIONDATE"
      },
      {
        "name": "postedDate",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "transactionDate"
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUANTITY"
      },
      {
        "name": "price",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "WarehouseId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "AdjustmentLedgerAccountId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "POLineItemId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ShipmentReceiptLineId",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/stock-adjustments/{id}/cost-layers",
    "method": "getCostLayers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stock Adjustments",
    "typeScriptTag": "stockAdjustments",
    "description": "Cost Layers",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "StockAdjustment._id",
        "example": "ID"
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
    "url": "/stock-adjustments/count",
    "method": "countItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stock Adjustments",
    "typeScriptTag": "stockAdjustments",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/stock-adjustments/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stock Adjustments",
    "typeScriptTag": "stockAdjustments",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Statement Id",
        "example": "ID"
      },
      {
        "name": "runCostBasis",
        "schema": "boolean",
        "required": false,
        "description": "If true, will run cost basis calculation after delete succeeds.\n",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/stock-adjustments/{id}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stock Adjustments",
    "typeScriptTag": "stockAdjustments",
    "description": "Update Stock Adjustment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Stock Adjustment Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dontRunCostBasis",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "transactionDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postedDate",
        "schema": "string",
        "description": "",
        "default": "transactionDate"
      },
      {
        "name": "quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "price",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "WarehouseId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "AdjustmentLedgerAccountId",
        "schema": "integer",
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
    "url": "/stock-adjustments/summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stock Adjustments",
    "typeScriptTag": "stockAdjustments",
    "description": "Stock Summary",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "Item.name:DESC"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include Stock Adjustments that have a Warehouse with this \nLocation and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/stock-counts",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stock Counts",
    "typeScriptTag": "stockCounts",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "submitDate:DESC"
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
    "url": "/stock-counts/{id}",
    "method": "deleteDraft",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stock Counts",
    "typeScriptTag": "stockCounts",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Stock Count Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/stock-counts/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stock Counts",
    "typeScriptTag": "stockCounts",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Stock Count Id",
        "example": "ID"
      },
      {
        "name": "quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unitCost",
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
    "url": "/stock-counts/{id}/submit",
    "method": "submitForApproval",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stock Counts",
    "typeScriptTag": "stockCounts",
    "description": "Submit",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "StockCount _id",
        "example": "ID"
      },
      {
        "name": "LedgerAccountId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "submitDate",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "NOW"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No content Success"
      }
    ]
  },
  {
    "url": "/system-jobs",
    "method": "listDescendingByDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Jobs",
    "typeScriptTag": "systemJobs",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "queueName",
        "schema": "string",
        "description": "JSON Key:Value object to filter queueNames on",
        "example": "{\"in\":[\"ledgerAccounts\",\"customers\",\"vendors\"]}.\nor simple a string 'vendorPrice'\n"
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
    "url": "/system-jobs",
    "method": "createNewJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "System Jobs",
    "typeScriptTag": "systemJobs",
    "description": "Create",
    "parameters": [
      {
        "name": "queueName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUEUENAME"
      },
      {
        "name": "name",
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
        "name": "notBulk",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/system-jobs/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Jobs",
    "typeScriptTag": "systemJobs",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "queueName",
        "schema": "string",
        "description": "JSON Key:Value object to filter queueNames on",
        "example": "{\"in\":[\"ledgerAccounts\",\"customers\",\"vendors\"]}.\nor simple a string 'vendorPrice'\n"
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
    "url": "/system-jobs/{id}",
    "method": "getJobById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "System Jobs",
    "typeScriptTag": "systemJobs",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "System Job Id",
        "example": "ID"
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
    "url": "/tax-codes",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax Codes",
    "typeScriptTag": "taxCodes",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "code:ASC"
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
    "url": "/tax-codes",
    "method": "createNewTaxCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tax Codes",
    "typeScriptTag": "taxCodes",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "rate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RATE"
      },
      {
        "name": "LedgerAccountId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/tax-codes/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tax Codes",
    "typeScriptTag": "taxCodes",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Tax Code Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/tax-codes/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tax Codes",
    "typeScriptTag": "taxCodes",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Tax Code Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "LedgerAccount",
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
    "url": "/templates/{id}",
    "method": "deleteTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Template Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/templates/{id}",
    "method": "getOneTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Template Id",
        "example": "ID"
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
    "url": "/templates/{id}",
    "method": "updateOneTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Template Id",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
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
    "url": "/templates",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "name:ASC"
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
    "url": "/templates",
    "method": "createNewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Create",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "pdf"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/transactions",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "postedDate:ASC"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "******* NOTE **********\nWe recommend using the v2/journals/lines route instead. \nThis route only exists for legacy reporting support.\n***********************\n\nCannot use a custom currency\n\nIf set, will return debit/credit values in this currency\n\nIf not set, returns debit/credit values in thier posted currency.\n"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include transactions from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/transactions/running-sum",
    "method": "getRunningSum",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Running Sum",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "\"Ref: Currency.code\", cannot use a custom currency\n\nReturn debit/credit values in this currency\n",
        "example": "CURRENCY"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Will include transactions from this postedDate and forward.",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "Will include transactions from this postedDate and back.",
        "example": "ENDDATE"
      },
      {
        "name": "locationId",
        "schema": "number",
        "required": true,
        "description": "Will include transactions from this Location and its children\n\nFilters on LocationId can further limit data.\n",
        "example": 0
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
    "url": "/transactions/sum",
    "method": "calculateSum",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Sum",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "\"Ref: Currency.code\", cannot use a custom currency\n\nIf set, will return debit/credit values in this currency\n\nIf not set, returns debit/credit values in thier posted currency.\n",
        "example": "CURRENCY"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Sum will include transactions from this postedDate and forward.",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "Sum will include transactions from this postedDate and back.",
        "example": "ENDDATE"
      },
      {
        "name": "locationId",
        "schema": "number",
        "required": true,
        "description": "Sum will include transactions from this Location and its children\n\nFilters on LocationId can further limit data.\n",
        "example": 0
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
    "url": "/transfers",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "date:DESC"
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
    "url": "/transfers",
    "method": "createNewTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "Transfer Stock",
    "parameters": [
      {
        "name": "dontRunCostBasis",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "quantity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUANTITY"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "complete"
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ToWarehouseId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "FromWarehouseId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/transfers/{id}/complete",
    "method": "completeTransfer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "Complete Transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Transfer Id",
        "example": "ID"
      },
      {
        "name": "dontRunCostBasis",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Complete Transfer"
      }
    ]
  },
  {
    "url": "/transfers/count",
    "method": "countSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
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
    "url": "/transfers/{id}",
    "method": "deleteTransfer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Transfer Id",
        "example": "ID"
      },
      {
        "name": "dontRunCostBasis",
        "schema": "boolean",
        "required": false,
        "description": "If true, cost basis calculation will not be run on success",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/transfers/{id}",
    "method": "updateTransfer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "Update Transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Transfer Id",
        "example": "ID"
      },
      {
        "name": "dontRunCostBasis",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ToWarehouseId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "FromWarehouseId",
        "schema": "integer",
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
    "url": "/users",
    "method": "getAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "All Users",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "number",
        "required": false,
        "description": "offset to page forwards from"
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
    "url": "/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create",
    "parameters": [
      {
        "name": "fname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FNAME"
      },
      {
        "name": "lname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONENUMBER"
      },
      {
        "name": "LocationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOCATIONID"
      },
      {
        "name": "use_mfa",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User Id",
        "example": "ID"
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
    "url": "/users/{id}",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User Id",
        "example": "ID"
      },
      {
        "name": "fname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use_mfa",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "number",
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
    "url": "/users/{id}/roles",
    "method": "getRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "User Roles",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User Id",
        "example": "ID"
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
    "url": "/users/{id}/roles",
    "method": "updateRoles",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update User Roles",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "User Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/users/me",
    "method": "updateSelf",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update Self",
    "parameters": [
      {
        "name": "fname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profilePicURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "restoreId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hideZeroCoins",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "stickyNav",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "homePage",
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
    "url": "/vendor-credits",
    "method": "search",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendor Credits",
    "typeScriptTag": "vendorCredits",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "number:DESC"
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
    "url": "/vendor-credits",
    "method": "createNewCredit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vendor Credits",
    "typeScriptTag": "vendorCredits",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NUMBER"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "receiveDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIVEDATE"
      },
      {
        "name": "postingDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSTINGDATE"
      },
      {
        "name": "VendorId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "Vendor",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "LedgerAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "UnappliedCreditAccountId",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "UnappliedCreditAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/vendor-credits/count",
    "method": "countGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendor Credits",
    "typeScriptTag": "vendorCredits",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/vendor-credits/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Vendor Credits",
    "typeScriptTag": "vendorCredits",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Credit Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/vendor-credits/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendor Credits",
    "typeScriptTag": "vendorCredits",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Credit Id",
        "example": "ID"
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
    "url": "/vendor-credits/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Vendor Credits",
    "typeScriptTag": "vendorCredits",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Credit Id",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "receiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postingDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "VendorId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "Vendor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LedgerAccountId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "LedgerAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "UnappliedCreditAccountId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "UnappliedCreditAccount",
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
    "url": "/vendor-credits/{id}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendor Credits",
    "typeScriptTag": "vendorCredits",
    "description": "Payments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Credit._id",
        "example": "ID"
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
    "url": "/vendor-credits/{id}/void",
    "method": "voidOneCredit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Vendor Credits",
    "typeScriptTag": "vendorCredits",
    "description": "Void",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Credit Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/vendor-prices",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendor Prices",
    "typeScriptTag": "vendorPrices",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "_id:ASC"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
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
    "url": "/vendor-prices",
    "method": "createNewPrice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vendor Prices",
    "typeScriptTag": "vendorPrices",
    "description": "Create",
    "parameters": [
      {
        "name": "VendorId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "price",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "minValue",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "maxValue",
        "schema": "number",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/vendor-prices/price",
    "method": "showItemPrice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendor Prices",
    "typeScriptTag": "vendorPrices",
    "description": "Price",
    "parameters": [
      {
        "name": "quantity",
        "schema": "number",
        "required": true,
        "description": "quantity of items",
        "example": 0
      },
      {
        "name": "vendorId",
        "schema": "number",
        "required": true,
        "description": "VendorId of Vendor Price Pair",
        "example": 0
      },
      {
        "name": "itemId",
        "schema": "number",
        "required": true,
        "description": "ItemId of Vendor Price Pair",
        "example": 0
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
    "url": "/vendor-prices/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Vendor Prices",
    "typeScriptTag": "vendorPrices",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Price Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/vendor-prices/{id}",
    "method": "updateOnePrice",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Vendor Prices",
    "typeScriptTag": "vendorPrices",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Price Id",
        "example": "ID"
      },
      {
        "name": "price",
        "schema": "number",
        "description": ""
      },
      {
        "name": "minValue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maxValue",
        "schema": "number",
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
    "url": "/vendors",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "id:ASC"
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
    "url": "/vendors",
    "method": "createNewVendor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "Create",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "nameOnCheck",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accNumber",
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
        "name": "terms",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EIN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultDaysDue",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "is1099",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "ExpenseAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ExpenseAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "Contacts",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/vendors/{id}/bills",
    "method": "getBills",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "Bills",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor._id",
        "example": "ID"
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
    "url": "/vendors/count",
    "method": "countItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
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
    "url": "/vendors/{id}/bills/count",
    "method": "getBillCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "Count Bills",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Id",
        "example": "ID"
      },
      {
        "name": "credit",
        "schema": "boolean",
        "description": "If true, only returns AP Credits i.e. bills with a negative amount.\n\nIf false or not specified, only returns bills with a positive amount.\n",
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
    "url": "/vendors/{id}",
    "method": "deleteVendor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/vendors/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Id",
        "example": "ID"
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
    "url": "/vendors/{id}",
    "method": "updateOne",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor Id",
        "example": "ID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nameOnCheck",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "terms",
        "schema": "string",
        "description": ""
      },
      {
        "name": "EIN",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultDaysDue",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "is1099",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "customFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "ExpenseAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ExpenseAccount",
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
    "url": "/vendors/{id}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "Payments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vendor._id",
        "example": "ID"
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
    "url": "/wallets",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Get All Wallets",
    "parameters": [
      {
        "name": "locationId",
        "schema": "string",
        "description": "Filters for Wallets (https://api-docs.softledger.com/ in the specified location. Defaults to Global Location when not set."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "name:ASC"
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
    "url": "/wallets",
    "method": "createNewWallet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Create A Wallet",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "exchange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": "Global Location"
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "DepositAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DepositAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "WithdrawalAccountId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "WithdrawalAccount",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/wallets/count",
    "method": "count",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "Filters for Wallets (https://api-docs.softledger.com/ in the specified location. Defaults to Global Location when not set."
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
    "url": "/wallets/{id}",
    "method": "deleteOneWallet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Delete Wallet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id value",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Wallet Deleted"
      }
    ]
  },
  {
    "url": "/wallets/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Get One Wallet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id value",
        "example": "ID"
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
    "url": "/wallets/{id}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Update Wallet",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id value",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "exchange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "DepositAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "DepositAccount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "WithdrawalAccountId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "WithdrawalAccount",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/wallets/{id}/coins",
    "method": "getCoinsSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Wallets",
    "typeScriptTag": "wallets",
    "description": "Coin Summary",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Wallet.Id",
        "example": "ID"
      },
      {
        "name": "showHidden",
        "schema": "string",
        "description": "exclude zero balance coins"
      },
      {
        "name": "date",
        "schema": "string",
        "description": "date to filter by. defaults to \"now\" ISO DateTime"
      },
      {
        "name": "hideZero",
        "schema": "string",
        "description": "exclude zero balance coins"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
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
    "url": "/warehouses",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Warehouses",
    "typeScriptTag": "warehouses",
    "description": "Get All Warehouses",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "name:ASC"
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
    "url": "/warehouses",
    "method": "createNewWarehouse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Warehouses",
    "typeScriptTag": "warehouses",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ParentId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "Parent",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/warehouses/count",
    "method": "count",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Warehouses",
    "typeScriptTag": "warehouses",
    "description": "Count",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Results will return `active` or `inactive` based on the objects `inactive` property. If not set all results will be returned."
      },
      {
        "name": "locationId",
        "schema": "number",
        "description": "Will include items from this Location and its children\n\nFilters on LocationId can further limit data.\n"
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
    "url": "/warehouses/{id}",
    "method": "deleteWarehouse",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Warehouses",
    "typeScriptTag": "warehouses",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Warehouse Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/warehouses/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Warehouses",
    "typeScriptTag": "warehouses",
    "description": "One",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Warehouse Id",
        "example": "ID"
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
    "url": "/warehouses/{id}",
    "method": "updateWarehouseById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Warehouses",
    "typeScriptTag": "warehouses",
    "description": "Update Warehouse",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id value",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "AddressId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "LocationId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ParentId",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Parent",
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
    "url": "/warehouses/{id}/stock/summary",
    "method": "getStockSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Warehouses",
    "typeScriptTag": "warehouses",
    "description": "Warehouse Stock",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of Warehouse",
        "example": "ID"
      },
      {
        "name": "childWh",
        "schema": "boolean",
        "description": "Determine if the summary balances include stock from child warehouses"
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
    "url": "/warehouse-items",
    "method": "searchFilterableSortable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Warehouse Items",
    "typeScriptTag": "warehouseItems",
    "description": "Search",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "JSON Key:Value object to filter results on"
      },
      {
        "name": "filterType",
        "schema": "string",
        "description": "Results will match \"all\" filters or just \"any\" of the passed filters",
        "default": "all"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Order to return results in. ex \"date:desc\"",
        "default": "_id:ASC"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
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
    "url": "/warehouse-items",
    "method": "createNewWarehouseItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Warehouse Items",
    "typeScriptTag": "warehouseItems",
    "description": "Create",
    "parameters": [
      {
        "name": "WarehouseId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ItemId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "minValue",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "maxValue",
        "schema": "number",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/warehouse-items/{id}",
    "method": "deleteOneItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Warehouse Items",
    "typeScriptTag": "warehouseItems",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Warehouse Item Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/warehouse-items/{id}",
    "method": "updateOneItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Warehouse Items",
    "typeScriptTag": "warehouseItems",
    "description": "Update",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Warehouse Item Id",
        "example": "ID"
      },
      {
        "name": "price",
        "schema": "number",
        "description": ""
      },
      {
        "name": "minValue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maxValue",
        "schema": "number",
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
    "url": "/webhooks",
    "method": "listAscendingByUri",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Search",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Cursor key to page forwards from. Must be populated from the result of a previous query call.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of records to return.",
        "default": 25
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
    "url": "/webhooks",
    "method": "createNewWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create",
    "parameters": [
      {
        "name": "uri",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URI"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/Webhooks/{id}",
    "method": "deleteOne",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Webhook Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  },
  {
    "url": "/years",
    "method": "getAllYears",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Years",
    "typeScriptTag": "years",
    "description": "All",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/years",
    "method": "createFirstDayYear",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Years",
    "typeScriptTag": "years",
    "description": "Create",
    "parameters": [
      {
        "name": "year",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MONTH"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/years/{id}/close",
    "method": "closeYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Years",
    "typeScriptTag": "years",
    "description": "Close",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Year Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted \nYear closing process begun\n"
      }
    ]
  },
  {
    "url": "/years/{id}/open",
    "method": "openYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Years",
    "typeScriptTag": "years",
    "description": "Open",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Year Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Opened Year"
      }
    ]
  },
  {
    "url": "/years/{id}",
    "method": "deleteYear",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Years",
    "typeScriptTag": "years",
    "description": "Delete",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Year Id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content success"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="SoftLedger Accounting API v2"
      apiBaseUrl="https://api.softledger.com/v2"
      apiVersion="1.0.0"
      endpoints={252}
      sdkMethods={373}
      schemas={356}
      parameters={1876}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/softledger/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/softledger/openapi.yaml"
      developerDocumentation="api-docs.softledger.com/"
    />
  );
}
  