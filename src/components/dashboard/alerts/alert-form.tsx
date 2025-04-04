'use client';

import {useForm} from "@tanstack/react-form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Switch} from "@/components/ui/switch";
import {AlertFormData, AlertType} from "./types";
import {useEffect} from "react";
import {useToast} from "@/hooks/use-toast";

interface AlertFormProps {
  initialData?: AlertFormData;
  onSubmit: (data: AlertFormData) => Promise<void>;
  budgets?: { id: string; name: string }[];
  accounts?: { id: string; name: string }[];
  categories?: string[];
}

export function AlertForm({initialData, onSubmit, budgets, accounts, categories}: AlertFormProps) {
  const {toast} = useToast();
  const form = useForm<AlertFormData>({
    defaultValues: initialData || {
      name: '',
      type: 'budget',
      isActive: true,
      notificationChannels: ['email', 'push'],
    },
    onSubmit: async ({value}) => {
      try {
        await onSubmit(value);
        toast({
          title: "Success",
          description: "Alert saved successfully",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to save alert",
          variant: "destructive",
        });
      }
    },
  });

  const alertType = form.getFieldValue('type');

  return (
    <form.Provider>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <form.Field
            name="name"
            validators={{
              onChange: ({value}) => {
                if (value.length < 3) {
                  return 'Name must be at least 3 characters';
                }
                return undefined;
              },
            }}
            children={(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Alert Name</Label>
                <Input
                  id={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.errors && (
                  <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                )}
              </div>
            )}
          />

          <form.Field
            name="type"
            children={(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Alert Type</Label>
                <Select
                  value={field.state.value}
                  onValueChange={field.handleChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select alert type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">Budget Alert</SelectItem>
                    <SelectItem value="balance">Balance Alert</SelectItem>
                    <SelectItem value="transaction">Transaction Alert</SelectItem>
                    <SelectItem value="category">Category Alert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          />

          <form.Field
            name="isActive"
            children={(field) => (
              <div className="flex items-center space-x-2">
                <Switch
                  checked={field.state.value}
                  onCheckedChange={field.handleChange}
                />
                <Label>Active</Label>
              </div>
            )}
          />

          {alertType === 'budget' && (
            <form.Field
              name="budgetId"
              validators={{
                onChange: ({value}) => {
                  if (!value) return 'Budget is required';
                  return undefined;
                },
              }}
              children={(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Budget</Label>
                  <Select
                    value={field.state.value}
                    onValueChange={field.handleChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets?.map((budget) => (
                        <SelectItem key={budget.id} value={budget.id}>
                          {budget.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {field.state.meta.errors && (
                    <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                  )}
                </div>
              )}
            />
          )}

          {alertType === 'balance' && (
            <>
              <form.Field
                name="accountId"
                validators={{
                  onChange: ({value}) => {
                    if (!value) return 'Account is required';
                    return undefined;
                  },
                }}
                children={(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Account</Label>
                    <Select
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select account" />
                      </SelectTrigger>
                      <SelectContent>
                        {accounts?.map((account) => (
                          <SelectItem key={account.id} value={account.id}>
                            {account.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {field.state.meta.errors && (
                      <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                    )}
                  </div>
                )}
              />

              <form.Field
                name="condition"
                validators={{
                  onChange: ({value}) => {
                    if (!value) return 'Condition is required';
                    return undefined;
                  },
                }}
                children={(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Condition</Label>
                    <Select
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below">Below</SelectItem>
                        <SelectItem value="above">Above</SelectItem>
                      </SelectContent>
                    </Select>
                    {field.state.meta.errors && (
                      <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                    )}
                  </div>
                )}
              />
            </>
          )}

          {alertType === 'transaction' && (
            <>
              <form.Field
                name="amount"
                validators={{
                  onChange: ({value}) => {
                    if (!value || value <= 0) return 'Amount must be greater than 0';
                    return undefined;
                  },
                }}
                children={(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Amount</Label>
                    <Input
                      id={field.name}
                      type="number"
                      min="0"
                      step="0.01"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(Number(e.target.value))}
                    />
                    {field.state.meta.errors && (
                      <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                    )}
                  </div>
                )}
              />

              <form.Field
                name="condition"
                validators={{
                  onChange: ({value}) => {
                    if (!value) return 'Condition is required';
                    return undefined;
                  },
                }}
                children={(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Condition</Label>
                    <Select
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below">Below</SelectItem>
                        <SelectItem value="above">Above</SelectItem>
                      </SelectContent>
                    </Select>
                    {field.state.meta.errors && (
                      <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                    )}
                  </div>
                )}
              />

              <form.Field
                name="category"
                children={(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Category (Optional)</Label>
                    <Select
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories?.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              />
            </>
          )}

          {alertType === 'category' && (
            <>
              <form.Field
                name="category"
                validators={{
                  onChange: ({value}) => {
                    if (!value) return 'Category is required';
                    return undefined;
                  },
                }}
                children={(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Category</Label>
                    <Select
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories?.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {field.state.meta.errors && (
                      <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                    )}
                  </div>
                )}
              />

              <form.Field
                name="period"
                validators={{
                  onChange: ({value}) => {
                    if (!value) return 'Period is required';
                    return undefined;
                  },
                }}
                children={(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Period</Label>
                    <Select
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                    {field.state.meta.errors && (
                      <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                    )}
                  </div>
                )}
              />
            </>
          )}

          {(alertType === 'budget' || alertType === 'balance' || alertType === 'category') && (
            <form.Field
              name="threshold"
              validators={{
                onChange: ({value}) => {
                  if (!value || value <= 0) return 'Threshold must be greater than 0';
                  return undefined;
                },
              }}
              children={(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Threshold (%)</Label>
                  <Input
                    id={field.name}
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                  />
                  {field.state.meta.errors && (
                    <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                  )}
                </div>
              )}
            />
          )}

          <form.Field
            name="notificationChannels"
            children={(field) => (
              <div className="space-y-2">
                <Label>Notification Channels</Label>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="email"
                      checked={field.state.value.includes('email')}
                      onChange={(e) => {
                        const newChannels = e.target.checked
                          ? [...field.state.value, 'email']
                          : field.state.value.filter((channel) => channel !== 'email');
                        field.handleChange(newChannels);
                      }}
                    />
                    <Label htmlFor="email">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="push"
                      checked={field.state.value.includes('push')}
                      onChange={(e) => {
                        const newChannels = e.target.checked
                          ? [...field.state.value, 'push']
                          : field.state.value.filter((channel) => channel !== 'push');
                        field.handleChange(newChannels);
                      }}
                    />
                    <Label htmlFor="push">Push Notification</Label>
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        <Button type="submit">Save Alert</Button>
      </form>
    </form.Provider>
  );
} 