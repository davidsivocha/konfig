import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function Crowd4CashTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="crowd-4-cash-typescript-sdk"
      metaDescription={`Swiss FinTech for private persons and SME. Crowd Solutions is the provider of Crowd4Cash.ch the innovative Crowdlending platform. 

Crowd4Cash brings investors and borrower together. For better returns for the investors and lower interest rates for borrower. 100% online, easy and simply fair!`}
      company="Crowd4Cash"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowd-4-cash/logo.png"
      companyKebabCase="crowd-4-cash"
      clientNameCamelCase="crowd4Cash"
      homepage="crowd4cash.ch/"
      lastUpdated={new Date("2024-03-18T21:28:34.847Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowd-4-cash/favicon.png"
      contactUrl="https://crowd4cash.ch"
      contactEmail="info@crowd4cash.ch"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowd-4-cash/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["finance","payments","fintech","crowdfunding"]}
      methods={[
  {
    "url": "/Authenticate",
    "method": "getToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Authenticate yourself and get an access token",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Loan",
    "method": "submitLoanApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Apply for a regular loan - 100% online application",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "401",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/IntermediaryLoan",
    "method": "submitPartnerLoanApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Apply for a loan on behalf of your partners e.g. garages/shops/stores",
    "parameters": [
      {
        "name": "partnerId",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12225
      },
      {
        "name": "purchaseItem",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Car"
      },
      {
        "name": "itemStatus",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Rented"
      },
      {
        "name": "itemName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "BMW 318D e90"
      },
      {
        "name": "itemType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Saloon"
      },
      {
        "name": "itemBrand",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "BMW"
      },
      {
        "name": "itemModel",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "318D"
      },
      {
        "name": "itemColor",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Black"
      },
      {
        "name": "itemMarketValue",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 10000
      },
      {
        "name": "manufactureDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "13.05.2020"
      },
      {
        "name": "firstRegistration",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "15.01.2021"
      },
      {
        "name": "mileage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "24000 km"
      },
      {
        "name": "itemCertificate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1AA123"
      },
      {
        "name": "serialNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WBAVB12345KS12345"
      },
      {
        "name": "identificationNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "630.830.709"
      },
      {
        "name": "rentalAmount",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 420
      },
      {
        "name": "handoverDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "23.01.2023"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "401",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/IntermediaryLoan",
    "method": "setDefinitiveHandoverDate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Set the definitive Handover Date (a date when the item is handed over to the customer)",
    "parameters": [
      {
        "name": "loanId",
        "schema": "integer",
        "description": "",
        "example": 4989
      },
      {
        "name": "handoverDate",
        "schema": "string",
        "description": "",
        "example": "25.01.2023"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "401",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/RentalLoan",
    "method": "submitRentalLoanApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Apply for a rental loan",
    "parameters": [
      {
        "name": "apiRequester",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Otto Schneider"
      },
      {
        "name": "renteeGender",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "F"
      },
      {
        "name": "renteeFirstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Emma"
      },
      {
        "name": "renteeLastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Müller"
      },
      {
        "name": "renteeBirthdate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "23.09.1972"
      },
      {
        "name": "renteeEmail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username@domainname.ch"
      },
      {
        "name": "renteeMobilePhoneNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "91100201"
      },
      {
        "name": "renteeStreetAddress",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Täfernstrasse"
      },
      {
        "name": "renteeHouseNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "4"
      },
      {
        "name": "renteeZipCode",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5405"
      },
      {
        "name": "renteeCity",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Dättwil"
      },
      {
        "name": "purchaseItem",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Electric Scooter"
      },
      {
        "name": "itemStatus",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Rented"
      },
      {
        "name": "itemName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Vespino Go, 500W"
      },
      {
        "name": "itemType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Electric Scooter"
      },
      {
        "name": "itemBrand",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Piaggio"
      },
      {
        "name": "itemModel",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Vespino Go"
      },
      {
        "name": "itemColor",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Green"
      },
      {
        "name": "itemMarketValue",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 10000
      },
      {
        "name": "serialNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "WBAVB12345KS12345"
      },
      {
        "name": "identificationNumber",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "630.830.709"
      },
      {
        "name": "rentalAmount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 500
      },
      {
        "name": "rentDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "23.01.2023"
      },
      {
        "name": "idFrontPhoto",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "/9j/4AAQSkZJRgABAQEASABIAAD/..."
      },
      {
        "name": "idFrontExtension",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jpg"
      },
      {
        "name": "idBackPhoto",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "/9j/4AAQSkZJRgABAQEASABIAAD/..."
      },
      {
        "name": "idBackExtension",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jpg"
      },
      {
        "name": "selfiePhoto",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "/9j/4AAQSkZJRgABAQEASABIAAD/..."
      },
      {
        "name": "selfieExtension",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "jpg"
      },
      {
        "name": "contractFile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JVBERi0xLjUKJeLjz9MKMyAwIG9..."
      },
      {
        "name": "contractFileExtension",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "pdf"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "401",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Opportunities",
    "method": "getAvailableInvestments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Get available investment opportunities",
    "parameters": [
      {
        "name": "rating",
        "schema": "string",
        "description": "Evaluation of the credit risk based on a borrower's credit history, quality of the collateral, and the likelihood of repayment e.g. AA"
      },
      {
        "name": "loanAmount",
        "schema": "number",
        "description": "Loan amount e.g. 25000"
      },
      {
        "name": "loanType",
        "schema": "string",
        "description": "Type of the loan e.g. Private, SME"
      },
      {
        "name": "availableAmount",
        "schema": "number",
        "description": "Available amount to be invested at the moment of our API consuming e.g. 2000"
      },
      {
        "name": "interestRate",
        "schema": "number",
        "description": "Interest rate of the loan in % e.g. 5.6"
      },
      {
        "name": "duration",
        "schema": "integer",
        "description": "Duration in months e.g. 24"
      },
      {
        "name": "insurance",
        "schema": "string",
        "description": "Is loan issured? - Yes, No"
      },
      {
        "name": "collateral",
        "schema": "string",
        "description": "Is loan collaterialized? - Yes, No"
      },
      {
        "name": "borrowerAge",
        "schema": "integer",
        "description": "Age of the borrower e.g. 42"
      },
      {
        "name": "borrowerNationality",
        "schema": "string",
        "description": "Nationality of the borrower, e.g Switzerland, Liechtenstein ..."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Investment opportunity"
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "401",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "404",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Bid",
    "method": "placeBid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bidding",
    "typeScriptTag": "bidding",
    "description": "Place a bid on certain loan",
    "parameters": [
      {
        "name": "loanId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Bids",
    "method": "submitBids",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bidding",
    "typeScriptTag": "bidding",
    "description": "Place bids on behalf of your connected investor(s)",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Contracts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Get all your contracts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Your loan agreement"
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "401",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "404",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Contracts/{loanId}",
    "method": "getSpecific",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Get specific contract",
    "parameters": [
      {
        "name": "loanId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Your loan agreement"
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "401",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "404",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Contracts/{partnerId}/{loanId}",
    "method": "getSpecificIntermediaryLoanContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Get specific intermediary loan contract",
    "parameters": [
      {
        "name": "partnerId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "loanId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Your loan agreement"
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "401",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "404",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Contracts/RentalLoan/{loanId}",
    "method": "getLoanContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Get specific rental loan contract",
    "parameters": [
      {
        "name": "loanId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Your loan agreement"
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "401",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "404",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Portfolio",
    "method": "getInvestments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio",
    "typeScriptTag": "portfolio",
    "description": "Get your investment portfolio",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to",
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
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/CustomPortfolio",
    "method": "getCustomizedPortfolio",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolio",
    "typeScriptTag": "portfolio",
    "description": "Get your customized investment portfolio",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to",
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
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Connector",
    "method": "getConnectorInvestments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get your connector account summary and investments of the connected investors",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Report of investments of connected investors related to a connector"
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Intermediary",
    "method": "getIntermediaryData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get your intermediary account summary and your partner loans data",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Rental",
    "method": "rentalAccountSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get your rental account summary and your loans data",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  },
  {
    "url": "/Loans",
    "method": "getLoanData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Loans",
    "typeScriptTag": "loans",
    "description": "Get a complete C4C loan data dataset for your credit analyses",
    "parameters": [
      {
        "name": "pageNumber",
        "schema": "integer",
        "required": true,
        "description": "Page number you want to access",
        "example": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": true,
        "description": "Number of items per page. Max is 20",
        "example": 0
      },
      {
        "name": "loanstatus",
        "schema": "string",
        "required": true,
        "description": "Status values that need to be considered for filter",
        "example": "LOANSTATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Error message in response to a client's request made to the API"
      },
      {
        "statusCode": "401",
        "description": "Error message in response to a client's request made to the API"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="C4C REST API"
      apiBaseUrl="https://api2.crowd4cash.ch/"
      apiVersion="2.0.0"
      endpoints={17}
      sdkMethods={18}
      schemas={59}
      parameters={75}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowd-4-cash/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crowd-4-cash/openapi.yaml"
      developerDocumentation="api2.crowd4cash.ch/index.html"
    />
  );
}
  