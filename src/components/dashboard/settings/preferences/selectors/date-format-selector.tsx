'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {
  type SupportedDateFormat,
  supportedDateFormats
} from "@/components/dashboard/settings/preferences/supported-date-formats";
import {useLocalStorage} from "@uidotdev/usehooks";
import {AppSettings, defaultSettings} from "@/components/dashboard/settings/preferences/app-settings";
import {useToast} from "@/hooks/use-toast";

export function DateFormatSelector() {
  const {toast} = useToast()
  const [settings, setSettings] = useLocalStorage<AppSettings>("settings", defaultSettings);

  const handleDateFormatChange = (value: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY/MM/DD') => {
    setSettings(prev => ({
      ...prev,
      dateFormat: value
    }));
    toast({title: "Settings saved!", description: "Your preferences have been updated."});
  };

  return (<Select defaultValue={settings?.dateFormat} onValueChange={handleDateFormatChange}>
    <SelectTrigger id="date-format">
      <SelectValue placeholder="Select date format"/>
    </SelectTrigger>
    <SelectContent>
      {supportedDateFormats.map((format: SupportedDateFormat) => (<SelectItem key={format.value} value={format.value}>
        {format.label}
      </SelectItem>))}
    </SelectContent>
  </Select>)
}
