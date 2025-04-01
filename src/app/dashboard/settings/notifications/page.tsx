import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Notification} from "@/components/dashboard/settings/notifications/notification";
import {
  AvailableNotification,
  availableNotifications
} from "@/components/dashboard/settings/notifications/available-notifications";
import {ClientOnlyComponent} from "@/components/client-only-component";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "SaveSurge - Settings",
};

export default function NotificationsPage() {
  return (<div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what notifications you want to receive
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {availableNotifications.map((notification: AvailableNotification, key: number) => {
            return (
              <ClientOnlyComponent>
                <Notification
                  key={key}
                  id={notification.id}
                  title={notification.title}
                  description={notification.description}
                />
              </ClientOnlyComponent>
            );
          })}
        </div>
      </CardContent>
    </Card>
  </div>);
}
