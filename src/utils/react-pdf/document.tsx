import { Font, Document as ReactPDFDocument } from "@react-pdf/renderer";
import { PropsWithChildren } from "react";
import { tw } from "../styles";

type Props = PropsWithChildren & {
  title: string;
  paraphRoles?: string[];
  hideFieldTags?: boolean;
};

const Document = ({ children, title }: Props) => {
  return (
    <ReactPDFDocument
      title={title}
      author="ecotransac"
      language="fr"
      // style={tw("font-inter text-base bg-light text-dark")}
      style={tw("font-inter text-base bg-light text-dark")}
    >
      {children}
    </ReactPDFDocument>
  );
};

Font.register({
  family: "Inter",
  fonts: [
    {
      fontWeight: 800, // ultra-bold
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYAZ9hjp-Ek-_EeA.woff",
    },
    {
      fontWeight: 600, // semi-bold
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff",
    },
    {
      fontWeight: 400, // normal
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff",
    },
  ],
});

export default Document;
