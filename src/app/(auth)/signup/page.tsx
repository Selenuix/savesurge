import {SignupForm} from "@/components/auth/signup-form";
import AuthLayout from "@/app/(auth)/layout";

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignupForm/>
    </AuthLayout>
  )
}
