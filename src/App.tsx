import Document from "@/utils/react-pdf/document";
import { zodResolver } from "@hookform/resolvers/zod";
import { PDFViewer } from "@react-pdf/renderer";
import { useForm } from "react-hook-form";
import PersonalizationPanel from "./components/personalization-panel";
import { Form } from "./components/ui/form";

import { template, Type } from "./print-templates/house-to-sell-flyer";

function App() {
  const form = useForm({
    resolver: zodResolver(template.schema),
    defaultValues: template.defaultValues,
  });

  const values = form.watch();

  const { page: Page, fields, title } = template;

  return (
    <main className="grid grid-cols-3 h-full">
      <Form {...form}>
        <PDFViewer
          className="h-full w-full col-span-2 z-10"
          showToolbar={false}
        >
          <Document title={title}>
            <Page values={values as Type} />
          </Document>
        </PDFViewer>

        <PersonalizationPanel fields={fields} />
      </Form>
    </main>
  );
}

export default App;
