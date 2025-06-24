# 🚀 Memetus-Pumpfun-SDK

![HOMO-MEMETUS](assets/image.png)

**Memetus-Pumpfun-SDK** provides a feature that allows user to query tokens created within the last 24 hours on Pumpfun using various parameters.

[npm](https://www.npmjs.com/package/@0xobedient/memetus-pumpfun-sdk)
[github](https://github.com/memetus/memetus-pumpfun-sdk)
[download](https://github.com/memetus/memetus-pumpfun-sdk/releases)

---

## ✨ Features

- ✅ Fast and lightweight
- 💡 Simple, intuitive API
- ⚙️ Fully TypeScript supported
- 🔒 Does not require an API key
- 📦 Various query parameter

---

## 📦 Installation

```bash
npm install @0xobedient/memetus-pumpfun-sdk
# or
yarn add @0xobedient/memetus-pumpfun-sdk
# or
pnpm install @0xobedient/memetus-pumpfun-sdk
```

## ✅ Examples

### Instantiation

```typescript
const memetusClient = new MemetusPumpfun();
```

### Fetch Recent Tokens

```typescript
const params = {
  limit: 10, // default=100
};
const data = await memetusClient.fetchRecentTokens(params);
```

### Fetch Oldest Tokens

```typescript
const params = {
  limit: 10, // default=100
};

const data = await memetusClient.fetchOldestTokens(params);
```

### Fetch Token By Address

```typescript
const data = await memetusClient.fetchTokenByAddress("<target-mint-address>");
```

### Fetch Token By Creator

```typescript
const data = await memetusClient.fetchTokenByCreator(
  "<target-creator-address>"
);
```

### Fetch Token By Initializer

```typescript
const data = await memetusClient.fetchTokenByInitializer(
  "<target-initializer-address>"
);
```

### Fetch Token By Signature

```typescript
const data = await memetusClient.fetchTokenBySignature("<target-signature>");
```

### Fetch Token By Metadata

```typescript
const params = {
  name: "Homo Memetus",
  symbol: "HOMO",
  sort: "asc", // default=desc
  limit: 100, // default=100
};
const data = await memetusClient.fetchTokensByMetadata(params);
```

### Fetch Token By Duration

```typescript
const params = {
  start: new Date(now.getTime() - 60 * 60 * 1000),
  end: new Date(),
  sort: "asc", // default=desc
  limit: 100, // default=100
};
const data = await memetusClient.fetchTokensByDuration(params);
```

### Fetch Token By MarketCap

```typescript
const params = {
  min: 10, // SOL
  max: 30, // SOL
  sort: "asc", // default=desc
  limit: 100, // default=100
};
const data = await memetusClient.fetchTokensByDuration(params);
```

### Fetch Tokens By Addresses

```typescript
const params = {
  addresses: [
    "<target-mint-address-1>",
    "<target-mint-address-2>",
    "<target-mint-address-3>",
  ],
};
const data = await memetusClient.fetchTokensByAddresses(params);
```

### Fetch Tokens By Creators

```typescript
const params = {
  addresses: [
    "<target-creator-address-1>",
    "<target-creator-address-2>",
    "<target-creator-address-3>",
  ],
};
const data = await memetusClient.fetchTokensByCreators(params);
```

### Fetch Tokens By Initializer

```typescript
const params = {
  addresses: [
    "<target-initializer-address-1>",
    "<target-initializer-address-2>",
    "<target-initializer-address-3>",
  ],
};
const data = await memetusClient.fetchTokensByInitializers(params);
```

## Parameters

| Type Name              | Property  | Type                         | Description                                     |
| ---------------------- | --------- | ---------------------------- | ----------------------------------------------- |
| **RecentsParams**      | limit     | `number` (optional)          | Limit the number of recent items returned       |
| **OldestsParams**      | limit     | `number` (optional)          | Limit the number of oldest items returned       |
| **TokenByAddress**     | address   | `string` (required)          | Filter by a specific token address              |
| **TokenByCreator**     | address   | `string` (required)          | Filter tokens created by a specific creator     |
| **TokenByInitializer** | address   | `string` (required)          | Filter tokens initialized by a specific address |
| **MetadataParams**     | name      | `string` (optional)          | Filter by name                                  |
|                        | symbol    | `string` (optional)          | Filter by symbol                                |
|                        | sort      | `"asc" \| "desc"` (optional) | Sorting order                                   |
|                        | limit     | `number` (optional)          | Limit the number of items returned              |
| **DurationParams**     | start     | `string` (optional)          | Start date                                      |
|                        | end       | `string` (optional)          | End date                                        |
|                        | sort      | `"asc" \| "desc"` (optional) | Sorting order                                   |
|                        | limit     | `number` (optional)          | Limit the number of items returned              |
| **MarketCapParams**    | min       | `string` (optional)          | Minimum market cap                              |
|                        | max       | `string` (optional)          | Maximum market cap                              |
|                        | sort      | `"asc" \| "desc"` (optional) | Sorting order                                   |
|                        | limit     | `number` (optional)          | Limit the number of items returned              |
| **TokensByAddresses**  | addresses | `string[]` (required)        | List of specific token addresses                |
| **CreatorsParams**     | addresses | `string[]` (required)        | List of creator addresses                       |
|                        | sort      | `"asc" \| "desc"` (optional) | Sorting order                                   |
| **InitializerParams**  | addresses | `string[]` (required)        | List of initializer addresses                   |
|                        | sort      | `"asc" \| "desc"` (optional) | Sorting order                                   |
