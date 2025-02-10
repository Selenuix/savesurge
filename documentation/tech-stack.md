# SaveSurge - Technical Requirements (MVP)

## Frontend: Next.js

- **Framework:** Next.js
- **Routing & State Management:** TanStack Router
- **UI Library:** shadcn/ui
- **Data Display:** TanStack Tables
- **API Integration:** REST APIs (Yapily)
- **Authentication:** Supabase Auth
- **Styling:** Tailwind CSS

---

## Backend: Supabase

- **Authentication & User Management:** Supabase Auth
- **Bank Integration:** Yapily Connect API
- **Database:** Supabase (PostgresSQL)
- **Transactions Processing:** Fetch, store and categorize transactions
- **Budget Logic:** Set and track user-defined spending limits
- **Security:** OAuth2, JWT authentication

---

## Infrastructure & Deployment

- **Hosting:** Vercel (Frontend)
- **Database Hosting:** Supabase (PostgresSQL)
- **CI/CD:** GitHub Actions for automated deployments
- **Monitoring & Logging:** Sentry, Datahog, Vercel OpenTelemetry
- **Testing:** Vitest
- **Utils:** Husky, conventional commits, conventional changelogs, semantic versioning
