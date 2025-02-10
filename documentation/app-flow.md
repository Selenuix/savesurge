# SaveSurge - Updated App Flow Document (MVP)

## 1. User Flow Overview

The core user journey focuses on **authentication, bank integration, expense tracking, budgeting, and financial insights
**, using the updated tech stack with Supabase, Yapily, and Turso (libSQL).

### High-Level Steps

1. **User Authentication & Onboarding** (Supabase Auth, Access Tokens)
2. **Bank Account Connection** (Yapily API)
3. **Transaction Fetching & Categorization** (Supabase fucntions, Turso DB)
4. **Expense Tracking & Budgeting** (Turso DB, Supabase functions processing)
5. **Financial Insights & Dashboard** (Next.js, TanStack Tables)
6. **Security & User Settings** (Supabase Auth, OAuth2)

---

## 2. Detailed App Flow

### 1. User Authentication & Onboarding

**Goal:** Allow users to securely sign up and log in via **Supabase Auth**.

#### Flow

1. User lands on **SaveSurge** homepage.
2. Chooses **Sign Up / Login**.
3. Authentication methods:
    - Email/Password (Supabase Auth)
    - OAuth2 (Supabase Auth)
4. On Sign Up with email, user needs to confirm their email address
5. Successful authentication → JWT issued → Redirect to Dashboard.
6. First-time users see **onboarding prompts** to connect a bank account.

✅ **Success:** User logs in, JWT stored securely, redirected to Dashboard.  
❌ **Failure:** Invalid credentials → Display error message.

---

### 2. Bank Account Connection

**Goal:** Users securely connect their bank accounts using **Yapily API**.

**Flow:**

1. User navigates to **Bank Accounts** section.
2. Clicks **"Connect Bank"**, redirected to Yapily OAuth.
3. Selects bank, authenticates, and grants permissions.
4. Redirects back to SaveSurge, confirming connection.
5. Backend (Supabase functions) fetches transactions via Yapily API.
6. Data stored in **Supabase (postgresSQL)**.

✅ **Success:** Bank connected, transactions synced.  
❌ **Failure:** Connection error → Prompt retry or manual transaction entry.

---

### 3. Transaction Fetching & Categorization

**Goal:** Automatically fetch and categorize transactions via **Supabase**.

**Flow:**

1. **Automatic transaction fetch** (on page load as a supabase queue).
2. Raw transactions processed:
    - Parse transaction data (date, amount, merchant).
    - Categorization logic applied (via predefined rules or AI in future updates).
3. Data stored in **Supase**.
4. Displayed in **TanStack Tables**.
5. Users can adjust categories manually.

✅ **Success:** Transactions categorized & displayed in Dashboard.  
❌ **Failure:** Data fetch issues → Show error message.

---

### 4. Expense Tracking & Budgeting

**Goal:** Users track spending and set category-based budgets.

**Flow:**

1. User sets **budget limits** (monthly/weekly per category).
2. **Spending updates in real-time** based on transactions.
3. **Supabase functions calculates remaining budget**.
4. Alerts (Future Feature): Notify users when close to limit.

✅ **Success:** Users track spending against budget in real-time.  
❌ **Failure:** Data inconsistency → Show troubleshooting guide.

---

### 5. Financial Insights & Dashboard

**Goal:** Provide users with real-time spending insights & trends.

**Flow:**

1. **Income vs. Expenses Overview**
    - Total spending vs. total income.
2. **Category-based spending breakdown**
    - Pie chart visualization.
    - Monthly spending trend analysis.
3. **Transaction filtering & sorting** via **TanStack Tables**.

✅ **Success:** Users visualize and analyze their spending habits.  
❌ **Failure:** No transactions → Prompt users to connect a bank.

---

### 6. Security & User Settings

**Goal:** Ensure strong data security and allow users to manage preferences.

**Flow:**

1. **Authentication Management**
    - Change password, logout.
2. **Bank Account Management**
    - View linked accounts, revoke access.
3. **Data Privacy Controls**
    - Manage API permissions.

✅ **Success:** Users manage their data securely.  
❌ **Failure:** Failed actions → Display relevant errors.

---

## 3. System Interactions & API Calls

### Frontend (Next.js + TanStack Router)

- **REST API calls to API routes** for authentication, transactions, budgeting.
- **Real-time updates using React state management.**

### Backend (Supabase)

- **Supabase Auth** for authentication.
- **Yapily API** for banking integrations.
- **Supabase (PostgresSQL)** for storing transactions & budgets.
- **Automated transaction categorization** (rules-based, future AI-driven).

### Infrastructure

- **Vercel** for hosting.
- **Supabase Functions** for serverless functions.
- **GitHub Actions** for CI/CD automation.
- **Sentry & Datahog** for monitoring/logging.

---

## 4. Future Enhancements (Post-MVP)

These will be implemented **after user validation and feedback**:

- ✅ AI-powered financial insights.
- ✅ Subscription tracking & recurring expense detection.
- ✅ Mobile App (React Native).
- ✅ Shared budgeting & expense splitting.
