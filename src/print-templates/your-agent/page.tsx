import { EditorSettings } from "@/pages/editor/context";
import { PrintPage } from "@/utils/react-pdf/print-page";
import { Text } from "@/utils/react-pdf/renderer";
import { Type } from ".";

type Props = {
  values: Type;
  settings: EditorSettings;
};

const Page = ({ values, settings }: Props) => {
  return (
    <PrintPage size="A5" className="justify-between" settings={settings}>
      <Text className="text-lg">{values.fullName}</Text>
    </PrintPage>
  );
};

export default Page;
