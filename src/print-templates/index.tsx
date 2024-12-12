import { Template } from "@/utils/template";
import { template as energyWorkProjectTemplate } from "./energy-work-project-flyer";
import { template as estimatePropertyTemplate } from "./estimate-property-flyer";
import { template as propertyToSellTemplate } from "./property-to-sell-flyer";
import { template as rentForbiddenTemplate } from "./rent-forbidden-flyer";
import { template as yourAgentTemplate } from "./your-agent-flyer";

const TEMPLATES: Template[] = [
  // Flyers
  propertyToSellTemplate,
  yourAgentTemplate,
  rentForbiddenTemplate,
  estimatePropertyTemplate,
  energyWorkProjectTemplate,

  // Business cards
];

export default TEMPLATES;

// const DOCUMENTS_TYPES = [

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
