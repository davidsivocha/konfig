# typescript-self-referencing-infinite-loop-array<a id="typescript-self-referencing-infinite-loop-array"></a>

A simple API based for testing typescript-self-referencing-infinite-loop-array.

[![npm](https://img.shields.io/badge/npm-v1.0.0-blue)](https://www.npmjs.com/package/typescript-self-referencing-infinite-loop-array/v/1.0.0)
[![More Info](https://img.shields.io/badge/More%20Info-Click%20Here-orange)](http://example.com/support)

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`typescriptselfreferencingschemaclient.test.fetch`](#typescriptselfreferencingschemaclienttestfetch)

<!-- tocstop -->

## Installation<a id="installation"></a>

<table>
<tr>
<th width="292px"><code>npm</code></th>
<th width="293px"><code>pnpm</code></th>
<th width="292px"><code>yarn</code></th>
</tr>
<tr>
<td>

```bash
npm i typescript-self-referencing-infinite-loop-array
```

</td>
<td>

```bash
pnpm i typescript-self-referencing-infinite-loop-array
```

</td>
<td>

```bash
yarn add typescript-self-referencing-infinite-loop-array
```

</td>
</tr>
</table>

## Getting Started<a id="getting-started"></a>

```typescript
import { TypescriptSelfReferencingSchemaClient } from "typescript-self-referencing-infinite-loop-array";

const typescriptselfreferencingschemaclient =
  new TypescriptSelfReferencingSchemaClient({
    // Defining the base path is optional and defaults to https://typescript-self-referencing-infinite-loop-array.konfigthis.com
    // basePath: "https://typescript-self-referencing-infinite-loop-array.konfigthis.com",
    apiKey: "API_KEY",
  });

const fetchResponse = await typescriptselfreferencingschemaclient.test.fetch();

console.log(fetchResponse);
```

## Reference<a id="reference"></a>


### `typescriptselfreferencingschemaclient.test.fetch`<a id="typescriptselfreferencingschemaclienttestfetch"></a>

Provide an input parameter to receive a JSON value with properties.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fetchResponse = await typescriptselfreferencingschemaclient.test.fetch();
```

#### 🔄 Return<a id="🔄-return"></a>

[SelfReferencingSchema](./models/self-referencing-schema.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/simple-endpoint` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)