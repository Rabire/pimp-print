import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useDropzone from "@/hook/use-dropzone";
import { FieldProps } from "@/utils/field";
import { ImagePlusIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

const ImageField = ({ name, label, placeholder, description }: FieldProps) => {
  const form = useFormContext();

  const onDrop = (files: File[]) => {
    const file = files[0];

    const imageUrl = URL.createObjectURL(file);

    form.setValue(name, imageUrl);
  };

  const { getRootProps, getInputProps } = useDropzone({
    loading: false,
    onDrop,
    accept: ["images"],
  });

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <button
              className="w-full cursor-pointer text-muted-foreground flex flex-col items-center justify-center rounded-md border border-input border-dashed h-32"
              type="button"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <ImagePlusIcon />
              <p className="mt-2">
                {placeholder || "Cliquez ou glissez pour ajouter"}
              </p>
              <p className="text-xs">PNG, JPEG ou HEIC (max 5 Mo)</p>
            </button>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ImageField;
