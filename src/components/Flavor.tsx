import { useState } from "react";
import { motion } from "motion/react";
import { useTogglePress } from "../hooks/useTogglePress";

export type FlavorCopyLine = {
  text: string;
  underlined?: boolean;
};

export type FlavorCopyBlock = {
  lines: FlavorCopyLine[];
  variant: "headline" | "body";
};

export type FlavorProps = {
  backgroundImage: string;
  copy: FlavorCopyBlock[];
  drinkImage: string;
  flavorNotes: string[];
  label: string;
  title: [string, string];
};

const copyStyles = {
  headline:
    "text-[clamp(1.25rem,6.25vw,2rem)] leading-[0.95] sm:text-[42px] lg:text-[52px] xl:text-[64px]",
  body: "text-[clamp(1rem,4.7vw,1.375rem)] leading-none sm:text-[28px] lg:text-[34px] xl:text-[40px]",
} satisfies Record<FlavorCopyBlock["variant"], string>;

const textCardStyles = {
  block:
    "inline-block h-fit w-fit self-start bg-black/90 px-2 py-1.5 sm:px-3 sm:py-2",
  inline: "box-decoration-clone bg-black/90 px-1 py-0.5 sm:px-1.5",
};

export const Flavor = ({
  backgroundImage,
  copy,
  drinkImage,
  flavorNotes,
  label,
  title,
}: FlavorProps): JSX.Element => {
  const [isDrinkHovered, setIsDrinkHovered] = useState(false);
  const {
    isActive: isDrinkPressed,
    isLatched: isDrinkLatched,
    onTap: onDrinkTap,
    onTapCancel: onDrinkTapCancel,
    onTapStart: onDrinkTapStart,
  } = useTogglePress();
  const isDrinkActive = isDrinkHovered || isDrinkPressed;

  return (
    <section
      aria-label={label}
      className="relative isolate w-full overflow-hidden bg-black"
    >
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{
          filter: isDrinkActive ? "blur(4px)" : "blur(0px)",
          scale: isDrinkActive ? 1.015 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <motion.img
        src={drinkImage}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 1 }}
        animate={{
          zIndex: isDrinkActive ? 20 : 10,
          scale: isDrinkActive ? 1.05 : 1,
          y: isDrinkActive ? "-1.5%" : 0,
        }}
        transition={{ type: "tween", damping: 22 }}
        className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover object-center"
        style={{ transformOrigin: "50% 52%" }}
        draggable={false}
      />

      <motion.button
        type="button"
        aria-label={`Highlight the ${label} drink`}
        aria-pressed={isDrinkLatched}
        onHoverStart={() => setIsDrinkHovered(true)}
        onHoverEnd={() => setIsDrinkHovered(false)}
        onTapStart={onDrinkTapStart}
        onTap={onDrinkTap}
        onTapCancel={onDrinkTapCancel}
        className="absolute cursor-default left-1/2 top-1/2 z-20 h-[62%] w-[34%] -translate-x-1/2 -translate-y-1/2 touch-manipulation rounded-full bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-[24%] lg:w-[16%]"
      />

      <div className="relative z-10 mx-auto flex min-h-[720px] w-full flex-col justify-between gap-10 px-5 py-12 sm:px-10 sm:py-20 lg:grid lg:min-h-[clamp(720px,56.25vw,1080px)] lg:grid-cols-[minmax(0,705px)_minmax(220px,1fr)] lg:content-start lg:justify-normal lg:gap-12 lg:px-[clamp(4.5rem,5.25vw,6.25rem)] lg:py-[clamp(7rem,11vw,13.75rem)]">
        <article className="flex max-w-[705px] flex-col items-start gap-8 lg:gap-10 xl:gap-[55px]">
          <h2
            className={`${textCardStyles.block} font-h1 text-[clamp(2rem,10vw,3rem)] font-[number:var(--h1-font-weight)] leading-[0.95] tracking-[var(--h1-letter-spacing)] text-white [font-style:var(--h1-font-style)] sm:text-[64px] lg:text-[80px] xl:text-[96px]`}
          >
            {title.map((line, index) => (
              <span key={line}>
                {line}
                {index < title.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <div className="flex max-w-[693px] flex-col items-start gap-5 lg:gap-6">
            {copy.map((block, blockIndex) => (
              <p
                key={`${block.variant}-${blockIndex}`}
                className={`font-h1 text-white ${copyStyles[block.variant]} ${
                  block.variant === "headline" ? textCardStyles.block : ""
                }`}
              >
                {block.lines.map((line, lineIndex) => (
                  <span
                    key={`${line.text}-${lineIndex}`}
                    className={
                      line.underlined ? textCardStyles.inline : undefined
                    }
                  >
                    {line.text}
                    {lineIndex < block.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </article>

        <aside className="flex w-full items-start justify-start lg:justify-end">
          <p
            className={`${textCardStyles.block} font-h2-surlign text-left text-[clamp(1.75rem,8vw,2.75rem)] font-[number:var(--h2-surlign-font-weight)] leading-[0.9] tracking-[var(--h2-surlign-letter-spacing)] text-white [font-style:var(--h2-surlign-font-style)] lg:text-right xl:text-[64px]`}
          >
            {flavorNotes.map((note, index) => (
              <span key={note}>
                {note}
                {index < flavorNotes.length - 1 && <br />}
              </span>
            ))}
          </p>
        </aside>
      </div>
    </section>
  );
};
