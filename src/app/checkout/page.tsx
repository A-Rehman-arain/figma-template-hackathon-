import Banner from "@/components/Banner";
import CustomerCare from "@/components/Customer-Care";

export default function Checkout() {
  return (
    <div>
      <Banner name="Checkout" title="Checkout" logo="/logo.png" />

      <div className="max-w-[1242px] mx-auto my-10 flex flex-col  lg:flex-row">
        {/* form section start */}
        <div className="md:w-[608px] w-auto">
          <div className="flex flex-col gap-8 py-10 px-10">
            <h1 className="font-semibold text-4xl/[54px] font-poppins">
              Billing details
            </h1>

            <form className="space-y-8">
              <div className="flex gap-5">
                <div className="w-[212px] h-[121px] flex flex-col justify-between">
                  <label
                    htmlFor="first-name"
                    className="font-medium font-poppins text-base"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    id="first-name"
                    className="sm:w-[212px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
                  />
                </div>
                <div className="w-[212px] h-[121px] flex flex-col justify-between">
                  <label
                    htmlFor="last-name"
                    className="font-medium font-poppins text-base"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    id="last-name"
                    className="sm:w-[212px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
                  />
                </div>
              </div>

              <div className="h-[121px] flex flex-col justify-between">
                <label
                  htmlFor="company-name"
                  className="font-medium font-poppins text-base"
                >
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
                />
              </div>

              <div className="h-[121px] flex flex-col justify-between">
                <label
                  htmlFor="country-region"
                  className="font-medium font-poppins text-base"
                >
                  Country / Region
                </label>
                <select
                  className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border border-[#9F9F9F] rounded-[10px] px-5 font-poppins text-[#9F9F9F] text-base"
                  id="country-region"
                  required
                >
                  <option value="srilanka">Sri Lanka</option>
                  <option value="india">India</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="bangladesh">Bangladesh</option>
                  <option value="nepal">Nepal</option>
                  <option value="bhutan">Bhutan</option>
                  <option value="maldives">Maldives</option>
                  <option value="china">China</option>
                  <option value="japan">Japan</option>
                  <option value="australia">Australia</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                </select>
              </div>

              <div className="h-[121px] flex flex-col justify-between">
                <label
                  htmlFor="street-address"
                  className="font-medium font-poppins text-base"
                >
                  Street address
                </label>
                <input
                  type="text"
                  id="street-address"
                  required
                  className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
                />
              </div>

              <div className="h-[121px] flex flex-col justify-between">
                <label
                  htmlFor="town-city"
                  className="font-medium font-poppins text-base"
                >
                  Town / City
                </label>
                <input
                  required
                  type="text"
                  id="town-city"
                  className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
                />
              </div>

              <div className="h-[121px] flex flex-col justify-between">
                <label
                  htmlFor="country-region"
                  className="font-medium font-poppins text-base"
                >
                  Province
                </label>
                <select
                  required
                  className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border border-[#9F9F9F] rounded-[10px] px-5 font-poppins text-[#9F9F9F] text-base"
                  id="country-region"
                >
                  <option value="western">Western Province</option>
                  <option value="eastern">Eastern Province</option>
                  <option value="southern">Southern Province</option>
                  <option value="northern">Northern Province</option>
                  <option value="central">Central Province</option>
                  <option value="north_western">North Western Province</option>
                  <option value="north_central">North Central Province</option>
                  <option value="uva">Uva Province</option>
                  <option value="sabaragamuwa">Sabaragamuwa Province</option>
                </select>
              </div>

              <div className="h-[121px] flex flex-col justify-between">
                <label
                  htmlFor="zip-code"
                  className="font-medium font-poppins text-base"
                >
                  ZIP code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  required
                  className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
                />
              </div>

              <div className="h-[121px] flex flex-col justify-between">
                <label
                  htmlFor="phone"
                  className="font-medium font-poppins text-base"
                >
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  required
                  className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
                />
              </div>

              <div className="h-[121px] flex flex-col justify-between">
                <label
                  htmlFor="email"
                  className="font-medium font-poppins text-base"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
                />
              </div>

              <div className="h-[121px] flex flex-col justify-between pt-7">
                <textarea
                  className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4 text-[#9F9F9F] resize-none md:py-6 py-4"
                  id="additional-information"
                >
                  Additional information
                </textarea>
              </div>
            </form>
          </div>
        </div>
        {/* form section end */}

        {/* Product details section start */}
        <div className="md:w-[600px] w-auto sm:h-[798px] h-auto px-10 py-28 gap-10">
          <div className="space-y-4">
            <span className="flex justify-between items-center">
              <h4 className="font-poppins font-medium text-2xl/9">Product</h4>
              <h4 className="font-poppins font-medium text-2xl/9">Subtotal</h4>
            </span>

            <span className="flex justify-between items-center">
              <span className="flex gap-2 items-center">
                <p className="font-poppins font-normal text-base text-[#9F9F9F]">
                  Asgaard sofa
                </p>
                <p className="font-medium font-poppins text-xs/[18px]">X</p>
                <p className="font-medium font-poppins text-xs/[18px]">1</p>
              </span>
              <p className=" font-poppins font-light text-base">
                Rs. 250,000.00
              </p>
            </span>

            <span className="flex justify-between items-center">
              <p className="font-poppins font-normal text-base">Subtotal</p>
              <p className="font-poppins font-normal text-base">
                Rs. 250,000.00
              </p>
            </span>

            <span className="flex justify-between items-center">
              <p className="font-poppins font-normal text-base">Total</p>
              <p className="font-poppins font-bold text-2xl/9 text-[#B88E2F]">
                Rs. 250,000.00
              </p>
            </span>
          </div>

          <hr className="my-7" />

          <div className="flex flex-col gap-5">
            <span className="flex gap-2 items-center">
              <span className="w-[14px] h-[14px] rounded-full bg-black"></span>
              <p className="font-poppins font-normal text-base">
                Direct Bank Transfer
              </p>
            </span>

            <p className="font-poppins font-light text-base text-[#9F9F9F]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <div>
              <label className="text-base font-poppins font-medium text-[#9F9F9F]" htmlFor="dbt">
                <input type="radio" className="mr-2" id="dbt"  name="payment-method"/>
                Direct Bank Transfer
              </label>
              <br />

              <label className="text-base font-poppins font-medium text-[#9F9F9F]" htmlFor="con">
                <input type="radio" className="mr-2" id="con" name="payment-method"/>
                Cash On Delivery
              </label>
            </div>

            <p className="text-base font-poppins font-light">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-semibold">privacy policy.</span></p>

            <button type="button" className="font-poppins font-normal text-xl/[30px] sm:w-[318px] w-52 h-16 rounded-[15px] hover:bg-slate-50 mx-auto mt-6 border border-black">Place order</button>
          </div>
        </div>
        {/* Product details section end */}
      </div>

      <CustomerCare />
    </div>
  );
}
