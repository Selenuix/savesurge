'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {
  type SupportedLanguage,
  supportedLanguages
} from "@/components/dashboard/settings/preferences/supported-languages";
import {useLocalStorage} from "@uidotdev/usehooks";
import {AppSettings, defaultSettings} from "@/components/dashboard/settings/app-settings";
import {useToast} from "@/hooks/use-toast";

export function LanguageSelector() {
  const {toast} = useToast()
  const [settings, setSettings] = useLocalStorage<AppSettings>("settings", defaultSettings);

  const handleLanguageChange = (value: string) => {
    setSettings(prev => ({
      ...prev, language: value
    }));
    toast({title: "Settings saved!", description: "Your preferences have been updated."});
  };

  return (<Select defaultValue={settings?.language} onValueChange={handleLanguageChange}>
    <SelectTrigger id="language">
      <SelectValue placeholder="Select language"/>
    </SelectTrigger>
    <SelectContent>
      {supportedLanguages.map((language: SupportedLanguage) => (<SelectItem key={language.value} value={language.value}>
        {language.label}
      </SelectItem>))}
    </SelectContent>
  </Select>)
}
