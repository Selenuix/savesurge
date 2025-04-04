export type AlertType = 'budget' | 'balance' | 'transaction' | 'category';

export interface BaseAlert {
  id: string;
  name: string;
  type: AlertType;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface BudgetAlert extends BaseAlert {
  type: 'budget';
  budgetId: string;
  threshold: number; // percentage
  notificationChannels: string[];
}

export interface BalanceAlert extends BaseAlert {
  type: 'balance';
  accountId: string;
  threshold: number;
  condition: 'below' | 'above';
  notificationChannels: string[];
}

export interface TransactionAlert extends BaseAlert {
  type: 'transaction';
  amount: number;
  condition: 'below' | 'above';
  category?: string;
  notificationChannels: string[];
}

export interface CategoryAlert extends BaseAlert {
  type: 'category';
  category: string;
  threshold: number;
  period: 'daily' | 'weekly' | 'monthly';
  notificationChannels: string[];
}

export type Alert = BudgetAlert | BalanceAlert | TransactionAlert | CategoryAlert;

export interface AlertFormData {
  name: string;
  type: AlertType;
  isActive: boolean;
  // Budget Alert
  budgetId?: string;
  // Balance Alert
  accountId?: string;
  threshold?: number;
  condition?: 'below' | 'above';
  // Transaction Alert
  amount?: number;
  // Category Alert
  category?: string;
  period?: 'daily' | 'weekly' | 'monthly';
  notificationChannels: string[];
} 