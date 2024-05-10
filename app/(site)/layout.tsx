

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import Voiceflow from "@/components/Voiceflow";
// import Botpress from "@/components/Botpress";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";
import ToasterContext from "../context/ToastContext";

import { useIntl } from 'react-intl';
import { IntlProvider } from 'next-intl';
import en from '../../i18n/messages/en.json';
import pl from '../../i18n/messages/pl.json';

export default function RootLayout({
  children,
  params: {locale},
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  
  return (
    <html lang={locale}>
      <body className={`dark:bg-black`}>
      <IntlProvider locale="en" messages={en}>

        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="dark"
        >
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer /> 
            {/* <Botpress/> */}
            <Voiceflow/>  
        </ThemeProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
