import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

interface BannerProps {
  name: string;
  title:string,
  logo?: string;
}

export default function Banner({ name, logo  ,title}: BannerProps) {
  return (
    <div className="bg-[url('/shop.png')] bg-cover bg-center h-72 w-full flex flex-col justify-center items-center px-4 text-center">
      {/* Dynamic Logo Rendering */}
      {logo && (
        <div className="mb-4">
          <Image
            src={logo}
            alt="Banner Logo"
            width={42}
            height={42}
            className="object-contain"
          />
        </div>
      )}

      <h1 className="text-4xl md:text-5xl font-medium font-poppins text-[#333]">
        {title}
      </h1>

      <div className="flex items-center gap-2 mt-3 text-sm md:text-base">
        <p className="font-poppins font-bold ">Home</p>
        <FaChevronRight  />
        <p className="font-poppins font-light">{name}</p>
      </div>
    </div>
  );
}
