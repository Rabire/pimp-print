import { ReactNode, createContext, useContext, useState } from "react";

export type EditorSettings = { showCutLines: boolean; showSafeArea: boolean };

type Type = {
  settings: EditorSettings;
  updateSettings: (newSettings: Partial<EditorSettings>) => void;
};

const defaultValues: Type = {
  settings: { showCutLines: false, showSafeArea: false },
  updateSettings: () => null,
};

const EditorContext = createContext<Type>(defaultValues);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState({
    showCutLines: false,
    showSafeArea: false,
  });

  const updateSettings = (newSettings: Partial<EditorSettings>) => {
    setSettings((prevSettings) => ({ ...prevSettings, ...newSettings }));
  };

  const value: Type = {
    settings,
    updateSettings,
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  return useContext(EditorContext);
};
