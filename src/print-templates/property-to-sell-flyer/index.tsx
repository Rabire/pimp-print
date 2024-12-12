import { generateDefaultValues } from "@/utils/field";
import { DocumentCategory, Template } from "@/utils/template";
import { z } from "zod";
import FIELDS from "./fields";
import Page from "./page";
import schema from "./schema";

export type Type = z.infer<typeof schema>;

export const template: Template = {
  name: "property-to-sell-flyer",
  title: "Bien à vendre",
  previewUrl: "TODO: Add preview URL",

  documentCategory: DocumentCategory.Flyer,

  page: Page,
  fields: FIELDS,
  schema,
  defaultValues: generateDefaultValues(FIELDS) as Type,
};
