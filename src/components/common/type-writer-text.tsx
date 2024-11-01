"use client";

// src/components/TypewriterText.tsx
import React, { useState, useEffect } from 'react';

type TypewriterTextProps = {
    texts: string[];
    speed?: number;
    pauseDuration?: number;
};

const TypewriterText: React.FC<TypewriterTextProps> = ({ texts, speed = 100, pauseDuration = 1500 }) => {
    const [displayText, setDisplayText] = useState<string>('');
    const [textIndex, setTextIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout: NodeJS.Timeout;

        if (isDeleting) {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(currentText.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                }, speed / 2); // Deleting speed is faster
            } else {
                setIsDeleting(false);
                setTextIndex((textIndex + 1) % texts.length); // Move to next text
            }
        } else {
            if (charIndex < currentText.length) {
                timeout = setTimeout(() => {
                    setDisplayText((prev) => prev + currentText.charAt(charIndex));
                    setCharIndex(charIndex + 1);
                }, speed);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), pauseDuration); // Pause before deleting
            }
        }

        return () => clearTimeout(timeout);
    }, [texts, textIndex, charIndex, isDeleting, speed, pauseDuration]);

    return (
        <h1 className="2xl:text-7xl xl:text-5xl text-4xl font-medium mt-3.5 overflow-hidden md:h-20 bg-gradient-to-b from-white to-purple_400 text-transparent bg-clip-text">
            to Your {displayText}
        </h1>
    );
};

export default TypewriterText;
