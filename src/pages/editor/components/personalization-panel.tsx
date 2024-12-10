import FormFieldsRenderer from "@/components/form-fields-renderer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Field } from "@/utils/field";
import { SaveIcon } from "lucide-react";

type Props = {
  fields: Field[];
};

const PersonalizationPanel = ({ fields }: Props) => {
  return (
    <ScrollArea>
      <aside className="p-6 pb-20 space-y-6 relative border-l">
        <div className="space-y-1 border-b pb-4">
          {/* Header */}

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
