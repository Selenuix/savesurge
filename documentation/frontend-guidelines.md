# SaveSurge - Frontend Guidelines (MVP)

## 1. Overview

This document defines the frontend architecture, coding conventions, and best practices for developing the SaveSurge MVP
using **Next.js, TanStack Router, shadcn/ui, and Tailwind CSS**.

---

## 2. Tech Stack

### Core Technologies

- **Framework:** Next.js
- **State Management & Routing:** TanStack Router
- **UI Library:** shadcn/ui
- **Data Display:** TanStack Tables
- **Styling:** Tailwind CSS
- **API Integration:** REST APIs (Yapily API)
- **Authentication:** Supabase Auth

---

## 3. Project Structure

**Directory Layout:**

```text
src
|
+-- app               # Application entry point using Next.js App Router
|   +-- layout.tsx    # Root layout for pages and components
|   +-- page.tsx      # Main entry point for the homepage
|   +-- provider.tsx  # Global providers (theme, auth, query client)
|   +-- (routes)      # Nested application routes
|       +-- dashboard
|           +-- page.tsx      # Dashboard landing page
|           +-- layout.tsx    # Dashboard layout
|           +-- settings
|               +-- page.tsx  # Settings page under dashboard
|
+-- assets            # Static assets like images, fonts, icons, etc.
|
+-- components        # Shared UI components used across the app
|   +-- ui            # Reusable UI elements (buttons, inputs, modals, etc.)
|   +-- layout        # Header, footer, sidebar, etc.
|
+-- config            # Global configurations and exported env variables
|   +-- api.ts        # API base URLs and endpoints
|   +-- theme.ts      # Theme configurations
|
+-- features          # Feature-based modules (Encapsulated business logic)
|   +-- auth          # Authentication-related logic
|   |   +-- login.tsx     # Login form
|   |   +-- register.tsx  # Registration form
|   +-- transactions  # Transaction-related functionality
|
+-- hooks             # Custom React hooks
|   +-- useAuth.ts    # Authentication hook
|   +-- useFetch.ts   # Reusable API fetching hook
|
+-- lib               # Third-party library configurations and utilities
|   +-- axios.ts      # Axios preconfigured instance
|   +-- tanstack.ts   # TanStack Query configurations
|
+-- stores            # Global state management (Zustand, Jotai, etc.)
|   +-- authStore.ts  # Auth-related global state
|   +-- budgetStore.ts # Budget-related state
|
+-- testing           # Test utilities and mocks
|   +-- setup.ts      # Test setup file
|   +-- mocks         # Mock data for testing
|
+-- types             # TypeScript type definitions used globally
|   +-- user.ts       # User-related types
|   +-- transactions.ts # Transactions-related types
|
+-- utils             # Shared utility functions
|   +-- formatDate.ts # Utility to format dates
|   +-- helpers.ts    # Miscellaneous helper functions
---
```

## 4. UI Guidelines

### **shadcn/ui & Tailwind Usage:**

- Use **shadcn/ui** for consistent, accessible UI components.
- Apply **Tailwind CSS** for utility-first styling.
- Keep styles minimal in component files; abstract shared styles into **global Tailwind classes**.
- Use **Intl.NumberFormat** and other native web APIs to format currencies.

### **Component Structure:**

Each component should:

- Be modular and reusable.
- Accept props for dynamic behavior.
- Use TypeScript for type safety.

#### Example

```tsx
import { Card, CardContent } from "@/components/ui/card";

type BudgetCardProps = {
  title: string;
  amount: number;
};

export function BudgetCard({ title, amount }: BudgetCardProps) {
  return (
    <Card>
      <CardContent>
        <h3>{title}</h3>
        <p>${amount.toFixed(2)}</p>
      </CardContent>
    </Card>
  );
}
```

---

## 5. Routing & State Management

### **TanStack Router Configuration:**

- Use **nested routing** for structured navigation.
- Define routes in a centralized file for maintainability.

```tsx
import { createRouter, createRoute } from "@tanstack/router";

const dashboardRoute = createRoute({
  path: "/dashboard",
  component: DashboardPage,
});

export const router = createRouter({
  routeTree: dashboardRoute,
});
```

### **Global State Management:**

- Use **TanStack Query** for API caching & server state.
- Local component state should be used where applicable.
- Global state (if needed) should be minimal and handled via **React Context or Zustand**.

---

## 6. API Integration

### **REST API Standards:**

- Use **Supbase serverless endpoints** for transactions, budgeting, etc
- Use **Supbase Auth** for user authentication.
- Use **fetch or Axios** for API calls.
- Implement **Tanstack Query** for caching & optimized fetching.

#### Example: Getting Transactions

```tsx
import { useQuery } from "@tanstack/react-query";

async function fetchTransactions() {
  const response = await fetch("/api/transactions");
  if (!response.ok) throw new Error("Failed to fetch transactions");
  return response.json();
}

export function useTransactions() {
  return useQuery(["transactions"], fetchTransactions);
}
```

---

## 7. Authentication Flow

- **JWT Authentication** via Supabase Auth.
- Store **access tokens in HttpOnly cookies**.
- Implement an **auth provider** to manage user state.

### Example: Auth

```tsx
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

---

## 8. Testing

- **Unit Testing:** Vitest for component testing.
- **Integration Testing:** React Testing Library.
- **API Mocks:** MSW (Mock Service Worker) for API calls.

### Example Test

```tsx
import { render, screen } from "@testing-library/react";
import { BudgetCard } from "../components/BudgetCard";

test("renders budget card with correct values", () => {
  render(<BudgetCard title="Groceries" amount={150} />);
  expect(screen.getByText("Groceries")).toBeInTheDocument();
  expect(screen.getByText("$150.00")).toBeInTheDocument();
});
```

---

## 9. Performance & Optimization

- **Lazy load** components where applicable.
- Optimize **API calls** with caching strategies.
- Use **Next.js Image Optimization** for images.
- **Minimize re-renders** with memoization (`React.memo`, `useMemo`).
- Use **Server Components** for longer processing components, when needed

---

## 10. Deployment & CI/CD

- **Frontend Hosted on Vercel** with automatic Next.js optimizations.
- **GitHub Actions for CI/CD** ensuring linting & tests run before merging.
- **Sentry for error tracking**.

---

## 11. Code Quality & Best Practices

- **Follow ESLint & Prettier configurations** for consistent code style.
- Use **TypeScript strictly** for type safety.
- Keep functions **pure and modular** for maintainability.
- Document complex logic with **JSDoc-style comments**.

---

## 12. Future Enhancements

- ✅ **Progressive Web App (PWA) Support**.
- ✅ **Dark Mode with Tailwind's Theme Switching**.
- ✅ **Offline Support for Viewing Past Transactions**.

---

## Next Steps

- [ ] Implement API caching with TanStack Query.
- [ ] Develop UI components following shadcn/ui guidelines.
