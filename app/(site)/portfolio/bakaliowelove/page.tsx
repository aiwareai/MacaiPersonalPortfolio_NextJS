import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";

const SingleBlogPage = () => {
  return (
    <>
      <title>{"slovlystudio.pl - Project Details"}</title>
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
                    <a href="https://bakaliowelove.pl" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 hover:text-primary">bakaliowelove.pl</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Company:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Bakaliowelove</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Industry:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Healthy Food</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Project Technologies:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Woocommerce</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                 bakaliowelove.pl
                </h2>
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/66]">
                    <Image
                      src="/images/portfolio/bakaliovelove.jpg"
                      alt="Online Store Bakaliowelove"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>
                <div className="blog-details">
                    <p>"Bakaliowe Love" is an innovative online store specializing in dried fruits and healthy food, built on the powerful WooCommerce platform. With this solution, we provide our customers with reliable and secure online shopping. WooCommerce enables us to offer an intuitive shopping experience with easy access to a wide range of nutritional and organic products.</p>
                    <p>Our store utilizes advanced WooCommerce features for personalizing the product offering, allowing us to tailor product recommendations to each customer's preferences. As a result, shopping at "Bakaliowe Love" is not only simple but also customized to the individual health and dietary needs of our users.</p>
                    <p>WooCommerce technology also supports our logistics and inventory management efforts, resulting in fast and efficient order fulfillment. We offer customers various payment and delivery options, making "Bakaliowe Love" the number one destination for anyone looking for convenient access to healthy food online.</p>
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
