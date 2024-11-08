"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import FadeUpText from ".";

export function FadeUpTextPreview() {
  const texts = ["Aura", "Creative", "Animated"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000 * 2);

    return () => clearInterval(interval);
  }, []);
  return <FadeUpText text={texts[currentIndex]} className="md:text-4xl" />;
}

export function VoteButtonExample() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleVote = () => {
    if (!isSubmitted) {
      setIsLoading(true);
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 3000);
    }
  };

  const getButtonText = () => {
    if (isSubmitted) return "Vote Submitted!";
    if (isLoading) return "Loading...";
    return "Submit your vote";
  };

  return (
    <motion.button
      onClick={handleVote}
      disabled={isLoading || isSubmitted}
      className={twMerge(
        "relative h-12 w-1/2 overflow-hidden rounded-md shadow-sm transition-all duration-300",
        isSubmitted
          ? "bg-green-500/50"
          : isLoading
            ? "bg-black-a4"
            : "bg-black-a4 hover:bg-black-a8",
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <FadeUpText text={getButtonText()} />
      </div>
    </motion.button>
  );
}
