'use server'

import {createClient} from '@/utils/supabase/server'
import {redirect} from "next/navigation"
import {revalidatePath} from "next/cache";
import {signinFormSchema, signupFormSchema} from "@/lib/definitions";

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const validatedFields = signupFormSchema.safeParse({
    firstname: formData.get('firstname') as string,
    lastname: formData.get('lastname') as string,
    username: formData.get('username') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors

    return {
      errors: {
        firstname: fieldErrors.firstname || [],
        lastname: fieldErrors.lastname || [],
        username: fieldErrors.username || [],
        email: fieldErrors.email || [],
        password: fieldErrors.password || [],
      },
    }
  }

  const {firstname, lastname, username, email, password} = validatedFields.data;

  try {
    const {data, error} = await supabase.auth.signUp({
      email, password,
    })

    if (error) {
      console.error('Signup Error:', error)
      return {
        errors: {
          server: [error.message],
        },
      }
    }

    // Create user profile
    if (data?.user?.id) {
      const {error: profileError} = await supabase
        .from('profiles')
        .insert({
          id: data.user.id, email, firstname, lastname, username,
        })

      if (profileError) {
        console.error('Profile Creation Error:', profileError);
        return {
          errors: {
            server: [profileError.message],
          },
        }
      }
    }

    return {success: true, redirectTo: '/dashboard'};
  } catch (err) {
    console.error('Unexpected Error:', err);
    return {
      errors: {
        server: ['An unexpected error occurred'],
      },
    };
  }
}

export async function signin(formData: FormData) {
  const supabase = await createClient()
  let redirectPath: string | null = null

  const validatedFields = signinFormSchema.safeParse({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  })

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors

    return {
      errors: {
        email: fieldErrors.email || [],
        password: fieldErrors.password || [],
      },
    }
  }

  const {email, password} = validatedFields.data

  try {
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Signin Error:', error)
      return {
        errors: {
          email: [error.message],
          password: [],
        },
      }
    }

    revalidatePath('/dashboard', 'layout')
    redirectPath = `/dashboard`
  } catch (err) {
    console.error('Unexpected Error:', err)

    return {
      errors: {
        email: ['An unexpected error occurred'],
        password: [],
      },
    }
  } finally {
    if (redirectPath) {
      redirect(redirectPath)
    }
  }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/signin')
}
