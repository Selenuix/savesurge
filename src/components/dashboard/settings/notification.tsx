'use client'

import {Label} from "@/components/ui/label"
import {Switch} from "@/components/ui/switch"
import {useLocalStorage} from "@uidotdev/usehooks"

interface NotificationProps {
  id: string
  title: string
  description: string
}

export function Notification({title, description, id}: NotificationProps) {
  const [notificationSettings, setNotificationSettings] = useLocalStorage<Record<string, boolean>>(
    "notification-settings",
    {}
  )

  const handleToggle = (value: boolean) => {
    setNotificationSettings(prev => ({
      ...prev,
      [id]: value
    }))
  }

  return (
    <div className="flex items-center justify-between space-x-2">
      <Label htmlFor={id} className="flex flex-col space-y-1">
        <span className="font-bold">{title}</span>
        <span className="font-normal text-sm text-muted-foreground">{description}</span>
      </Label>
      <Switch id={id} onCheckedChange={handleToggle} checked={notificationSettings?.[id] ?? false}/>
    </div>
  )
}
