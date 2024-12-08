// Importing the Poppins font from Next.js' Google Font utility
import { Poppins } from 'next/font/google';
import ColorFulButton from './ColorFulButton';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// Setting up the Poppins font with different font weights and subsets
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', "700", '800', '900']
});

const Inspiration = () => {
    return (
        // Main container with background, padding, and responsive layout
        <div className={`bg-inspirationBackground py-[40px] px-[10px] flex flex-col justify-center flex-wrap lg:flex-nowrap md:flex-row gap-7 ${poppins.className} `}>

            {/* Left Section: Text and Button */}
            <div className={`px-5 lg:pl-[50px] flex flex-col items-center justify-center w-full lg:w-1/3`}>
                {/* Main heading */}
                <div>
                    <p className='font-bold text-[30px] text-center md:text-left md:text-[40px]'>
                        50+ Beautiful rooms inspiration
                    </p>
                    {/* Subtitle */}
                    <p className='font-medium text-[16px] text-center md:text-left  mb-[20px]'>
                        Our designer already made a lot of beautiful prototype of rooms that inspire you
                    </p>
                </div>
                {/* Button to explore more */}
                <ColorFulButton title='Explore More' />
            </div>

            {/* Middle Section: Image */}
            <div className='relative w-full md:w-[404px] md:h-[582px]'>
                {/* Inspiration image */}
                <Image src={'/assets/inspirationimage.png'} alt='first inspiration image' width={404} height={582} layout="responsive" />
                {/* Overlay with text */}
                <div className='w-[217px] h-[130px] px-5 flex flex-col items-start justify-center absolute bottom-7 left-5 bg-white/75'>
                    {/* Room number and category */}
                    <div className='flex items-center gap-2'>
                        <span className='font-medium text-[16px]'>01</span>
                        <Image src={'/assets/inspirationline.svg'} alt="line" width={27} height={1} />
                        <span className='font-medium text-[16px]'>Bed Room</span>
                    </div>
                    {/* Room name */}
                    <p className='font-semibold text-[28px]'>Inner Peace</p>
                </div>
                {/* Right arrow button */}
                <div className='w-[48px] h-[48px] bg-primaryColor flex items-center justify-center absolute bottom-7 left-[238px]'>
                    <Image src={'/assets/rightArrow.svg'} alt='right arrow' width={18} height={12} />
                </div>
            </div>

            {/* Right Section: Carousel */}
            <div className='w-full md:w-1/3 flex flex-col justify-center'>
                {/* Carousel component */}
                <Carousel className='h-[582px] relative overflow-hidden'>
                    <CarouselContent className="md:h-full">
                        {/* First image in the carousel */}
                        <CarouselItem className="flex items-center justify-center h-full">
                            <Image src={'/assets/crouselimage1.png'} alt='image 1' width={372} height={486} className="object-contain" />
                        </CarouselItem>
                        {/* Second image in the carousel */}
                        <CarouselItem className="flex items-center justify-center h-full">
                            <Image src={'/assets/crouselimage2.png'} alt='image 2' width={372} height={486} className="object-contain" />
                        </CarouselItem>
                    </CarouselContent>

                    {/* Carousel navigation buttons */}
                    {/* Left button to navigate the carousel */}
                    <div className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10'>
                        <CarouselPrevious className="w-[48px] h-[48px] bg-primaryColor flex items-center justify-center absolute top-[-90px] left-0">
                            <Image src="/assets/leftArrow.svg" alt="Previous" width={18} height={12} />
                        </CarouselPrevious>
                    </div>

                    {/* Right button to navigate the carousel */}
                    <div className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10'>
                        <CarouselNext className="w-[48px] h-[48px] bg-primaryColor flex items-center justify-center absolute top-[-90px] right-0">
                            <Image src="/assets/rightArrow.svg" alt="Next" width={18} height={12} />
                        </CarouselNext>
                    </div>

                    {/* Carousel Dots (indicating current image position) */}
                    <ul className='mt-5 md:mt-10 lg:ml-10 flex items-center ml-0 justify-start gap-5'>
                        {/* Active dot for current slide */}
                        <li className='w-6 h-6 border border-primaryColor rounded-full flex items-center justify-center'>
                            <div className='w-2 h-2 bg-primaryColor rounded-full'></div>
                        </li>
                        {/* Inactive dots for other slides */}
                        <li className='w-3 h-3 bg-dotColor rounded-full hover:bg-primaryColor'></li>
                        <li className='w-3 h-3 bg-dotColor rounded-full hover:bg-primaryColor'></li>
                        <li className='w-3 h-3 bg-dotColor rounded-full hover:bg-primaryColor'></li>
                    </ul>
                </Carousel>
            </div>
        </div>
    )
}

export default Inspiration;
