import { Field } from "@/utils/field";
import IconField from "./fields/icon";
import ImageField from "./fields/image";
import TextField from "./fields/text";
import TextareaField from "./fields/textarea";

type Props = {
  fields: Field[];
};

const FormFieldsRenderer = ({ fields }: Props) => {
  return fields.map((field) => {
    switch (field.type) {
      case "text":
        return <TextField key={field.name} {...field} />;

      case "textarea":
        return <TextareaField key={field.name} {...field} />;

      case "icon":
        return <IconField key={field.name} {...field} />;

      case "image":
        return <ImageField key={field.name} {...field} />;

      default:
        console.error(`Field type ${field.type} not supported`);
        return null;
    }
  });
};

export default FormFieldsRenderer;
