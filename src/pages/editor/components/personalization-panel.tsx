import FormFieldsRenderer from "@/components/form-fields-renderer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Field } from "@/utils/field";
import { SaveIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

type Props = {
  fields: Field[];
};

const PersonalizationPanel = ({ fields }: Props) => {
  const form = useFormContext();

  const onSubmit = () => {
    //
  };

  return (
    <ScrollArea>
      <aside className="p-6 pb-20 space-y-6 relative border-l">
        <div className="space-y-1">
          {/* Header */}

          <h1 className="text-lg font-semibold text-foreground">
            Panneau de personnalisation
          </h1>
          <p className="text-sm text-muted-foreground">
            Personnalisez votre document en remplissant les champs ci-dessous.
          </p>
        </div>

        <Tabs defaultValue="recto">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="recto" className="w-full">
              Recto
            </TabsTrigger>
            <TabsTrigger value="verso" className="w-full">
              Verso
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recto">
            <form className="space-y-4">
              <FormFieldsRenderer fields={fields} />
            </form>
          </TabsContent>

          <TabsContent value="verso">Formulaire verso</TabsContent>
        </Tabs>

        <div className="shadow-sm fixed bottom-0 w-full right-0 border-t py-4 px-6 -ml-6 bg-background gap-2 justify-end flex">
          {/* Footer */}
          <Button onClick={form.handleSubmit(onSubmit)}>
            <SaveIcon />
            <span>Sauvegarder la page</span>
          </Button>
        </div>
      </aside>
    </ScrollArea>
  );
};

export default PersonalizationPanel;
