import { FeatureTab } from "@/types/featureTab";
import { useTranslation } from 'react-i18next';

const getTranslatedFeaturesTabData = () => {
  const { t } = useTranslation();

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: t('heroAiSection.AiFeaturesTab.tab1Title'),
    desc1: t('heroAiSection.AiFeaturesTab.tab1Description1'),
    desc2: t('heroAiSection.AiFeaturesTab.tab1Description1'),
    image: "/images/features/undraw_business_decisions.svg",
    imageDark: "/images/features/undraw_business_decisions.svg",
  },
  {
    id: "tabTwo",
    title: t('heroAiSection.AiFeaturesTab.tab2Title'),
    desc1: t('heroAiSection.AiFeaturesTab.tab2Description1'),
    desc2: t('heroAiSection.AiFeaturesTab.tab2Description2'),
    image: "/images/features/undraw_chat.svg",
    imageDark: "/images/features/undraw_chat.svg",
  },
  {
    id: "tabThree",
    title: t('heroAiSection.AiFeaturesTab.tab3Title'),
    desc1: t('heroAiSection.AiFeaturesTab.tab3Description1'),
    desc2: t('heroAiSection.AiFeaturesTab.tab3Description2'),
    image: "/images/features/undraw_financial_data.svg",
    imageDark: "/images/features/undraw_financial_data.svg",
  },
];

return featuresTabData;
}
export default getTranslatedFeaturesTabData;

// import { FeatureTab } from "@/types/featureTab";
// import { useTranslation } from 'react-i18next';

// const getTranslatedFeaturesTabData = () => {
//   const { t } = useTranslation();

//   const featuresTabData: FeatureTab[] = [
//     {
//       id: "tabOne",
//       title: t('featuresTab.tab1Title'),
//       desc1: t('featuresTab.tab1Description1'),
//       desc2: t('featuresTab.tab1Description2'),
//       image: "/images/features/undraw_solution_mindset.svg",
//       imageDark: "/images/features/undraw_solution_mindset.svg",
//     },
//     {
//       id: "tabTwo",
//       title: t('featuresTab.tab2Title'),
//       desc1: t('featuresTab.tab2Description1'),
//       desc2: t('featuresTab.tab2Description2'),
//       image: "/images/features/undraw_online_stats.svg",
//       imageDark: "/images/features/undraw_online_stats.svg",
//     },
//     {
//       id: "tabThree",
//       title: t('featuresTab.tab3Title'),
//       desc1: t('featuresTab.tab3Description1'),
//       desc2: t('featuresTab.tab3Description2'),
//       image: "/images/features/undraw_predictive.svg",
//       imageDark: "/images/features/undraw_predictive.svg",
//     },
//   ];

//   return featuresTabData;
// };

// export default getTranslatedFeaturesTabData;



// import { FeatureTab } from "@/types/featureTab";

// const featuresTabData: FeatureTab[] = [
//   {
//     id: "tabOne",
//     title: "Audits, results analysis, and consultations",
//     desc1: `Unlock the full potential of your web and AI initiatives with audit and consultation. I delve deep into existing systems, analyzing every aspect for inefficiencies, gaps, and opportunities.`,
//     desc2: `We provide comprehensive assessments that highlight areas for improvement and optimization. From technical audits to strategic consultations, I am your partner in data-driven decision-making that leads to growth and success.`,
//     image: "/images/features/undraw_solution_mindset.svg",
//     imageDark: "/images/features/undraw_solution_mindset.svg",
//   },
//   {
//     id: "tabTwo",
//     title: "Modern Solutions For Your Business",
//     desc1: `Turn your ideas into reality with smart strategy and implementation. I don't just create plans - I bring them to life to develop personalized strategies that align with your goals.`,
//     desc2: `I utilize advanced monitoring and data analysis tools to identify weaknesses and strengths. By staying one step ahead, I ensure that your results are always growing.`,
//     image: "/images/features/undraw_online_stats.svg",
//     imageDark: "/images/features/undraw_online_stats.svg",
//   },
//   {
//     id: "tabThree",
//     title: "Automations and Analyses",
//     desc1: `Advanced services will allow you to automate many processes in your company, gaining a lot of time, which allows you to focus on the essence of your business.`,
//     desc2: `Using advanced analytical tools, I provide you with valuable insights that help make more informed business decisions. With automation and analysis, your company can achieve better results and become significantly more competitive in the market.`,
//     image: "/images/features/undraw_predictive.svg",
//     imageDark: "/images/features/undraw_predictive.svg",
//   },
// ];

// export default featuresTabData;
