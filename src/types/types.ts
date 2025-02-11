import {LucideIcon} from "lucide-react";
import {supportedCurrencies} from "@/app/dashboard/settings/preferences/supported-currencies";

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface MenuItem {
  icon: LucideIcon
  label: string
  path: string
}

export interface SettingsTab {
  label: string
  value: string
  href: string
}

export interface SupportedLanguage {
  label: string
  value: string
}

export interface SupportedTheme {
  label: 'Light' | 'Dark' | 'System'
  value: 'light' | 'dark' | 'system'
}

export interface SupportedDateFormat {
  label: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY/MM/DD'
  value: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY/MM/DD'
}

export interface SupportedCurrency {
  label: string
  value: string
}
