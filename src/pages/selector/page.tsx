import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCartIcon } from "lucide-react";
import DocumentPreview from "./components/document-preview";
import PickTemplatePanel from "./components/pick-template-panel";

const HomePage = () => {
  return (
    <main className="grid grid-cols-3 grid-rows-[1fr_auto]">
      <DocumentPreview />

      <PickTemplatePanel />

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
