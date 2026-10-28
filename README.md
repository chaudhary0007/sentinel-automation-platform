# Sentinel-QA: Autonomous Test Automation Platform

[![Playwright CI & Live Report Deployment](https://github.com/chaudhary0007/sentinel-automation-platform/actions/workflows/playwright-ci.yml/badge.svg)](https://github.com/chaudhary0007/sentinel-automation-platform/actions/workflows/playwright-ci.yml)
[![Live Report](https://img.shields.io/badge/Playwright_Report-Live_GH_Pages-2ea44f?style=flat&logo=github)](https://chaudhary0007.github.io/sentinel-automation-platform/)
[![Interactive Dashboard](https://img.shields.io/badge/Dashboard-Live_on_Vercel-000000?style=flat&logo=vercel)](https://sentinel-automation-platform.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-v1.40+-45ba4b?style=flat&logo=playwright)](https://playwright.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An enterprise-grade hybrid UI and API test automation ecosystem designed to eliminate flakiness in dynamic Agile environments. Features a multi-tiered **self-healing locator engine**, Page Object Model (POM) architecture, comprehensive API contract validations, automated GitHub Actions CI/CD with persistent trace deployment, and a real-time web telemetry dashboard.

---

## Live Environments

| Surface | Direct URL | Description |
| :--- | :--- | :--- |
| **Interactive Control Dashboard** | [sentinel-automation-platform.vercel.app](https://sentinel-automation-platform.vercel.app) | Real-time simulator to inject DOM mutations and observe self-healing recovery heuristics live. |
| **Playwright Execution Report** | [chaudhary0007.github.io/sentinel-automation-platform](https://chaudhary0007.github.io/sentinel-automation-platform/) | Production Playwright HTML report containing execution timelines, DOM snapshots, network waterfalls, and video captures. |

---

## Architectural Breakdown

```text
sentinel-automation-platform/
│
├── .github/workflows/
│   └── playwright-ci.yml         # CI/CD: Automated parallel runs, Node 22 setup, GH Pages publishing
│
├── automation/                   # Core Test Engineering Engine
│   ├── src/
│   │   ├── core/
│   │   │   └── resilientEngine.ts # Cascading self-healing heuristic selector fallback algorithm
│   │   ├── pages/
│   │   │   └── inventoryPage.ts   # Page Object Model (POM) with fallback locator strategies
│   │   └── utils/
│   │       └── apiHelper.ts       # Shared REST API contract assertion utilities
│   ├── tests/
│   │   ├── e2e/
│   │   │   └── checkout.spec.ts   # Resilient user journey validation against live targets
│   │   └── api/
│   │       └── auth-contract.spec.ts # Schema, status, and header verification suite
│   ├── playwright.config.ts      # Multi-worker concurrency, trace retainment, and reporter setup
│   └── tsconfig.json             # TypeScript compiler specifications
│
└── dashboard/                    # Observability & Interactive Simulator UI (React + Tailwind)
    ├── src/
    │   ├── App.tsx               # DOM Mutation playground, terminal streamer, and telemetry cards
    │   └── main.tsx
    ├── package.json
    └── vite.config.ts