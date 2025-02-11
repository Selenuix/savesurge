export interface SupportedDateFormat {
  label: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY/MM/DD'
  value: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY/MM/DD'
}

export const supportedDateFormats: SupportedDateFormat[] = [
  {label: "DD/MM/YYYY", value: "DD/MM/YYYY"},
  {label: "MM/DD/YYYY", value: "MM/DD/YYYY"},
  {label: "YYYY/MM/DD", value: "YYYY/MM/DD"},
];
