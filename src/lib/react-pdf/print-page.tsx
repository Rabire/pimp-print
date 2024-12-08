import { Page, View } from "@react-pdf/renderer";
import { PropsWithChildren } from "react";
import { tw } from "../utils";

const mmToPt = (mm: number) => Math.abs(mm * 2.8346456693);

const DEFAULT_GUIDES_DIMENSIONS = {
  // in mm
  A5: { width: 148, height: 210 },
  A4: { width: 210, height: 297 },
};

const DEFAULT_BLEED = 3; // in mm
const DEFAULT_SAFE = 4; // in mm

export const DEFAULT_PADDING = `${mmToPt(DEFAULT_BLEED + DEFAULT_SAFE)}pt`;

type Props = PropsWithChildren & {
  size: "A4" | "A5";
  orientation?: "portrait" | "landscape";
  showGuides?: boolean;
  className?: string;
};

export const PrintPage = ({
  size,
  orientation = "portrait",
  showGuides,
  children,
  className,
}: Props) => {
  const { height, width } = DEFAULT_GUIDES_DIMENSIONS[size];

  const pageWidth = mmToPt(width + DEFAULT_BLEED * 2);
  const pageHeight = mmToPt(height + DEFAULT_BLEED * 2);

  const sizes: [number, number] =
    orientation === "portrait"
      ? [pageWidth, pageHeight]
      : [pageHeight, pageWidth];

  return (
    <Page size={sizes} style={tw(className)}>
      {showGuides && (
        <View
          style={{
            flex: 1,
            padding: `${DEFAULT_BLEED}mm`,
            opacity: 0.5,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
          }}
        >
          <View
            style={{
              border: "1pt solid red",
              flex: 1,
              padding: `${DEFAULT_SAFE}mm`,
              opacity: 0.5,
            }}
          >
            <View
              style={{
                border: "1pt solid orange",
                flex: 1,
                opacity: 0.5,
              }}
            ></View>
          </View>
        </View>
      )}

      {children}
    </Page>
  );
};
