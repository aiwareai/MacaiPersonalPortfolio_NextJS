import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";

const SingleBlogPage = () => {
  return (
    <>
      <title>{"lanelyya.de - Project Details"}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                  Project Details
                </h4>
                <ul>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Link:</p>
                    <a href="https://lanelyya.de" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 hover:text-primary">lanelyya.de</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Company:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Lanelyya</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Industry:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Fashion</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Project Technologies:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Shopify</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                lanelyya.de
                </h2>
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/66]">
                    <Image
                      src="/images/portfolio/lanelyya.jpg"
                      alt="lanelyya online store"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>
                <div className="blog-details">
                    <p>Lanellya is a modern online store for clothing and accessories, launched on Shopify to meet the expectations of discerning customers from Germany. Our platform is available in multiple languages, ensuring smooth shopping experiences for international and German-speaking customers. As a result, "ModeTrend DE" becomes a bridge between global fashion trends and local preferences, offering collections that blend modernity with tradition.</p>
                    <p>By leveraging Shopify, our store not only provides smooth and secure checkout processes but also customization for individual user needs through multilingual support and localized payment and delivery options. We ensure that every aspect of our website reflects high standards of quality and design while promoting an ecological and ethical approach to clothing production.</p>
                    <p>Integration with Shopify allows us to harness the latest e-commerce technologies for offer personalization and to ensure unforgettable shopping experiences. Lanellya also harnesses the power of social media to build an international community around our brand, enabling customers to share opinions and inspirations. Our mission is to deliver clothing and accessories that not only follow trends but also inspire conscious choices and self-expression of style.</p>
                </div>
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
