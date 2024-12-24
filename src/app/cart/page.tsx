import Banner from "@/components/Banner";
import CustomerCare from "@/components/Customer-Care";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  return (
    <div>
      <Banner name="Cart" title="Cart" logo="/logo.png"/>

      <div className="h-auto lg:h-[525px] flex justify-center items-center px-4 md:px-6 lg:px-0 xl:my-0 my-5">
        <div className="h-auto lg:h-[390px] w-full lg:w-[1240px] flex flex-col xl:flex-row justify-between gap-6">
          {/* product */}
          <div className="w-full lg:w-[817px] h-auto lg:h-[215px] flex flex-col justify-between">
            <div className="h-[55px] bg-[#F9F1E7] flex items-center px-4 lg:px-40 gap-4 lg:gap-28">
              <p className="font-poppins font-medium text-sm lg:text-base">Product</p>
              <p className="font-poppins font-medium text-sm lg:text-base">Price</p>
              <p className="font-poppins font-medium text-sm lg:text-base ml-3">Quantity</p>
              <p className="font-poppins font-medium text-sm lg:text-base">Subtotal</p>
            </div>

            <div className="h-auto lg:h-[108px] flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 py-4 lg:py-0">
              <Image
                src={"/cart-product.png"}
                alt="product image"
                height={105}
                width={108}
                className="object-contain"
              />

              <div className="h-auto lg:h-[25px] flex flex-col lg:flex-row gap-4 lg:gap-20 items-center">
                <p className="font-poppins text-sm lg:text-base font-normal text-[#9F9F9F]">
                  Asgaard sofa
                </p>
                <p className="font-poppins text-sm lg:text-base font-normal text-[#9F9F9F]">
                  Rs. 250,000.00
                </p>
                <p className="font-poppins text-sm lg:text-base font-normal border border-[#9F9F9F] flex items-center justify-center w-8 h-8 rounded-md">
                  1
                </p>
                <p className="font-poppins text-sm lg:text-base font-normal">
                  Rs. 250,000.00
                </p>
              </div>

              <Image
                src={"/delete.png"}
                alt="product image"
                height={21.88}
                width={21}
                className="hover:cursor-pointer"
              />
            </div>
          </div>

          {/* price */}
          <div className="h-auto lg:h-[390px] w-full lg:w-[393px] flex flex-col items-center justify-center gap-10 bg-[#F9F1E7] p-6 lg:p-0">
            <h3 className="font-poppins font-semibold text-2xl lg:text-[32px]/[48px]">
              Cart Totals
            </h3>

            <div className="flex flex-col gap-4 lg:gap-7 mt-3">
              <span className="flex justify-between gap-4">
                <p className="font-poppins text-sm lg:text-base font-medium">Subtotal</p>
                <p className="font-poppins text-sm lg:text-base font-normal text-[#9F9F9F]">
                  Rs. 250,000.00
                </p>
              </span>

              <span className="flex justify-between gap-4">
                <p className="font-poppins text-sm lg:text-base font-medium">Total</p>
                <p className="text-[#B88E2F] text-lg lg:text-xl/[30px] font-medium font-poppins">
                  Rs. 250,000.00
                </p>
              </span>
            </div>

            <Link href={"/checkout"}>
              <button
                type="button"
                className="text-lg lg:text-xl/[30px] font-normal h-12 lg:h-[58px] border border-black w-[222px] rounded-xl"
              >
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>

      <CustomerCare />
    </div>
  );
}
