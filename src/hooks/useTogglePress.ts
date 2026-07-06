import { useRef, useState } from "react";

const HOLD_THRESHOLD_MS = 350;

type TogglePressOptions = {
  isLatched?: boolean;
  onLatchedChange?: (isLatched: boolean) => void;
};

export const useTogglePress = (options: TogglePressOptions = {}) => {
  const [internalIsLatched, setInternalIsLatched] = useState(false);
  const [isPressing, setIsPressing] = useState(false);
  const pressStartedAt = useRef(0);
  const isLatched = options.isLatched ?? internalIsLatched;

  const onTapStart = () => {
    pressStartedAt.current = Date.now();
    setIsPressing(true);
  };

  const onTap = () => {
    const wasLongPress =
      Date.now() - pressStartedAt.current >= HOLD_THRESHOLD_MS;

    setIsPressing(false);

    if (!wasLongPress) {
      const nextIsLatched = !isLatched;

      if (options.isLatched === undefined) {
        setInternalIsLatched(nextIsLatched);
      }

      options.onLatchedChange?.(nextIsLatched);
    }
  };

  const onTapCancel = () => {
    setIsPressing(false);
  };

  return {
    isActive: isLatched || isPressing,
    isLatched,
    onTap,
    onTapCancel,
    onTapStart,
  };
};
