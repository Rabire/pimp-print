import { DOCUMENTS, PrintableDocument, Sides } from "@/utils/template";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Type = {
  sides: Sides;
  setSides: Dispatch<SetStateAction<Sides>>;
  sidesTmp: Sides;
  setSidesTmp: Dispatch<SetStateAction<Sides>>;
  selectedDocType: PrintableDocument;
  setSelectedDocType: Dispatch<SetStateAction<PrintableDocument>>;
};

const defaultValues: Type = {
  sides: [null, null],
  setSides: () => null,
  sidesTmp: [null, null],
  setSidesTmp: () => null,
  selectedDocType: DOCUMENTS[0],
  setSelectedDocType: () => null,
};

const SelectorContext = createContext<Type>(defaultValues);

export const SelectorProvider = ({ children }: { children: ReactNode }) => {
  const [sides, setSides] = useState<Sides>([null, null]);
  const [sidesTmp, setSidesTmp] = useState<Sides>([null, null]);

  const [selectedDocType, setSelectedDocType] = useState<PrintableDocument>(
    DOCUMENTS[0]
  );

  const value: Type = {
    sides,
    setSides,
    sidesTmp,
    setSidesTmp,
    selectedDocType,
    setSelectedDocType,
  };

  return (
    <SelectorContext.Provider value={value}>
      {children}
    </SelectorContext.Provider>
  );
};

export const useSelectorContext = () => {
  return useContext(SelectorContext);
};
