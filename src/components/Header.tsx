// Importing the Poppins font from Next.js' Google Font utility
import { Poppins } from 'next/font/google';

// Importing necessary Next.js components for navigation and image rendering
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo1.png";
import cart from "../../public/shopping-cart.png"

// Importing icons from the 'react-icons' library for the menu, search, heart, and cart icons
import { CiHeart, CiMenuBurger, CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Importing custom UI components from './ui/sheet' for handling the mobile navigation sheet
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

// Setting up the Poppins font with different font weights and subsets
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', "700", '800', '900']
});

// Defining the Header component
const Header = () => {
    // Array of navigation items with their respective links
    const navItems = [
        { name: "Home", link: "../" },
        { name: "Shop", link: "../shop" },
        { name: "Blog", link: "../blog" },
        { name: "Contact", link: "../contact" },
    ];

    return (
        // Navigation bar container with responsive padding and height
        <nav className="h-[100px] py-[29px] md:px-[54px] px-[29px]">
            <div className="flex justify-between items-end h-[41px]">
                {/* Logo Section */}
                <div>
                    <Image src={logo} alt="logo" width={185} height={41} />
                </div>

                {/* Middle Navigation Links (visible on large screens) */}
                <div className="middlepart">
                    <ul className={`${poppins.className} font-medium text-[16px] hidden lg:flex lg:gap-12 md:gap-5`}>
                        {
                            navItems.map((item) => (
                                // Navigation link items
                                <li key={item.name}><Link href={item.link}>{item.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>

                {/* Mobile Menu Button (visible only on smaller screens) */}
                <div className='visible lg:hidden'>
                    <Sheet>
                        <SheetTrigger>
                            <CiMenuBurger className='w-[24px] h-[24px]' />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                {/* Mobile Menu Logo */}
                                <SheetTitle>
                                    <Image src={'/assets/logo.png'} alt="logo" width={185} height={41} />
                                </SheetTitle>
                                <SheetDescription>
                                    {/* Mobile Navigation Links */}
                                    <ul className={`${poppins.className} font-medium text-[16px] flex flex-col items-start gap-5 py-5`}>
                                        {
                                            navItems.map((item) => (
                                                <li key={item.name}><Link href={item.link}>{item.name}</Link></li>
                                            ))
                                        }
                                    </ul>

                                    {/* Mobile Icons (Account, Search, Heart, Cart) */}
                                    <div className="rightpart flex gap-10 md:hidden">
                                        <Image src={'/asset/account.svg'} alt="account" width={23.33} height={18.67} />
                                        <CiSearch className='w-[22.17px] h-[22.17px]' />
                                        <CiHeart className='w-[23.33px] h-[20.81px]' />
                                        <AiOutlineShoppingCart className='w-[24.53px] h-[22.06px]' />
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                
                <div className="rightpart  hidden md:flex lg:gap-10 md:gap-5">
                    <Image src={'/assets/account.svg'} alt="account" width={23.33} height={18.67} />
                    <CiSearch className='w-[22.17px] h-[22.17px]' />
                    <CiHeart className='w-[23.33px] h-[20.81px]' />
                    {/* <AiOutlineShoppingCart className='w-[24.53px] h-[22.06px]' /> */}
                    <Link href="/cart" className="text-gray-800  hover:text-gray-600">
              <Image
                src={cart}
                alt="Cart Icon"
                width={24}
                height={24}
                quality={100}
                loading="lazy"
              />
            </Link>
                </div>
            </div>
        </nav>
    );
}


export default Header;
