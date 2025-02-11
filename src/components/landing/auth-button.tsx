import {createClient} from "@/utils/supabase/server";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {LayoutDashboard, LogIn} from "lucide-react";

export async function AuthButton() {
  const supabase = await createClient();
  const {data: {user}} = await supabase.auth.getUser();

  return (
    <Button asChild>
      <Link href={user ? "/dashboard" : "/signin"}>
        {user ? (
          <>
            <LayoutDashboard className="mr-0 h-4 w-4"/>
            Dashboard
          </>
        ) : (
          <>
            <LogIn className="mr-0 h-4 w-4"/>
            Sign In
          </>
        )}
      </Link>
    </Button>
  );
}
