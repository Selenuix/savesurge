'use client';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";
import {Button} from "@/components/ui/button";
import {MenuItem} from "@/types/types";
import {useRouter} from "next/navigation";
import {useActiveRoute} from "@/utils/navigation";
import {cn} from "@/lib/utils";
import {menuItems} from "@/components/dashboard/sidebar/menu-items";

export function SidebarNavigation() {
  const router = useRouter();
  const {setOpenMobile} = useSidebar();
  const {isActive} = useActiveRoute();
  const navigate = (path: string) => router.push(path);

  const handleNavigate = (path: string) => {
    setOpenMobile(false)
    navigate(path)
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {menuItems.map((item: MenuItem) => {
            const active: boolean = isActive(item.path);

            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild isActive={active}>
                  <Button
                    variant={active ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      active && "bg-muted"
                    )}
                    onClick={() => handleNavigate(item.path)}
                  >
                    <item.icon className={cn(
                      "mr-2 h-4 w-4",
                      active && "text-primary"
                    )}/>
                    <span>{item.label}</span>
                  </Button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
