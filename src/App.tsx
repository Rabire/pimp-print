import { PDFViewer } from "@react-pdf/renderer";
import HouseToSellFlyer from "./components/pdf-document/house-to-sell-flyer";

function App() {
  return (
    <>
      <PDFViewer className="h-full w-full">
        <HouseToSellFlyer />
      </PDFViewer>
    </>
  );
}

export default App;
