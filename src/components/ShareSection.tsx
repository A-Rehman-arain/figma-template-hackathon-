import Image from "next/image";
import HeadingCenter from "./HeadingCenter";
import firstimage from "../../public/assets/firstimage.png";
import sixthimage from "../../public/assets/sixthimage.png";
import secondimage from "../../public/assets/secondimage.png";
import seventhimage from "../../public/assets/seventhimage.png";
import thirdimage from "../../public/assets/thirdimage.png";
import fourthimage from "../../public/assets/fourthimage.png";
import eightimage from "../../public/assets/eightimage.png";
import fifthimage from "../../public/assets/fifthimage.png";
import nineimage from "../../public/assets/nineimage.png";

const ShareSection = () => {
  return (
    <div className="py-[50px]">
      {/* Heading Section */}
      <div className="text-center text-fontColor mb-10 px-4">
        {/* Subheading for the section, introducing the "Share your setup with" text */}
        <p className="font-semibold text-[16px] md:text-[20px] text-anotherFontColor">
          Share your setup with
        </p>
        <HeadingCenter title="#FuniroFurniture" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mx-auto px-4">
        <div className="flex flex-col gap-4">
          <Image
            src={firstimage}
            alt="first image"
            height={382}
            width={274}
            className="w-full object-cover"
          />

          <Image
            src={sixthimage}
            alt="sixth image"
            height={323}
            width={381}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image
            src={secondimage}
            alt="second image"
            height={312}
            width={451}
            className="w-full object-cover"
          />

          <Image
            src={seventhimage}
            alt="seventh image"
            height={242}
            width={344}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image
            src={thirdimage}
            alt="third image"
            height={392}
            width={295}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image
            src={fourthimage}
            alt="fourth image"
            height={348}
            width={290}
            className="w-full object-cover"
          />
          <Image
            src={eightimage}
            alt="eighth image"
            height={242}
            width={178}
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image
            src={fifthimage}
            alt="fifth image"
            height={433}
            width={425}
            className="w-full object-cover"
          />

          <Image
            src={nineimage}
            alt="ninth image"
            height={196}
            width={258}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ShareSection;

