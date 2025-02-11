import {MenuItem} from "@/types/types";
import {Bell, CreditCard, LayoutDashboard, LineChart, PieChart, Settings, Wallet} from "lucide-react";

export const menuItems: MenuItem[] = [{
  icon: LayoutDashboard, label: "Overview", path: "/dashboard"
}, {
  icon: Wallet, label: "Accounts", path: "/dashboard/accounts"
}, {
  icon: CreditCard, label: "Transactions", path: "/dashboard/transactions"
}, {
  icon: LineChart, label: "Analytics", path: "/dashboard/analytics"
}, {
  icon: PieChart, label: "Budgets", path: "/dashboard/budgets"
}, {
  icon: Bell, label: "Alerts", path: "/dashboard/alerts"
}];
