import { Card, CardContent } from "../../../../components/ui/card";

const heroWords = [
  { text: "CAN", align: "text-left" },
  { text: "YOU", align: "text-left" },
  { text: "REACH", align: "text-left" },
  { text: "THE FINALS", align: "text-right" },
];

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="w-full rounded-none border-0 bg-neutral-950 shadow-none">
        <CardContent className="px-5 py-5 sm:px-6 md:px-10 lg:px-[100px]">
          <div className="flex min-h-[56px] items-center justify-center gap-x-6 md:min-h-[84px] ">
            {heroWords.map((word) => (
              <h2
                key={word.text}
                className={`font-h1 w-fit text-[40px] leading-none sm:text-[52px] md:text-[72px] lg:text-[98px] `}
              >
                <span className="text-[#ff8563]">{word.text}</span>
                <span className="text-white">.</span>
              </h2>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
