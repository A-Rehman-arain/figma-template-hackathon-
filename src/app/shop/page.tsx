// import AnotherHeroSection from "@/components/AnotherHeroSection"

// const Shop = () => {
//   return (
//     <div>
//       <AnotherHeroSection />
//     </div>
//   )
// }

// export default Shop



import Image from "next/image";
import ProductCard from "@/components/Product-Card";
import CustomerCare from "@/components/Customer-Care";
import Banner from "@/components/Banner";
import Link from "next/link";



export default function Shop() {
  return (
    <div>
      {/* banner section start*/}
      <Banner name="Shop" logo="/logo.png" title="Shop"/>
      {/* banner section end */}

      {/* Second Section Start */}
      <div className="h-auto mb-8 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-4 bg-[#F9F1E7]">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto">
          {/* Filter Section */}
          <div className="flex items-center gap-2">
            <Image
              src="/filtering.png"
              alt="filter image"
              height={25}
              width={25}
            />
            <p className="font-poppins text-base md:text-xl/[30px] font-normal">
              Filter
            </p>
          </div>

          {/* View Icons */}
          <div className="flex gap-4">
            <Image
              src="/view-list.png"
              alt="view all image"
              height={25}
              width={25}
            />
            <Image
              src="/grid-round.png"
              alt="grid round image"
              height={25}
              width={25}
            />
          </div>

          {/* Results Section */}
          <div className="w-full lg:w-[220px] h-auto lg:h-[37px] flex justify-center lg:justify-end items-center border-t-[1px] lg:border-t-0 lg:border-l-[2px] border-[#9F9F9F] pt-2 lg:pt-0">
            <p className="font-poppins text-sm md:text-base font-normal text-center lg:text-left">
              Showing 1–16 of 32 results
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center sm:flex-row gap-4 lg:gap-6 mt-4 lg:mt-0 w-full lg:w-auto">
          {/* Show Section */}
          <div className="w-full sm:w-[126px] h-auto flex justify-between items-center  p-2 gap-2">
            <p className="font-poppins text-base md:text-xl/[30px] font-normal pl">
              Show
            </p>
            <span className="w-[55px] h-[55px] flex items-center justify-center bg-white font-poppins text-base md:text-xl/[30px] font-normal">
              16
            </span>
          </div>

          {/* Sort By Section */}
          <div className="w-full sm:w-[300px] h-auto flex justify-between items-center p-2 gap-3">
            <p className="font-poppins text-base md:text-xl/[30px] font-normal  pl">
              Short By
            </p>
            <span className="w-[188px] h-[55px] flex items-center justify-center bg-white font-poppins text-base md:text-xl/[30px] font-normal">
              Default
            </span>
          </div>
        </div>
      </div>
      {/* Second Section End */}

      {/* items start */}

      {/* Our Product Start */}
      <div className="xl:w-[1236px] w-auto mx-auto px-4 py-6">
        <div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
            {/* First Row */}
            <Link href={"/singleProduct"}>
              <ProductCard
                image="/image-1.png"
                name="Syltherine"
                description="Stylish cafe chair"
                discountedPrice="Rp 2.500.000"
                originalPrice="Rp 3.500.000"
                discountBgColor="bg-[#E97171]"
                discount="-30%"
              />
            </Link>
            <Link href={"/singleProduct"}>
              <ProductCard
                image="/images-2.png"
                name="Leviosa"
                description="Stylish cafe chair"
                discountedPrice="Rp 2.500.000"
                showOverlay={true}
              />
            </Link>

            <Link href={"/singleProduct"}>
              <ProductCard
                image="/images-3.png"
                name="Lolito"
                description="Luxury big sofa"
                discountedPrice="Rp 7.000.000"
                originalPrice="Rp 14.000.000"
                discountBgColor="bg-[#E97171]"
                discount="-50%"
              />
            </Link>

            <Link href={"/singleProduct"}>
              <ProductCard
                image="/image-4.png"
                name="Respira"
                description="Outdoor bar table and stool"
                discountedPrice="Rp 500.000"
                discountBgColor="bg-[#2EC1AC]"
                discount="New"
              />
            </Link>

            {/* Second Row */}
            <Link href={"/singleProduct"}>
              <ProductCard
                image="/image-1.png"
                name="Syltherine"
                description="Stylish cafe chair"
                discountedPrice="Rp 2.500.000"
                originalPrice="Rp 3.500.000"
                discountBgColor="bg-[#E97171]"
                discount="-30%"
              />
            </Link>

            <Link href={"/singleProduct"}>
              <ProductCard
                image="/images-2.png"
                name="Leviosa"
                description="Stylish cafe chair"
                discountedPrice="Rp 2.500.000"
              />
            </Link>

            <Link href={"/singleProduct"}>
              <ProductCard
                image="/images-3.png"
                name="Lolito"
                description="Luxury big sofa"
                discountedPrice="Rp 7.000.000"
                originalPrice="Rp 14.000.000"
                discountBgColor="bg-[#E97171]"
                discount="-50%"
              />
            </Link>
            <Link href={"/singleProduct"}>
              <ProductCard
                image="/image-4.png"
                name="Respira"
                description="Outdoor bar table and stool"
                discountedPrice="Rp 500.000"
                discountBgColor="bg-[#2EC1AC]"
                discount="New"
              />
            </Link>

            {/* third Row */}
            <Link href={"/singleProduct"}>
              <ProductCard
                image="/image-1.png"
                name="Syltherine"
                description="Stylish cafe chair"
                discountedPrice="Rp 2.500.000"
                originalPrice="Rp 3.500.000"
                discountBgColor="bg-[#E97171]"
                discount="-30%"
              />
            </Link>
            <Link href={"/singleProduct"}>
              <ProductCard
                image="/images-2.png"
                name="Leviosa"
                description="Stylish cafe chair"
                discountedPrice="Rp 2.500.000"
              />
            </Link>
            <Link href={"/singleProduct"}>
              <ProductCard
                image="/images-3.png"
                name="Lolito"
                description="Luxury big sofa"
                discountedPrice="Rp 7.000.000"
                originalPrice="Rp 14.000.000"
                discountBgColor="bg-[#E97171]"
                discount="-50%"
              />
            </Link>

            <Link href={"/singleProduct"}>
              <ProductCard
                image="/image-4.png"
                name="Respira"
                description="Outdoor bar table and stool"
                discountedPrice="Rp 500.000"
                discountBgColor="bg-[#2EC1AC]"
                discount="New"
              />
            </Link>

            {/* fourth Row */}
            <Link href={"/singleProduct"}>
              <ProductCard
                image="/image-1.png"
                name="Syltherine"
                description="Stylish cafe chair"
                discountedPrice="Rp 2.500.000"
                originalPrice="Rp 3.500.000"
                discountBgColor="bg-[#E97171]"
                discount="-30%"
              />
            </Link>
            <Link href={"/singleProduct"}>
              <ProductCard
                image="/images-2.png"
                name="Leviosa"
                description="Stylish cafe chair"
                discountedPrice="Rp 2.500.000"
              />
            </Link>

            <Link href={"/singleProduct"}>
              <ProductCard
                image="/images-3.png"
                name="Lolito"
                description="Luxury big sofa"
                discountedPrice="Rp 7.000.000"
                originalPrice="Rp 14.000.000"
                discountBgColor="bg-[#E97171]"
                discount="-50%"
              />
            </Link>

            <Link href={"/singleProduct"}>
              <ProductCard
                image="/image-4.png"
                name="Respira"
                description="Outdoor bar table and stool"
                discountedPrice="Rp 500.000"
                discountBgColor="bg-[#2EC1AC]"
                discount="New"
              />
            </Link>
          </div>

          {/* button start */}
          <div className="flex w-auto md:w-[392px] h-[90px] justify-center mx-auto gap-6 my-20">
            <button
              type="button"
              className="w-[60px] h-[60px] font-poppins rounded-lg font-normal text-xl/[30px]] text-white flex justify-center items-center bg-[#B88E2F]"
            >
              1
            </button>
            <button
              type="button"
              className="w-[60px] h-[60px] font-poppins rounded-lg font-normal text-xl/[30px]]  flex justify-center items-center bg-[#F9F1E7]"
            >
              2
            </button>
            <button
              type="button"
              className="w-[60px] h-[60px] font-poppins rounded-lg font-normal text-xl/[30px]]  flex justify-center items-center bg-[#F9F1E7]"
            >
              3
            </button>
            <button
              type="button"
              className="w-[98px] h-[60px] font-poppins rounded-lg font-normal text-xl/[30px]] flex justify-center items-center bg-[#F9F1E7]"
            >
              Next
            </button>
          </div>
          {/* button end */}
        </div>
      </div>
      {/* Our Product End */}

      {/* items end */}

      {/* customer care Section Start */}
      <CustomerCare />
      {/* customer care Section End */}
    </div>
  );
}
