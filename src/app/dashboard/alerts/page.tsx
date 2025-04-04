'use client';

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {AlertForm} from "@/components/dashboard/alerts/alert-form";
import {AlertsList} from "@/components/dashboard/alerts/alerts-list";
import {Alert, AlertFormData, AlertType} from "@/components/dashboard/alerts/types";
import {useToast} from "@/hooks/use-toast";

// Mock data - replace with actual data fetching
const mockAlerts: Alert[] = [
  {
    id: '1',
    name: 'Budget Warning',
    type: 'budget',
    isActive: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    userId: 'user1',
    budgetId: 'budget1',
    threshold: 80,
    notificationChannels: ['email', 'push'],
  },
  {
    id: '2',
    name: 'Low Balance Alert',
    type: 'balance',
    isActive: true,
    createdAt: '2024-01-02',
    updatedAt: '2024-01-02',
    userId: 'user1',
    accountId: 'account1',
    threshold: 20,
    condition: 'below',
    notificationChannels: ['email'],
  },
];

// Mock data for dropdowns - replace with actual data fetching
const mockBudgets = [
  {id: 'budget1', name: 'Groceries'},
  {id: 'budget2', name: 'Entertainment'},
];

const mockAccounts = [
  {id: 'account1', name: 'Main Account'},
  {id: 'account2', name: 'Savings'},
];

const mockCategories = [
  'Food & Dining',
  'Transportation',
  'Entertainment',
  'Shopping',
  'Bills',
];

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const {toast} = useToast();

  const createAlert = (data: AlertFormData): Alert => {
    const baseAlert = {
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: 'user1', // Replace with actual user ID
      ...data,
    };

    switch (data.type) {
      case 'budget':
        return {
          ...baseAlert,
          type: 'budget',
          budgetId: data.budgetId!,
          threshold: data.threshold!,
        };
      case 'balance':
        return {
          ...baseAlert,
          type: 'balance',
          accountId: data.accountId!,
          threshold: data.threshold!,
          condition: data.condition!,
        };
      case 'transaction':
        return {
          ...baseAlert,
          type: 'transaction',
          amount: data.amount!,
          condition: data.condition!,
          category: data.category,
        };
      case 'category':
        return {
          ...baseAlert,
          type: 'category',
          category: data.category!,
          threshold: data.threshold!,
          period: data.period!,
        };
    }
  };

  const handleCreate = async (data: AlertFormData) => {
    try {
      // Replace with actual API call
      const newAlert = createAlert(data);
      setAlerts([...alerts, newAlert]);
      toast({
        title: "Success",
        description: "Alert created successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create alert",
        variant: "destructive",
      });
    }
  };

  const handleUpdate = async (id: string, data: AlertFormData) => {
    try {
      // Replace with actual API call
      const updatedAlert = createAlert(data);
      setAlerts(alerts.map(alert =>
        alert.id === id
          ? {...updatedAlert, id}
          : alert
      ));
      toast({
        title: "Success",
        description: "Alert updated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update alert",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      // Replace with actual API call
      setAlerts(alerts.filter(alert => alert.id !== id));
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold">Alerts</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2"/>
              Create Alert
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Alert</DialogTitle>
              <DialogDescription>Set up a new alert to monitor your finances</DialogDescription>
            </DialogHeader>
            <AlertForm
              onSubmit={handleCreate}
              budgets={mockBudgets}
              accounts={mockAccounts}
              categories={mockCategories}
            />
          </DialogContent>
        </Dialog>
      </div>

      <AlertsList
        alerts={alerts}
        budgets={mockBudgets}
        accounts={mockAccounts}
        categories={mockCategories}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}
