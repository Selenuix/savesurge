import {createServerClient} from '@supabase/ssr'
import {cookies} from 'next/headers'
import {Database, Tables} from "@/types/database.types";

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      }, setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({name, value, options}) => cookieStore.set(name, value, options))
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}

export async function getUserProfile(): Promise<Tables<"profiles"> | string | null> {
  const supabase = await createClient()

  const {data: {user}} = await supabase.auth.getUser()

  if (!user?.id) {
    return null
  }

  // Fetch profile from Supabase
  const {data, error} = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  if (error) {
    return error.message
  }
  return data
}

