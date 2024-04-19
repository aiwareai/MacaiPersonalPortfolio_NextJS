'use client'

import React, { useState, useEffect } from "react";
import PortfolioItem from "./portfolioItem";
import PortfolioData from "./portfolioData";
import Image from "next/image";
import Link from "next/link";


const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("websites");
  const [filteredPortfolio, setFilteredPortfolio] = useState(PortfolioData);
 
  useEffect(() => {
    if (selectedTag === "websites") {
      setFilteredPortfolio(PortfolioData);
    } else {
      const filteredItems = PortfolioData.filter((item) =>
        item.tags.includes(selectedTag)
      );
      setFilteredPortfolio(filteredItems);
    }
  }, [selectedTag]);

  const handleTagSelection = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
  <section className="pb-10 lg:py-15 xl:py-20 px-10">
        <div className="flex flex-row mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
              <div className="flex flex-col md:w-1/2">
                    <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
                      🔥 Projects & Works
                    </h4>
                    <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
                    My Portfolio
                      <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                      </span>
                    </h1>
                    <p>With Business-Changing Projects</p>
               </div>
                <div className="flex flex-col md:w-1/2">
                   <div className="relative aspect-[700/444]">
                      <Image
                        className="shadow-solid-l"
                        src="/images/hero/hero-dark.svg"
                        alt="Hero"
                        fill
                      />
              </div>
              </div>
      </div>
      </section>


          <section className="pb-10 lg:py-15 xl:py-20 px-10">
          <div className="flex flex-wrap flex-row justify-center gap-6 mt-1">
                  <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "websites" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("websites")}
                  >
                    Websites
                  </button>
                    <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "marketing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("marketing")}
                  >
                    Marketing & SEO
                  </button>
                  <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "ai" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("ai")}
                  >
                    AI & Automations
                  </button>
                  <Link href="/generativeai" target="_blank" rel="noopener noreferrer">
                  <button 
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "marketing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    Generative AI
                  </button>
                  </Link>
                    
                  
           
             
                
         </div>
              <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
                  {filteredPortfolio.map((post, key) => (
                    <PortfolioItem key={key} portfolio={post} />
                  ))}
                </div>
              </div>
        </section>


    </>
  );
};

export default Portfolio;
