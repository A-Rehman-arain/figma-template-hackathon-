import Image from "next/image";

export default function CustomerCare() {
  return (
    <div className="h-auto lg:h-[270px] flex flex-col lg:flex-row items-center justify-center bg-[#FAF3EA] px-4 py-6">
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
        {/* High Quality */}
        <div className="h-auto lg:h-[70px] w-full sm:w-[337px] flex items-center gap-2">
          <Image src={"/trophy.png"} alt="Quality" height={60} width={60} />
          <div>
            <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
              High Quality
            </h2>
            <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
              crafted from top materials
            </p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="h-auto lg:h-[70px] w-full sm:w-[338px] flex items-center gap-2">
          <Image src={"/guarantee.png"} alt="Warranty" height={60} width={60} />
          <div>
            <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
              Warranty Protection
            </h2>
            <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="h-auto lg:h-[70px] w-full sm:w-[244px] flex items-center gap-2">
          <Image
            src={"/shipping.png"}
            alt="Free Shipping"
            height={60}
            width={60}
          />
          <div>
            <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
              Free Shipping
            </h2>
            <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
              Order over 150 $
            </p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="h-auto lg:h-[70px] w-full sm:w-[249px] flex items-center gap-2">
          <Image
            src={"/customer-support.png"}
            alt="Customer Support"
            height={60}
            width={60}
          />
          <div>
            <h2 className="text-[20px]/[30px] sm:text-[25px]/[37.5px] font-semibold font-poppins text-[#242424]">
              24 / 7 Support
            </h2>
            <p className="text-base/[24px] sm:text-xl/[30px] font-poppins font-medium text-[#898989]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
