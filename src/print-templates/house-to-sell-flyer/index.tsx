import { generateDefaultValues } from "@/utils/field";
import { z } from "zod";
import FIELDS from "./fields";
import Page from "./page";
import schema from "./schema";

export const template = {
  name: "house-to-sell-flyer",
  title: "Flyer de vente de maison",

  page: Page,
  fields: FIELDS,

  schema,
  defaultValues: generateDefaultValues(FIELDS),
};

export type Type = z.infer<typeof schema>;
