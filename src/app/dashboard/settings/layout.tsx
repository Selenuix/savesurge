import {ReactNode} from "react";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {SettingsTab} from "@/types/types";
import {settingTabs} from "./setting-tabs";

export default function ProfileLayout({children}: { children: ReactNode }) {
  return (<div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold tracking-tight">Profile Settings</h2>
      <p className="text-muted-foreground">
        Manage your account settings and preferences.
      </p>
    </div>

    <div className="space-y-6">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          {settingTabs.map((tab: SettingsTab, key: number) => (<TabsTrigger
            key={key}
            value={tab.value}
            className={cn("data-[state=active]:bg-transparent", "data-[state=active]:shadow-none", "rounded-none", "border-b-2", "border-transparent", "data-[state=active]:border-primary", "pb-3",)}
            asChild
          >
            <Link href={tab.href}>
              {tab.label}
            </Link>
          </TabsTrigger>))}
        </TabsList>
      </Tabs>
      {children}
    </div>
  </div>);
}
