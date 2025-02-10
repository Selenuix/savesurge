'use client';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {Button} from "@/components/ui/button";
import {MenuItem} from "@/types/types";
import {useRouter} from "next/navigation";
import {menuItems} from "@/consts";

export function SidebarNavigation() {
  const router = useRouter();
  const navigate = (path: string) => router.push(path);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {menuItems.map((item: MenuItem) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => navigate(item.path)}
                >
                  <item.icon className="mr-2 h-4 w-4"/>
                  <span>{item.label}</span>
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
