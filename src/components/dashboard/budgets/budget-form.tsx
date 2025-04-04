'use client';

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {createFormHook, createFormHookContexts} from "@tanstack/react-form";
import {z} from 'zod';
import {Combobox} from "@/components/ui/combobox";
import {predefinedCategories} from "@/lib/categories";

const {fieldContext, formContext} = createFormHookContexts();

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  amount: z.string().min(1, "Amount is required"),
  currency: z.string().min(1, "Currency is required"),
  period: z.string().min(1, "Period is required"),
  category: z.string().min(1, "Category is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
});

type BudgetFormData = z.infer<typeof formSchema>;

interface BudgetFormProps {
  initialData?: Partial<BudgetFormData>;
  onSubmit: (data: BudgetFormData) => void;
  onCancel: () => void;
}

const {useAppForm} = createFormHook({
  fieldComponents: {
    Input,
    Combobox,
  },
  formComponents: {
    Button,
  },
  fieldContext,
  formContext,
});

export function BudgetForm({initialData, onSubmit, onCancel}: BudgetFormProps) {
  const form = useAppForm({
    defaultValues: {
      name: initialData?.name ?? '',
      amount: initialData?.amount ?? '',
      currency: initialData?.currency ?? 'USD',
      period: initialData?.period ?? 'monthly',
      category: initialData?.category ?? '',
      startDate: initialData?.startDate ?? new Date().toISOString().split('T')[0],
      endDate: initialData?.endDate ?? '',
    },
    validators: {
      onChange: ({value}) => {
        const errors: Record<string, string> = {};

        if (!value.name) {
          errors.name = "Name is required";
        }

        if (!value.amount) {
          errors.amount = "Amount is required";
        }

        if (!value.category) {
          errors.category = "Category is required";
        }

        if (!value.startDate) {
          errors.startDate = "Start date is required";
        }

        return errors;
      },
    },
    onSubmit: ({value}) => {
      onSubmit(value as BudgetFormData);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{initialData ? "Edit Budget" : "Create New Budget"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          <form.AppField
            name="name"
            children={(field) => (
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Budget Name
                </label>
                <field.Input placeholder="Enter budget name"/>
                {field.state.meta.errors && (
                  <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                )}
              </div>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <form.AppField
              name="amount"
              children={(field) => (
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Amount
                  </label>
                  <field.Input type="number" step="0.01" placeholder="Enter amount"/>
                  {field.state.meta.errors && (
                    <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                  )}
                </div>
              )}
            />

            <form.AppField
              name="currency"
              children={(field) => (
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Currency
                  </label>
                  <field.Combobox
                    className="cursor-pointer"
                    options={["USD", "EUR", "GBP"]}
                    value={field.state.value}
                    onChange={field.handleChange}
                    placeholder="Select currency"
                  />
                  {field.state.meta.errors && (
                    <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <form.AppField
              name="period"
              children={(field) => (
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Period
                  </label>
                  <field.Combobox
                    options={["daily", "weekly", "monthly", "yearly"]}
                    value={field.state.value}
                    onChange={field.handleChange}
                    placeholder="Select period"
                  />
                  {field.state.meta.errors && (
                    <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                  )}
                </div>
              )}
            />

            <form.AppField
              name="category"
              children={(field) => (
                <div className="space-y-2 peer">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Category
                  </label>
                  <field.Combobox
                    options={[...predefinedCategories]}
                    value={field.state.value}
                    onChange={field.handleChange}
                    placeholder="Select or create category"
                    emptyText="No categories found"
                    createText="Create category"
                    className="cursor-pointer"
                  />
                  {field.state.meta.errors && (
                    <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <form.AppField
              name="startDate"
              children={(field) => (
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Start Date
                  </label>
                  <field.Input type="date"/>
                  {field.state.meta.errors && (
                    <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                  )}
                </div>
              )}
            />

            <form.AppField
              name="endDate"
              children={(field) => (
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    End Date (Optional)
                  </label>
                  <field.Input type="date"/>
                  {field.state.meta.errors && (
                    <p className="text-sm text-destructive">{field.state.meta.errors.join(', ')}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {initialData ? "Update Budget" : "Create Budget"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
