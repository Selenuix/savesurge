import { ValidationRule, ValidationError } from "@/types/common";
import { FORM_VALIDATION_MESSAGES } from "@/constants/common";

export const createValidationSchema = (rules: Record<string, ValidationRule[]>) => {
  return (values: Record<string, any>) => {
    const errors: Record<string, string[]> = {};
    
    Object.entries(rules).forEach(([field, fieldRules]) => {
      const fieldErrors = fieldRules
        .map(rule => rule(values[field]))
        .filter((error): error is string => error !== undefined);
      
      if (fieldErrors.length > 0) {
        errors[field] = fieldErrors;
      }
    });
    
    return errors;
  };
};

export const required = (field: string): ValidationRule => (value) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return FORM_VALIDATION_MESSAGES.required(field);
  }
  return undefined;
};

export const email = (): ValidationRule => (value) => {
  if (!value) return undefined;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return FORM_VALIDATION_MESSAGES.invalidEmail;
  }
  return undefined;
};

export const minLength = (field: string, length: number): ValidationRule => (value) => {
  if (!value) return undefined;
  if (value.length < length) {
    return FORM_VALIDATION_MESSAGES.minLength(field, length);
  }
  return undefined;
};

export const maxLength = (field: string, length: number): ValidationRule => (value) => {
  if (!value) return undefined;
  if (value.length > length) {
    return FORM_VALIDATION_MESSAGES.maxLength(field, length);
  }
  return undefined;
}; 