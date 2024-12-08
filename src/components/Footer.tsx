// Importing the Poppins font from Next.js' Google Font utility
import { Poppins } from 'next/font/google';

// Setting up the Poppins font with different font weights and subsets
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', "700", '800', '900']
});

// Footer component definition
const Footer = () => {
  return (
    // Footer container with padding and a fixed height
    <footer className='h-[505px] px-[40px] md:px-[100px] py-[48px]'>
      {/* Main content container with a fixed height */}
      <div className='h-[419px]'>

        {/* Top section: four-column layout with responsive spacing */}
        <div className={`${poppins.className} flex flex-wrap justify-between gap-10 mb-[50px] lg:gap-0`}>
          
          {/* First column: Company information */}
          <div className='space-y-[50px] w-[285px]'>
            <h2 className='font-bold text-[24px]'>Funiro.</h2>
            <p className='font-normal text-[16px] text-footerTextColor'>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Second column: Navigation links */}
          <div className='space-y-[50px]'>
            <p className='font-normal text-[16px] text-footerTextColor'>Link</p>
            <p className='font-normal text-[16px]'>Home</p>
            <p className='font-normal text-[16px]'>Shop</p>
            <p className='font-normal text-[16px]'>About</p>
            <p className='font-normal text-[16px]'>Contact</p>
          </div>

          {/* Third column: Help section */}
          <div className='space-y-[50px]'>
            <p className='font-normal text-[16px] text-footerTextColor'>Help</p>
            <p className='font-normal text-[16px]'>Payment Options</p>
            <p className='font-normal text-[16px]'>Returns</p>
            <p className='font-normal text-[16px]'>Privacy Policies</p>
          </div>

          {/* Fourth column: Newsletter subscription */}
          <div className='space-y-[50px]'>
            <p className='font-normal text-[16px] text-footerTextColor'>NewsLetter</p>
            <p className='flex'>
              {/* Input field for email subscription with underline */}
              <input
                className='font-normal text-[14px] text-footerTextColor bg-transparent underline decoration-black underline-offset-[4px] pr-4 outline-none'
                placeholder='Enter Your Email Address'
              />
              {/* Subscribe link with underline */}
              <span className='font-medium text-[14px] underline underline-offset-[4px]'>Subscribe</span>
            </p>
          </div>
        </div>

        {/* Bottom section: Footer border and copyright text */}
        <div className='border-t-[1px] border-footerTextColor'>
          <p className={`${poppins.className} font-normal text-[16px] pt-[35px]`}>
            2023 furino. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

// Exporting the Footer component for use in other parts of the application
export default Footer;
