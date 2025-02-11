import {createBrowserClient} from '@supabase/ssr'
import {Database, Tables} from "@/types/database.types";

export function createClient() {
  return createBrowserClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

export async function getUserProfile(): Promise<Tables<"profiles"> | string | null> {
  const supabase = createClient()
  const {data: {user}} = await supabase.auth.getUser();

  if (!user?.id) {
    return null
  }

  const {data, error} = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) {
    return error.message
  }

  return data

}
