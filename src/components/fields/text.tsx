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
import { Input } from "../ui/input";

const TextField = ({ name, label, placeholder, description }: FieldProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder || "Non renseigné"}
              {...field}
              onChange={({ target: { value } }) =>
                form.setValue(name, value === "" ? null : value)
              }
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

export default TextField;
