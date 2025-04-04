'use client';

import {Alert} from "./types";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Pencil, Trash2, Bell} from "lucide-react";
import {useToast} from "@/hooks/use-toast";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {AlertForm} from "./alert-form";

interface AlertsListProps {
  alerts: Alert[];
  budgets?: { id: string; name: string }[];
  accounts?: { id: string; name: string }[];
  categories?: string[];
  onUpdate: (id: string, data: any) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export function AlertsList({alerts, budgets, accounts, categories, onUpdate, onDelete}: AlertsListProps) {
  const {toast} = useToast();

  const handleDelete = async (id: string) => {
    try {
      await onDelete(id);
      toast({
        title: "Success",
        description: "Alert deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete alert",
        variant: "destructive",
      });
    }
  };

  const getAlertDescription = (alert: Alert) => {
    switch (alert.type) {
      case 'budget':
        return `Alert when budget reaches ${alert.threshold}%`;
      case 'balance':
        return `Alert when balance goes ${alert.condition} ${alert.threshold}%`;
      case 'transaction':
        return `Alert for transactions ${alert.condition} $${alert.amount}${alert.category ? ` in ${alert.category}` : ''}`;
      case 'category':
        return `Alert when ${alert.category} spending reaches ${alert.threshold}% in ${alert.period} period`;
    }
  };

  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <Card key={alert.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Bell className="h-4 w-4" />
                {alert.name}
              </CardTitle>
              <CardDescription>{getAlertDescription(alert)}</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Alert</DialogTitle>
                    <DialogDescription>Update your alert settings</DialogDescription>
                  </DialogHeader>
                  <AlertForm
                    initialData={alert}
                    onSubmit={(data) => onUpdate(alert.id, data)}
                    budgets={budgets}
                    accounts={accounts}
                    categories={categories}
                  />
                </DialogContent>
              </Dialog>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(alert.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <span className={alert.isActive ? "text-green-500" : "text-muted-foreground"}>
                  {alert.isActive ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Notifications:</span>
                <span className="text-muted-foreground">
                  {alert.notificationChannels.join(", ")}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 