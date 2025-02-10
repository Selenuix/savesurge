import {LucideIcon} from "lucide-react";

export interface Feature {
  icon: LucideIcon,
  title: string,
  description: string,
}

export interface MenuItem {
  icon: LucideIcon,
  label: string,
  path: string
}
