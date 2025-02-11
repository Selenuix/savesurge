import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Notification} from "@/components/dashboard/settings/notification";
import {AvailableNotification, availableNotifications} from "@/components/dashboard/settings/available-notifications";

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
          {availableNotifications.map((notification: AvailableNotification) => {
            return (<Notification
              id={notification.id}
              title={notification.title}
              description={notification.description}
            />);
          })}
        </div>
      </CardContent>
    </Card>
  </div>);
}
