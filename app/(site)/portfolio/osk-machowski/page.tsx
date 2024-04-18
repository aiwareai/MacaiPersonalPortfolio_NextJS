import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";

const SingleBlogPage = () => {
  return (
    <>
      <title>{"szkolajazdymachowski.pl - Project Details"}</title>
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
                    <a href="https://szkolajazdymachowski.pl" className="text-white transition-all duration-300 hover:text-primary">szkolajazdymachowski.pl</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Company:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Szkoła Jazdy Machowski</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Industry:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Education / Professional development</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Project Technologies:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">HTML/CSS/JS</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  szkolajazdymachowski.pl
                </h2>
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src="/images/portfolio/szkolajazdynew.jpg"
                      alt="Szkoła Jazdy Machowski website"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>
                <div className="blog-details">
                  <p>The website "Szkoła Jazdy Machowski" is a modern online platform designed to provide easy access to information about driving courses and streamline the registration process for future students. The project was realized using HTML, CSS, and JavaScript technologies, ensuring speed, responsiveness, and excellent compatibility with various devices and browsers.</p>
                  <p>It includes integration with an AI chatbot supporting customer service, lead generation, and sales inquiries automation with Google Sheets and email notifications.</p>
                
                  <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  Google's #1 Position
                </h2>
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src="/images/portfolio/szkolajazdy-google.jpg"
                      alt="Szkoła Jazdy Machowski website"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                  <p>The "szkolajazdymachowski.pl" website achieved an impressive success, occupying the #1 position in Google search results for key phrases related to driving education. This exceptional result is the outcome of carefully conducted SEO optimization, focused on high-quality content, proper keyword usage, and technical excellence of the website. As a result, Machowski driving school stands out among competitors, attracting the attention of potential students and increasing its visibility on the internet.</p>


                  <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  Facebook Profile Creation and Promotion
                </h2>
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src="/images/portfolio/szkolajazdy-fb.jpg"
                      alt="Szkoła Jazdy Machowski website"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                  <p>In addition to successes in the realm of internet search engines, "szkolajazdymachowski.pl" extended the Training Center's presence on social media by creating and promoting a Facebook profile. This strategic move allowed for building a community around the brand, engaging current and potential customers through regular posts, updates, and interactive content. The Facebook profile has become an important marketing tool that not only increases brand awareness but also enables direct dialogue with students, contributing to building lasting relationships and loyalty to the school.</p>

                
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
