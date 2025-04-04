import { useState } from "react";
import { ValidationError } from "@/types/common";

export function useFormState<T extends Record<string, any>>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof T, value: T[keyof T]) => {
    setState(prev => ({ ...prev, [field]: value }));
    // Clear error when field is updated
    if (errors[field as string]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field as string];
        return newErrors;
      });
    }
  };

  const setFieldError = (field: keyof T, message: string) => {
    setErrors(prev => ({ ...prev, [field as string]: message }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  const resetForm = () => {
    setState(initialState);
    clearErrors();
  };

  return {
    state,
    errors,
    isSubmitting,
    updateField,
    setFieldError,
    clearErrors,
    resetForm,
    setIsSubmitting,
  };
} 