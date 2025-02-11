"use client";

import {ReactNode} from "react";
import {Toaster} from "@/components/ui/toaster";

export default function AuthLayout({children}: { children: ReactNode }) {

  return (<div className="flex min-h-screen items-center justify-center">
    <div className="w-full max-w-md">{children}</div>
    <Toaster/>
  </div>);
}
