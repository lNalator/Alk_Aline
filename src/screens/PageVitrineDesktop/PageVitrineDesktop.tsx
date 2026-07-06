import { Button } from "../../components/ui/button";
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
    <main className="flex w-full flex-col bg-white">
      <section className="w-full">
        <img
          className="block h-auto w-full object-cover"
          alt={heroImage.alt}
          src={heroImage.src}
        />
        <img src="/Logo.png" alt="Logo" className="absolute bottom-10 right-10" />
      </section>
      <HeroBannerSection />
      <RetroVioletFlavorSection />
      <section className="w-full bg-black py-3 sm:py-4">
        <div className="container flex justify-center">
          <Button
            type="button"
            className="h-auto min-h-0 rounded-[38px] bg-[#ff8563] px-6 py-2 font-h1 text-[28px] font-[number:var(--h1-font-weight)] leading-none tracking-[var(--h1-letter-spacing)] text-white hover:bg-[#ff8563]/90 sm:px-8 sm:py-2.5 sm:text-[36px] lg:px-10 lg:py-3 lg:text-[48px] [font-style:var(--h1-font-style)]"
          >
            Order Now
          </Button>
        </div>
      </section>
      <SunshineOrangeFlavorSection />
      <BrandFooterSection />
    </main>
  );
};
