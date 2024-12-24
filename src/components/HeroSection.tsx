import { Poppins } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


import  bannerimage from "@/../public/banner-image.png"



// HeroSection functional component
const HeroSection = () => {
  return (
    // Container for the hero section with relative positioning
    <div className="h-[500px] md:h-[716px] w-full relative">
      {/* Background Image with responsive opacity for mobile, tablet, and desktop */}
      <Image
        src={bannerimage} // Image path
        alt="home background" // Alternative text for accessibility
        fill // Makes the image cover the entire parent container
        className="object-cover opacity-70 md:opacity-70 lg:opacity-100" // Opacity changes based on screen size
      />

      {/* Content Container positioned over the image */}
      <div
        className="w-[90%] md:w-[80%] lg:w-[643px] lg:h-[443px] bg-heroDivBackgroundColor 
                      absolute top-1/2 right-4 md:right-10 lg:right-16 
                      -translate-y-1/2 rounded-[10px] 
                      flex items-center justify-center flex-col 
                      p-4 md:p-6 lg:p-8 opacity-60 md:opacity-60 lg:opacity-100"
      >
        {/* Text Content Section */}
        <div
          className={`w-full md:w-[90%] lg:w-[561px] space-y-4 ${poppins.className}`}
        >
          {/* New Arrival Label */}
          <p className="font-semibold text-[14px] md:text-[16px] tracking-[2px] md:tracking-[3px] text-fontColor">
            New Arrival
          </p>

          {/* Main Heading with Responsive Font Sizes and Line Heights */}
          <p className="font-bold text-[32px] md:text-[42px] lg:text-[52px] text-primaryColor leading-[40px] md:leading-[50px] lg:leading-[65px]">
            Discover Our <br /> New Collection
          </p>

          {/* Description Paragraph with Responsive Font Sizes and Padding */}
          <p className="font-medium text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-fontColor pr-2 pb-[20px] md:pb-[25px] lg:pb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          {/* Buy Now Button with Responsive Padding and Size */}
          <button
            className="py-[15px] md:py-[20px] lg:py-[25px] px-[40px] md:px-[60px] lg:px-[72px] 
                             w-[160px] md:w-[190px] lg:w-[222px] 
                             h-[50px] md:h-[65px] lg:h-[77px] 
                             font-bold text-[14px] md:text-[15px] lg:text-[16px] 
                             uppercase text-white bg-primaryColor"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Exporting the HeroSection component for use in other parts of the application
export default HeroSection;
