import { EditorSettings } from "@/pages/editor/context";
import { z } from "zod";
import { Field } from "./field";

export enum DocumentCategory {
  Flyer, // A5
  Poster, // A2
  Sign, // 594x420
  BusinessCard, // 85x55
}

type Sizes = {
  // in millimeters
  width: number;
  height: number;
  bleed: number;
  safeZone: number;
};

export type Sides = [Template | null, Template | null];

export type PageSide = "recto" | "verso";

export type PrintableDocument = {
  name: string;
  type: DocumentCategory;
  sizes: Sizes;
};

export type Template = {
  name: string;
  title: string;
  previewUrl: string;

  documentCategory: DocumentCategory;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page: (props: { values: any; settings: EditorSettings }) => JSX.Element;
  schema: z.ZodType<unknown>;
  fields: Field[];
  defaultValues: unknown;
};

export const DOCUMENTS: PrintableDocument[] = [
  {
    type: DocumentCategory.BusinessCard,
    name: "Carte de visite",
    sizes: { width: 85, height: 55, bleed: 3, safeZone: 4 },
  },
  {
    type: DocumentCategory.Flyer,
    name: "Flyer",
    sizes: { width: 148, height: 210, bleed: 3, safeZone: 4 },
  },
  {
    type: DocumentCategory.Poster,
    name: "Affiche",
    sizes: { width: 210, height: 297, bleed: 3, safeZone: 4 },
  },
  {
    type: DocumentCategory.Sign,
    name: "Panneau",
    sizes: { width: 594, height: 420, bleed: 3, safeZone: 4 },
  },
];

export const getDocument = (type: DocumentCategory) => {
  const document = DOCUMENTS.find((doc) => doc.type === type);
  if (!document) throw new Error(`Document not found for type: ${type}`);
  return document;
};
