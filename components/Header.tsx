import Image from "next/image";
import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header className="border-b border-line bg-white py-3 sm:py-4">
      <div className="page-shell flex justify-center">
        <Image
          src={siteConfig.logo.path}
          width={siteConfig.logo.width}
          height={siteConfig.logo.height}
          alt="Digital Rajen"
          priority
          className="h-auto w-[180px] sm:w-[230px] lg:w-[250px]"
        />
      </div>
    </header>
  );
}
