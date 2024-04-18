"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 px-3 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex sm:flex-col md:flex-row lg:items-center lg:gap-2 xl:gap-32.5">
            <div className="md:w-1/2 sm:w-full">
              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
               Hello 🔥 
              </h4>
              <div className="flex flex-row justify-start items-center">
              <Image
                    width={130}
                    height={130}
                    src="/images/user/macaihero.png"
                    alt="Logo"
                    className="mr-6 mb-3"
                  />
              <h1 className="text-black dark:text-white text-4xl xl:text-hero font-bold mb-5 pr-16 ">
              Piotr Macai 
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                </span>
              </h1>
              </div>
              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
                Web | AI | Marketing | Automations
              </h4>

              <motion.div
              variants={{ hidden: {opacity: 0, y: -20, },
                visible: { opacity: 1,y: 0,},
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
              <li>
                  <a href="https://twitter.com/piotrmacai" target="_blank">
                    <svg
                      className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1502)">
                        <path
                          d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1502">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank">
                    <svg
                      className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100093134271073" target="_blank">
                    <svg
                      className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank">
                  <Image src="/images/brand/github.png" alt="git" width={24} height={24} className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"/>
                  </a>
                </li>
              </ul>
            </motion.div>

              <div className="mt-10">
                {/* <form onSubmit={handleSubmit}> */}
                  <div className="flex flex-wrap gap-5">
                    <input
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      // type="text"
                      placeholder="Signup to Newsletter"
                      className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"
                    />
                    <Link href="https://ainsider.beehiiv.com/subscribe" target="_blank">
                    <button
                      aria-label="signup to newsletter"
                      className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                    >
                      Subscribe
                    </button>
                    </Link>
                  </div>
              </div>


                <div className="lg:grid grid-cols-3 grid-rows-1 gap-4 flex flex-row mt-10">

                          <div className="col-span-1 bg-gray-200 p-4">
                              <div 
                                    style={{
                                      backgroundColor: 'rgba(217, 216, 216, 0.24)',
                                      borderRadius: '16px',
                                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                      backdropFilter: 'blur(19.5px)',
                                      WebkitBackdropFilter: 'blur(19.5px)',
                                      border: '1px solid rgba(255, 255, 255, 0.03)',
                                    }}
                              className="rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                                  <a href="/generativeai" target="_blank" className="text-center">
                                  <img src="/images/brand/ai.png" alt="Tools" className="inline w-12 h-12 mb-2" />
                                    <p className="text-lg font-semibold">Generative AI</p>
                                    <p className="text-sm">Artworks</p>
                                  </a>
                                </div>
                      </div>
                      <div className="col-span-2 bg-gray-200 p-4">
                              <div 
                                style={{
                                  backgroundColor: 'rgba(217, 216, 216, 0.30)',
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                  backdropFilter: 'blur(19.5px)',
                                  WebkitBackdropFilter: 'blur(19.5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.03)',
                                }}
                              className="rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                                  <a href="https://macai.tech/portfolio/" target="_blank" className="text-center">
                                    <img src="/images/brand/portfolio.png" alt="Twitter" className="inline w-12 h-12 mb-2" />
                                    <p className="text-lg font-semibold">Portfolio</p>
                                    <p className="text-sm">With the best of my projects</p>
                                  </a>
                                </div>
                      </div>
                </div>


            </div>


                {/* SECOND COLUMN */}

                <div className="md:w-1/2 hidden md:grid lg:grid grid-cols-2 grid-rows-3 gap-4">
                  <div className="bg-gray-600 p-4 col-span-2">
                          <div 
                                style={{
                                  backgroundColor: 'rgba(217, 216, 216, 0.10)',
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                  backdropFilter: 'blur(19.5px)',
                                  WebkitBackdropFilter: 'blur(19.5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.03)',
                                }}
                          className="rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                              <a href="https://ainsider.cloud" target="_blank" className="text-center">
                                <img src="/images/logo/logo-white.png"  alt="Twitter" className="inline w-12 h-12 mb-2" />
                                <p className="text-lg font-semibold">Ainsider Magazine</p>
                                <p className="text-sm">Gen AI Tools | Blog | Prompts </p>
                              </a>
                            </div>
                  </div>
                  <div className="col-span-1 bg-gray-200 p-4">
                          <div 
                                style={{
                                  backgroundColor: 'rgba(217, 216, 216, 0.24)',
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                  backdropFilter: 'blur(19.5px)',
                                  WebkitBackdropFilter: 'blur(19.5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.03)',
                                }}
                          className="rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                              <a href="https://twitter.com/piotrmacai" target="_blank" className="text-center">
                                <img src="/images/brand/x64o.png" alt="Twitter" className="inline w-12 h-12 mb-2" />
                                <p className="text-lg font-semibold">My Twitter</p>
                                <p className="text-sm">Latest AI Insights</p>
                              </a>
                            </div>
                  </div>
                  <div className="bg-gray-200 p-4 row-span-2 h-full">
                          <div 
                                style={{
                                  backgroundColor: 'rgba(217, 216, 216, 0.30)',
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                  backdropFilter: 'blur(19.5px)',
                                  WebkitBackdropFilter: 'blur(19.5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.03)',
                                }}
                          className="h-full rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                              <a href="https://ainsider.beehiiv.com/" target="_blank" className="text-center">
                                <img src="/images/logo/logo-dark.png" alt="Beehiiv" className="inline w-12 h-12 mb-2" />
                                <p className="text-lg font-semibold">Ainsider Newsletter</p>
                                <p className="text-sm">Subscribe to My AInsider Newsletter</p>
                              </a>
                            </div>
                  </div>
                  <div className="bg-gray-200 p-4 col-span-1 h-full">
                          <div
                                style={{
                                  backgroundColor: 'rgba(217, 216, 216, 0.14)',
                                  borderRadius: '16px',
                                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                  backdropFilter: 'blur(19.5px)',
                                  WebkitBackdropFilter: 'blur(19.5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.03)',
                                }}
                          className="-full rounded-lg p-4 shadow-lg flex flex-col items-center justify-center grid-in-twitter">
                              <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank" className="text-center">
                                <img src="/images/brand/linkedin64.png" alt="Linkedin" className="inline w-12 h-12 mb-2" />
                                <p className="text-lg font-semibold">Linkedin</p>
                                <p className="text-sm">Let's connect at Linkedin</p>
                              </a>
                            </div>
                  </div>
                  
               
                </div>
              
    

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// import { motion } from "framer-motion";

// const Hero = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//    <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 px-3 overflow-hidden">
//         <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 flex flex-col md:flex-row"> {/* Added flex and flex-col for mobile view */}
//           <div className="md:w-1/2 sm:w-full md:block mb-8 md:mb-0"> {/* Added mb-8 for mobile view */}
//             <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
//               🔥 Hello! Jesteśmy Aiware
//             </h4>
//             <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16">
//               AI & Web dla Biznesu
//               <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5">
//               </span>
//             </h1>
//             <p>Z wykorzystaniem najnowszej technologii</p>

//             <div className="mt-10">
//               <form   action="https://formspree.io/f/xyyqlvdz" target="_blank" method="POST">
//                 <div className="flex flex-wrap gap-5">
//                   <input
//                     type="email" name="email"
//                     placeholder="Zostaw swój email"
//                     className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"
//                   />
//                   <button
//                     type="submit"
//                     value="Submit"
//                     aria-label="contact"
//                     className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
//                   >
//                     Kontakt
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>

//           <div className="md:w-1/2 sm:w-full md:block p-8 md:p-3"> {/* Removed the hidden class for mobile view */}
//             <div className="relative 2xl:-mr-7.5">
//               <Image
//                 src="/images/shape/shape-01.png"
//                 alt="shape"
//                 width={46}
//                 height={246}
//                 className="absolute -left-11.5 top-0"
//               />
//               <Image
//                 src="/images/shape/shape-02.svg"
//                 alt="shape"
//                 width={36.9}
//                 height={36.7}
//                 className="absolute right-0 bottom-0 z-10"
//               />
//               <Image
//                 src="/images/shape/shape-03.svg"
//                 alt="shape"
//                 width={21.64}
//                 height={21.66}
//                 className="absolute -right-6.5 bottom-0 z-1"
//               />
//               <div className="relative aspect-[700/444] w-full">
//                 <Image
//                   className="dark:hidden shadow-solid-l"
//                   src="/images/hero/hero-dark.svg"
//                   alt="Hero"
//                   fill
//                 />
//                 <Image
//                   className="hidden dark:block shadow-solid-l"
//                   src="/images/hero/hero-dark.svg"
//                   alt="Hero"
//                   fill
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;
