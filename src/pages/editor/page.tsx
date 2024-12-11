import { Form } from "@/components/ui/form";
import { useEditorContext } from "@/pages/editor/context";
import { template, Type } from "@/print-templates/house-to-sell-flyer";
import Document from "@/utils/react-pdf/document";
import { zodResolver } from "@hookform/resolvers/zod";
import { PDFViewer } from "@react-pdf/renderer";
import { useForm } from "react-hook-form";
import Header from "./components/header";
import PersonalizationPanel from "./components/personalization-panel";

function EditorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useForm<any>({
    resolver: zodResolver(template.schema),
    defaultValues: template.defaultValues,
  });

  const values = form.watch();

  const { settings } = useEditorContext();

  const { page: Page, fields, title } = template;

  return (
    <main className="grid grid-cols-3 h-full">
      <Form {...form}>
        <div className="col-span-2 z-10 flex flex-col h-full">
          <Header />

          <PDFViewer className="flex-grow" showToolbar={false}>
            <Document title={title}>
              <Page values={values as Type} settings={settings} />
            </Document>
          </PDFViewer>
        </div>

        <PersonalizationPanel fields={fields} />
      </Form>
    </main>
  );
}

export default EditorPage;
