export type BudgetPeriod = "daily" | "weekly" | "monthly" | "yearly";

export interface BudgetFormData {
  name: string;
  amount: string;
  currency: string;
  period: BudgetPeriod;
  category: string;
  startDate: string;
  endDate?: string;
}

export interface Budget extends Omit<BudgetFormData, 'amount'> {
  id: string;
  amount: number;
  spent: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
} 