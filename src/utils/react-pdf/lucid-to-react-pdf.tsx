/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image as PdfImage } from "@react-pdf/renderer";
import * as lucideIcons from "lucide-react"; // Importer toutes les icônes de lucide
import { LucideProps } from "lucide-react";
import { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { tw } from "../styles";

type Props = LucideProps & {
  size: number;
  iconName: string;
  className?: string;
};

const PdfIcon = ({ size, iconName, className, ...props }: Props) => {
  const [IconComponent, setIconComponent] =
    useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    try {
      const newIcon = lucideIcons[
        iconName as keyof typeof lucideIcons
      ] as React.ComponentType<any>;

      setIconComponent(newIcon);
    } catch {
      // icon does not exist (user is maybe typing)
      setIconComponent(null);
    }
  }, [iconName]);

  const svgString = ReactDOMServer.renderToString(
    IconComponent ? <IconComponent {...props} /> : null
  );

  const [pngUrl, setPngUrl] = useState<string | null>(null);

  const convertSvgToPng = async () => {
    try {
      const encodedData = window.btoa(svgString);
      const base64Svg = `data:image/svg+xml;base64,${encodedData}`;
      const image = new Image();

      image.src = base64Svg;

      await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();
        image.onerror = reject;
      });

      const width = size * 4; // multiply to get a better resolution
      const height = size * 4;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");

      if (context) {
        context.drawImage(image, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/png");

        setPngUrl(dataUrl);
        return dataUrl;
      }
    } catch (error) {
      console.error("Error converting SVG to PNG:", error);
    }
  };

  useEffect(() => {
    if (!IconComponent) return;

    convertSvgToPng();
  }, [svgString, size, iconName, IconComponent]);

  if (!pngUrl) return null;

  return (
    <PdfImage
      src={pngUrl}
      style={{
        ...{ minHeight: size, minWidth: size, maxHeight: size, maxWidth: size },
        ...(className ? tw(className) : {}),
      }}
    />
  );
};

export default PdfIcon;
