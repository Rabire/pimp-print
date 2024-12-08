import { Image as PdfImage } from "@react-pdf/renderer";
import * as lucideIcons from "lucide-static"; // Importer toutes les icônes de lucide
import { useEffect, useState } from "react";
import { tw } from "../utils";

type Props = {
  size: number;
  icon: string;
  className?: string;
};

const LucidToReactPdf = ({ size, icon, className }: Props) => {
  const IconComponent = lucideIcons[icon as keyof typeof lucideIcons];
  // const IconComponent = lucideIcons.BrickWall;

  const { type: svgString } = <IconComponent />;
  const [pngUrl, setPngUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!IconComponent) {
      console.error("Unknown icon name: ", icon);
      return;
    }

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
        }
      } catch (error) {
        console.error("Error converting SVG to PNG:", error);
      }
    };

    convertSvgToPng();
  }, [svgString, size, icon, IconComponent]);

  if (!pngUrl) return null;

  return (
    <PdfImage
      src={pngUrl}
      style={{
        ...{ minHeight: size, minWidth: size, maxHeight: size, maxWidth: size },
        ...tw(className),
      }}
    />
  );
};

export default LucidToReactPdf;
