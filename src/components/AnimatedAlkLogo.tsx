import { useState } from "react";
import { motion } from "motion/react";
import AlkLogo from "../assets/alk_logo.svg";
import FooterLogo from "../assets/logo_footer.png";
import { useTogglePress } from "../hooks/useTogglePress";

type AnimatedAlkLogoProps = {
  className?: string;
};

const accentLines = [
  { color: "#FFB7A1", delay: 0, x1: 105, x2: 125 },
  { color: "#FE9878", delay: 0.07, x1: 120, x2: 140 },
  { color: "#FF8563", delay: 0.14, x1: 135, x2: 155 },
];

export const AnimatedAlkLogo = ({
  className = "",
}: AnimatedAlkLogoProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    isActive: isPressed,
    isLatched,
    onTap,
    onTapCancel,
    onTapStart,
  } = useTogglePress();
  const isActive = isHovered || isPressed;

  return (
    <motion.button
      type="button"
      aria-label="Animate the ALK ALINE logo"
      aria-pressed={isLatched}
      className={`block touch-manipulation cursor-pointer select-none bg-transparent p-0 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8563] ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={onTapStart}
      onTap={onTap}
      onTapCancel={onTapCancel}
      animate={{ scale: isActive ? 1.025 : 1 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <div className="relative w-full">
        <svg
          aria-hidden="true"
          className="block h-auto w-full overflow-y-clip overflow-x-visible"
          viewBox="0 0 154 89"
          xmlns="http://www.w3.org/2000/svg"
        >
          {accentLines.map(({ color, delay, x1, x2 }) => (
            <motion.line
              className="z-0"
              key={color}
              x1={x1}
              y1="-10"
              x2={x2}
              y2="100"
              stroke={color}
              strokeWidth="20"
              strokeLinecap="butt"
              opacity={1}
              initial={false}
              animate={{
                pathLength: isActive ? 1 : 0,
              }}
              transition={{
                pathLength: {
                  duration: 0.42,
                  delay: isActive ? delay : 0,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            />
          ))}
          <image href={AlkLogo} width="154" height="89" />
        </svg>
        <img
          src={FooterLogo}
          alt=""
          aria-hidden="true"
          className="mt-[5.2%] block h-auto w-full"
          draggable={false}
        />
      </div>
    </motion.button>
  );
};
