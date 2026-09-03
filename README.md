# Mobile Native App Automation with WebdriverIO & BrowserStack

Automated end-to-end testing suite for the **WebdriverIO Native Demo App** on Android using **TypeScript**, **Appium**, and **BrowserStack App Automate**.

---

## Tech Stack

* **Framework:** WebdriverIO v9 + Mocha
* **Language:** TypeScript
* **Mobile Engine:** Appium (UiAutomator2)
* **Cloud Infrastructure:** BrowserStack App Automate
* **Design Pattern:** Screen Object Model (POM)
* **CI/CD:** GitHub Actions

---

## Project Structure

```bash
├── .github/
│   └── workflows/
│       └── browserstack.yml     # GitHub Actions pipeline
├── test/
│   ├── data/
│   │   └── testData.ts          # Test credentials and input fixtures
│   ├── pageobjects/
│   │   ├── BaseScreen.ts        # Base navigation and shared elements
│   │   ├── LoginScreen.ts       # Locators & actions for Login tab
│   │   └── FormsScreen.ts       # Locators & actions for Forms tab
│   └── specs/
│       └── app.spec.ts          # 5 automated test scenarios
├── tsconfig.json
├── wdio.shared.conf.ts          # Base shared WebdriverIO options
├── wdio.browserstack.conf.ts    # BrowserStack cloud configuration
├── wdio.local.conf.ts           # Local Appium & Android Emulator config
└── wdio.conf.ts                 # Default entry point
```

---

## Test Coverage

### 1. Successful Authentication

Logs in with valid user credentials and verifies the success alert.

### 2. Authentication Validation

Submits an invalid email format and asserts the displayed inline validation message.

### 3. Form Input Sync

Enters text into a form field and validates dynamic synchronization in the output field.

### 4. Switch Component Toggle

Interacts with the switch toggle and verifies that the corresponding label state changes.

### 5. Dropdown Selection

Opens the picker, selects an option, and verifies the updated state.

---

## Setup & Execution

### Prerequisites

Before running the tests, make sure you have:

* **Node.js:** v20+
* A **BrowserStack** account
* BrowserStack **Username** and **Access Key**
* An uploaded mobile application with a valid BrowserStack App ID

---

### Environment Configuration

Create a `.env` file in the project root:

```env
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_access_key
BROWSERSTACK_APP_ID=bs://your_uploaded_app_hash

# Optional: Path to local APK for emulator execution
LOCAL_APP_PATH=./apps/app.apk
```

> **Note:** Never commit your `.env` file or expose your BrowserStack credentials in the repository.

---

### Install Dependencies

```bash
npm install
```

---

### Run Tests

Execute on BrowserStack (Cloud):

```bash
npm run test:bstack
# or default script
npm test
```

Execute on Local Android Emulator / Device:

```bash
npm run test:local
```

---

## CI/CD Pipeline

The project is configured with **GitHub Actions** to execute regression tests in **BrowserStack App Automate**.

The pipeline runs automatically on:

* Pushes to the repository
* Pull requests

BrowserStack credentials and application configuration are provided through **GitHub Repository Secrets**:

```text
BROWSERSTACK_USERNAME
BROWSERSTACK_ACCESS_KEY
BROWSERSTACK_APP_ID
```

This approach keeps sensitive credentials outside the source code while allowing the test suite to run automatically in the CI environment.

---

## Test Architecture

The framework follows the **Screen Object Model (POM)** to keep test scenarios clean, reusable, and maintainable.

### `BaseScreen`

Contains common navigation logic and shared elements used across multiple screens.

### `LoginScreen`

Encapsulates locators and actions related to the **Login** tab, including authentication and validation scenarios.

### `FormsScreen`

Contains locators and reusable actions for interacting with form components such as:

* Text inputs
* Switches
* Dropdowns
* Dynamic output fields

### Test Data

Test credentials and reusable input values are stored separately in:

```text
test/data/testData.ts
```

This keeps test data isolated from the test implementation.

---

## Key Features

* Android native application automation
* WebdriverIO v9
* TypeScript-based test suite
* Appium with UiAutomator2
* Screen Object Model architecture
* Cloud execution with BrowserStack App Automate
* Modular configuration supporting both Cloud (BrowserStack) and Local Appium execution
* Reusable test data fixtures
* Automated CI/CD with GitHub Actions
* Secure credentials management through environment variables and GitHub Secrets
* Five automated end-to-end test scenarios

---