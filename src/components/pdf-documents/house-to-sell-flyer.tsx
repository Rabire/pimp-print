import Document from "@/utils/react-pdf/document";
import PdfIcon from "@/utils/react-pdf/lucid-to-react-pdf";
import { PrintPage } from "@/utils/react-pdf/print-page";
import { Image, Text, View } from "@/utils/react-pdf/renderer";
import { COLOR } from "@/utils/styles";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: any; // TODO: Define type using zod
};

const HouseToSellFlyer = ({ values }: Props) => {
  const { coverPicture } = values;

  return (
    <Document title="Flyer maison à vendre">
      <PrintPage
        size="A5"
        className="justify-between"
        showCutLines={true}
        showSafeArea={false}
      >
        <View className="bg-primary h-1/3 relative">
          {coverPicture && (
            <Image
              src={coverPicture}
              // src="https://media.discordapp.net/attachments/588440950465101835/1315469253000040558/villa-de-luxe-saint-didier-au-mont-dor-67508c64638c43161f6e132d-1733481327-723946701.jpg?ex=675785b6&is=67563436&hm=3ce59e42afb1e6aef6e32ed0f90e655c69fc20e1a338f0a95c2adfcdd3183c36"
            />
          )}

          <View className="absolute left-10 bottom-0 text-light">
            <Text className="text-lg">À la recherche de la</Text>
            <Text className="font-extrabold text-4xl uppercase">
              Maison de vos rêves ?
            </Text>
          </View>
        </View>

        <View className="px-10 py-6 flex-row items-end">
          <View className="w-3/4 gap-2 mr-4">
            <Text className="font-semibold">Ce qui la rend unique</Text>

            <Text className="text-sm opacity-60 text-justify leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
              suscipit omnis atque eaque temporibus ex perferendis architecto
              sint reiciendis quam praesentium magni id eum eligendi quas vitae
              alias accusamus!
            </Text>

            <Text className="text-sm opacity-60 text-justify leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
              suscipit omnis atque eaque temporibus ex perferendis architecto
              sint reiciendis quam praesentium magni id eum eligendi quas vitae
              alias accusamus!
            </Text>
          </View>

          <View className="gap-2 flex-col w-1/4 ml-4">
            <Li icon="Bed" title="Pièces" value="5" />
            <Li icon="ShowerHead" title="Salles de bain" value="2" />
            <Li icon="Scaling" title="Surface habitable" value="523 m²" />
          </View>
        </View>

        <View className="gap-2 flex-row mx-[2mm]">
          {/* Pictures row */}
          <Image
            src="https://media.discordapp.net/attachments/588440950465101835/1315469253326934047/villa-de-luxe-saint-didier-au-mont-dor-67508c64638c43161f6e132d-1733481328-2075360037.jpg?ex=675785b6&is=67563436&hm=fd254645e248161cbfd285d39963b18ef31ea017cff3393016e01853ad5c699f"
            className="bg-primary w-full h-[130px]"
          />
          <Image
            src="https://media.discordapp.net/attachments/588440950465101835/1315469252630810704/villa-de-luxe-saint-didier-au-mont-dor-67508c64638c43161f6e132d-1733481330-1516998414.jpg?ex=675785b6&is=67563436&hm=e43d266479f71f521dc46ad059c683dde181aac7e2d31bb514e95c5c3b010090"
            className="bg-primary w-full h-[130px]"
          />
          <Image
            src="https://media.discordapp.net/attachments/588440950465101835/1315469252073095218/villa-de-luxe-saint-didier-au-mont-dor-67508c64638c43161f6e132d-1733481331-394141347.jpg?ex=675785b5&is=67563435&hm=c423e1f4f9da2bdcee53efa9a798d295842ce389129d829778a0e333a1b86b45"
            className="bg-primary w-full h-[130px]"
          />
        </View>

        <View className="gap-4 flex-row px-10 py-10 justify-between items-center">
          {/* Footer */}
          <View className="flex-row gap-4">
            <View className="gap-2 flex-col">
              <Li
                icon="WavesLadder"
                title="Inclus"
                value="Sauna + Hammam + Piscine"
              />
              <Li icon="Mountain" title="Vue" value="À 180°" />
            </View>

            <View className="gap-2 flex-col">
              <Li icon="Hammer" title="Construit en" value="2011" />
              <Li icon="PiggyBank" title="Prix de vente" value="450 000 €" />
            </View>
          </View>

          <View className="flex-row gap-2">
            <View className="items-end">
              <Text className="max-w-20 text-sm text-right">
                D'autres biens qui pourraient vous plaire ici !
              </Text>
              <PdfIcon
                size={14}
                icon="CornerDownRight"
                strokeWidth={1.2}
                className="mt-0.5 -rotate-12"
                style={{ color: COLOR.secondary }}
              />
            </View>

            <Image
              src="https://media.discordapp.net/attachments/588440950465101835/1315466009922240642/Untitled_1.png?ex=675782b0&is=67563130&hm=99a008d73fdd8b32cd270bdb6007f98cccae2977ce51adf4979d672e181578df"
              className="bg-gray-300 h-16 w-16"
            />
          </View>
        </View>
      </PrintPage>
    </Document>
  );
};

export default HouseToSellFlyer;

type LiProps = {
  icon: string;
  title: string;
  value: string;
};

const Li = ({ icon, title, value }: LiProps) => {
  return (
    <View className="flex-row gap-3 items-center text-sm ">
      {/* <View className="bg-gray-200 h-8 w-8">icon</View> */}
      <PdfIcon size={18} icon={icon} strokeWidth={1.2} />
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
