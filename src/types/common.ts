export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FormProps<T> {
  initialData?: T;
  onSubmit: (data: T) => void;
  onCancel?: () => void;
}

export interface ValidationError {
  field: string;
  message: string;
}

export type ValidationRule = (value: any) => string | undefined;

export interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface GridProps {
  cols?: number;
  gap?: number;
  children: React.ReactNode;
  className?: string;
}

export interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
} 