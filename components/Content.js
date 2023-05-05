import Image from "next/image"

export default function Content() {
    return (
        <div className="lg:flex items-center lg:px-40">
            <div className="lg:order-2">
                <Image className="lg:hidden w-full" src="/image-hero-mobile.png" width="400" height="20" alt="head-image-mobile" />
                <Image className="hidden md:hidden lg:inline-block bg-no-repeat w-full" src="/image-hero-desktop.png" width="500" height="100" alt="head-image-mobile" />
            </div>

            <div className="text-center pt-10 lg:text-start lg:w-8/12 lg:pr-36">
                <h1 className="text-4xl font-bold lg:text-7xl lg:pr-14">Make remote work</h1>

                <p className="text-md text-[#696969] p-5 lg:text-xl lg:p-0 lg:py-10 md:px-20">
                    Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.
                </p>

                <button className="bg-[#141414] text-[#FAFAFA] text-sm rounded-xl py-3 px-6 duration-300 hover:drop-shadow-lg hover:bg-[#FAFAFA] hover:text-[#141414] lg:text-lg lg:px-10">
                    Learn more
                </button>
            </div>
        </div>
    )
}
