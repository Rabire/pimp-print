import { PDFViewer } from "@react-pdf/renderer";
import HouseToSellFlyer from "./components/pdf-document/house-to-sell-flyer";
import PersonalizationPanel from "./components/personalization-panel";

function App() {
  return (
    <main className="grid grid-cols-3 h-full">
      <PDFViewer className="h-full w-full col-span-2 z-10" showToolbar={false}>
        <HouseToSellFlyer />
      </PDFViewer>

      <PersonalizationPanel />
    </main>
  );
}

export default App;
