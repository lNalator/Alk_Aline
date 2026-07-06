import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const footerLinks = [
  {
    href: "https://www.reachthefinals.com/",
    label: "https://www.reachthefinals.com/",
  },
  {
    href: "https://pxlpowerup.se/",
    label: "https://pxlpowerup.se/",
  },
];

const socialLinks = [
  {
    href: "#",
    alt: "Instagram",
    src: "/instagram-1.svg",
    className: "w-[45.04px] h-[45.04px]",
  },
  {
    href: "#",
    alt: "Twitter alt circle",
    src: "/twitter-alt-circle-1.svg",
    className: "w-[45.04px] h-[45.04px]",
  },
  {
    href: "#",
    alt: "Tiktok logo",
    src: "/tiktok-logo-2-3-1.svg",
    className: "w-[38.74px] h-[45.02px]",
  },
  {
    href: "#",
    alt: "Youtube symbol",
    src: "/youtube-symbol-0-1.svg",
    className: "w-[63.96px] h-[45.06px]",
  },
  {
    href: "#",
    alt: "Twitch icon",
    src: "/twitch-icon-1.svg",
    className: "w-[45.04px] h-[45.04px]",
  },
];

const partnerLogos = [
  {
    alt: "Logo embark",
    src: "/logo-embark.png",
    className: "h-[44px] w-auto sm:h-[52px] lg:h-[74px]",
  },
  {
    alt: "Nexon co logo",
    src: "/nexon-co--logo-0-1.svg",
    className: "h-[44px] w-auto sm:h-[52px] lg:h-[74px]",
  },
  {
    alt: "Pxl logo",
    src: "/pxl-logo-1.svg",
    className: "h-[44px] w-auto sm:h-[52px] lg:h-[74px]",
  },
  {
    alt: "The finals logotyp",
    src: "/the-finals-logotyp-us-1.svg",
    className: "h-[44px] w-auto sm:h-[52px] lg:h-[74px]",
  },
  {
    alt: "Group",
    src: "/group-23.png",
    className: "h-[44px] w-auto sm:h-[52px] lg:h-[74px]",
  },
];

export const BrandFooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-neutral-950 px-4 py-8 sm:px-8 sm:py-10 lg:px-[100px] lg:py-[50px]">
      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col gap-8 p-0 lg:gap-[50px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <address className="not-italic font-caption text-xl font-normal leading-6 tracking-[0] text-white sm:text-2xl">
              <div className="flex flex-col items-start">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </address>
            <nav
              aria-label="Social media links"
              className="self-start lg:self-auto"
            >
              <ul className="flex flex-wrap items-center gap-4 lg:w-[313.83px] lg:justify-between lg:gap-0">
                {socialLinks.map((link) => (
                  <li key={link.alt}>
                    <Button
                      asChild
                      variant="ghost"
                      className="h-auto p-0 hover:bg-transparent"
                    >
                      <a href={link.href} aria-label={link.alt}>
                        <img
                          className={link.className}
                          alt={link.alt}
                          src={link.src}
                        />
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <section
            aria-label="Partner logos"
            className="flex w-full items-center justify-center"
          >
            <div className="grid w-full grid-cols-2 items-center justify-items-center gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
              {partnerLogos.map((logo) => (
                <img
                  key={logo.alt}
                  className={logo.className}
                  alt={logo.alt}
                  src={logo.src}
                />
              ))}
            </div>
          </section>
          <p className="self-stretch text-justify font-caption text-[length:var(--caption-font-size)] font-[number:var(--caption-font-weight)] leading-[1.15] tracking-[var(--caption-letter-spacing)] text-white [font-style:var(--caption-font-style)]">
            THE FINALS © 2022-2026 Embark Studios AB. THE FINALS and EMBARK
            trademarks and logos are trademarks or registered trademarks of
            Embark Studios AB. NEXON trademark and logo are trademarks or
            registered trademarks of NXC Corporation. © 2026 Sony Interactive
            Entertainment LLC. PlayStation, the PlayStation Family Mark, PS5,
            the PS5 logo are registered trademarks or trademarks of Sony
            Interactive Entertainment Inc. Microsoft, the Xbox Sphere mark and
            Xbox Series X|S are trademarks of the Microsoft group of companies.
            © 2026 Valve Corporation. Steam and the Steam logo are trademarks
            and/or registered trademarks of Valve Corporation in the U.S. and/or
            other countries. © 2026 Epic Games, Inc. All rights reserved.
            Unreal, Unreal Engine and their respective logos are trademarks or
            registered trademarks of Epic Games, Inc. in the U.S. Patent and
            Trademark Office and elsewhere. NVIDIA, the NVIDIA logo and the
            GeForce Now logo are trademarks and/or registered trademarks of
            NVIDIA Corporation in the U.S. and/or other countries.
          </p>
        </CardContent>
      </Card>
    </footer>
  );
};
