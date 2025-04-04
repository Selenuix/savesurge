import * as React from "react";
import { cn } from "@/lib/utils";
import { GridProps } from "@/types/common";

export function Grid({ cols = 2, gap = 4, children, className }: GridProps) {
  return (
    <div className={cn(`grid grid-cols-${cols} gap-${gap}`, className)}>
      {children}
    </div>
  );
} 