'use client'

import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {supportedThemes} from "@/app/dashboard/settings/preferences/supported-themes";
import type {SupportedTheme} from "@/types/types";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export function ThemeSelector() {
  return (
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
  )
}
