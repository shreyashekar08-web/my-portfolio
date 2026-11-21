import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `end` once `start` is true (e.g. in-view).
 */
export default function useCountUp(end, start, duration = 1600) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!start) return undefined;

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3; // ease-out cubic
      setValue(Math.floor(eased * end));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [end, start, duration]);

  return value;
}
