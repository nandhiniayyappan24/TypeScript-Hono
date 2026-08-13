# TypeScript Hono — Monolithic (ts5.7)

Hono edge backend monolithic project for **ts5.7** targeting **TypeScript 5.7.3**.

## Project type

- **Language:** TypeScript
- **Scenario:** 1 - Monolithic
- **Project type:** Hono Edge Backend Service (Bun/Deno/Cloudflare Workers)
- **Module:** flat (single module)
- **Hono:** v4.x

## Supported tools (from Alternative Tools Enterprise Mapping Matrix)

- cccc
- debtmap
- reson
- oxlint
- Bearer CLI
- CVE Lite CLI
- license-checker-rseidelsohn
- @sigstore/cli
- @nodesecure/cli
- monocart-coverage-reports
- oxc-coverage-instrument
- mewt
- TraceGraph (@tracegraph/trace-js)
- diff-cover
- ts-unused-exports
- red-dragon + oxc-coverage-instrument
- Opengrep
- red-dragon
- git-hot
- covgate

## Build

```bash
npm install
npm run build
npm test
npm run typecheck
```

## Run (local URL)

```bash
npm run dev
```

Then open **http://localhost:3000** — health at **http://localhost:3000/health**

## Project layout

| Path | Role |
|------|------|
| `src/` | Hono server, routes, services, analysis fixtures |
| `src/routes/` | Order API routes |
| `tests/` | Vitest unit tests |
| `tools/` | 20 alternative QA tools + TypeScriptHono.Tools integration |
| `tools/runToolIntegration.mjs` | Logs all tool connections after build |

## Tool connection

All tools are wired through `tools/*/trigger.yaml` pointing at `package.json`, `src/`, and `tests/`.
The `tools/TypeScriptHono.Tools/` package marks integration and runs after `npm run build`.
