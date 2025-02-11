import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {getUserProfile} from "@/utils/supabase/server";

export default async function SettingsPage() {
  const profile = await getUserProfile();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Update your personal information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="Enter your first name"
                  defaultValue={profile?.firstname || ''}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Enter your last name"
                  defaultValue={profile?.lastname || ''}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                defaultValue={profile?.username || ''}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                defaultValue={profile?.email || ''}
                disabled
              />
            </div>
          </div>

          <div className="flex justify-start">
            <Button variant="default">
              Save changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
