import Navbar from "./components/Navbar";
import smoke from "./assets/smoke.png";
import pho from "./assets/pho.png";
import banhmy from "./assets/banhmy.png";
import paint from "./assets/paint.png";
import rolls from "./assets/rolls.png";
import chopsticks from "./assets/chopsticks.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/** sm: md: lg: xl: **/

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function FadeInWhenVisibleLag({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Food2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="flex flex-col w-screen overflow-hidden">
        {/**SECTION 1 */}
        <div className="bg-vietnam-wooden bg-origin-border bg-center bg-no-repeat bg-cover w-screen h-screen relative">
          <div className="bg-gradient-to-b from-transparent to-white h-[40px] w-full absolute bottom-0"></div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img
              className="absolute h-auto w-[500px] lg:w-[600px] -right-52 top-64 lg:-top-5 rotate-12"
              src={chopsticks}
            />
          </motion.div>
          <div className="text-white h-[8vh] relative">
            <Navbar />
          </div>
          <h1 className="relative font-merienda max-[380px]:text-3xl text-4xl md:text-6xl text-center text-white my-10 h-[5vh]">
            Delicious Vietnamese Food
          </h1>
          {/** HERO SECTION */}
          <div className="h-[87vh] w-screen">
            <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 h-full">
              {/** IMAGE */}
              <div className="row-span-1 lg:row-span-1 lg:col-span-1">
                <div className="relative">
                  <motion.div
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <img
                      className="absolute  h-auto w-[300px] max-[380px]:h-auto max-[380px]:w-[225px] sm:h-auto sm:w-[400px] md:h-auto md:w-[400px] lg:h-auto lg:w-[800px] m-auto left-0 right-0"
                      src={smoke}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.25 }}
                  >
                    <img
                      className="absolute h-auto w-[250px] max-[380px]:h-auto max-[380px]:w-[200px] sm:h-auto sm:w-[325px] md:h-auto md:w-[325px]  lg:h-auto lg:w-[450px] m-auto left-0 right-0"
                      src={pho}
                    />
                  </motion.div>
                </div>
              </div>
              {/** DESCRIPTION */}
              <div className="row-span-2 lg:row-span-1 lg:col-span-2 font-merienda text-white">
                <h2 className="relative text-3xl md:text-5xl text-center lg:text-left sm:mt-10 lg:py-10 lg:px-20">
                  Phở bò
                </h2>
                <p className="relative max-[281px]:text-sm md:text-2xl lg:text-xl text-justify lg:text-left mt-2 px-2 lg:px-20">
                  Pho is a Vietnamese soup consisting of bone broth, rice
                  noodles, and thinly sliced meat (usually beef). It may also be
                  served with bean sprouts, fresh herbs, limes, chiles, and
                  other garnishes. The origins of pho are a bit murky, but it is
                  generally believed to have originated in early 20th century
                  northern Vietnam.
                </p>
                <button className="text-lg w-full lg:w-auto border-4 p-2 mt-3 lg:mt-10 lg:mx-20">
                  <div className="flex flex-row gap-3 justify-center items-center">
                    Go to booking
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/**SECTION 2 */}
        <div className="grid grid-rows-3 lg:items-center lg:grid-cols-3 w-screen h-[115vh] lg:h-[45vh]">
          <FadeInWhenVisible>
            <div className="relative">
              <h2 className="text-center font-merienda text-xl">Phở Gà</h2>
              <img
                className="absolute h-[300px] w-[300px] m-auto left-0 right-0"
                src={paint}
              />
              <img
                className="absolute h-[212px] w-[240px] m-auto left-0 right-0"
                src={pho}
              />
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="relative">
              <h2 className="text-center font-merienda text-xl">Phở Gà</h2>
              <img
                className="absolute h-[300px] w-[300px] m-auto left-0 right-0"
                src={paint}
              />
              <img
                className="absolute h-[212px] w-[240px] m-auto left-0 right-0"
                src={pho}
              />
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="relative">
              <h2 className="text-center font-merienda text-xl">Phở Gà</h2>
              <img
                className="absolute h-[300px] w-[300px] m-auto left-0 right-0"
                src={paint}
              />
              <img
                className="absolute h-[212px] w-[240px] m-auto left-0 right-0"
                src={pho}
              />
            </div>
          </FadeInWhenVisible>
        </div>
        {/**SECTION 3 */}
        <div className="bg-vietnam-wooden bg-origin-border bg-center bg-no-repeat bg-cover w-screen h-[100vh] relative overflow-hidden">
          <div className="bg-gradient-to-t from-transparent to-white h-[40px] w-full absolute top-0"></div>
          <div className="grid grid-rows-2 h-full mt-10 text-white font-merienda">
            <div className="grid grid-rows-2 lg:grid-cols-2">
              <div className="relative row-span-1 lg:row-span-2 ">
                <FadeInWhenVisible>
                  <img
                    className="absolute h-auto w-[250px] lg:w-[350px] m-auto left-0 right-0"
                    src={smoke}
                  />
                </FadeInWhenVisible>
                <FadeInWhenVisibleLag>
                  <img
                    className="absolute h-auto w-[250px] lg:w-[400px] m-auto left-0 right-0"
                    src={banhmy}
                  />
                </FadeInWhenVisibleLag>
              </div>
              <div className="row-span-1 lg:row-span-2">
                <h2 className="font-merienda relative text-3xl md:text-5xl text-center lg:text-left sm:mt-3 lg:py-10 lg:px-20">
                  Bánh mì
                </h2>
                <p className="relative max-[281px]:text-sm md:text-2xl lg:text-xl text-justify lg:text-left mt-2 px-2 lg:px-20">
                  A usually spicy sandwich in Vietnamese cuisine consisting of a
                  split baguette filled typically with meat (such as pork or
                  chicken) and pickled vegetables (such as carrot and daikon)
                  and garnished with cilantro and often cucumbers.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-2 lg:grid-cols-2">
              <div className="relative row-span-1 lg:row-span-2">
                <FadeInWhenVisible>
                  <img
                    className="absolute  h-auto w-[250px] lg:w-[350px] m-auto left-0 right-0 -top-5"
                    src={smoke}
                  />
                </FadeInWhenVisible>
                <FadeInWhenVisibleLag>
                  <img
                    className="absolute h-auto w-[300px] lg:w-[450px] m-auto left-0 right-0 -top-20 lg:-top-5"
                    src={rolls}
                  />
                </FadeInWhenVisibleLag>
              </div>
              <div className="row-span-1 lg:row-span-2">
                <h2 className="font-merienda relative text-3xl md:text-5xl text-center lg:text-left sm:mt-3 lg:py-10 lg:px-20">
                  Rolls
                </h2>
                <p className="relative max-[281px]:text-sm md:text-2xl lg:text-xl text-justify lg:text-left mt-2 px-2 lg:px-20">
                  Vietnamese spring rolls are made of minced pork, shrimp, egg,
                  vegetables, glass noodles, and spices, all of which are
                  wrapped inside rice paper and then fried until their color
                  turns light brown.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-vietnam-wooden bg-origin-border bg-center bg-no-repeat bg-cover w-screen h-[100vh] relative overflow-hidden">
          <div className="grid grid-rows-2 h-full mt-10 text-white font-merienda">
            <div className="grid grid-rows-2 lg:grid-cols-2">
              <div className="relative row-span-1 lg:row-span-2 ">
                <FadeInWhenVisible>
                  <img
                    className="absolute h-auto w-[250px] lg:w-[350px] m-auto left-0 right-0"
                    src={smoke}
                  />
                </FadeInWhenVisible>
                <FadeInWhenVisibleLag>
                  <img
                    className="absolute h-auto w-[250px] lg:w-[400px] m-auto left-0 right-0"
                    src={banhmy}
                  />
                </FadeInWhenVisibleLag>
              </div>
              <div className="row-span-1 lg:row-span-2">
                <h2 className="font-merienda relative text-3xl md:text-5xl text-center lg:text-left sm:mt-3 lg:py-10 lg:px-20">
                  Bánh mì
                </h2>
                <p className="relative max-[281px]:text-sm md:text-2xl lg:text-xl text-justify lg:text-left mt-2 px-2 lg:px-20">
                  A usually spicy sandwich in Vietnamese cuisine consisting of a
                  split baguette filled typically with meat (such as pork or
                  chicken) and pickled vegetables (such as carrot and daikon)
                  and garnished with cilantro and often cucumbers.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-2 lg:grid-cols-2">
              <div className="relative row-span-1 lg:row-span-2">
                <FadeInWhenVisible>
                  <img
                    className="absolute  h-auto w-[250px] lg:w-[350px] m-auto left-0 right-0 -top-5"
                    src={smoke}
                  />
                </FadeInWhenVisible>
                <FadeInWhenVisibleLag>
                  <img
                    className="absolute h-auto w-[300px] lg:w-[450px] m-auto left-0 right-0 -top-20 lg:-top-5"
                    src={rolls}
                  />
                </FadeInWhenVisibleLag>
              </div>
              <div className="row-span-1 lg:row-span-2">
                <h2 className="font-merienda relative text-3xl md:text-5xl text-center lg:text-left sm:mt-3 lg:py-10 lg:px-20">
                  Rolls
                </h2>
                <p className="relative max-[281px]:text-sm md:text-2xl lg:text-xl text-justify lg:text-left mt-2 px-2 lg:px-20">
                  Vietnamese spring rolls are made of minced pork, shrimp, egg,
                  vegetables, glass noodles, and spices, all of which are
                  wrapped inside rice paper and then fried until their color
                  turns light brown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
