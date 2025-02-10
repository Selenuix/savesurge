'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ChevronDown, LogOut, Settings, User} from "lucide-react";
import {signOut} from "@/actions/auth";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {createClient} from "@/utils/supabase/client";

export function UserProfileDropdown() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    async function getProfile() {
      const {data: {user}} = await supabase.auth.getUser();
      if (user?.id) {
        const {data} = await supabase
          .from('profiles')
          .select('username, email')
          .eq('id', user.id)
          .single();
        setUserProfile(data);
      }
    }

    getProfile();
  }, []);

  const navigate = (path: string) => router.push(path);

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <User className="h-8 w-8 text-muted-foreground"/>
              <div className="text-left">
                <p className="text-sm font-medium">{userProfile?.username || 'Loading...'}</p>
                <p className="text-xs text-muted-foreground">{userProfile?.email || 'Loading...'}</p>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 ml-2"/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem onClick={() => navigate('/dashboard/profile')} className="cursor-pointer">
            <User className="mr-2 h-4 w-4"/>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/dashboard/settings')} className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4"/>
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem onClick={signOut} className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4"/>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
