// Importing the Poppins font from Next.js' Google Font utility
import { Poppins } from 'next/font/google';

// Setting up the Poppins font with different font weights and subsets
// This allows the usage of various font weights like '100', '200', '300', etc., throughout the app.
const poppins = Poppins({
    subsets: ['latin'],  // Specifies that the Latin character subset should be included
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']  // The weights of the font that will be used
});

// Button component definition
const Button = () => {
    return (
        <div className={`flex items-center justify-center pt-10 ${poppins.className}`}>
            {/* Button Container with Styling */}
            <div className='flex items-center justify-center w-[245px] h-[48px] border-2 border-primaryColor font-semibold text-[16px] text-primaryColor'>
                Show More  {/* Button Text */}
            </div>
        </div>
    )
}

export default Button;
