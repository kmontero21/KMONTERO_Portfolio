"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type TypewriterProps = {
  text: string;
  speed?: number;      // ms per character
  delay?: number;      // extra delay after it becomes visible
  className?: string;

  // sound-related (all optional)
  enableSound?: boolean;   // master flag
  soundSrc?: string;       // e.g. "/sounds/key.mp3"
  soundEvery?: number;     // play sound every N characters
  volume?: number;         // 0.0 - 1.0
};

export default function Typewriter({
  text,
  speed = 35,
  delay = 0,
  className = "",
  enableSound = false,
  soundSrc = "/sounds/key.mp3",
  soundEvery = 2,
  volume = 0.05,
}: TypewriterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  // Trigger when element is in viewport
  const isInView = useInView(ref, {
    once: true,   // run only the first time
    amount: 0.4,  // 40% of element visible
  });

  const [hasStarted, setHasStarted] = useState(false);
  const [displayed, setDisplayed] = useState("");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Prepare the audio when sound is enabled
  useEffect(() => {
    if (!enableSound || !soundSrc) {
      audioRef.current = null;
      return;
    }

    const audio = new Audio(soundSrc);
    audio.volume = volume;
    audioRef.current = audio;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [enableSound, soundSrc, volume]);

  // When it first comes into view, mark as started
  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      setDisplayed(""); // reset before typing starts
    }
  }, [isInView, hasStarted]);

  // Typing effect
  useEffect(() => {
    if (!hasStarted) return;

    let charIndex = 0;
    let typingTimeoutId: number | undefined;

    const typeNext = () => {
      setDisplayed(text.slice(0, charIndex + 1));
      charIndex++;

      // play sound on some characters
      if (
        enableSound &&
        audioRef.current &&
        soundEvery > 0 &&
        charIndex % soundEvery === 0
      ) {
        try {
          audioRef.current.currentTime = 0;
          void audioRef.current.play();
        } catch {
          // ignore play errors (autoplay restrictions, etc.)
        }
      }

      if (charIndex < text.length) {
        typingTimeoutId = window.setTimeout(typeNext, speed);
      }
    };

    const startTimeoutId = window.setTimeout(typeNext, delay);

    return () => {
      if (typingTimeoutId !== undefined) {
        window.clearTimeout(typingTimeoutId);
      }
      window.clearTimeout(startTimeoutId);
    };
  }, [hasStarted, text, speed, delay, enableSound, soundEvery]);

  return (
    <span ref={ref} className={`whitespace-pre-wrap ${className}`}>
      {displayed}

    </span>
  );
}