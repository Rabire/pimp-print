import type { ImageProps, TextProps, ViewProps } from "@react-pdf/renderer";
import {
  Image as PDFImage,
  Text as PDFText,
  View as PDFView,
} from "@react-pdf/renderer";
import { PropsWithChildren } from "react";
import { tw } from "../styles";

type PropsView = PropsWithChildren<ViewProps> & { className?: string };

export const View = ({ className, children, ...props }: PropsView) => (
  <PDFView style={{ ...tw(className), ...props.style }} {...props}>
    {children}
  </PDFView>
);

type PropsText = PropsWithChildren<TextProps> & { className?: string };

export const Text = ({ className, children, ...props }: PropsText) => (
  <PDFText style={{ ...tw(className), ...props.style }} {...props}>
    {children}
  </PDFText>
);

type PropsImage = ImageProps & {
  className?: string;
};

export const Image = ({ className, ...props }: PropsImage) => (
  <PDFImage
    style={{ ...tw("object-cover", className), ...props.style }}
    {...props}
  />
);
