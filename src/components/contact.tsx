import Image from "next/image";

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

export default function ContactPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-20 font-poppins">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-poppinsSemiBold mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-gray-700 text-base max-w-xl mx-auto">
            For more information about our products and services, feel free to
            drop us an email. Our staff is always here to help you. Don’t
            hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Information */}
          <div className="space-y-10">
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex-shrink-0">
                <Image
                  src="/images/address.png"
                  alt="Address icon"
                  width={40}
                  height={40}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-900">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex-shrink-0">
                <Image
                  src="/images/phone.png"
                  alt="Phone icon"
                  width={40}
                  height={40}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-900">Phone</h3>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 flex-shrink-0">
                <Image
                  src="/images/time.png"
                  alt="Time icon"
                  width={40}
                  height={40}
                  quality={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-lg text-gray-900">
                  Working Time
                </h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-8">
              <div className="space-y-3">
                <label className="block text-sm text-gray-900">Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm text-gray-900">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm text-gray-900">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-sm text-gray-900">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#B88E2F]"
                />
              </div>
              <button className="px-10 py-4 bg-[#B88E2F] text-white rounded-lg hover:bg-[#9d7829] transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-[#FAF3EA] py-20 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-5">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                quality={100}
                className="flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
