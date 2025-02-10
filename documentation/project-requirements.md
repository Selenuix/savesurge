# SaveSurge - Project Requirements (MVP)

## Brand Identity

You must define a clear, unique and modern brand identity and use Tailwind to keep it consitent within the app.

## **Key Features for MVP**

> 📘 Info
>
> Every single call to the Yapily API must be done from the backend.

### **1. User Authentication & Onboarding**

- ✅ Sign-up/Login using:
    - Email/password authentication
    - OAuth providers (Google, Apple)
- ✅ Secure authentication via **Supabase Auth**
- ✅ User profile management (basic settings)

---

### **2. Bank Account Integration**

- ✅ Connect external bank accounts securely via **Yapily Connect**
- ✅ Fetch real-time transaction data (balances, spending, income)
- ✅ Automatic transaction synchronization
- ✅ Support multiple bank accounts per user
- ✅ Manual entry for cash transactions

---

### **3. Expense Tracking**

- ✅ Categorization of transactions:
    - Auto-categorization using merchant data
    - User-defined custom categories
- ✅ Search & filter transactions (date, category, amount)
- ✅ Transaction tagging (e.g., “Work,” “Personal”)
- ✅ Export transactions (CSV, PDF)

---

### **4. Budgeting & Spending Limits**

- ✅ Set monthly/weekly spending limits for different categories
- ✅ Track progress against budgeted amounts
- ✅ Notifications for budget overages (future)

---

### **5. Financial Insights & Dashboard**

- ✅ Summary of total income vs. expenses
- ✅ Visual breakdown (pie charts, bar graphs)
- ✅ Trends & patterns (monthly spending trends)
- ✅ Insights into high-spending categories

---

### **6. Security & Data Privacy**

- ✅ Bank-level encryption for user data
- ✅ Secure storage of user credentials via **Supabase Auth**
- ✅ Users can revoke bank account access anytime
- ✅ GDPR & data privacy compliance

---

### **Future Enhancements (Post-MVP)**

- AI-powered financial insights & savings recommendations
- Expense splitting & shared budgeting
- Subscription tracking & management
- Mobile app (React Native/Expo)  
