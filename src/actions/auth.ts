'use server';

import {FormState, SigninFormSchema, SignupFormSchema} from '@/lib/definitions'
import {createClient} from '@/utils/supabase/server'
import {cookies} from "next/headers";
import {defaultSettings} from "@/components/dashboard/settings/app-settings";
import {redirect} from "next/navigation";


export async function signup(state: FormState, formData: FormData) {
  const supabase = await createClient();

  // Validate the input fields
  const validatedFields = SignupFormSchema.safeParse({
    firstname: formData.get('firstname') as string,
    lastname: formData.get('lastname') as string,
    username: formData.get('username') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;

    return {
      errors: {
        firstname: fieldErrors.firstname || [],
        lastname: fieldErrors.lastname || [],
        username: fieldErrors.username || [],
        email: fieldErrors.email || [],
        password: fieldErrors.password || [],
      },
    };
  }

  const {firstname, lastname, username, email, password} = validatedFields.data;

  try {
    const {data, error} = await supabase.auth.signUp({
      email, password,
    });

    if (error) {
      console.error('Signup Error:', error);
      return {
        errors: {
          server: [error.message],
        },
      };
    }

    // Insert into profiles table if user exists
    if (data?.user?.id) {
      const {error: profileError} = await supabase
        .from('profiles')
        .insert({
          id: data.user.id, firstname, lastname, username,
        });

      if (profileError) {
        console.error('Profile Creation Error:', profileError);
        return {
          errors: {
            server: [profileError.message],
          },
        };
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

export async function signin(state: FormState, formData: FormData) {
  const supabase = await createClient()

  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get('email') as string, password: formData.get('password') as string,
  })

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;

    return {
      errors: {
        email: fieldErrors.email || [], password: fieldErrors.password || [],
      },
    };
  }

  const {email, password} = validatedFields.data;

  try {
    const {error} = await supabase.auth.signInWithPassword({
      email, password,
    });

    if (error) {
      console.error('Signin Error:', error);
      return {
        errors: {
          server: [error.message],
        },
      };
    }

    return {success: true, redirectTo: '/dashboard'}
  } catch (err) {
    console.error('Unexpected Error:', err);
    return {
      errors: {
        server: ['An unexpected error occurred'],
      },
    };
  }
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/signin')
}

export async function setUserDefaults() {
  const cookieStore = await cookies()

  cookieStore.set({
    name: "settings", value: JSON.stringify(defaultSettings), httpOnly: true,
  });

  return defaultSettings;
}
