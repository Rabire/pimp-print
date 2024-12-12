import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCartIcon } from "lucide-react";
import { useNavigate } from "react-router";
import DocumentPreview from "./components/document-preview";
import PickTemplatePanel from "./components/pick-template-panel";
import { useSelectorContext } from "./context";

const HomePage = () => {
  const { sides } = useSelectorContext();
  const [page1, page2] = sides;

  const canGoToEditor = Boolean(page1 && page2);

  const navigate = useNavigate();

  const onEditorClick = () => {
    if (!canGoToEditor) return;

    navigate("/editor");
  };

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

        <Button disabled={!canGoToEditor} onClick={onEditorClick}>
          <span>Personnaliser le document</span>
          <ArrowRight />
        </Button>
      </div>
    </main>
  );
};

export default HomePage;
