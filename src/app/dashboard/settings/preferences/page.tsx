import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {supportedThemes} from "@/app/dashboard/settings/preferences/supported-themes";
import {SupportedCurrency, SupportedDateFormat, SupportedLanguage, SupportedTheme} from "@/types/types";
import {supportedLanguages} from "@/app/dashboard/settings/preferences/supported-languages";
import {supportedDateFormats} from "@/app/dashboard/settings/preferences/supported-date-formats";
import {supportedCurrencies} from "@/app/dashboard/settings/preferences/supported-currencies";
import {SaveSettings} from "@/components/dashboard/settings/save-preferences";

export default function PreferencesPage() {
  return (<div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize how SaveSurge looks on your device
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <Select defaultValue="system">
              <SelectTrigger id="theme">
                <SelectValue placeholder="Select theme"/>
              </SelectTrigger>
              <SelectContent>
                {supportedThemes.map((theme: SupportedTheme) => (<SelectItem key={theme.value} value={theme.value}>
                  {theme.label}
                </SelectItem>))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Regional Settings</CardTitle>
        <CardDescription>
          Customize language and regional preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en-US">
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language"/>
              </SelectTrigger>
              <SelectContent>
                {supportedLanguages.map((language: SupportedLanguage) => (
                  <SelectItem key={language.value} value={language.value}>
                    {language.label}
                  </SelectItem>))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date-format">Date Format</Label>
            <Select defaultValue="MM/DD/YYYY">
              <SelectTrigger id="date-format">
                <SelectValue placeholder="Select date format"/>
              </SelectTrigger>
              <SelectContent>
                {supportedDateFormats.map((format: SupportedDateFormat) => (
                  <SelectItem key={format.value} value={format.value}>
                    {format.label}
                  </SelectItem>))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <Select defaultValue="USD">
              <SelectTrigger id="currency">
                <SelectValue placeholder="Select currency"/>
              </SelectTrigger>
              <SelectContent>
                {supportedCurrencies.map((currency: SupportedCurrency) => (
                  <SelectItem key={currency.value} value={currency.value}>
                    {currency.label}
                  </SelectItem>))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <SaveSettings variant='default'/>
      </CardContent>
    </Card>
  </div>);
}
