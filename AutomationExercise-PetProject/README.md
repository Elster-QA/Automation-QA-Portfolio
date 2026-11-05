# Automation Exercise — Playwright UI Tests

UI test automation project for [Automation Exercise](https://automationexercise.com/), built with JavaScript and Playwright.

The project focuses on automating common e-commerce user flows and demonstrates practical approaches to structuring and maintaining UI tests.

**GitHub Actions — CI Status:**

[![PetProjectAutoEx](https://github.com/Elster-QA/Automation-QA-Portfolio/actions/workflows/petProjectAutoEx.yml/badge.svg)](https://github.com/Elster-QA/Automation-QA-Portfolio/actions/workflows/petProjectAutoEx.yml)

[View GitHub Actions workflows and test execution history](https://github.com/Elster-QA/Automation-QA-Portfolio/actions/workflows/petProjectAutoEx.yml)

## Key Features

- **End-to-End Testing** — automation of common e-commerce user flows, including authentication, product catalog navigation and shopping cart interactions.
- **Page Object Model (POM)** — separation of page-specific locators and actions from test logic.
- **Environment Configuration** — management of sensitive credentials through environment variables.

## Tech Stack

- JavaScript
- Node.js
- Playwright
- dotenv
- uuid

## Project Structure

- `tests/` — test specifications
- `page-objects/` — page objects and reusable page interactions
- `data/` — test data
- `utils/` — global setup and environment configuration
- `playwright.config.js` — Playwright configuration

## Getting Started

Install dependencies:

```bash
npm install
```

Install Chromium:

```bash
npx playwright install chromium
```

Configure the required environment variables in a `.env` file:

- `WEEK_NAME`
- `WEEK_PASS`

Run the tests:

```bash
npm test
```

## CI Automation

The project uses GitHub Actions to run Playwright tests in a Docker container.

The workflow installs project dependencies and executes the test suite in a headless browser environment.

Required environment variables are configured through GitHub Actions repository secrets:

- `WEEK_NAME`
- `WEEK_PASS`
