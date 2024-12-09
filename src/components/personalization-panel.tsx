import { Field } from "@/utils/field";
import { SaveIcon } from "lucide-react";
import FormFieldsRenderer from "./form-fields-renderer";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

type Props = {
  fields: Field[];
};

const PersonalizationPanel = ({ fields }: Props) => {
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

        <form className="space-y-4">
          <FormFieldsRenderer fields={fields} />

          <div className="shadow-sm fixed bottom-0 w-full right-0 border-t py-4 px-6 -ml-6 bg-background gap-2 justify-end flex">
            {/* Footer */}
            <Button type="submit">
              <SaveIcon />
              <span>Sauvegarder la page</span>
            </Button>
          </div>
        </form>
      </aside>
    </ScrollArea>
  );
};

export default PersonalizationPanel;
