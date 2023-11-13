import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsBell, BsCameraVideo, BsYoutube } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { TiMicrophone } from "react-icons/ti";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navHeight">
      <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50 ">
        <div className="flex gap-8 items-center text-2xl">
          <div>
            <GiHamburgerMenu />
          </div>
          <Link passHref href={"/"}>
            <div className="flex gap-1 items-center justify-center">
              <BsYoutube className="text-3xl text-red-600" />
              <span className="text-xl font-medium">Youtube</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
          <form className="justify-center items-center" action={""}>
            <div className="flex bg-zinc-900 items-center h-10 px-4 pr-10">
              <div className="flex gap-4 items-center pr-5">
                <div>
                  <AiOutlineSearch className="text-xl" />
                </div>
                <input
                  type="text"
                  className="w-96 bg-zinc-900 focus:outline-none border-none"
                />
                <AiOutlineClose className="text-xl cursor-pointer" />
              </div>
              <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
                <AiOutlineSearch />
              </button>
            </div>
          </form>
          <div className="text-xl p-3 bg-zinc-900 rounded-full">
            <TiMicrophone />
          </div>
          <div className="flex gap-5 items-center text-xl">
            <BsCameraVideo />
            <IoAppsSharp />
          </div>
          <div className="relative">
            <BsBell />
            <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
              9+
            </span>
          </div>
          <Image
            src="https://yt3.googleusercontent.com/ytc/APkrFKbqYfTKIfgr_QP_F9Sy2WSnk9qSGOntOZPhBDL8Pg=s176-c-k-c0x00ffffff-no-rj"
            alt="youtube pic"
            width={100}
            height={100}
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
