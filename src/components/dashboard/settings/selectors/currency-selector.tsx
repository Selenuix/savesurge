'use client'

import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {supportedCurrencies, type SupportedCurrency} from "@/app/dashboard/settings/preferences/supported-currencies";
import {useLocalStorage} from "@uidotdev/usehooks";

export function CurrencySelector() {
  const [currencySettings, setCurrencySettings] = useLocalStorage<Record<string, boolean>>(
    "settings",
    {}
  )

  const handleChange = (value: any) => {
    console.log(value)
    /*setCurrencySettings(prev => ({
      ...prev,
      currency: value
    }))*/
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="currency">Currency</Label>
      <Select defaultValue="EUR">
        <SelectTrigger id="currency">
          <SelectValue placeholder="Select currency"/>
        </SelectTrigger>
        <SelectContent>
          {supportedCurrencies.map((currency: SupportedCurrency) => (
            <SelectItem key={currency.value} value={currency.value} onChange={() => handleChange}>
              {currency.label}
            </SelectItem>))}
        </SelectContent>
      </Select>
    </div>
  )
}
