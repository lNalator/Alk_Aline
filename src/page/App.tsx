import { AnimatedAlkLogo } from "../components/AnimatedAlkLogo";
import { BrandFooter } from "../components/BrandFooter";
import { HeroBanner } from "../components/HeroBanner";
import { RetroVioletFlavor } from "../components/RetroVioletFlavorSection";
import { SunshineOrangeFlavor } from "../components/SunshineOrangeFlavor";
import { useTogglePress } from "../hooks/useTogglePress";
import { motion } from "motion/react";
import HeaderBG from "../assets/headerBG.svg";
import Hero from "../assets/hero.png";

export const App = (): JSX.Element => {
  const {
    isActive: isHeroActive,
    isLatched: isHeroLatched,
    onTap: onHeroTap,
    onTapCancel: onHeroTapCancel,
    onTapStart: onHeroTapStart,
  } = useTogglePress();

  return (
    <main
      className="flex w-full flex-col overflow-x-clip bg-white"
      style={{ scrollBehavior: "smooth" }}
    >
      <section
        id="top"
        className="relative isolate min-h-[80svh] w-full overflow-hidden bg-black"
      >
        <img
          src={HeaderBG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="mx-auto flex min-h-[80svh] w-full max-w-[1600px] flex-col-reverse items-center justify-start gap-6 px-4 pt-8 md:flex-row md:justify-between md:gap-10 md:px-[clamp(2rem,5vw,6rem)]">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: isHeroActive ? -10 : 0 }}
            transition={{
              opacity: { duration: 1, delay: 0.25 },
              x: { duration: 0.25, ease: "easeOut" },
            }}
            whileHover={{ x: -10 }}
            whileTap={{ x: -10 }}
            onTapStart={onHeroTapStart}
            onTap={onHeroTap}
            onTapCancel={onHeroTapCancel}
            tabIndex={0}
            role="button"
            aria-label="Animate The Finals contestant"
            aria-pressed={isHeroLatched}
            className="block h-auto max-h-[80svh] w-full min-w-0 touch-manipulation select-none object-contain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff8563] md:w-auto md:flex-1 md:self-end"
            alt="The Finals contestant holding a rifle"
            src={Hero}
            draggable={false}
          />
          <AnimatedAlkLogo className="w-[min(76vw,24rem)] shrink-0 md:w-[clamp(18rem,28vw,28rem)]" />
        </div>
      </section>
      <HeroBanner />
      <RetroVioletFlavor />
      <section className="w-full bg-black py-3 sm:py-4">
        <div className="mx-auto flex w-full max-w-[1400px] justify-center px-4 sm:px-8">
          <button
            type="button"
            className="rounded-[25px] bg-[#ff8563] px-6 py-2 font-h1 text-[28px] font-[number:var(--h1-font-weight)] leading-none tracking-[var(--h1-letter-spacing)] text-white transition-colors hover:bg-white hover:text-[#ff8563] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-8 sm:py-2.5 sm:text-[36px] lg:px-10 lg:py-3 lg:text-[48px] [font-style:var(--h1-font-style)]"
            onClick={() => {
              window.open("https://shop.embark-studios.com/pages/the-finals", "_blank")
            }}
          >
            Order Now
          </button>
        </div>
      </section>
      <SunshineOrangeFlavor />
      <BrandFooter />
    </main>
  );
};
