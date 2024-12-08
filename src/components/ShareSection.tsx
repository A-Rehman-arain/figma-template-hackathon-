import Image from "next/image";
import HeadingCenter from "./HeadingCenter";

const ShareSection = () => {
    return (
        <div className="py-[50px]">
            {/* Heading Section */}
            <div className="text-center text-fontColor mb-10 px-4">
                {/* Subheading for the section, introducing the "Share your setup with" text */}
                <p className="font-semibold text-[16px] md:text-[20px] text-anotherFontColor">
                    Share your setup with
                </p>
                {/* Main Heading for the section - Uses HeadingCenter component */}
                <HeadingCenter title="#FuniroFurniture" />
            </div>

            {/* Image Grid Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mx-auto px-4">
                {/* First Column: Contains the first and sixth images */}
                <div className="flex flex-col gap-4">
                    {/* First Image */}
                    <Image
                        src="/assets/firstimage.png"
                        alt="first image"
                        height={382}
                        width={274}
                        className="w-full object-cover" // Ensures the image fills the width without distorting its aspect ratio
                    />
                    {/* Sixth Image */}
                    <Image
                        src="/assets/sixthimage.png"
                        alt="sixth image"
                        height={323}
                        width={381}
                        className="w-full object-cover"
                    />
                </div>

                {/* Second Column: Contains the second and seventh images */}
                <div className="flex flex-col gap-4 items-center justify-center">
                    {/* Second Image */}
                    <Image
                        src="/assets/secondimage.png"
                        alt="second image"
                        height={312}
                        width={451}
                        className="w-full object-cover"
                    />
                    {/* Seventh Image */}
                    <Image
                        src="/assets/seventhimage.png"
                        alt="seventh image"
                        height={242}
                        width={344}
                        className="w-full object-cover"
                    />
                </div>

                {/* Third Column: Contains only the third image */}
                <div className="flex flex-col gap-4 items-center justify-center">
                    {/* Third Image */}
                    <Image
                        src="/assets/thirdimage.png"
                        alt="third image"
                        height={392}
                        width={295}
                        className="w-full object-cover"
                    />
                </div>

                {/* Fourth Column: Contains the fourth and eighth images */}
                <div className="flex flex-col gap-4 items-center justify-center">
                    {/* Fourth Image */}
                    <Image
                        src="/assets/fourthimage.png"
                        alt="fourth image"
                        height={348}
                        width={290}
                        className="w-full object-cover"
                    />
                    {/* Eighth Image */}
                    <Image
                        src="/assets/eightimage.png"
                        alt="eighth image"
                        height={242}
                        width={178}
                        className="w-full object-cover"
                    />
                </div>

                {/* Fifth Column: Contains the fifth and ninth images */}
                <div className="flex flex-col gap-4 items-center justify-center">
                    {/* Fifth Image */}
                    <Image
                        src="/assets/fifthimage.png"
                        alt="fifth image"
                        height={433}
                        width={425}
                        className="w-full object-cover"
                    />
                    {/* Ninth Image */}
                    <Image
                        src="/assets/nineimage.png"
                        alt="ninth image"
                        height={196}
                        width={258}
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ShareSection;
