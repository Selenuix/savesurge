export interface NotificationSettings {
  [key: string]: boolean
}

export interface AppSettings {
  theme: 'system' | 'dark' | 'light';
  language: string;
  dateFormat: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY/MM/DD';
  currency: string;
  notification: NotificationSettings
}

export const defaultSettings: AppSettings = {
  theme: 'system',
  language: 'en-GB',
  dateFormat: 'DD/MM/YYYY',
  currency: 'EUR',
  notification: {
    "budget-alerts": false, "new-features": false, "marketing": false, "unusual-activity": false
  }
}
