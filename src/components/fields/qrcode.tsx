import { FieldProps } from "@/utils/field";
import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const QrCodeField = ({ name, label, placeholder, description }: FieldProps) => {
  const form = useFormContext();

  const qrCodeUrl: string = form.watch(name);
  const [inputUrl, setInputUrl] = useState(qrCodeUrl || "");

  const hasUrl = inputUrl.length > 5;

  const generateQRCode = async () => {
    let url: URL;

    try {
      url = new URL(inputUrl);
    } catch {
      form.setError(name, {
        type: "manual",
        message: "L'URL n'est pas valide",
      });
      return;
    }

    try {
      const qrCodeSrc = await QRCode.toDataURL(url.toString());
      form.setValue(name, qrCodeUrl === "" ? null : qrCodeSrc);
      form.clearErrors(name);
    } catch (error) {
      console.error("Erreur lors de la génération du QR code :", error);
    }
  };

  useEffect(() => {
    if (hasUrl) generateQRCode();
  }, []);

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
                onChange={({ target: { value } }) => setInputUrl(value.trim())}
                value={inputUrl}
              />

              {qrCodeUrl && hasUrl && (
                <img src={qrCodeUrl} alt="QR Code" className="w-12 h-12" />
              )}
            </div>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default QrCodeField;
