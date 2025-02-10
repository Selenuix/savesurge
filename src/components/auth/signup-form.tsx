'use client';

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useActionState, useEffect} from "react";
import {signup} from "@/actions/auth";
import {useRouter} from "next/navigation";

export function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push(state.redirectTo);
    }
  }, [state, router]);

  return (
    <form action={action}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" name="firstname" placeholder="Max" required autoFocus={true}/>
              </div>
              {state?.errors?.firstname && <p>{state.errors.firstname}</p>}

              <div className="grid gap-2">
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" name="lastname" placeholder="Robinson" required/>
              </div>
              {state?.errors?.lastname && <p>{state.errors.lastname}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="maxrobinson"
                required
              />
            </div>
            {state?.errors?.username && <p>{state.errors.username}</p>}

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="maxrobinson@example.com"
                required
              />
              {state?.errors?.email && <p>{state.errors.email}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password"/>
            </div>
            {state?.errors?.password && (
              <div className="text-sm text-red-500">
                <p>Password must:</p>
                <ul>
                  {state.errors.password.map((error) => (
                    <li key={error}>- {error}</li>
                  ))}
                </ul>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={pending}>
              Create an account
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/signin" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
