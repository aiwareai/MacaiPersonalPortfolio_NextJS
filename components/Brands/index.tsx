"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Brands = () => {
  const { t } = useTranslation();

  return (
    <>


      <section className="py-20 lg:py-30 px-6 md:px-8 2xl:px-2">
        <div className="mx-auto max-w-c-1390 py-22.5 xl:py-27.5 relative z-1 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark">
          <Image
            width={235}
            height={284}
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -top-25 -left-15 lg:left-0 -z-1"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute top-0 left-0 -z-1 hidden dark:block"
          />

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0"
          >
            <h2 className="font-bold text-black dark:text-white text-3xl xl:text-sectiontitle3 mb-4">
            {t('funfact.header1')}
            </h2>
            <p className="lg:w-11/12 mx-auto">
            {t('funfact.header2')}     
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-7.5 lg:gap-12.5 xl:gap-29 justify-center items-center">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Brands;
