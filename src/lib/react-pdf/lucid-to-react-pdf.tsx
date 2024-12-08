import { Image as PdfImage } from "@react-pdf/renderer";
import { ArchiveRestore } from "lucide-static";
import { useState } from "react";

const LucidToReactPdf = () => {
  const { type: svgString } = <ArchiveRestore />;

  const [pngUrl, setPngUrl] = useState<string | null>(null);

  const encodedData = window.btoa(svgString);
  const base56Svg = `data:image/svg+xml;base64,${encodedData}`;

  const image = new Image();

  image.addEventListener("load", () => {
    const width = 24;
    const height = 24;
    const canvas = document.createElement("canvas");

    canvas.setAttribute("width", width.toString());
    canvas.setAttribute("height", height.toString());

    const context = canvas.getContext("2d");

    if (context) {
      context.drawImage(image, 0, 0, width, height);
      const dataUrl = canvas.toDataURL("image/png");

      setPngUrl(dataUrl);
    }
  });

  image.src = base56Svg;

  console.log({ pngUrl });

  if (!pngUrl) return null;

  return (
    <PdfImage
      src={pngUrl}
      style={{ backgroundColor: "pink", height: 24, width: 24 }}
    />
  );
};

export default LucidToReactPdf;

// data:image/svg+xml;base64,CjxzdmcKICBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hcmNoaXZlLXJlc3RvcmUiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iY3VycmVudENvbG9yIgogIHN0cm9rZS13aWR0aD0iMiIKICBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIKPgogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI1IiB4PSIyIiB5PSIzIiByeD0iMSIgLz4KICA8cGF0aCBkPSJNNCA4djExYTIgMiAwIDAgMCAyIDJoMiIgLz4KICA8cGF0aCBkPSJNMjAgOHYxMWEyIDIgMCAwIDEtMiAyaC0yIiAvPgogIDxwYXRoIGQ9Im05IDE1IDMtMyAzIDMiIC8+CiAgPHBhdGggZD0iTTEyIDEydjkiIC8+Cjwvc3ZnPgo=
