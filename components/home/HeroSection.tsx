import Image from "next/image";
import Link from "next/link";
import React from "react";
import WorkSection from "./WorkSection";

const HeroSection = () => {
  return (
    <section className="h-dvh flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="text-lg md:text-xl xl:text-[1.6vw] font-semibold flex items-center gap-2">
          <p>This developer is currently working at</p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.webxnepal.com"
          >
            <div className="relative h-[6vh] aspect-video">
              <Image
                src="/webx-white-logo.png"
                alt="WebX Nepal logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <p>nepal.</p>
        </div>
        {/* <WorkSection /> */}
        <div className="">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/9779865250834"
          >
            whatsapp: 9865250834
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
