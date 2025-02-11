import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {Logout} from "@/components/auth/logout";

export async function UserInfo() {
  const supabase = await createClient()

  const {data, error} = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/signin')
  }

  return (<div>
    <p>Hello <span className='font-bold'>{data.user.email}</span></p>
  </div>)
}
