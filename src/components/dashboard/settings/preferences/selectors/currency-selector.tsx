'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {
  supportedCurrencies,
  type SupportedCurrency
} from "@/components/dashboard/settings/preferences/supported-currencies";
import {useLocalStorage} from "@uidotdev/usehooks";
import {AppSettings, defaultSettings} from "@/components/dashboard/settings/app-settings";
import {useToast} from "@/hooks/use-toast";

export function CurrencySelector() {
  const {toast} = useToast()
  const [settings, setSettings] = useLocalStorage<AppSettings>("settings", defaultSettings);

  const handleCurrencyChange = (value: string) => {
    setSettings(prev => ({
      ...prev, currency: value
    }));
    toast({title: "Settings saved!", description: "Your preferences have been updated."});
  };

  return (<Select defaultValue={settings?.currency} onValueChange={handleCurrencyChange}>
    <SelectTrigger id="currency">
      <SelectValue placeholder="Select currency"/>
    </SelectTrigger>
    <SelectContent>
      {supportedCurrencies.map((currency: SupportedCurrency) => (
        <SelectItem key={currency.value} value={currency.value}>
          {currency.label}
        </SelectItem>))}
    </SelectContent>
  </Select>)
}
