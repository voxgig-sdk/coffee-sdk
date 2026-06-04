# Coffee SDK

Browse popular hot and iced coffee drinks with their descriptions and ingredients

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Coffee

The Coffee API is one of the free sample datasets published by [SampleAPIs](https://sampleapis.com/), a community playground for practising REST calls. It returns a small, fixed catalogue of popular coffee drinks split into hot and iced categories.

What you get from the API:

- `GET /coffee/hot` — list of hot coffee drinks with descriptions and ingredients.
- `GET /coffee/iced` — list of iced coffee drinks with descriptions and ingredients.

Operational notes: no API key is needed and CORS is enabled, so the endpoints can be called directly from the browser. The dataset is static and suitable for tutorials, UI mocks, and demos rather than real coffee-shop data.

## Try it

**TypeScript**
```bash
npm install coffee
```

**Python**
```bash
pip install coffee-sdk
```

**PHP**
```bash
composer require voxgig/coffee-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/coffee-sdk/go
```

**Ruby**
```bash
gem install coffee-sdk
```

**Lua**
```bash
luarocks install coffee-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CoffeeSDK } from 'coffee'

const client = new CoffeeSDK({})

// List all hots
const hots = await client.Hot().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o coffee-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "coffee": {
      "command": "/abs/path/to/coffee-mcp"
    }
  }
}
```

## Entities

The API exposes 2 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Hot** | Hot coffee drinks with names, descriptions, and ingredient lists, served from `GET /coffee/hot`. | `/coffee/hot` |
| **Iced** | Iced coffee drinks with names, descriptions, and ingredient lists, served from `GET /coffee/iced`. | `/coffee/iced` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from coffee_sdk import CoffeeSDK

client = CoffeeSDK({})

# List all hots
hots, err = client.Hot(None).list(None, None)
```

### PHP

```php
<?php
require_once 'coffee_sdk.php';

$client = new CoffeeSDK([]);

// List all hots
[$hots, $err] = $client->Hot(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/coffee-sdk/go"

client := sdk.NewCoffeeSDK(map[string]any{})

// List all hots
hots, err := client.Hot(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Coffee_sdk"

client = CoffeeSDK.new({})

# List all hots
hots, err = client.Hot(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("coffee_sdk")

local client = sdk.new({})

-- List all hots
local hots, err = client:Hot(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CoffeeSDK.test()
const result = await client.Hot().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CoffeeSDK.test(None, None)
result, err = client.Hot(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CoffeeSDK::test(null, null);
[$result, $err] = $client->Hot(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Hot(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CoffeeSDK.test(nil, nil)
result, err = client.Hot(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Hot(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Coffee

- Upstream: [https://sampleapis.com/api-list/coffee](https://sampleapis.com/api-list/coffee)

- Hosted on [SampleAPIs](https://sampleapis.com/), a free playground for REST and GraphQL endpoints.
- No authentication required; CORS is enabled.
- Intended for testing and learning, not production workloads.

---

Generated from the Coffee OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
