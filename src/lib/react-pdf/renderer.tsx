import type { TextProps, ViewProps } from "@react-pdf/renderer";
import { Text as PDFText, View as PDFView } from "@react-pdf/renderer";
import { PropsWithChildren } from "react";
import { tw } from "../utils";

type PropsView = PropsWithChildren<ViewProps> & { className?: string };

export const View = ({ className, children, ...props }: PropsView) => (
  <PDFView style={tw(className)} {...props}>
    {children}
  </PDFView>
);

type PropsText = PropsWithChildren<TextProps> & { className?: string };

export const Text = ({ className, children, ...props }: PropsText) => (
  <PDFText style={tw(className)} {...props}>
    {children}
  </PDFText>
);
