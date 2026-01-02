"use client";
import React, { useEffect, useRef } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  delay = 1200,
  loop = true,
  className = "",
}) => {
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [wordIndex, setWordIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [blink, setBlink] = React.useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setBlink(true);
    if (!isDeleting && charIndex < words[wordIndex].length) {
      timeoutRef.current = setTimeout(() => {
        setText(words[wordIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setText(words[wordIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else {
      if (!isDeleting && charIndex === words[wordIndex].length) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  useEffect(() => {
    if (!loop && wordIndex === words.length - 1 && !isDeleting && charIndex === words[wordIndex].length) {
      // Stop at last word
      return;
    }
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, [loop, wordIndex, isDeleting, charIndex, words]);

  return (
    <span className={className}>
      {text}
      <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  );
};

export default Typewriter;
