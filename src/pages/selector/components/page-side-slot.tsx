import { Button } from "@/components/ui/button";
import { PageSide, Template } from "@/utils/template";
import { Trash2Icon } from "lucide-react";
import { useSelectorContext } from "../context";

type Props = {
  side: PageSide;
  content: Template | null;
  handleDelete?: () => void;
};

const PageSideSlot = ({ side, content, handleDelete }: Props): JSX.Element => {
  const { selectedDocType } = useSelectorContext();

  const { sizes } = selectedDocType;

  return (
    <div>
      <div
        style={{ aspectRatio: `${sizes.width}/${sizes.height}` }}
        className="relative border border-muted-foreground border-dashed rounded-md w-80 bg-card p-4 flex items-center justify-center"
      >
        {content?.name}

        {handleDelete && (
          <Button
            onClick={() => handleDelete()}
            variant="destructive"
            className="absolute top-2 right-2"
          >
            <Trash2Icon />
          </Button>
        )}
      </div>
      <p className="text-center mt-2">{side}</p>
    </div>
  );
};

export default PageSideSlot;
