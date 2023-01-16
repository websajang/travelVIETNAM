import Navbar from "./components/Navbar";
import smoke from "./assets/smoke.png";
import pho from "./assets/pho.png";
import banhmy from "./assets/banhmy.png";
import paint from "./assets/paint.png";
import chilli from "./assets/chilli.png";
import chopsticks from "./assets/chopsticks.png";

export default function Food() {
  return (
    <>
      <div className="flex flex-col w-screen overflow-hidden">
        {/**SECTION 1 */}

        <div className="bg-vietnam-wooden bg-origin-border bg-center bg-no-repeat bg-cover w-screen h-screen relative">
          <div className="bg-gradient-to-b from-white/0 to-white h-[80px] w-full absolute bottom-0"></div>
          <img
            className="absolute -right-52 -top-5 rotate-12"
            src={chopsticks}
            style={{ height: 397, width: 600 }}
          />
          <div className="text-white">
            <Navbar />
          </div>
          <h1 className="relative font-merienda text-6xl text-center text-white my-10">
            Delicious Vietnamese Food
          </h1>
          <div className="flex flex-col lg:flex-row text-white mx-10">
            <div className="w-full h-auto">
              <div className="relative w-full">
                <img
                  className="absolute h-[250] w-[250] lg:h-[500] lg:w-[500]"
                  src={smoke}
                />
                <img
                  className="absolute h-[212] w-[250] lg:h-[425] lg:w-[500]"
                  src={pho}
                />
              </div>
            </div>

            <div className="font-merienda mt-72 lg:mt-0">
              <h2 className="text-5xl text-center lg:text-left lg:mt-10 lg:py-10 lg:px-20">
                Phở bò
              </h2>
              <p className="hidden lg:block text-xl text-center lg:text-left lg:px-20">
                Pho is a Vietnamese soup consisting of bone broth, rice noodles,
                and thinly sliced meat (usually beef). It may also be served
                with bean sprouts, fresh herbs, limes, chiles, and other
                garnishes. The origins of pho are a bit murky, but it is
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

        {/**SECTION 2 */}
        <div className="w-screen bg-vietnam-wooden bg-origin-border bg-center bg-no-repeat bg-cover h-screen relative">
          <div className="bg-gradient-to-t from-white/0 via-white to-white h-[320px] w-full absolute top-0"></div>
          <div className="hidden lg:flex flex-col lg:flex-row justify-around w-full lg:ml-28">
            <div className="relative w-full">
              <img
                className="absolute"
                src={paint}
                style={{ height: 300, width: 300 }}
              />
              <img
                className="absolute"
                src={pho}
                style={{ height: 212, width: 240 }}
              />
            </div>
            <div className="relative w-full">
              <img
                className="absolute"
                src={paint}
                style={{ height: 300, width: 300 }}
              />
              <img
                className="absolute"
                src={pho}
                style={{ height: 212, width: 240 }}
              />
            </div>
            <div className="relative w-full">
              <img
                className="absolute"
                src={paint}
                style={{ height: 300, width: 300 }}
              />
              <img
                className="absolute"
                src={pho}
                style={{ height: 212, width: 240 }}
              />
            </div>
          </div>
          <div className="bg-gradient-to-b from-white/0 to-white h-[80px] w-full absolute bottom-0"></div>
        </div>
      </div>
    </>
  );
}
