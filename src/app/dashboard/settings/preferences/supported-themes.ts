export interface SupportedTheme {
  label: 'Light' | 'Dark' | 'System'
  value: 'light' | 'dark' | 'system'
}

export const supportedThemes: SupportedTheme[] = [
  {label: "System", value: "system"},
  {label: "Light", value: "light"},
  {label: "Dark", value: "dark"},
]
