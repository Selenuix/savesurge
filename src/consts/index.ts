import {BanknoteIcon, BellIcon, LineChart, PieChart, SearchIcon, Shield, TagsIcon, Wallet,} from "lucide-react";
import {Feature} from "@/types/types";

export const features: Feature[] = [{
  icon: Wallet,
  title: "Bank Account Integration",
  description: "Securely connect multiple bank accounts and automatically sync your transactions in real-time through our banking partners."
}, {
  icon: TagsIcon,
  title: "Smart Expense Tracking",
  description: "Automatically categorize your transactions and track spending patterns with custom tags and categories for better organization."
}, {
  icon: BanknoteIcon,
  title: "Budgeting Made Simple",
  description: "Set personalized weekly or monthly spending limits by category and track your progress with visual indicators."
}, {
  icon: PieChart,
  title: "Visual Financial Insights",
  description: "Get a clear picture of your finances with intuitive charts showing income vs expenses and category-wise spending breakdowns."
}, {
  icon: LineChart,
  title: "Spending Analytics",
  description: "Track your financial trends over time with detailed analytics and discover your spending patterns to make better decisions."
}, {
  icon: SearchIcon,
  title: "Advanced Transaction Search",
  description: "Easily find any transaction with powerful search and filtering options by date, category, or amount."
}, {
  icon: BellIcon,
  title: "Smart Notifications",
  description: "Stay on top of your finances with timely alerts for budget limits, unusual spending, and important account updates."
}, {
  icon: Shield,
  title: "Bank-Level Security",
  description: "Rest easy knowing your data is protected with enterprise-grade encryption and secure authentication protocols."
}];
