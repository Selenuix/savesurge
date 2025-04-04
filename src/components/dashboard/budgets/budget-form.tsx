'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/ui/combobox";
import { FormField } from "@/components/common/form/FormField";
import { Grid } from "@/components/common/layout/Grid";
import { useFormState } from "@/hooks/useFormState";
import { createValidationSchema, required } from "@/lib/validation";
import { CURRENCIES, PERIODS, DEFAULT_CURRENCY, DEFAULT_PERIOD } from "@/constants/common";
import { FormProps } from "@/types/common";

interface BudgetFormData {
  name: string;
  amount: string;
  currency: string;
  period: string;
  category: string;
  startDate: string;
  endDate: string;
}

interface BudgetFormProps extends FormProps<BudgetFormData> {
  predefinedCategories: string[];
}

const validationSchema = createValidationSchema({
  name: [required("Name")],
  amount: [required("Amount")],
  category: [required("Category")],
  startDate: [required("Start date")],
});

export function BudgetForm({ initialData, onSubmit, onCancel, predefinedCategories }: BudgetFormProps) {
  const {
    state,
    errors,
    isSubmitting,
    updateField,
    setFieldError,
    clearErrors,
    resetForm,
    setIsSubmitting,
  } = useFormState<BudgetFormData>({
    name: initialData?.name ?? '',
    amount: initialData?.amount ?? '',
    currency: initialData?.currency ?? DEFAULT_CURRENCY,
    period: initialData?.period ?? DEFAULT_PERIOD,
    category: initialData?.category ?? '',
    startDate: initialData?.startDate ?? new Date().toISOString().split('T')[0],
    endDate: initialData?.endDate ?? '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const validationErrors = validationSchema(state);
    if (Object.keys(validationErrors).length > 0) {
      Object.entries(validationErrors).forEach(([field, messages]) => {
        setFieldError(field as keyof BudgetFormData, messages[0]);
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await onSubmit(state);
      resetForm();
    } catch (error) {
      console.error('Failed to submit budget:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Grid cols={2} gap={4}>
        <FormField
          label="Name"
          error={errors.name}
          required
        >
          <Input
            value={state.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Enter budget name"
          />
        </FormField>

        <FormField
          label="Amount"
          error={errors.amount}
          required
        >
          <Input
            type="number"
            value={state.amount}
            onChange={(e) => updateField('amount', e.target.value)}
            placeholder="Enter amount"
          />
        </FormField>

        <FormField
          label="Currency"
          error={errors.currency}
        >
          <Combobox
            options={CURRENCIES}
            value={state.currency}
            onChange={(value) => updateField('currency', value)}
            placeholder="Select currency"
          />
        </FormField>

        <FormField
          label="Period"
          error={errors.period}
        >
          <Combobox
            options={PERIODS}
            value={state.period}
            onChange={(value) => updateField('period', value)}
            placeholder="Select period"
          />
        </FormField>

        <FormField
          label="Category"
          error={errors.category}
          required
        >
          <Combobox
            options={predefinedCategories}
            value={state.category}
            onChange={(value) => updateField('category', value)}
            placeholder="Select or create category"
            emptyText="No categories found"
            createText="Create category"
            className="cursor-pointer"
          />
        </FormField>

        <FormField
          label="Start Date"
          error={errors.startDate}
          required
        >
          <Input
            type="date"
            value={state.startDate}
            onChange={(e) => updateField('startDate', e.target.value)}
          />
        </FormField>

        <FormField
          label="End Date"
          error={errors.endDate}
        >
          <Input
            type="date"
            value={state.endDate}
            onChange={(e) => updateField('endDate', e.target.value)}
          />
        </FormField>
      </Grid>

      <div className="flex justify-end gap-4">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Budget'}
        </Button>
      </div>
    </form>
  );
}
