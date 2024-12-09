export type Field = {
  name: string;
  label: string;
  type: "text" | "textarea" | "image" | "icon" | "link" | "qrcode";
  defaultValue: string | null;
};

export type FieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
};

export const generateDefaultValues = (fields: Field[]) => {
  return fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue ?? null; // Make sure to handle null values
    return acc;
  }, {} as Record<string, string | null>);
};
