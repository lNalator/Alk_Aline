import { Flavor, FlavorProps } from "./Flavor";
import image from "../assets/violet.png";

const retroViolet: FlavorProps = {
  backgroundImage: image,
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

export const RetroVioletFlavor = (): JSX.Element => (
  <Flavor {...retroViolet} />
);
