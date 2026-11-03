# Playwright Automation — Rick Schubert Course

## Overview

This project contains automated UI and API tests developed as part of the Playwright automation course by Rick Schubert. It focuses on testing e-commerce functionality using Playwright and JavaScript.

## Key Features

- **End-to-End Testing** — automation of e-commerce user flows, including product selection, shopping cart operations, registration and checkout.
- **Page Object Model (POM)** — separation of page-specific locators and actions from test logic.
- **API Testing** — retrieving authentication tokens through API requests and using them in browser sessions.
- **Network Mocking** — intercepting network requests and simulating server responses.
- **Dynamic Test Data** — generating test data for automated test scenarios.
- **CI Automation** — running automated tests through GitHub Actions in a Docker container.

## Tech Stack

- JavaScript
- Node.js
- Playwright Test
- node-fetch
- dotenv
- uuid
- GitHub Actions
- Docker

## Project Structure

- `tests/` — automated test specifications.
- `page-objects/` — page object classes containing locators and page-specific actions.
- `api-calls/` — API request utilities.
- `data/` — test data.
- `utils/` — helper functions and utilities.
- `playwright.config.js` — Playwright configuration.
- `shopping-store-linux-amd64` — application executable used in the test environment.

## Getting Started

1. Install project dependencies:

   ```bash
   npm install
   ```

2. Install Playwright browsers:

   ```bash
   npx playwright install chromium
   ```

3. Configure the required environment variable `ADMIN_PASSWORD` in your `.env` file.

4. Make sure the application is running at:

   ```text
   http://localhost:2221/
   ```

5. Run the tests:

   ```bash
   npm test
   ```

   Run tests in headless mode:

   ```bash
   npm run test:ci
   ```

## CI Automation

The project uses GitHub Actions to run automated tests in a Docker-based environment.

The workflow:
- Checks out the repository.
- Starts the application.
- Installs project dependencies.
- Executes the Playwright test suite in headless mode.

The `ADMIN_PASSWORD` value is stored as a GitHub Actions secret.
