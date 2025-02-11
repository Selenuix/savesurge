import {usePathname} from "next/navigation";

export function useActiveRoute() {
  const pathname = usePathname();

  return {
    isActive: (path: string) => {
      if (path === '/dashboard' && pathname === '/dashboard') {
        return true;
      }
      return pathname.startsWith(path) && path !== '/dashboard';
    }
  };
}
