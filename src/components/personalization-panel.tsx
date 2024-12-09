import { Field } from "@/utils/field";
import { useForm } from "react-hook-form";
import FormFieldsRenderer from "./form-fields-renderer";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { ScrollArea } from "./ui/scroll-area";

const fields: Field[] = [
  { name: "subtitle", label: "Titre petit", type: "text" },
  { name: "title", label: "Titre grand", type: "text" },
  { name: "coverPicture", label: "Image entête", type: "image" },

  { name: "paragraphTitle", label: "Titre paragraphe", type: "text" },
  { name: "paragraphContent", label: "Paragraphe", type: "textarea" },

  { name: "li1Icon", label: "Icon élément liste 1", type: "icon" },
  { name: "li1Title", label: "Titre élément liste 1", type: "text" },
  { name: "li1Value", label: "Contenu élément liste 1", type: "text" },

  // { name: "li2Icon", label: "Icon élément liste 2", type: "icon" },
  { name: "li2Title", label: "Titre élément liste 2", type: "text" },
  { name: "li2Value", label: "Contenu élément liste 2", type: "text" },

  // { name: "li3Icon", label: "Icon élément liste 3", type: "icon" },
  { name: "li3Title", label: "Titre élément liste 3", type: "text" },
  { name: "li3Value", label: "Contenu élément liste 3", type: "text" },

  { name: "imageRow1", label: "Image 1", type: "image" },
  { name: "imageRow2", label: "Image 2", type: "image" },
  { name: "imageRow3", label: "Image 3", type: "image" },

  { name: "li4Icon", label: "Icon élément liste 4", type: "icon" },
  { name: "li4Title", label: "Titre élément liste 4", type: "text" },
  { name: "li4Value", label: "Contenu élément liste 4", type: "text" },

  { name: "li5Icon", label: "Icon élément liste 5", type: "icon" },
  { name: "li5Title", label: "Titre élément liste 5", type: "text" },
  { name: "li5Value", label: "Contenu élément liste 5", type: "text" },

  { name: "li6Icon", label: "Icon élément liste 6", type: "icon" },
  { name: "li6Title", label: "Titre élément liste 6", type: "text" },
  { name: "li6Value", label: "Contenu élément liste 6", type: "text" },

  { name: "li7Icon", label: "Icon élément liste 7", type: "icon" },
  { name: "li7Title", label: "Titre élément liste 7", type: "text" },
  { name: "li7Value", label: "Contenu élément liste 7", type: "text" },

  { name: "qrCodeUrl", label: "QRCode vitrine", type: "qrcode" },
];

const PersonalizationPanel = () => {
  const form = useForm();

  return (
    <ScrollArea>
      <aside className="p-6 pb-20 space-y-6 relative">
        <div className="space-y-1 border-b pb-4">
          {/* Header */}
          {/* <a
            href="#"
            className="hover:text-primary flex gap-2 items-center text-muted-foreground"
          >
            <ArrowLeft size={16} /> Retour aux blabla
          </a> */}
          <h1 className="text-lg font-semibold text-foreground">
            Panneau de personnalisation
          </h1>
          <p className="text-sm text-muted-foreground">
            Personnalisez votre flyer en remplissant les champs ci-dessous.
          </p>
        </div>

        <Form {...form}>
          <form className="space-y-4">
            <FormFieldsRenderer fields={fields} />
          </form>
        </Form>

        <div className="shadow-sm fixed bottom-0 w-full right-0 border-t py-4 px-6 -ml-6 bg-background gap-2 justify-end flex">
          {/* Footer */}
          <Button>Click me</Button>
        </div>
      </aside>
    </ScrollArea>
  );
};

export default PersonalizationPanel;
