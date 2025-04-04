export interface SettingsTab {
  label: string
  value: string
  href: string
}

export const settingTabs: SettingsTab[] = [
  {
    label: "General",
    value: "general",
    href: "/dashboard/settings"
  },
  {
    label: "Security",
    value: "security",
    href: "/dashboard/settings/security"
  },
  {
    label: "Notifications",
    value: "notifications",
    href: "/dashboard/settings/notifications"
  },
  {
    label: "Preferences",
    value: "preferences",
    href: "/dashboard/settings/preferences"
  }
]
