export interface FormField {
  type: 'text' | 'textarea' | 'dropdown' | 'checkbox' | 'radio' | 'email' | 'reset' | 'file' | 'time' | 'date' | 'number';
  label: string;
  placeholder?: string;
  options?: string[]; // For dropdown and radio buttons
  required: boolean;
  email?: boolean;
}