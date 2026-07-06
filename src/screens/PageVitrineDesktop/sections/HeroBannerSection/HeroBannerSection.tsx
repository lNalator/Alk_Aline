const heroWords = ["CAN", "YOU", "REACH", "THE FINALS"];

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full" aria-label="Can you reach The Finals?">
      <div className="w-full bg-neutral-950">
        <div className="px-4 py-5 sm:px-6 md:px-10 lg:px-[100px]">
          <div className="grid grid-cols-2 justify-items-center items-center gap-x-4 gap-y-2 sm:gap-x-6 md:min-h-[84px] lg:flex lg:justify-between">
            {heroWords.map((word) => (
              <p
                key={word}
                className="w-fit whitespace-nowrap font-h1 text-[8vw] lg:text-[6vw] leading-none"
              >
                <span className="text-[#ff8563]">{word}</span>
                <span className="text-white">.</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
