'use client'

import Image from "next/image";


const LanguageSwitcher = () => {



  return (
    <button
    aria-label="language toggler"
      className="bg-gray-2 dark:bg-dark-bg flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white mr-1.5 absolute lg:static right-17"
      // onClick={handleLanguageSwitch}
    >
      <Image
        src="/images/icon/PL.svg"
        alt="logo"
        width={21}
        height={21}
        className="dark:hidden"
      />

      <Image
        src="/images/icon/EN.svg"
        alt="logo"
        width={22}
        height={22}
        className="hidden dark:block"
      />
    </button>
  );
};

export default LanguageSwitcher;



// import { useTheme } from "next-themes";
// import Image from "next/image";
// import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

// const LanguageSwitcher = () => {
//   const router = useRouter();

//   const handleLanguageChange = (locale: string) => {
//     localStorage.setItem('locale', locale);
//     router.push('/', { params: { lang: locale } }); // Reload the page with the selected locale
//   };

//   return (
//     <div className="relative">
//       {/* Dark mode toggler buttons removed */}
//       <button
//         onClick={() => handleLanguageChange('en')}
//         className="mr-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
//       >
//         English
//       </button>
//       <button
//         onClick={() => handleLanguageChange('pl')}
//         className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
//       >
//         Polski
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;




// import { useTheme } from "next-themes";
// import Image from "next/image";

// const LanguageSwitcher = () => {
//   const { theme, setTheme } = useTheme();

//   const handleLanguageChange = (locale) => {
//     setTheme(locale === 'en' ? 'light' : 'dark');
//     document.documentElement.lang = locale; // Update HTML lang attribute
//   };

//   return (
//     <div className="relative">
//       <button 
//         aria-label="theme toggler" 
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
//         className="bg-gray-2 dark:bg-dark-bg flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white mr-1.5 absolute lg:static right-17"
//       >
//         <Image src="/images/icon/icon-moon.svg" alt="logo" width={21} height={21} className="dark:hidden" />
//         <Image src="/images/icon/icon-sun.svg" alt="logo" width={22} height={22} className="hidden dark:block" />
//       </button>
//       <button onClick={() => handleLanguageChange('en')} className="mr-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">English</button>
//       <button onClick={() => handleLanguageChange('pl')} className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">Polski</button>
//     </div>
//   );
// };

// export default LanguageSwitcher;




// import { useRouter } from 'next/navigation'; 
// import { useTranslations } from 'next-intl';

// const LanguageSwitcher: React.FC = () => {
//   const { locale, push } = useRouter();
//   const t = useTranslations('common');

//   const handleLanguageChange = (newLocale: string) => {
//     push(router.asPath, undefined, { locale: newLocale });
//   };

//   return (
//     <div>
//       <span>{t('language')}: </span>
//       <button onClick={() => handleLanguageChange('en')}>
//         {t('english')}
//       </button>
//       <button onClick={() => handleLanguageChange('pl')}>
//         {t('polish')}
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;