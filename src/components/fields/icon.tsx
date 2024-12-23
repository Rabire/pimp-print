import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldProps } from "@/utils/field";
import { camelCase, startCase } from "lodash";
import * as lucideIcons from "lucide-react"; // Importer toutes les icônes de lucide
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

const pascalCase = (str: string) => startCase(camelCase(str)).replace(/ /g, "");

const IconField = ({ name, label, placeholder }: FieldProps) => {
  const form = useFormContext();
  const iconName = form.watch(name);

  const [inputName, setInputName] = useState(iconName || "");

  const Icon = iconName
    ? (lucideIcons[
        iconName as keyof typeof lucideIcons
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ] as React.ComponentType<any>)
    : null;

  useEffect(() => {
    form.setValue(name, inputName === "" ? null : pascalCase(inputName));
    form.clearErrors(name);

    if (inputName.length > 5 && !Icon) {
      form.setError(name, {
        type: "manual",
        message: "Icône inconnue",
      });
    }
  }, [inputName, Icon]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex gap-2 items-center">
              <Input
                placeholder={placeholder || "Nom de l'icône non renseigné"}
                {...field}
                onChange={({ target: { value } }) => setInputName(value)}
                value={inputName || iconName}
              />

              {Icon && <Icon strokeWidth={1.4} />}
            </div>
          </FormControl>

          <FormDescription>
            <a
              href="https://lucide.dev/icons/"
              className="hover:underline"
              target="_blank"
            >
              Voir toutes les icons
            </a>
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default IconField;
