import { Flavor, FlavorProps } from "./Flavor";
import image from "../assets/orange.png";

const sunshineOrange: FlavorProps = {
  backgroundImage: image,
  label: "Sunshine Orange flavor",
  title: ["Sunshine", "Orange"],
  copy: [
    {
      variant: "headline",
      lines: [
        { text: "BOOST YOUR GAME." },
        { text: "OWN EVERY CASHOUT." },
      ],
    },
    {
      variant: "body",
      lines: [
        { text: "FUEL YOUR NEXT VICTORY" },
        { text: "WITH ALK ALINE.", underlined: true },
      ],
    },
    {
      variant: "body",
      lines: [
        { text: "DESIGNED FOR PLAYERS" },
        { text: "WHO NEVER LOSE.", underlined: true },
      ],
    },
  ],
  flavorNotes: ["Orange", "Nectarine", "Mandarin"],
};

export const SunshineOrangeFlavor = (): JSX.Element => (
  <Flavor {...sunshineOrange} />
);
