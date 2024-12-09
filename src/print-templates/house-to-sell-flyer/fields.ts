import { Field } from "@/utils/field";

const FIELDS: Field[] = [
  {
    name: "subtitle",
    label: "Titre petit",
    type: "text",
    defaultValue: "À la recherche de la",
  },
  {
    name: "title",
    label: "Titre grand",
    type: "text",
    defaultValue: "Maison de vos rêves ?",
  },
  {
    name: "coverPicture",
    label: "Image entête",
    type: "image",
    defaultValue:
      "https://media.discordapp.net/attachments/588440950465101835/1315469253000040558/villa-de-luxe-saint-didier-au-mont-dor-67508c64638c43161f6e132d-1733481327-723946701.jpg?ex=675785b6&is=67563436&hm=3ce59e42afb1e6aef6e32ed0f90e655c69fc20e1a338f0a95c2adfcdd3183c36",
  },

  {
    name: "paragraphTitle",
    label: "Titre paragraphe",
    type: "text",
    defaultValue: "Ce qui la rend unique",
  },
  {
    name: "paragraphContent",
    label: "Paragraphe",
    type: "textarea",
    defaultValue:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, suscipit omnis atque eaque temporibus ex perferendis architecto sint reiciendis quam praesentium magni id eum eligendi quas vitae alias accusamus!",
  },

  {
    name: "li1Icon",
    label: "Icon élément liste 1",
    type: "icon",
    defaultValue: "Bed",
  },
  {
    name: "li1Title",
    label: "Titre élément liste 1",
    type: "text",
    defaultValue: "Pièces",
  },
  {
    name: "li1Value",
    label: "Contenu élément liste 1",
    type: "text",
    defaultValue: "5",
  },

  {
    name: "li2Icon",
    label: "Icon élément liste 2",
    type: "icon",
    defaultValue: "ShowerHead",
  },
  {
    name: "li2Title",
    label: "Titre élément liste 2",
    type: "text",
    defaultValue: "Salles de bain",
  },
  {
    name: "li2Value",
    label: "Contenu élément liste 2",
    type: "text",
    defaultValue: "2",
  },

  {
    name: "li3Icon",
    label: "Icon élément liste 3",
    type: "icon",
    defaultValue: "Scaling",
  },
  {
    name: "li3Title",
    label: "Titre élément liste 3",
    type: "text",
    defaultValue: "Surface habitable",
  },
  {
    name: "li3Value",
    label: "Contenu élément liste 3",
    type: "text",
    defaultValue: "523 m²",
  },

  {
    name: "imageRow1",
    label: "Image 1",
    type: "image",
    defaultValue:
      "https://media.discordapp.net/attachments/588440950465101835/1315469253326934047/villa-de-luxe-saint-didier-au-mont-dor-67508c64638c43161f6e132d-1733481328-2075360037.jpg?ex=675785b6&is=67563436&hm=fd254645e248161cbfd285d39963b18ef31ea017cff3393016e01853ad5c699f",
  },
  {
    name: "imageRow2",
    label: "Image 2",
    type: "image",
    defaultValue:
      "https://media.discordapp.net/attachments/588440950465101835/1315469252630810704/villa-de-luxe-saint-didier-au-mont-dor-67508c64638c43161f6e132d-1733481330-1516998414.jpg?ex=675785b6&is=67563436&hm=e43d266479f71f521dc46ad059c683dde181aac7e2d31bb514e95c5c3b010090",
  },
  {
    name: "imageRow3",
    label: "Image 3",
    type: "image",
    defaultValue:
      "https://media.discordapp.net/attachments/588440950465101835/1315469252073095218/villa-de-luxe-saint-didier-au-mont-dor-67508c64638c43161f6e132d-1733481331-394141347.jpg?ex=675785b5&is=67563435&hm=c423e1f4f9da2bdcee53efa9a798d295842ce389129d829778a0e333a1b86b45",
  },

  {
    name: "li4Icon",
    label: "Icon élément liste 4",
    type: "icon",
    defaultValue: "WavesLadder",
  },
  {
    name: "li4Title",
    label: "Titre élément liste 4",
    type: "text",
    defaultValue: "Inclus",
  },
  {
    name: "li4Value",
    label: "Contenu élément liste 4",
    type: "text",
    defaultValue: "Sauna + Hammam + Piscine",
  },

  {
    name: "li5Icon",
    label: "Icon élément liste 5",
    type: "icon",
    defaultValue: "Mountain",
  },
  {
    name: "li5Title",
    label: "Titre élément liste 5",
    type: "text",
    defaultValue: "Vue",
  },
  {
    name: "li5Value",
    label: "Contenu élément liste 5",
    type: "text",
    defaultValue: "À 180°",
  },

  {
    name: "li6Icon",
    label: "Icon élément liste 6",
    type: "icon",
    defaultValue: "Hammer",
  },
  {
    name: "li6Title",
    label: "Titre élément liste 6",
    type: "text",
    defaultValue: "Construit en",
  },
  {
    name: "li6Value",
    label: "Contenu élément liste 6",
    type: "text",
    defaultValue: "2011",
  },

  {
    name: "li7Icon",
    label: "Icon élément liste 7",
    type: "icon",
    defaultValue: "PiggyBank",
  },
  {
    name: "li7Title",
    label: "Titre élément liste 7",
    type: "text",
    defaultValue: "Prix de vente",
  },
  {
    name: "li7Value",
    label: "Contenu élément liste 7",
    type: "text",
    defaultValue: "450 000 €",
  },

  {
    name: "qrCodeUrl",
    label: "QRCode vitrine",
    type: "qrcode",
    defaultValue:
      "https://media.discordapp.net/attachments/588440950465101835/1315466009922240642/Untitled_1.png?ex=675782b0&is=67563130&hm=99a008d73fdd8b32cd270bdb6007f98cccae2977ce51adf4979d672e181578df",
  },
];

export default FIELDS;
