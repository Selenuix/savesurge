import {ReactNode} from "react";
import {Sidebar, SidebarContent, SidebarFooter, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {SidebarToggle} from "@/components/dashboard/sidebar/sidebar-toggle";
import {UserProfileDropdown} from "@/components/dashboard/sidebar/user-profile-dropdown";
import {SidebarNavigation} from "@/components/dashboard/sidebar/sidebar-navigation";
import {Toaster} from "@/components/ui/toaster";

export default function DashboardLayout({children}: { children: ReactNode }) {
  return (
    <SidebarProvider open={true}>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar collapsible='offcanvas' variant='sidebar'>
          <SidebarContent>
            <SidebarNavigation/>
          </SidebarContent>
          <SidebarFooter>
            <UserProfileDropdown/>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <div className="p-8">
            <SidebarTrigger className="mb-4 lg:hidden">
              <SidebarToggle/>
            </SidebarTrigger>
            {children}
            <Toaster/>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
