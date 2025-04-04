import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {ThemeSelector} from "@/components/dashboard/settings/preferences/selectors/theme-selector";
import {LanguageSelector} from "@/components/dashboard/settings/preferences/selectors/language-selector";
import {DateFormatSelector} from "@/components/dashboard/settings/preferences/selectors/date-format-selector";
import {CurrencySelector} from "@/components/dashboard/settings/preferences/selectors/currency-selector";
import {ClientOnlyComponent} from "@/components/client-only-component";

export default async function PreferencesPage() {
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
            <ClientOnlyComponent>
              <ThemeSelector/>
            </ClientOnlyComponent>
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
            <ClientOnlyComponent>
              <LanguageSelector/>
            </ClientOnlyComponent>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date-format">Date Format</Label>
            <ClientOnlyComponent>
              <DateFormatSelector/>
            </ClientOnlyComponent>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <ClientOnlyComponent>
              <CurrencySelector/>
            </ClientOnlyComponent>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>);
}
