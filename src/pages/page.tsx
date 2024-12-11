import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DOCUMENTS,
  PrintableDocument,
  Template,
  TEMPLATES,
} from "@/utils/template";
import { ArrowRight, ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import PageSideSlot from "./components/page-side-slot";
import TemplateProposal from "./components/template-proposal";

// const DOCUMENTS_TYPES = [
//   {
//     name: "Flyers",
//     type: DocumentType.A5_FLYER,
//     width: 148,
//     height: 210,
//     documents: [
//       { name: "Votre conseiller" },
//       { name: "Bien à vendre" },
//       { name: "Journée porte ouverte" },
//       { name: "Interdiction de location" },
//       { name: "Estimation gratuite" },
//       { name: "Projet de travaux" },
//     ],
//   },
//   {
//     name: "Cartes de visites",
//     type: DocumentType.VISIT_CARD,
//     width: 85,
//     height: 55,
//     documents: [
//       { name: "Coordonnés avec photo" },
//       { name: "Coordonnés sans photo" },
//       { name: "Logo ecotransac maison" },
//       { name: "Logo ecotransac maison + texte" },
//       { name: "Logo ecotransac maison + slogan" },
//       { name: "Logo ecotransac maison + texte + slogan" },
//     ],
//   },
//   {
//     name: "Panneaux",
//     type: DocumentType.PANNEAUX,
//     width: 594,
//     height: 420,
//     documents: [
//       { name: "À vendre" },
//       { name: "Vendu" },
//       { name: "Recherche biens à vendre" },
//       { name: "Avis de valeur offert" },
//     ],
//   },
//   {
//     name: "Affiches",
//     type: DocumentType.A2_AFFICHE,
//     width: 210,
//     height: 297,
//     documents: [
//       { name: "Votre conseiller" },
//       { name: "Bien à vendre" },
//       { name: "Journée porte ouverte" },
//       { name: "Interdiction de location" },
//       { name: "Estimation gratuite" },
//       { name: "Projet de travaux" },
//     ],
//   },
// ];

type Sides = [Template | null, Template | null];

const HomePage = () => {
  const [currentDocument, setCurrentDocument] = useState<PrintableDocument>(
    DOCUMENTS[0]
  );

  const [pagesNames, setPagesNames] = useState<Sides>([null, null]);
  const [page1, page2] = pagesNames;

  const [pagesNamesShow, setPagesNamesShow] = useState<Sides>([null, null]);
  const [page1Show, page2Show] = pagesNamesShow;

  const onHover = (template: Template) => {
    const availableSlotIndex: 0 | 1 = !page1 ? 0 : !page2 ? 1 : 0;

    setPagesNamesShow((prev) => [
      availableSlotIndex === 0 ? template : prev[0],
      availableSlotIndex === 1 ? template : prev[1],
    ]);
  };

  const onHoverExit = () => {
    setPagesNamesShow(pagesNames);
  };

  const onClick = (template: Template) => {
    const availableSlotIndex: 0 | 1 | null = !page1 ? 0 : !page2 ? 1 : null;

    setPagesNames((prev) => [
      availableSlotIndex === 0 ? template : prev[0],
      availableSlotIndex === 1 ? template : prev[1],
    ]);
  };

  const handleDelete = (indexToDelete: 0 | 1) => {
    setPagesNames((prev) => [
      indexToDelete === 0 ? null : prev[0],
      indexToDelete === 1 ? null : prev[1],
    ]);
  };

  return (
    <main className="grid grid-cols-3 grid-rows-[1fr_auto]">
      <div className="col-span-2 flex gap-6 items-center justify-center p-4 z-10">
        <div className="bg-orange-300 absolute top-6 left-6 p-2">LOGO</div>

        <PageSideSlot
          side="recto"
          content={page1Show || page1}
          handleDelete={() => handleDelete(0)}
        />
        <PageSideSlot
          side="verso"
          content={page2Show || page2}
          handleDelete={() => handleDelete(1)}
        />
      </div>

      <ScrollArea>
        {/* TODO: add a button scroll tot top : https://github.com/radix-ui/primitives/discussions/990#discussioncomment-9335976 */}
        <aside className="p-6 pb-8 space-y-6 relative border-l">
          <div className="gap-2 flex flex-wrap justify-center border-b pb-4">
            {/* Document types */}
            {DOCUMENTS.map((type) => (
              <Button
                key={type.name}
                variant={currentDocument === type ? "default" : "outline"}
                onClick={() => setCurrentDocument(type)}
              >
                {type.name}
              </Button>
            ))}
          </div>

          <div className="flex flex-col gap-4 items-center">
            {TEMPLATES.map((template) => (
              <TemplateProposal
                key={template.name}
                template={template}
                onHover={onHover}
                onClick={onClick}
                onHoverExit={onHoverExit}
              />
            ))}
          </div>
        </aside>
      </ScrollArea>

      <div className="shadow-sm col-span-3 border-t py-4 px-6 gap-2 justify-between flex">
        {/* Footer */}
        <Button>
          <ShoppingCartIcon />
          <span>Vos documents sauvegardés</span>
        </Button>

        <Button asChild>
          <a href="/editor">
            <span>Personnaliser le document</span>
            <ArrowRight />
          </a>
        </Button>
      </div>
    </main>
  );
};

export default HomePage;
