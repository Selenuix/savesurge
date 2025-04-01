'use client';

import {SigninForm} from "@/components/auth/signin-form";
import AuthLayout from "@/app/(auth)/layout";
import {ClientOnlyComponent} from "@/components/client-only-component";

export default function SignInPage() {
  
  return (<AuthLayout>
    <ClientOnlyComponent>
      <SigninForm/>
    </ClientOnlyComponent>
  </AuthLayout>)
}
