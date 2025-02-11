'use client'

import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {supportedLanguages} from "@/app/dashboard/settings/preferences/supported-languages";
import type {SupportedLanguage} from "@/types/types";

export function LanguageSelector() {
  return (
    <div className="space-y-2">
      <Label htmlFor="language">Language</Label>
      <Select defaultValue="en-GB">
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
  )
}
