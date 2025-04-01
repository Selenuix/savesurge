'use client';

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useActionState, useEffect} from "react";
import {setUserDefaults, signin} from "@/actions/auth";
import {useRouter} from "next/navigation";
import {type AppSettings} from "@/components/dashboard/settings/app-settings";
import {useLocalStorage} from "@uidotdev/usehooks";

export function SigninForm() {
  const [state, action, pending] = useActionState(signin, undefined)
  const [settings, saveSettings] = useLocalStorage<AppSettings | null>("settings", null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (state?.success) {
        if (!settings) {
          const defaultSettings: AppSettings = await setUserDefaults();
          saveSettings(defaultSettings);
        }
        router.push(state.redirectTo);
      }
    })();
  }, [state, router, settings, saveSettings]);

  return (<form action={action}>
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign In</CardTitle>
        <CardDescription>
          Enter your information to log in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
          {state?.errors?.password && <p className="text-sm text-red-500">{state.errors.password}</p>}

          <Button type="submit" className="w-full" disabled={pending}>
            Sign In
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="underline">
            Sign Up
          </Link>
        </div>
      </CardContent>
    </Card>
  </form>)
}
