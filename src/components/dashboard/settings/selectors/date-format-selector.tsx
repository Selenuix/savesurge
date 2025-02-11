'use client'

import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {supportedDateFormats} from "@/app/dashboard/settings/preferences/supported-date-formats";
import type {SupportedDateFormat} from "@/types/types";

export function DateFormatSelector() {
  return (
    <div className="space-y-2">
      <Label htmlFor="date-format">Date Format</Label>
      <Select defaultValue="DD/MM/YYYY">
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
  )
}
