// Importing the Poppins font from Next.js' Google Font utility
import { Poppins } from 'next/font/google';
import RangeProduct from './RangeProduct';  // Importing the RangeProduct component which is used to display individual product categories
import HeadingCenter from './HeadingCenter';

// Setting up the Poppins font with different font weights and subsets
// This allows the usage of various font weights like '100', '200', '300', etc. throughout the app.
const poppins = Poppins({
    subsets: ['latin'],  // Specifies that the Latin character subset should be included
    weight: ['100', '200', '300', '400', '500', '600', "700", '800', '900']  // The weights of the font that will be used
});

// Data for the range categories to make the code DRY (Don't Repeat Yourself)
// Each item in the array represents a category with its image URL and title.
const rangeCategories = [
    { url: '/assets/dining.png', title: 'Dining' },  // Category for Dining
    { url: '/assets/living.png', title: 'Living' },  // Category for Living
    { url: '/assets/bedroom.png', title: 'Bedroom' },  // Category for Bedroom
];

const Range = () => {
  return (
    <div className='px-[40px] md:px-[100px] py-[48px]'>  {/* Main wrapper with padding on the sides and top */}
      <div className={`${poppins.className} w-full`}>  {/* Container for the section using the Poppins font and full width with height depending on screen size */}
        
        {/* Header section for the range section */}
        <div className="text-center text-fontColor">  {/* Centers the text inside this div */}
          <HeadingCenter title='Browse The Range' />  {/* Main heading with responsive text size */}
          <p className='font-normal text-[16px] md:text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>  {/* Subheading with description text */}
        </div>
        
        {/* Category List */}
        <div className="mt-10 flex flex-wrap lg:flex-nowrap items-center justify-center gap-5">  
          {/* This container uses Flexbox to align the RangeProduct components. 
               It uses 'flex-wrap' on smaller screens and 'flex-nowrap' on larger screens. */}
          {rangeCategories.map((category, index) => (
            // Rendering RangeProduct components dynamically by mapping over the rangeCategories array
            <RangeProduct key={index} url={category.url} title={category.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Range;  // Exports the Range component to be used in other parts of the application