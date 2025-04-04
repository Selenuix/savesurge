export const NOTIFICATION_CHANNELS = ['email', 'push'] as const;
export type NotificationChannel = typeof NOTIFICATION_CHANNELS[number];

export const CURRENCIES = ['USD', 'EUR', 'GBP'] as const;
export type Currency = typeof CURRENCIES[number];

export const PERIODS = ['daily', 'weekly', 'monthly', 'yearly'] as const;
export type Period = typeof PERIODS[number];

export const DEFAULT_CURRENCY = 'USD';
export const DEFAULT_PERIOD = 'monthly';

export const FORM_VALIDATION_MESSAGES = {
  required: (field: string) => `${field} is required`,
  invalidEmail: 'Please enter a valid email address',
  minLength: (field: string, length: number) => `${field} must be at least ${length} characters`,
  maxLength: (field: string, length: number) => `${field} must not exceed ${length} characters`,
} as const; 