'use client'

import {Label} from "@/components/ui/label"
import {Switch} from "@/components/ui/switch"
import {useLocalStorage} from "@uidotdev/usehooks"
import {AppSettings, defaultSettings} from "@/components/dashboard/settings/app-settings";

interface NotificationProps {
  id: string
  title: string
  description: string
}

export function Notification({title, description, id}: NotificationProps) {
  const [settings, setSettings] = useLocalStorage<AppSettings>("settings", defaultSettings);

  const handleToggle = (value: boolean) => {
    setSettings(prev => ({
      ...prev, notification: {
        ...prev.notification, [id]: value
      }
    }));
  };

  return (
    <div className="flex items-center justify-between space-x-2">
      <Label htmlFor={id} className="flex flex-col space-y-1">
        <span className="font-bold">{title}</span>
        <span className="font-normal text-sm text-muted-foreground">{description}</span>
      </Label>
      <Switch
        id={id}
        onCheckedChange={handleToggle}
        checked={settings.notification?.[id] ?? false}
      />
    </div>)
}
