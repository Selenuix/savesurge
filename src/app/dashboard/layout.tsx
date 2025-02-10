import {ReactNode} from "react";
import {Sidebar, SidebarContent, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {SidebarToggle} from "@/components/dashboard/sidebar-toggle";
import {UserProfileDropdown} from "@/components/dashboard/sidebar/user-profile-dropdown";
import {SidebarNavigation} from "@/components/dashboard/sidebar/sidebar-navigation";

export default function DashboardLayout({children}: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar>
          <SidebarContent>
            <SidebarNavigation/>
            <UserProfileDropdown/>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <div className="p-8">
            <SidebarTrigger className="mb-4 lg:hidden">
              <SidebarToggle/>
            </SidebarTrigger>
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>);
}
