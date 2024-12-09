import { z } from "zod";

const schema = z.object({
  subtitle: z.string().nullable(), // "text"
  title: z.string().nullable(), // "text"
  coverPicture: z.string().url().nullable(), // "image" (URL d'une image)

  paragraphTitle: z.string().nullable(), // "text"
  paragraphContent: z.string().nullable(), // "textarea"

  li1Icon: z.string().nullable(), // "icon"
  li1Title: z.string().nullable(), // "text"
  li1Value: z.string().nullable(), // "text"

  li2Icon: z.string().nullable(), // "icon"
  li2Title: z.string().nullable(), // "text"
  li2Value: z.string().nullable(), // "text"

  li3Icon: z.string().nullable(), // "icon"
  li3Title: z.string().nullable(), // "text"
  li3Value: z.string().nullable(), // "text"

  imageRow1: z.string().url().nullable(), // "image"
  imageRow2: z.string().url().nullable(), // "image"
  imageRow3: z.string().url().nullable(), // "image"

  li4Icon: z.string().nullable(), // "icon"
  li4Title: z.string().nullable(), // "text"
  li4Value: z.string().nullable(), // "text"

  li5Icon: z.string().nullable(), // "icon"
  li5Title: z.string().nullable(), // "text"
  li5Value: z.string().nullable(), // "text"

  li6Icon: z.string().nullable(), // "icon"
  li6Title: z.string().nullable(), // "text"
  li6Value: z.string().nullable(), // "text"

  li7Icon: z.string().nullable(), // "icon"
  li7Title: z.string().nullable(), // "text"
  li7Value: z.string().nullable(), // "text"

  qrCodeUrl: z.string().url().nullable(), // "qrcode"
});

export default schema;
