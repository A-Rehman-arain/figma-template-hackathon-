// Importing the Poppins font from Next.js' Google Font utility
import { Poppins } from 'next/font/google';

// Setting up the Poppins font with different font weights and subsets
// This allows the usage of various font weights like '100', '200', '300', etc. throughout the app.
const poppins = Poppins({
    subsets: ['latin'],  // Specifies that the Latin character subset should be included
    weight: ['100', '200', '300', '400', '500', '600', "700", '800', '900']  // The weights of the font that will be used
});

const HeadingCenter = ({title}:{title:string}) => {
  return (
    <p className={`${poppins.className} font-bold text-[25px] md:text-[40px] text-center text-fontColor`}>{title}</p>
  )
}

export default HeadingCenter
