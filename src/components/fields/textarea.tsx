import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldProps } from "@/utils/field";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";

const TextareaField = ({
  name,
  label,
  placeholder,
  description,
}: FieldProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder || "Non renseigné"}
              {...field}
              onChange={({ target: { value } }) =>
                form.setValue(name, value === "" ? null : value)
              }
              className="h-48"
              value={field.value || ""}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextareaField;
