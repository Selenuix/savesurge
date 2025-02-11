'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {type SupportedTheme, supportedThemes} from "@/components/dashboard/settings/preferences/supported-themes";
import {useLocalStorage} from "@uidotdev/usehooks";
import {AppSettings, defaultSettings} from "@/components/dashboard/settings/app-settings";
import {useToast} from "@/hooks/use-toast";

export function ThemeSelector() {
  const {toast} = useToast()
  const [settings, setSettings] = useLocalStorage<AppSettings>("settings", defaultSettings);

  const handleThemeChange = (value: 'system' | 'light' | 'dark') => {
    setSettings(prev => ({
      ...prev, theme: value
    }));
    toast({title: "Settings saved!", description: "Your preferences have been updated."});

  };

  return (<Select value={settings?.theme} onValueChange={handleThemeChange}>
    <SelectTrigger id="theme">
      <SelectValue placeholder="Select theme"/>
    </SelectTrigger>
    <SelectContent>
      {supportedThemes.map((theme: SupportedTheme) => (<SelectItem key={theme.value} value={theme.value}>
        {theme.label}
      </SelectItem>))}
    </SelectContent>
  </Select>);
}
