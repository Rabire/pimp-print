import PdfIcon from "@/utils/react-pdf/lucid-to-react-pdf";
import { PrintPage } from "@/utils/react-pdf/print-page";
import { Image, Text, View } from "@/utils/react-pdf/renderer";
import { COLOR } from "@/utils/styles";
import { Type } from ".";

type Props = {
  values: Type;
};

const Page = ({ values }: Props) => {
  const { coverPicture } = values;

  return (
    <PrintPage
      size="A5"
      className="justify-between"
      showCutLines={true}
      showSafeArea={false}
    >
      <View className="bg-primary h-1/3 relative">
        {coverPicture && <Image src={coverPicture} />}

        <View className="absolute left-10 bottom-0 text-light">
          <Text className="text-lg">{values.subtitle}</Text>
          <Text className="font-extrabold text-4xl uppercase">
            {values.title}
          </Text>
        </View>
      </View>

      <View className="px-10 py-6 flex-row items-end">
        <View className="w-3/4 gap-2 mr-4">
          <Text className="font-semibold">{values.paragraphTitle}</Text>

          <Text className="text-sm opacity-60 text-justify leading-6">
            {values.paragraphContent}
          </Text>
        </View>

        <View className="gap-2 flex-col w-1/4 ml-4">
          <Li
            icon={values.li1Icon}
            title={values.li1Title}
            value={values.li1Value}
          />
          <Li
            icon={values.li2Icon}
            title={values.li2Title}
            value={values.li2Value}
          />
          <Li
            icon={values.li3Icon}
            title={values.li3Title}
            value={values.li3Value}
          />
        </View>
      </View>

      <View className="gap-2 flex-row mx-[2mm]">
        {/* Pictures row */}
        <Image src={values.imageRow1} className="bg-primary w-full h-[130px]" />
        <Image src={values.imageRow2} className="bg-primary w-full h-[130px]" />
        <Image src={values.imageRow3} className="bg-primary w-full h-[130px]" />
      </View>

      <View className="gap-4 flex-row px-10 py-10 justify-between items-center">
        {/* Footer */}
        <View className="flex-row gap-4">
          <View className="gap-2 flex-col">
            <Li
              icon={values.li4Icon}
              title={values.li4Title}
              value={values.li4Value}
            />
            <Li
              icon={values.li5Icon}
              title={values.li5Title}
              value={values.li5Value}
            />
          </View>

          <View className="gap-2 flex-col">
            <Li
              icon={values.li6Icon}
              title={values.li6Title}
              value={values.li6Value}
            />
            <Li
              icon={values.li7Icon}
              title={values.li7Title}
              value={values.li7Value}
            />
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

          <Image src={values.qrCodeUrl} className="bg-gray-300 h-16 w-16" />
        </View>
      </View>
    </PrintPage>
  );
};

export default Page;

type LiProps = {
  icon: string | null;
  title: string | null;
  value: string | null;
};

const Li = ({ icon, title, value }: LiProps) => {
  console.log({ icon });

  return (
    <View className="flex-row gap-3 items-center text-sm">
      {icon && <PdfIcon size={18} icon={icon} strokeWidth={1.2} />}

      <View>
        <Text className="mb-1 opacity-60">{title}</Text>
        <Text className="font-semibold">{value}</Text>
      </View>
    </View>
  );
};
