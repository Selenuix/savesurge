'use client'

import {Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useSidebar} from "@/components/ui/sidebar";

export function SidebarToggle() {
  const {state} = useSidebar();
  const isOpen: boolean = state === "expanded";

  return (
    <Button variant="outline" size="icon">
      {isOpen ? (
        <X className="h-4 w-4"/>
      ) : (
        <Menu className="h-4 w-4"/>
      )}
    </Button>
  );
}
