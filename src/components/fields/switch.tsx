import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FieldProps } from "@/utils/field";
import { useFormContext } from "react-hook-form";
import { Switch } from "../ui/switch";

const SwitchField = ({ name, label }: FieldProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="items-center gap-2 flex">
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>

          <FormLabel className="!mt-0">{label}</FormLabel>
        </FormItem>
      )}
    />
  );
};

export default SwitchField;
