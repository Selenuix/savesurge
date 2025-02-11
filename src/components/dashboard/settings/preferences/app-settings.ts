export interface AppSettings {
  theme: 'system' | 'dark' | 'light';
  language: string;
  dateFormat: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY/MM/DD';
  currency: string;
}

export const defaultSettings: AppSettings = {
  theme: 'system',
  language: 'en-GB',
  dateFormat: 'DD/MM/YYYY',
  currency: 'EUR'
}
