import {
  Circle,
  Ellipse,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Svg,
} from "@react-pdf/renderer";
import { ChildNode } from "domhandler";
import { DomHandler, Parser } from "htmlparser2";
import { camelCase } from "lodash";
import { ArchiveRestore } from "lucide-static";
import React from "react";

const getElement = (elementName: string) => {
  switch (elementName) {
    case "svg":
      return Svg;
    case "path":
      return Path;
    case "rect":
      return Rect;
    case "circle":
      return Circle;
    case "line":
      return Line;
    case "polygon":
      return Polygon;
    case "polyline":
      return Polyline;
    case "ellipse":
      return Ellipse;
    default:
      throw new Error(`Element ${elementName} not supported`);
  }
};

// Fonction pour transformer un objet en JSX
const nodeToJSX = (node: ChildNode): React.ReactNode | null => {
  if (node.type === "tag" && node.name) {
    const { name, attribs, children } = node;

    // Transforme les attributs de l'élément en props JSX
    const props = attribs
      ? Object.keys(attribs).reduce((acc, key) => {
          acc[camelCase(key)] = attribs[key];
          return acc;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, {} as { [key: string]: any })
      : {};

    console.log({ name, props });

    // Convertir récursivement les enfants
    const jsxChildren = children?.map((child, index) => (
      <React.Fragment key={index}>{nodeToJSX(child)}</React.Fragment>
    ));

    // Créer un élément JSX pour cette balise
    const Element = React.createElement(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getElement(name) as any,
      props,
      ...jsxChildren
    );

    return Element;
  }

  return null;
};

// Fonction pour analyser du HTML et le transformer en JSX
const htmlToJSX = (html: string): React.ReactNode => {
  // Utilisation de htmlparser2 pour analyser le HTML
  const handler = new DomHandler((error, dom) => {
    if (error) {
      console.error("HTML parsing error:", error);
    }
    // Convertir l'arbre DOM en JSX
    return dom.map((node) => nodeToJSX(node) as React.ReactNode);
  });

  const parser = new Parser(handler);
  parser.write(html);
  parser.end();

  return handler.dom.map((node) => nodeToJSX(node) as React.ReactNode);
};

const LucidToReactPdf = () => {
  const { type: svgString } = <ArchiveRestore />;

  console.log(htmlToJSX(svgString));

  return htmlToJSX(svgString);
};

export default LucidToReactPdf;
