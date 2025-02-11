export interface AvailableNotification {
  id: string
  title: string
  description: string
}

export const availableNotifications: AvailableNotification[] = [
  {
    id: 'budget-alerts',
    title: 'Budget Alerts',
    description: "Receive notifications when you're close to your budget limits"
  },
  {
    id: 'unusual-activity',
    title: 'Unusual Activity',
    description: 'Get notified about suspicious transactions'
  },
  {
    id: 'new-features',
    title: 'New Features',
    description: 'Learn about new features and updates'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Receive marketing emails and newsletters'
  },
]
