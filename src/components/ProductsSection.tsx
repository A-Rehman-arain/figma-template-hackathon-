"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Share2,
  Heart,
  BarChart2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";





//  structure of a product
interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  originalPrice?: number; // Optional original price
  badge?: {
    text: string; // Badge text, -50% , New
    color: string; // Badge background color
  };
}


const products: Product[] = [
  {
    id: "1",
    name: "Syltherine",
    image:"/images/syltherine.png",
    category: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    badge: { text: "-30%", color: "bg-[#E97171]" },
  },
  {
    id: "2",
    name: "Leviosa",
    image: "/images/leviosa.png",
    category: "Ergonomic office chair",
    price: 4500000,
  },
  {
    id: "3",
    name: "Lolito",
    image: "/images/lolito.png",
    category: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    badge: { text: "-50%", color: "bg-[#E97171]" },
  },
  {
    id: "4",
    name: "Respira",
    image: "/images/respira.png",
    category: "Outdoor bar table and stool",
    price: 500000,
    badge: { text: "New", color: "bg-[#2EC1AC]" },
  },
  {
    id: "5",
    name: "Grifo",
    image: "/images/grifo.png",
    category: "Night lamp",
    price: 1500000,
  },
  {
    id: "6",
    name: "Muggo",
    image: "/images/muggo.png",
    category: "Small mug",
    price: 150000,
    badge: { text: "New", color: "bg-[#2EC1AC]" },
  },
  {
    id: "7",
    name: "Pingky",
    image: "/images/pingky.png",
    category: "Cute bed set",
    price: 7000000,
    originalPrice: 14000000,
    badge: { text: "-50%", color: "bg-[#E97171]" },
  },
  {
    id: "8",
    name: "Potty",
    image: "/images/potty.png",
    category: "Minimalist flower pot",
    price: 500000,
    badge: { text: "New", color: "bg-[#2EC1AC]" },
  },
  
];

export default function Products() {
  const [scrollPosition, setScrollPosition] = useState(0); // Track current scroll position
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the product container

  // Function to handle horizontal scrolling
  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = 300; // Width of each card
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      const newPosition = scrollPosition + scrollAmount;

      // Clamp the scroll position within bounds
      const maxScroll = container.scrollWidth - container.offsetWidth;
      const clampedPosition = Math.max(0, Math.min(newPosition, maxScroll));

      // Snap to the nearest card
      const nearestCardPosition =
        Math.round(clampedPosition / cardWidth) * cardWidth;

      container.scrollTo({
        left: nearestCardPosition,
        behavior: "smooth",
      });
      setScrollPosition(nearestCardPosition); // Update scroll position
    }
  };

  // Sync scroll position with the container's actual scroll
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => setScrollPosition(container.scrollLeft);
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#3A3A3A] text-3xl md:text-4xl font-bold mb-4">
            Our Products
          </h2>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Scrollable Product Container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 px-[16px] sm:px-0"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex-shrink-0 w-[280px] sm:w-auto"
              >
                {/* Product Card */}
                <div className="relative bg-[#F4F5F7] rounded-sm overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={285}
                    height={301}
                    quality={100}
                    className="w-full h-[301px] object-cover"
                  />

                  {/* Hover Overlay with Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <button className="w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
                        Add to cart
                      </button>
                    </div>
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white">
                      <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <Share2 className="w-5 h-5" />
                        Share
                      </button>
                      <button  className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <BarChart2  className="w-5 h-5"  />
                        Compare
                      </button>
                      <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <Heart className="w-5 h-5" />
                        Like
                      </button>
                    </div>
                  </div>

                  {/* Badge for Discounts or New Items */}
                  {product.badge && (
                    <div
                      className={`absolute top-5 right-5 ${product.badge.color} text-white text-sm font-bold px-4 py-1 rounded-sm`}
                    >
                      {product.badge.text}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-[#3A3A3A] text-2xl font-semibold mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#898989] mb-2">{product.category}</p>
                  <div className="flex justify-center items-center gap-3">
                    <span className="text-[#B88E2F] font-semibold">
                      Rp {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[#B0B0B0] line-through">
                        Rp {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md sm:hidden"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md sm:hidden"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Show More Button */}
        <div className="mt-16 text-center">
          <button className="border-2 border-[#B88E2F] text-[#B88E2F] px-8 py-3 hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}


