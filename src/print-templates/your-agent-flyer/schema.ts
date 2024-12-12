import { z } from "zod";

const schema = z.object({
  fullName: z.string().nullable(), // "text"
});

export default schema;
