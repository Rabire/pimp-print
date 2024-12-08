import { Text, View } from "@/lib/react-pdf/renderer";
import { DEFAULT_PADDING, PrintPage } from "@/lib/react-pdf/utils";
import { Document } from "@react-pdf/renderer";

const HouseToSellFlyer = () => {
  return (
    <Document>
      <PrintPage size="A5" showGuides={false}>
        <View className={`m-[${DEFAULT_PADDING}]`}>
          <Text>test</Text>
        </View>
      </PrintPage>
    </Document>
  );
};

export default HouseToSellFlyer;
