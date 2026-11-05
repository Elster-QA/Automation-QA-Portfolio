# Automation Exercise — Playwright UI Tests

## Overview

This project contains automated UI tests for [Automation Exercise](https://automationexercise.com/), an e-commerce practice website. It is built using JavaScript and Playwright and focuses on automating common user interactions and shopping flows.

The project demonstrates practical approaches to UI test automation, test organization and reusable page interactions.

## Key Features

- **End-to-End Testing** — automation of common e-commerce user flows, including authentication, product catalog navigation and shopping cart interactions.
- **Page Object Model (POM)** — separation of page-specific locators and actions from test logic.
- **Environment Configuration** — management of sensitive test credentials through environment variables.
- **GitHub Actions CI** — automated execution of Playwright tests in a Docker-based environment.

## Tech Stack

- JavaScript
- Node.js
- Playwright
- dotenv
- uuid
- GitHub Actions
- Docker

## Project Structure

- `tests/` — automated test specifications.
- `page-objects/` — page object classes containing locators and page-specific actions.
- `data/` — test data.
- `utils/` — global setup and environment configuration.
- `playwright.config.js` — Playwright configuration.

## Getting Started

1. Install project dependencies:

   ```bash
   npm install
   ```

2. Install Chromium:

   ```bash
   npx playwright install chromium
   ```

3. Configure the required environment variables in your `.env` file:

   - `WEEK_NAME`
   - `WEEK_PASS`

4. Run the tests:

   ```bash
   npm test
   ```

## CI Automation

This project uses **GitHub Actions** to automate Playwright test execution in a Docker-based environment.

The workflow:

- Checks out the repository.
- Installs project dependencies using `npm ci`.
- Executes the Playwright test suite in headless mode.

The following credentials are stored securely as GitHub Actions repository secrets:

- `WEEK_NAME`
- `WEEK_PASS`

**GitHub Actions — CI Status:**

[![PetProjectAutoEx](https://github.com/Elster-QA/Automation-QA-Portfolio/actions/workflows/petProjectAutoEx.yml/badge.svg)](https://github.com/Elster-QA/Automation-QA-Portfolio/actions/workflows/petProjectAutoEx.yml)

[View GitHub Actions workflows and test execution history](https://github.com/Elster-QA/Automation-QA-Portfolio/actions)
