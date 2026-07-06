import { useState } from "react";
import { motion } from "motion/react";
import { useTogglePress } from "../hooks/useTogglePress";

const heroWords = ["CAN", "YOU", "REACH", "THE FINALS"];

const wordColors = {
  rest: { color: "#ff8563" },
  hover: { color: "#ffffff" },
};

const periodColors = {
  rest: { color: "#ffffff" },
  hover: { color: "#ff8563" },
};

const colorTransition = { duration: 0.2, ease: "easeOut" } as const;

type HeroWordProps = {
  isSelected: boolean;
  onSelectedChange: (isSelected: boolean) => void;
  word: string;
};

const HeroWord = ({
  isSelected,
  onSelectedChange,
  word,
}: HeroWordProps): JSX.Element => {
  const {
    isActive,
    isLatched,
    onTap,
    onTapCancel,
    onTapStart,
  } = useTogglePress({
    isLatched: isSelected,
    onLatchedChange: onSelectedChange,
  });

  return (
    <motion.button
      type="button"
      aria-pressed={isLatched}
      initial="rest"
      animate={isActive ? "hover" : "rest"}
      whileHover="hover"
      whileTap="hover"
      onTapStart={onTapStart}
      onTap={onTap}
      onTapCancel={onTapCancel}
      className="w-fit touch-manipulation select-none whitespace-nowrap bg-transparent p-0 font-h1 text-[8vw] leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff8563] lg:text-[6vw]"
    >
      <motion.span variants={wordColors} transition={colorTransition}>
        {word}
      </motion.span>
      <motion.span variants={periodColors} transition={colorTransition}>
        .
      </motion.span>
    </motion.button>
  );
};

export const HeroBanner = (): JSX.Element => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  return (
    <section className="relative w-full" aria-label="Can you reach The Finals?">
      <div className="w-full bg-neutral-950">
        <div className="px-4 py-5 sm:px-6 md:px-10 lg:px-[100px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 justify-items-center items-center gap-x-4 gap-y-2 sm:gap-x-6 md:min-h-[84px] lg:flex lg:justify-between"
          >
            {heroWords.map((word) => (
              <HeroWord
                key={word}
                word={word}
                isSelected={selectedWord === word}
                onSelectedChange={(isSelected) =>
                  setSelectedWord(isSelected ? word : null)
                }
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
