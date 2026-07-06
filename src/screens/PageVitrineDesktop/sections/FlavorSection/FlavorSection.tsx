import { Card, CardContent } from "../../../../components/ui/card";

export type FlavorCopyLine = {
  text: string;
  underlined?: boolean;
};

export type FlavorCopyBlock = {
  lines: FlavorCopyLine[];
  variant: "headline" | "body";
};

export type FlavorSectionProps = {
  backgroundImage: string;
  copy: FlavorCopyBlock[];
  flavorNotes: string[];
  label: string;
  title: [string, string];
};

const copyStyles = {
  headline:
    "text-[38px] leading-[0.95] sm:text-[46px] lg:text-[56px] xl:text-[64px]",
  body:
    "text-[24px] leading-none sm:text-[28px] lg:text-[34px] xl:text-[40px]",
} satisfies Record<FlavorCopyBlock["variant"], string>;

const textCardStyles = {
  block: "inline-block h-fit w-fit self-start bg-black/90 px-3 py-2",
  inline: "box-decoration-clone bg-black/90 px-1.5 py-0.5",
};

export const FlavorSection = ({
  backgroundImage,
  copy,
  flavorNotes,
  label,
  title,
}: FlavorSectionProps): JSX.Element => {
  return (
    <section
      aria-label={label}
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Card className="h-auto w-full rounded-none border-0 bg-transparent shadow-none">
        <CardContent className="mx-auto grid min-h-[720px] w-full grid-cols-1 content-start gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:min-h-[1080px] lg:grid-cols-[minmax(0,705px)_minmax(220px,1fr)] lg:gap-12 lg:px-[72px] lg:py-[180px] xl:px-[100px] xl:py-[220px]">
          <article className="flex max-w-[705px] flex-col items-start gap-8 lg:gap-10 xl:gap-[55px]">
            <h2
              className={`${textCardStyles.block} font-h1 text-[56px] font-[number:var(--h1-font-weight)] leading-[0.95] tracking-[var(--h1-letter-spacing)] text-white [font-style:var(--h1-font-style)] sm:text-[72px] lg:text-[84px] xl:text-[96px]`}
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
                        line.underlined
                          ? textCardStyles.inline
                          : undefined
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
              className={`${textCardStyles.block} font-h2-surlign text-left text-[44px] font-[number:var(--h2-surlign-font-weight)] leading-[0.9] tracking-[var(--h2-surlign-letter-spacing)] text-white [font-style:var(--h2-surlign-font-style)] lg:text-right xl:text-[64px]`}
            >
              {flavorNotes.map((note, index) => (
                <span key={note}>
                  {note}
                  {index < flavorNotes.length - 1 && <br />}
                </span>
              ))}
            </p>
          </aside>
        </CardContent>
      </Card>
    </section>
  );
};
