# SaveSurge - API Routes & Serverless Functions Documentation

## Overview

This document defines the API routes and serverless functions implemented within the **Next.js app**, using **Supabase
Edge Functions** as the backend.

---

## API Routes (Next.js Serverless Functions)

All API routes are defined inside the `src/app/api/` directory in the Next.js project. These routes serve as a middle
layer between the frontend and Supabase Edge Functions.

```text
src
│── app
│   ├── api
│   │   ├── auth
│   │   │   ├── login.ts       # Calls Supabase Edge Function for authentication
│   │   │   ├── register.ts    # Handles user registration
│   │   │   ├── logout.ts      # Revokes access tokens
│   │   ├── transactions
│   │   │   ├── fetch.ts       # Calls Supabase function to get user transactions
│   │   │   ├── categorize.ts  # Categorizes transactions using predefined rules
│   │   │   ├── add.ts         # Adds manual transactions
│   │   ├── budgets
│   │   │   ├── create.ts      # Creates a new budget
│   │   │   ├── update.ts      # Updates an existing budget
│   │   │   ├── delete.ts      # Deletes a budget
│   │   ├── profile
│   │   │   ├── me.ts          # User profile details
│   │   ├── settings
│   │   │   ├── get.ts         # Fetches app settings for the user
│   │   │   ├── update.ts      # Updates user settings
```

### Authentication Routes (`/api/auth/`)

| Endpoint             | Method | Description                         |
|----------------------|--------|-------------------------------------|
| `/api/auth/login`    | `POST` | Logs in a user via Supabase Auth    |
| `/api/auth/register` | `POST` | Registers a new user                |
| `/api/auth/logout`   | `POST` | Logs out the user and revokes token |

### Transaction Routes (`/api/transactions/`)

| Endpoint            | Method | Description                               |
|---------------------|--------|-------------------------------------------|
| `/api/transactions` | `GET`  | Retrieves user transactions from Supabase |
| `/api/transactions` | `POST` | Assigns categories to transactions        |
| `/api/transactions` | `POST` | Adds a manual transaction                 |

### Budget Routes (`/api/budgets/`)

| Endpoint       | Method   | Description                   |
|----------------|----------|-------------------------------|
| `/api/budgets` | `POST`   | Creates a new budget category |
| `/api/budgets` | `PUT`    | Updates an existing budget    |
| `/api/budgets` | `DELETE` | Deletes a budget              |

### Profile Routes (`/api/profile/`)

| Endpoint          | Method | Description                                       |
|-------------------|--------|---------------------------------------------------|
| `/api/profile/me` | `GET`  | Fetches user profile information                  |
| `/api/profile/me` | `PUT`  | Updates user profile details (e.g., name, avatar) |

### App Settings Routes (`/api/settings/`)

| Endpoint        | Method | Description                                             |
|-----------------|--------|---------------------------------------------------------|
| `/api/settings` | `GET`  | Fetches user-specific app settings                      |
| `/api/settings` | `PUT`  | Updates app settings (e.g., notifications, preferences) |

---

## Supabase Edge Functions (Serverless Backend Logic)

All Supabase Edge Functions are deployed via **Supabase CLI** and triggered from Next.js API routes.

```text
supabase
│── functions
│   ├── auth
│   │   ├── login.ts       # Handles Supabase JWT authentication
│   │   ├── register.ts    # Handles user registration
│   ├── transactions
│   │   ├── fetch.ts       # Retrieves user transactions from database
│   │   ├── categorize.ts  # Auto-categorizes transactions
│   │   ├── add.ts         # Adds manual transaction entry
│   ├── budgets
│   │   ├── create.ts      # Creates a new budget
│   │   ├── update.ts      # Updates an existing budget
│   │   ├── delete.ts      # Deletes a budget
│   ├── profile
│   │   ├── get.ts         # Retrieves user profile information
│   │   ├── update.ts      # Updates user profile details
│   ├── settings
│   │   ├── get.ts         # Retrieves user-specific settings
│   │   ├── update.ts      # Updates user settings
```

### Triggering Supabase Functions from Next.js

Each API route in **Next.js** calls the corresponding Supabase function:

```ts
// Example: Fetch User Profile API Route
export async function GET(req: Request) {
  const response = await fetch("https://your-supabase-url/functions/v1/get-profile", {
    method: "GET",
    headers: { "Authorization": `Bearer ${process.env.SUPABASE_SERVICE_ROLE}` },
  });

  const data = await response.json();
  return Response.json(data);
}
```

---

## Security & Middleware

- **Authentication Middleware**: API routes should check Supabase authentication tokens before processing requests.
- **Rate Limiting**: Implement API rate limiting to prevent abuse.
- **Supabase Row-Level Security (RLS)**: Ensure proper database access control.

---

## Next Steps

- [ ] Implement middleware for authentication checks in Next.js API routes.
- [ ] Optimize database queries for transaction fetching and budget tracking.
