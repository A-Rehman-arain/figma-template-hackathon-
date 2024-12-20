"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { Share2, Heart, BarChart2, ChevronRight } from "lucide-react";

// Product Interface
interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  originalPrice?: number;
  badge?: {
    text: string;
    color: string;
  };
}

// Base products data
const baseProducts: Product[] = [
  {
    id: "1",
    name: "Syltherine",
    image: "/images/syltherine.png",
    category: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    badge: {
      text: "-30%",
      color: "bg-[#E97171]",
    },
  },
  {
    id: "2",
    name: "Leviosa",
    image: "/images/leviosa.png",
    category: "Stylish cafe chair",
    price: 2500000,
  },
  {
    id: "3",
    name: "Lolito",
    image: "/images/lolito.png",
    category: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    badge: {
      text: "-50%",
      color: "bg-[#E97171]",
    },
  },
  {
    id: "4",
    name: "Respira",
    image: "/images/respira.png",
    category: "Outdoor bar table and stool",
    price: 500000,
    badge: {
      text: "New",
      color: "bg-[#2EC1AC]",
    },
  },
];

// Generate dynamic product list
const products: Product[] = Array(4)
  .fill(baseProducts)
  .flat()
  .map((product, index) => ({
    ...product,
    id: `${product.id}-${index}`,
  }));

// Pagination items
const paginationItems = [
  { label: "1", active: true },
  { label: "2", active: false },
  { label: "3", active: false },
  { label: "Next", active: false },
];

export default function ShopHeader() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync scroll position if needed
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        // Scroll logic could go here if needed in the future
      };
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="font-poppins">
        <div className="relative h-[320px] w-full">
          <Image
            src="/images/shop-cover.png"
            alt="Shop Cover"
            fill
            quality={100}
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
              Shop
            </h1>
            <div className="flex items-center gap-2 text-black text-lg">
              <Link href="/" className="hover:text-[#ddbe77] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-5 h-5" />
              <span>Shop</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 md:py-20 px-6 font-poppins">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative bg-[#F4F5F7] rounded-md overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={320}
                    quality={100}
                    className="w-full h-[320px] object-cover"
                  />
                  {/* Hover Overlay */}
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
                      <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <BarChart2 className="w-5 h-5" />
                        Compare
                      </button>
                      <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <Heart className="w-5 h-5" />
                        Like
                      </button>
                    </div>
                  </div>
                  {product.badge && (
                    <div
                      className={`absolute top-5 right-5 ${product.badge.color} text-white text-sm font-bold px-4 py-1 rounded-md`}
                    >
                      {product.badge.text}
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-semibold text-[#3A3A3A]">
                    {product.name}
                  </h3>
                  <p className="text-base text-[#898989]">{product.category}</p>
                  <div className="mt-2 flex justify-center gap-3">
                    <span className="text-xl text-[#B88E2F] font-semibold">
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
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-8 flex justify-center items-center">
        <div className="flex gap-4">
          {paginationItems.map((item, index) => (
            <button
              key={index}
              className={`min-w-[48px] h-12 rounded-lg px-4 flex items-center justify-center text-sm transition-colors ${
                item.active
                  ? "bg-[#B88E2F] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-[#B88E2F] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
