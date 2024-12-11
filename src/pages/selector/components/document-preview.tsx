import { PageSide, Sides } from "@/utils/template";
import { useSelectorContext } from "../context";
import PageSideSlot from "./page-side-slot";

const DocumentPreview = () => {
  const { sides, sidesTmp, setSidesTmp, setSides } = useSelectorContext();

  const [recto, verso] = sides;
  const [rectoTmp, versoTmp] = sidesTmp;

  const handleDelete = (pageToReset: PageSide) => {
    const newState = [
      pageToReset === "recto" ? null : recto,
      pageToReset === "verso" ? null : verso,
    ] as Sides;

    setSides(newState);
    setSidesTmp(newState);
  };

  return (
    <div className="col-span-2 flex gap-6 items-center justify-center p-4 z-10">
      <div className="bg-orange-300 absolute top-6 left-6 p-2">LOGO</div>

      <PageSideSlot
        side="recto"
        content={recto || rectoTmp}
        handleDelete={recto ? () => handleDelete("recto") : undefined}
      />

      <PageSideSlot
        side="verso"
        content={verso || versoTmp}
        handleDelete={verso ? () => handleDelete("verso") : undefined}
      />
    </div>
  );
};

export default DocumentPreview;
