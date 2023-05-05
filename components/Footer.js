import Image from "next/image"

export default function Footer() {
    return (
        <footer>
            <div className="flex space-x-4 items-center justify-center pt-10 pb-16 lg:hidden">
                <Image className="cursor-pointer" src="/client-databiz.svg" width="80" height="10" alt="client-databiz-image" />
                <Image className="cursor-pointer" src="/client-audiophile.svg" width="50" height="10" alt="client-audiophile-image" />
                <Image className="cursor-pointer" src="/client-meet.svg" width="80" height="10" alt="client-meet-image" />
                <Image className="cursor-pointer" src="/client-maker.svg" width="80" height="10" alt="client-maker-image" />
            </div>

            {/* Footer desktop */}
            <div className="space-x-8 items-center justify-center hidden lg:flex lg:absolute bottom-2 left-40">
                <Image className="cursor-pointer" src="/client-databiz.svg" width="100" height="10" alt="client-databiz-image" />
                <Image className="cursor-pointer" src="/client-audiophile.svg" width="70" height="10" alt="client-audiophile-image" />
                <Image className="cursor-pointer" src="/client-meet.svg" width="100" height="10" alt="client-meet-image" />
                <Image className="cursor-pointer" src="/client-maker.svg" width="100" height="10" alt="client-maker-image" />
            </div>
        </footer>
    )
}
