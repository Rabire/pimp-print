import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import TEMPLATES from "@/print-templates";
import { DOCUMENTS, PrintableDocument, Template } from "@/utils/template";
import { useSelectorContext } from "../context";
import TemplateProposal from "./template-proposal";

const PickTemplatePanel = () => {
  const { sides, setSidesTmp, setSides, setSelectedDocType, selectedDocType } =
    useSelectorContext();

  const [recto, verso] = sides;

  const handleTypeSelect = (type: PrintableDocument) => {
    setSelectedDocType(type);
    setSides([null, null]);
    setSidesTmp([null, null]);
  };

  const onTemplateHover = (template: Template) => {
    if (recto && verso) return;

    const availableSlotIndex: 0 | 1 = !recto ? 0 : !verso ? 1 : 0;

    setSidesTmp((prev) => [
      availableSlotIndex === 0 ? template : prev[0],
      availableSlotIndex === 1 ? template : prev[1],
    ]);
  };

  const onTemplateHoverExit = () => {
    setSidesTmp(sides);
  };

  const onTemplateClick = (template: Template) => {
    const availableSlotIndex: 0 | 1 | null = !recto ? 0 : !verso ? 1 : null;

    if (availableSlotIndex === null) {
      // TODO: alert : "Vous avez déjà choisi un recto et un verso. Veuillez supprimer un côté pour en ajouter un nouveau."
      return;
    }

    setSides((prev) => [
      availableSlotIndex === 0 ? template : prev[0],
      availableSlotIndex === 1 ? template : prev[1],
    ]);
  };

  const filteredTemplates = TEMPLATES.filter(
    (template) => template.documentCategory === selectedDocType.type
  );

  return (
    <ScrollArea className="border-l">
      <aside className="p-6 pb-8 space-y-6 relative">
        <div className="gap-2 flex flex-wrap justify-center border-b pb-4">
          {/* Document types */}
          {DOCUMENTS.map((type) => (
            <Button
              key={type.name}
              variant={selectedDocType === type ? "default" : "outline"}
              onClick={() => handleTypeSelect(type)}
            >
              {type.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-center">
          {filteredTemplates.map((template) => (
            <TemplateProposal
              key={template.name}
              template={template}
              onHover={onTemplateHover}
              onClick={onTemplateClick}
              onHoverExit={onTemplateHoverExit}
            />
          ))}
        </div>

        {/* <Button
      variant="outline"
      className="sticky bottom-2 left-0 -ml-3"
      // TODO: add a button scroll to top : https://github.com/radix-ui/primitives/discussions/990#discussioncomment-9335976
    >
      <ArrowUp />
    </Button> */}
      </aside>
    </ScrollArea>
  );
};

export default PickTemplatePanel;
