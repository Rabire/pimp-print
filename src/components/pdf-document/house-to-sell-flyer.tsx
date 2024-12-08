import Document from "@/lib/react-pdf/document";
import { PrintPage } from "@/lib/react-pdf/print-page";
import { Text, View } from "@/lib/react-pdf/renderer";

const HouseToSellFlyer = () => {
  return (
    <Document title="Flyer maison à vendre">
      <PrintPage size="A5" showGuides={false} className="justify-between">
        <View className="bg-blue-300 text-light justify-end flex-col h-1/3 px-10">
          <Text className="text-lg">À la recherche de la</Text>
          <Text className="font-extrabold text-4xl uppercase">
            Maison de vos rêves ?
          </Text>
        </View>

        <View className="px-10 py-6 flex-row items-center">
          <View className="w-3/4 gap-2">
            <Text className="font-semibold">Ce qui la rend unique</Text>

            <Text className="text-sm opacity-60 text-justify leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
              suscipit omnis atque eaque temporibus ex perferendis architecto
              sint reiciendis quam praesentium magni id eum eligendi quas vitae
              alias accusamus ullam!
            </Text>

            <Text className="text-sm opacity-60 text-justify leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
              suscipit omnis atque eaque temporibus ex perferendis architecto
              sint reiciendis quam praesentium magni id eum eligendi quas vitae
              alias accusamus ullam!
            </Text>
          </View>

          <View className="gap-2 flex-col w-1/4 ml-4">
            <Li title="Pièces" value="5" />
            <Li title="Salles de bain" value="2" />
            <Li title="Surface habitable" value="523 m²" />
          </View>
        </View>

        <View className="gap-2 flex-row mx-[2mm]">
          {/* Pictures row */}
          <View className="bg-pink-300 w-full h-[130px]"></View>
          <View className="bg-pink-300 w-full h-[130px]"></View>
          <View className="bg-pink-300 w-full h-[130px]"></View>
        </View>

        <View className="gap-4 flex-row px-10 py-10 justify-between items-center">
          {/* Footer */}
          <View className="flex-row gap-4">
            <View className="gap-2 flex-col">
              <Li title="Inclus" value="Sauna + Hammam + Piscine" />
              <Li title="Vue" value="À 180°" />
            </View>

            <View className="gap-2 flex-col">
              <Li title="Construit en" value="2011" />
              <Li title="Prix de vente" value="450 000 €" />
            </View>
          </View>

          <View className="flex-row gap-2">
            {/* TODO: add une fleche */}
            <Text className="max-w-20 text-sm">
              D'autres biens qui pourraient vous plaire ici !
            </Text>
            <View className="bg-gray-300 h-20 w-20"></View>
          </View>
        </View>
      </PrintPage>
    </Document>
  );
};

export default HouseToSellFlyer;

type LiProps = {
  // icon
  title: string;
  value: string;
};

const Li = ({ title, value }: LiProps) => {
  return (
    <View className="flex-row gap-2 items-center text-sm ">
      <View className="bg-gray-200 h-8 w-8">{/* icon */}</View>
      <View>
        <Text className="mb-1 opacity-60">{title}</Text>
        <Text className="font-semibold">{value}</Text>
      </View>
    </View>
  );
};

{
  /* <View className="gap-4 flex-row items-center">
        <View className="bg-purple-300 rounded-lg h-16 w-16"></View>

        <View className="flex-col">
            <Text className="font-semibold text-xl">Rabire</Text>
            <Text>HAKIM</Text>
        </View>

        <View className="flex-col text-sm opacity-70 gap-1">
            <Text>rabire.hakim@ecotransac.fr</Text>
            <Text>06 52 78 99 07</Text>
            <Text>ecotransac.fr</Text>
        </View>
    </View> */
}
