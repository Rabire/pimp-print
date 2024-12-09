import { z, ZodTypeAny } from "zod";

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

export const generateZodSchema = (fields: Pick<Field, "name" | "type">[]) => {
  const schemaDefinition: Record<string, ZodTypeAny> = {};

  fields.forEach((field) => {
    switch (field.type) {
      case "text":
      case "textarea":
      case "icon":
        schemaDefinition[field.name] = z.string();
        break;

      case "image":
      case "qrcode":
        schemaDefinition[field.name] = z.string().url();
        break;

      default:
        console.warn(
          `Unsupported type "${field.type}" for field "${field.name}".`
        );
        schemaDefinition[field.name] = z.unknown();
        break;
    }
  });

  return z.object(schemaDefinition);
};

export const generateDefaultValues = (fields: Field[]) => {
  return fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue ?? null; // Make sure to handle null values
    return acc;
  }, {} as Record<string, string | null>);
};
