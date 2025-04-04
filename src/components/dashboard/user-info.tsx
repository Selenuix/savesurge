import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation"
import {constants} from "node:http2"

export async function UserInfo({user}: { user: any }) {
  const supabase = await createClient()

  const {data, error, status} = await supabase
    .from('profiles')
    .select(`firstname`)
    .eq('id', user!.id)
    .single()

  if (error && status !== constants.HTTP_STATUS_NOT_ACCEPTABLE) {
    console.log(error)
    redirect('/signin')
  }

  if (data) {
    return (<div>
      <p className="text-muted-foreground">Welcome back, {data.firstname}</p>
    </div>)
  }
}
