import { generateDefaultValues, generateZodSchema } from "@/utils/field";
import { z } from "zod";
import Page from "./document";
import FIELDS from "./fields";

const schema = generateZodSchema(FIELDS);

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
