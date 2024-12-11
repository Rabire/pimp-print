import { Template } from "@/utils/template";
import { template as houseToSellFlyerTemplate } from "./house-to-sell-flyer";
import { template as yourAgentTemplate } from "./your-agent";

const TEMPLATES: Template[] = [houseToSellFlyerTemplate, yourAgentTemplate];

export default TEMPLATES;

// const DOCUMENTS_TYPES = [
//   {
//     name: "Flyers",
//     type: DocumentType.A5_FLYER,
//     width: 148,
//     height: 210,
//     documents: [
//       { name: "Votre conseiller" },
//       { name: "Bien à vendre" },
//       { name: "Journée porte ouverte" },
//       { name: "Interdiction de location" },
//       { name: "Estimation gratuite" },
//       { name: "Projet de travaux" },
//     ],
//   },
//   {
//     name: "Cartes de visites",
//     type: DocumentType.VISIT_CARD,
//     width: 85,
//     height: 55,
//     documents: [
//       { name: "Coordonnés avec photo" },
//       { name: "Coordonnés sans photo" },
//       { name: "Logo ecotransac maison" },
//       { name: "Logo ecotransac maison + texte" },
//       { name: "Logo ecotransac maison + slogan" },
//       { name: "Logo ecotransac maison + texte + slogan" },
//     ],
//   },
//   {
//     name: "Panneaux",
//     type: DocumentType.PANNEAUX,
//     width: 594,
//     height: 420,
//     documents: [
//       { name: "À vendre" },
//       { name: "Vendu" },
//       { name: "Recherche biens à vendre" },
//       { name: "Avis de valeur offert" },
//     ],
//   },
//   {
//     name: "Affiches",
//     type: DocumentType.A2_AFFICHE,
//     width: 210,
//     height: 297,
//     documents: [
//       { name: "Votre conseiller" },
//       { name: "Bien à vendre" },
//       { name: "Journée porte ouverte" },
//       { name: "Interdiction de location" },
//       { name: "Estimation gratuite" },
//       { name: "Projet de travaux" },
//     ],
//   },
// ];
