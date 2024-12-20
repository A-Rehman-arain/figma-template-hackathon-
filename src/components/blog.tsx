import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";

export default function BlogPage() {
  const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPosts = [
    {
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
      image: "/images/pen-post.png",
    },
    {
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
      image: "/images/read-post.png",
    },
    {
      title: "Hand made pieces that took time to make",
      date: "03 Aug 2022",
      image: "/images/write-post.png",
    },
    {
      title: "Modern name in Milan",
      date: "03 Aug 2022",
      image: "/images/gamla-post.png",
    },
    {
      title: "Colorful office redesign design",
      date: "03 Aug 2022",
      image: "/images/beach-post.png",
    },
  ];

  const features = [
    {
      icon: "/images/trophy.png",
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: "/images/tick.png",
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: "/images/gift.png",
      title: "Free Shipping",
      description: "Order over $150",
    },
    {
      icon: "/images/support.png",
      title: "24/7 Support",
      description: "Dedicated support",
    },
  ];

  const paginationItems = [
    { label: "1", active: true },
    { label: "2", active: false },
    { label: "3", active: false },
    { label: "Next", active: false },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-2"
          />
          <h1 className="text-4xl font-semibold text-black mb-4">Blog</h1>
          <div className="flex items-center gap-2 text-sm text-black">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 font-poppins">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-12">
          {/* Blog Posts */}
          <div>
            <div className="space-y-8">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/laptop-blog.png"
                  alt="Featured blog post"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/admin-icon.png"
                    alt="Admin"
                    width={16}
                    height={16}
                  />
                  <span>Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/date-icon.png"
                    alt="Date"
                    width={16}
                    height={16}
                  />
                  <span>14 Oct 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/tag-icon.png"
                    alt="Tag"
                    width={16}
                    height={16}
                  />
                  <span>Wood</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium">
                Going all-in with millennial design
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc.
              </p>
              <Link
                href="#"
                className="text-black underline underline-offset-4 hover:text-gray-600"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-4 pr-12 border border-gray-300 rounded-lg"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="flex justify-between items-center text-gray-800"
                  >
                    <Link href="#" className="hover:underline">
                      {category.name}
                    </Link>
                    <span className="text-gray-500">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Recent Posts</h3>
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        <Link
                          href="#"
                          className="hover:underline hover:text-gray-600"
                        >
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 py-8">
        {paginationItems.map((item) => (
          <button
            key={item.label}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              item.active
                ? "bg-[#B88E2F] text-white"
                : "bg-gray-100 text-black hover:bg-[#B88E2F] hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4 items-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
              />
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
