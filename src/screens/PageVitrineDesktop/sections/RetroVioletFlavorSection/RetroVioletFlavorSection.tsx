import {
  FlavorSection,
  type FlavorSectionProps,
} from "../FlavorSection/FlavorSection";

const retroViolet: FlavorSectionProps = {
  backgroundImage: "/violet.png",
  label: "Retro Violet flavor",
  title: ["Retro", "Violet"],
  copy: [
    {
      variant: "headline",
      lines: [
        { text: "GLITCH THE GAME." },
        { text: "OWN THE ARENA." },
      ],
    },
    {
      variant: "body",
      lines: [
        { text: "POWER YOUR PLAYSTYLE" },
        { text: "WITH ALK ALINE.", underlined: true },
      ],
    },
    {
      variant: "body",
      lines: [
        { text: "FOR THOSE WHO" },
        { text: "REWRITE THE META.", underlined: true },
      ],
    },
  ],
  flavorNotes: ["Blackcurrant", "Grapefruit", "Dragonfruit"],
};

export const RetroVioletFlavorSection = (): JSX.Element => (
  <FlavorSection {...retroViolet} />
);
