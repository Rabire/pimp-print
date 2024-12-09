import { generateDefaultValues } from "@/utils/field";
import { z } from "zod";
import FIELDS from "./fields";
import Page from "./page";
import schema from "./schema";

const template = {
  name: "house-to-sell-flyer",
  title: "Flyer de vente de maison",

  page: Page,
  fields: FIELDS,

  schema,
  defaultValues: generateDefaultValues(FIELDS),
};

export default template;

export type Type = z.infer<typeof schema>;
