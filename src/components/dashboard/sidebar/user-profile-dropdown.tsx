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
import {Skeleton} from "@/components/ui/skeleton";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {getUserProfile} from "@/utils/supabase/client";

export function UserProfileDropdown() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProfile() {
      try {
        const profile = await getUserProfile()
        setUserProfile(profile)
      } finally {
        setLoading(false)
      }
    }

    getProfile()
  }, []);

  const navigate = (path: string) => router.push(path);

  return (<DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="w-full flex items-center justify-between p-0">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {loading ? (<Skeleton className="h-8 w-8 rounded-full bg-gray-600"/>) : (
              <Avatar>
                <AvatarImage src={userProfile?.avatar_url}/>
              </Avatar>
            )}
          </div>
          <div className="text-left flex-1 min-w-0">
            {loading ? (<div className="space-y-1.5 ">
              <Skeleton className="h-5 w-32 bg-gray-600"/>
              <Skeleton className="h-4 w-40 bg-gray-600"/>
            </div>) : (<>
              <p className="text-sm font-semibold truncate">{userProfile?.username}</p>
              <p className="text-xs text-muted-foreground truncate">{userProfile?.email}</p>
            </>)}
          </div>
        </div>
        <ChevronDown className="h-4 w-4 ml-2 flex-shrink-0"/>
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
  </DropdownMenu>);
}
