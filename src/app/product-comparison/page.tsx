import Banner from "@/components/Banner";
import CustomerCare from "@/components/Customer-Care";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa6";

export default function Comparison() {
  return (
    <div>
      <Banner title="Product Comparison" name="Comparison" logo="/logo.png" />

      {/* main contact start */}
      <div className="mx-auto max-w-[1332px]">
        {/* product section start */}
        <div className="flex flex-col xl:flex-row my-20 px-4 lg:px mx-auto w-fit xl:items-start items-center  gap-14">
          <div className="mt-5">
            <h3 className="text-[22px]/[30px] lg:text-[28px]/[35px] mb-4 w-full lg:w-[223px] font-medium font-poppins text-center xl:text-left">
              Go to Product page for more Products
            </h3>

            <button
              type="button"
              className="font-poppins text-[#727272] text-lg/[27px] lg:text-xl/[30px] border-b border-[#727272] block mx-auto xl:mx-0"
            >
              View More
            </button>
          </div>

          {/* Middle Product Cards */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Card 1 */}
            <div className="space-y-3">
              <div className="bg-[#F9F1E7] h-[177px] w-[280px] rounded-lg flex justify-center items-center mx-auto">
                <Image
                  src={"/Asgaard-sofa.png"}
                  alt="sofa set"
                  height={142}
                  width={239}
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-2xl/[30px] font-medium font-poppins">
                  Asgaard Sofa
                </h4>
                <p className="font-poppins font-medium text-lg/[27px]">
                  Rs. 250,000.00
                </p>
                <span className="flex justify-center sm:justify-start gap-1 items-center">
                  <p className="font-poppins font-medium text-lg/[27px] mt-1">
                    4.7
                  </p>
                  <Image
                    src={"/rating.png"}
                    alt="rating"
                    height={20}
                    width={124}
                  />
                  <p className="font-poppins font-normal text-[#9F9F9F] border-l border-[#9F9F9F] h-5 flex items-center justify-end w-24">
                    204 Review
                  </p>
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="space-y-3">
              <div className="bg-[#F9F1E7] h-[177px] w-[280px] rounded-lg flex justify-center mx-auto">
                <Image
                  src={"/outdoor-sofa.png"}
                  alt="sofa set"
                  height={201}
                  width={271}
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-2xl/[30px] font-medium font-poppins">
                  Outdoor Sofa Set
                </h4>
                <p className="font-poppins font-medium text-lg/[27px]">
                  Rs. 224,000.00
                </p>
                <span className="flex justify-center sm:justify-start gap-1 items-center">
                  <p className="font-poppins font-medium text-lg/[27px] mt-1">
                    4.2
                  </p>
                  <Image
                    src={"/rating.png"}
                    alt="rating"
                    height={20}
                    width={124}
                  />
                  <p className="font-poppins font-normal text-[#9F9F9F] border-l border-[#9F9F9F] h-5 flex items-center justify-end w-24">
                    145 Review
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 xl:items-start items-center mt-16">
            <h2 className="text-2xl/[30px] font-semibold text-center lg:text-left">
              Add A Product
            </h2>
            <button className="w-[242px] h-[39px] flex items-center justify-between px-4 rounded-md bg-[#B88E2F] hover:bg-[#be9942]">
              <span className="text-white flex items-center gap-10">
                <p className="font-semibold font-poppins text-sm/[17px]">
                  Choose a Product
                </p>
                <FaAngleDown className="h-6 w-6" />
              </span>
            </button>
          </div>
        </div>
        {/* product section end */}


        <hr />


        <div className="flex max-w-[1332px] px-4 mb-28 sm:flex-row flex-col sm:gap-0 gap-4">

            <div className="flex flex-col gap-24 sm:border-r border-t border-1 w-72 md:pl-10 pl-1 pt-8">
                <span className="space-y-7 ">
                    <h6 className="font-poppins font-medium md:text-[28px]/[35px] text-xl">General</h6>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Sales Package</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Model Number</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Secondary Material</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Configuration</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Upholstery Material</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Upholstery Color</p>
                </span>
                <span className="space-y-7">
                    <h6 className="font-poppins font-medium md:text-[28px]/[35px] text-xl">Product</h6>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Filling Material</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Finish Type</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Adjustable Headrest</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Maximum Load <br />Capacity</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Origin of Manufacture</p>
                </span>
                <span className="space-y-7">
                    <h6 className="font-poppins font-medium md:text-[28px]/[35px] text-xl">Dimensions</h6>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Width</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Height</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Depth</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Weight</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Seat Height</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Leg Height</p>
                </span>


                <span className="flex flex-col gap-7">
                    <h6 className="font-poppins font-medium md:text-[28px]/[35px] text-xl">Warranty</h6>
                    <span className="space-y-16">
                        <p className="font-poppins font-normal md:text-xl/[25px] text-base">Warranty Summary</p>
                        <p className="font-poppins font-normal md:text-xl/[25px] text-base pb-[44px]">Warranty Service <br /> Type</p>
                        <p className="font-poppins font-normal md:text-xl/[25px] text-base pb-[44px]">Covered in Warranty</p>
                        <p className="font-poppins font-normal md:text-xl/[25px] text-base">Not Covered in <br /> Warranty</p>
                        <p className="font-poppins font-normal md:text-xl/[25px] text-base pt-[104px]">Domestic Warranty</p>
                    </span>
                </span>
            </div>

            <div className="flex flex-col gap-24 sm:border-r border-t border-1 pl-2 lg:pl-10 pt-8 lg:w-[344px] w-auto lg:px-14 px-2">
                <span className="space-y-7 mt-16">
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">1 sectional sofa</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">TFCBLIGRBL6SRHS</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Solid Wood</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">L-shaped</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Fabric + Cotton</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Bright Grey & Lion</p>
                </span>
                <span className="space-y-7 mt-16">
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Foam</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Bright Grey & Lion</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">No</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base pb-[23px]">280 KG</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">India</p>
                </span>
                <span className="space-y-7 mt-16">
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">265.32 cm</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">76 cm</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">167.76 cm</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">45 KG</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">41.52 cm</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">5.46 cm</p>
                </span>
                <span className="flex flex-col gap-7 mt-16 lg:w-56 w-auto">
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">1 Year Manufacturing Warranty</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base mt-3">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurnit ure.com</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Warranty Against Manufacturing Defect</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base mt-14">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base mt-4">1 Year</p>
                </span>

                <button className="mx-auto md:w-[215px] sm:w-[150px] w-[120px] md:h-16 h-10 bg-[#B88E2F] hover:bg-[#d6aa43] text-xl/[30px] font-normal text-white ">Add To Cart</button>
            </div>




            <div className="flex flex-col gap-24 sm:border-r border-t border-1 pl-2  lg:pl-10 pt-8 lg:w-[344px] w-auto lg:px-20 px-2">
                <span className="space-y-7 mt-10">
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">1 Three Seater, 2 Single Seater</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">DTUBLIGRBL568</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Solid Wood</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">L-shaped</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Fabric + Cotton</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Bright Grey & Lion</p>
                </span>
                <span className="space-y-7 mt-16">
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Matte</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">Bright Grey & Lion</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">yes</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base pb-[23px]">300 KG</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">India</p>
                </span>
                <span className="space-y-7 mt-16">
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">265.32 cm</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">76 cm</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">167.76 cm</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">65 KG</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">41.52 cm</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">5.46 cm</p>
                </span>
                <span className="flex flex-col gap-7 mt-[60px] lg:w-56 w-auto ">
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base">1.2 Year Manufacturing Warranty</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base mt-3">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base mt-6">Warranty of the product is limited to manufacturing defects only.</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base mt-3">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
                    <p className="font-poppins font-normal md:text-xl/[25px] text-base mt-4">3 Months</p>
                </span>
                <button className="mx-auto md:w-[215px] sm:w-[150px] w-[120px] md:h-16 h-10 bg-[#B88E2F] hover:bg-[#d6aa43] text-xl/[30px] font-normal text-white ">Add To Cart</button>
            </div>






            
        </div>

      </div>
      {/* main contact end */}

      <CustomerCare />
    </div>
  );
}
