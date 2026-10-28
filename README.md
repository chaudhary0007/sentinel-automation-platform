# Sentinel-QA: Autonomous Test Automation Platform

[![Playwright CI & Live Report Deployment](https://github.com/chaudhary0007/sentinel-automation-platform/actions/workflows/playwright-ci.yml/badge.svg)](https://github.com/chaudhary0007/sentinel-automation-platform/actions/workflows/playwright-ci.yml)
[![Live Report](https://img.shields.io/badge/Playwright_Report-Live_GH_Pages-2ea44f?style=flat&logo=github)](https://chaudhary0007.github.io/sentinel-automation-platform/)
[![Interactive Dashboard](https://img.shields.io/badge/Dashboard-Live_on_Netlify-00C7B7?style=flat&logo=netlify)](https://snazzy-youtiao-093ad2.netlify.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-v1.49+-45ba4b?style=flat&logo=playwright)](https://playwright.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An enterprise-grade hybrid UI and API test automation framework designed to reduce flaky test execution in fast-changing Agile environments. Sentinel-QA combines a resilient self-healing locator engine, Page Object Model (POM) design, network fault simulation, API contract validation, and an operational observability dashboard.

## Overview

Sentinel-QA helps engineering teams validate product behavior with less maintenance overhead. It is built for dynamic application surfaces where selectors break often, UI layouts change frequently, and deployment pipelines need rapid, trustworthy feedback.

### Core capabilities

- Self-healing locator strategies that recover from common DOM changes
- Page Object Model-driven test structure for scalability and readability
- API validation for schema, status, and header checks
- Network fault injection for latency and 500 error simulation
- Parallel test execution with trace retention for debugging
- Live telemetry dashboard for runtime visibility and mutation simulation

## Live environments

| Surface | URL | Purpose |
| --- | --- | --- |
| Interactive Control Dashboard | [snazzy-youtiao-093ad2.netlify.app](https://snazzy-youtiao-093ad2.netlify.app/) | Inject DOM mutations and observe resilient locator behavior in real time |
| Playwright Execution Report | [chaudhary0007.github.io/sentinel-automation-platform](https://chaudhary0007.github.io/sentinel-automation-platform/) | Review HTML reports with traces, screenshots, network waterfalls, and execution timelines |

---

## Project structure

```text
sentinel-automation-platform/
├── .github/
│   └── workflows/
│       └── playwright-ci.yml          # CI pipeline for automated test execution and report publishing
├── automation/                        # Core Playwright automation engine
│   ├── src/
│   │   ├── core/
│   │   │   └── resilientEngine.ts      # Self-healing locator fallback logic
│   │   └── pages/
│   │       └── inventoryPage.ts       # Page Object Model abstraction for UI interactions
│   ├── tests/
│   │   ├── e2e/
│   │   │   ├── checkout.spec.ts        # End-to-end purchase journey validation
│   │   │   └── network-faults.spec.ts  # Network error and latency fault simulation tests
│   │   └── api/
│   │       └── auth-contract.spec.ts   # API contract validation suite
│   ├── playwright.config.ts            # Parallel workers, reporter config, and trace retention
│   ├── tsconfig.json                   # TypeScript compiler settings
│   ├── package.json                    # Automation engine dependencies and scripts
│   └── package-lock.json
├── automation-dashboard/               # React + Tailwind telemetry dashboard
│   ├── src/
│   │   ├── App.tsx                    # Mutation playground and telemetry UI
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
├── public/                             # Published Playwright reports and generated assets
├── README.md
├── LICENSE
├── .gitignore
└── package-lock.json (root optional)
```

---

## Getting started

### Prerequisites

- Node.js 22+
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/chaudhary0007/sentinel-automation-platform.git
cd sentinel-automation-platform
```

### 2. Install dependencies

```bash
cd automation
npm install

cd ../automation-dashboard
npm install
```

### 3. Run the automation suite

From the `automation` folder:

```bash
npm test
```

Run only UI or API suites:

```bash
npm run test:e2e
npm run test:api
```

Open the Playwright UI runner:

```bash
npm run test:ui
```

### 4. Launch the dashboard locally

```bash
cd automation-dashboard
npm run dev
```

The dashboard is usually available at `http://localhost:5173`.

### 5. View generated reports

```bash
cd automation
npm run report
```

---

## CI/CD and deployment

The repository includes a GitHub Actions workflow under `.github/workflows/playwright-ci.yml` to automate execution, store artifacts, and publish the Playwright HTML report to GitHub Pages. This keeps test health observable and accessible to the whole team.

---

## Why this project matters

Sentinel-QA is designed to make automated UI testing more resilient and maintainable in real-world systems where DOM structure changes frequently. Instead of brittle selectors and fragile test flows, it introduces a layered strategy to stabilize execution and trace failures quickly.

---

## License

This project is licensed under the MIT License. See the LICENSE file for full details.

