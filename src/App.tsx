import { PDFViewer } from "@react-pdf/renderer";
import { useForm } from "react-hook-form";
import HouseToSellFlyer from "./components/pdf-documents/house-to-sell-flyer";
import PersonalizationPanel from "./components/personalization-panel";
import { Form } from "./components/ui/form";

function App() {
  const form = useForm();

  const values = form.watch();

  return (
    <main className="grid grid-cols-3 h-full">
      <Form {...form}>
        <PDFViewer
          className="h-full w-full col-span-2 z-10"
          showToolbar={false}
        >
          <HouseToSellFlyer values={values} />
        </PDFViewer>

        <PersonalizationPanel />
      </Form>
    </main>
  );
}

export default App;
