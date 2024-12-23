import type {
  ImageProps,
  NodeProps,
  TextProps,
  ViewProps,
} from "@react-pdf/renderer";
import {
  Image as PDFImage,
  Text as PDFText,
  View as PDFView,
} from "@react-pdf/renderer";
import { PropsWithChildren } from "react";
import { tw } from "../styles";

const styles = (className: string | undefined, style: NodeProps["style"]) => ({
  ...(className ? tw(className) : {}),
  ...style,
});

type PropsView = PropsWithChildren<ViewProps> & { className?: string };

export const View = ({ className, children, ...props }: PropsView) => (
  <PDFView style={styles(className, props.style)} {...props}>
    {children}
  </PDFView>
);

type PropsText = PropsWithChildren<TextProps> & { className?: string };

export const Text = ({ className, children, ...props }: PropsText) => (
  <PDFText style={styles(className, props.style)} {...props}>
    {children}
  </PDFText>
);

type PropsImage = Omit<ImageProps, "source"> & {
  src?: string | null;
  className?: string;
};

export const Image = ({ src, className, ...props }: PropsImage) => {
  if (!src)
    return (
      <View
        style={{ ...tw("object-cover", className), ...props.style }}
        {...props}
      />
    );

  return (
    <PDFImage
      style={{ ...tw("object-cover", className), ...props.style }}
      {...props}
      src={src}
    />
  );
};
