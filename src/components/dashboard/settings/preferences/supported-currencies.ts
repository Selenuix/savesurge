export interface SupportedCurrency {
  label: string
  value: string
}

export const supportedCurrencies: SupportedCurrency[] = [
  {label: "EUR (€)", value: "EUR"},
  {label: "USD ($)", value: "USD"},
  {label: "GBP (£)", value: "GBP"}
];
