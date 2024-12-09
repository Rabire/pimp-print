export type Field = {
  name: string;
  label: string;
  type: "text" | "textarea" | "image" | "icon" | "link" | "qrcode";
};

export type FieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
};
