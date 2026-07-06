import { BrandFooterSection } from "./sections/BrandFooterSection/BrandFooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection/HeroBannerSection";
import { RetroVioletFlavorSection } from "./sections/RetroVioletFlavorSection/RetroVioletFlavorSection";
import { SunshineOrangeFlavorSection } from "./sections/SunshineOrangeFlavorSection/SunshineOrangeFlavorSection";

const heroImage = {
  alt: "Landing",
  src: "/Landing.png",
};

export const PageVitrineDesktop = (): JSX.Element => {
  return (
    <main className="flex w-full flex-col overflow-x-clip bg-white">
      <section className="relative w-full overflow-hidden bg-black">
        <img
          className="aspect-video h-auto w-full object-cover object-center"
          alt={heroImage.alt}
          src={heroImage.src}
        />
        <img
          src="/Logo.png"
          alt="ALK ALINE"
          className="absolute bottom-3 right-3 w-40 sm:w-80 sm:bottom-6 sm:right-6 lg:bottom-10 lg:right-10 lg:w-auto"
        />
      </section>
      <HeroBannerSection />
      <RetroVioletFlavorSection />
      <section className="w-full bg-black py-3 sm:py-4">
        <div className="mx-auto flex w-full max-w-[1400px] justify-center px-4 sm:px-8">
          <button
            type="button"
            className="rounded-[38px] bg-[#ff8563] px-6 py-2 font-h1 text-[28px] font-[number:var(--h1-font-weight)] leading-none tracking-[var(--h1-letter-spacing)] text-white transition-colors hover:bg-[#e97555] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-8 sm:py-2.5 sm:text-[36px] lg:px-10 lg:py-3 lg:text-[48px] [font-style:var(--h1-font-style)]"
          >
            Order Now
          </button>
        </div>
      </section>
      <SunshineOrangeFlavorSection />
      <BrandFooterSection />
    </main>
  );
};
