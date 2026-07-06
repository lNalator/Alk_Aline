import EmbarkLogo from "../assets/embark_logo.svg";
import NexonLogo from "../assets/nexon_logo.svg";
import PxlLogo from "../assets/pxl_logo.svg";
import TheFinalsLogo from "../assets/thefinals_logo.svg";
import AlkLogo from "../assets/alk_logo.svg";
import Socials from "../assets/socials.svg";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const footerLinks = [
  "https://www.reachthefinals.com/",
  "https://pxlpowerup.se/",
];

const partnerLogos = [
  {
    alt: "Embark Studios",
    src: EmbarkLogo,
    link: "https://embark-studios.com/",
    target: "_blank",
  },
  {
    alt: "Nexon",
    src: NexonLogo,
    link: "https://www.nexon.com/main/fr",
    target: "_blank",
  },
  {
    alt: "PXL",
    src: PxlLogo,
    link: "https://pxlpowerup.se/",
    target: "_blank",
  },
  {
    alt: "The Finals",
    src: TheFinalsLogo,
    link: "https://www.reachthefinals.com/",
    target: "_blank",
  },
  { alt: "ALK ALINE", src: AlkLogo },
];

export const BrandFooter = (): JSX.Element => {
  return (
    <footer className="w-full bg-neutral-950 px-4 py-8 sm:px-8 sm:py-10 lg:px-[100px] lg:py-[50px]">
      <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-8 lg:gap-12">
        <address className="min-w-0 not-italic font-caption text-lg font-normal leading-6 text-white sm:text-2xl">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-2 sm:gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="max-w-full break-all underline underline-offset-2"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-white sm:gap-6">
              <FaInstagram className="h-6 w-auto max-w-full hover:text-[#ff8563] transition-all object-contain md:h-10" />
              <FaXTwitter className="h-6 w-auto max-w-full hover:text-[#ff8563] transition-all object-contain md:h-10" />
              <FaTiktok className="h-6 w-auto max-w-full hover:text-[#ff8563] transition-all object-contain md:h-10" />
              <FaYoutube className="h-6 w-auto max-w-full hover:text-[#ff8563] transition-all object-contain md:h-10" />
              <FaTwitch className="h-6 w-auto max-w-full hover:text-[#ff8563] transition-all object-contain md:h-10" />
            </div>
          </div>
        </address>

        <section aria-label="Partner logos">
          <div className="grid w-full grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {partnerLogos.map((logo) => (
              <a
                href={logo.alt !== "ALK ALINE" ? logo.link : "/"}
                key={logo.alt}
                rel="noreferrer"
                target={logo.alt !== "ALK ALINE" ? logo.target : undefined}
                onClick={(e) => {
                  if (logo.alt === "ALK ALINE") {
                    let top = document.getElementById("top");
                    e.preventDefault();
                    top?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                <img
                  key={logo.alt}
                  className="h-11 w-auto max-w-full object-contain sm:h-[52px] lg:h-[74px]"
                  alt={logo.alt}
                  src={logo.src}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </section>

        <p className="break-words text-left font-caption text-sm font-normal leading-[1.35] text-white sm:text-justify">
          THE FINALS © 2022-2026 Embark Studios AB. THE FINALS and EMBARK
          trademarks and logos are trademarks or registered trademarks of Embark
          Studios AB. NEXON trademark and logo are trademarks or registered
          trademarks of NXC Corporation. © 2026 Sony Interactive Entertainment
          LLC. PlayStation, the PlayStation Family Mark, PS5, the PS5 logo are
          registered trademarks or trademarks of Sony Interactive Entertainment
          Inc. Microsoft, the Xbox Sphere mark and Xbox Series X|S are
          trademarks of the Microsoft group of companies. © 2026 Valve
          Corporation. Steam and the Steam logo are trademarks and/or registered
          trademarks of Valve Corporation in the U.S. and/or other countries. ©
          2026 Epic Games, Inc. All rights reserved. Unreal, Unreal Engine and
          their respective logos are trademarks or registered trademarks of Epic
          Games, Inc. in the U.S. Patent and Trademark Office and elsewhere.
          NVIDIA, the NVIDIA logo and the GeForce Now logo are trademarks and/or
          registered trademarks of NVIDIA Corporation in the U.S. and/or other
          countries.
        </p>
      </div>
    </footer>
  );
};
