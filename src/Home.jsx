import Navbar from "./components/Navbar";
import Title from "./components/Title";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";

export default function Home() {
  return (
    <>
      <div className="bg-vietnam-field bg-fixed bg-origin-border bg-center bg-no-repeat h-screen w-screen bg-cover font-sans flex flex-col">
        <div>
          <Navbar />
        </div>
        <div className="text-center lg:flex lg:flex-row lg:justify-end lg:pr-16 lg:mt-12">
          <Title />
        </div>
        <div className="flex-1 my-10 mx-3 lg:mx-44 rounded-xl"></div>
        <div className="flex flex-row justify-around lg:justify-center lg:gap-32 w-full pb-10">
          <img className="" src={facebook} alt="facebook-logo" />
          <img className="" src={instagram} alt="facebook-logo" />
          <img className="" src={twitter} alt="facebook-logo" />
        </div>
      </div>
    </>
  );
}
