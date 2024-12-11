import { cn } from "@/utils/styles";
import { getDocument, Template } from "@/utils/template";

type Props = {
  template: Template;
  onHover: (template: Template) => void;
  onClick: (template: Template) => void;
  onHoverExit: () => void;
};

const TemplateProposal = ({
  template,
  onHover,
  onClick,
  onHoverExit,
}: Props) => {
  const { documentCategory } = template;

  const { sizes } = getDocument(documentCategory);

  return (
    <button
      style={{ aspectRatio: `${sizes.width}/${sizes.height}` }}
      onMouseEnter={() => onHover(template)}
      onMouseLeave={() => onHoverExit()}
      onClick={() => onClick(template)}
      className={cn(
        "border border-muted-foreground border-dashed rounded-md w-full bg-card p-4 flex items-center justify-center bg-green-300"
      )}
    >
      {template.name}
    </button>
  );
};

export default TemplateProposal;
