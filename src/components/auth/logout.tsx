'use client'

import {createClient} from "@/utils/supabase/client";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import {useRouter} from "next/navigation";

export function Logout() {
  const supabase = createClient()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/signin')
  };

  return (
    <Button variant="outline" onClick={handleSignOut}>
      <LogOut className="mr-2 h-4 w-4"/> Sign Out
    </Button>
  )
}
