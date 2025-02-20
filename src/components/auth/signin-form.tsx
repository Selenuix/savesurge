'use client';

import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useActionState, useEffect, useState} from "react";
import {signin} from "@/actions/auth";
import {type AppSettings, defaultSettings} from "@/components/dashboard/settings/app-settings";
import {useLocalStorage} from "@uidotdev/usehooks";

export function SigninForm() {
  const [settings, saveSettings] = useLocalStorage<AppSettings | undefined>("settings");
  const [state, action, pending] = useActionState(undefined, signin)
  const [errorMessages, setErrorMessages] = useState<{ email: string[]; password: string[] }>({
    email: [],
    password: []
  });

  useEffect(() => {
    if (!settings) {
      saveSettings(defaultSettings);
    }
  }, [settings, saveSettings]);

  useEffect(() => {
    if (state?.errors) {
      setErrorMessages(state.errors);
    }
  }, [state]);

  return (<form action={action}>
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign In</CardTitle>
        <CardDescription>
          Enter your information to log in
        </CardDescription>
      </CardHeader>
      <CardContent>
        {errorMessages.email.length > 0 && (
          <div className="mb-4 text-red-600">
            {errorMessages.email.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        {errorMessages.password.length > 0 && (
          <div className="mb-4 text-red-600">
            {errorMessages.password.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
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
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required/>
          </div>

          <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Signing In..." : "Sign In"}
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
