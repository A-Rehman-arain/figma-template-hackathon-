// Importing the Poppins font from Next.js' Google Font utility
import { Poppins } from 'next/font/google';
import Image from 'next/image';

// Setting up the Poppins font with different font weights and subsets
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', "700", '800', '900']
});

const RangeProduct = ({url,title}:{url:string,title:string}) => {
  return (
    <div className='text-fontColor'>
      <Image src={url} alt='dining' width={381} height={480} loading="lazy"  className='rounded-lg' />
      <p className={`${poppins.className} font-semibold text-[24px] text-center pt-3`}>{title}</p>
    </div>
  )
}

export default RangeProduct
