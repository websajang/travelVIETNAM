import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="lg:hidden flex flex-row justify-end w-full px-3">
        <Hamburger opened={opened} setOpened={setOpened} />
      </div>
      <div className="hidden lg:flex flex-row justify-end w-full p-5 gap-10 -ml-10">
        <Link
          to={"/"}
          className="text-xl cursor-pointer hover:underline hover:underline-offset-8"
        >
          Home
        </Link>
        <Link
          to={"/how-it-works"}
          className="text-xl cursor-pointer hover:underline hover:underline-offset-8"
        >
          How it works
        </Link>
        <Link
          to={"/food"}
          className="text-xl cursor-pointer hover:underline hover:underline-offset-8"
        >
          Food
        </Link>
        <Link
          to={"/"}
          className="text-xl cursor-pointer hover:underline hover:underline-offset-8"
        >
          Best Hotels
        </Link>
        <Link
          to={"/"}
          className="text-xl cursor-pointer hover:underline hover:underline-offset-8"
        >
          Contact
        </Link>
      </div>
    </>
  );
}
