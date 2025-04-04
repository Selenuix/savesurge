import {UserInfo} from "@/components/dashboard/user-info";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

export default async function Dashboard() {
  const supabase = await createClient()

  const {data, error} = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/signin')
  }

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold pb-4">Overview</h1>
      <UserInfo user={data.user}/>
    </>
  )
}
