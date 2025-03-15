"use client";

// src/components/TypewriterText.tsx
import React, { useState, useEffect, useRef, memo } from 'react';

type TypewriterTextProps = {
    texts: string[];
    speed?: number;
    pauseDuration?: number;
};

// Memoize the component to prevent unnecessary re-renders
const TypewriterText: React.FC<TypewriterTextProps> = memo(({ texts, speed = 100, pauseDuration = 1500 }) => {
    const [displayText, setDisplayText] = useState<string>('');
    const [textIndex, setTextIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    
    // Use useRef to store timeouts to prevent memory leaks
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const currentText = texts[textIndex];

        if (isDeleting) {
            if (charIndex > 0) {
                timeoutRef.current = setTimeout(() => {
                    setDisplayText(currentText.slice(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                }, speed / 2); // Deleting speed is faster
            } else {
                setIsDeleting(false);
                setTextIndex((textIndex + 1) % texts.length); // Move to next text
            }
        } else {
            if (charIndex < currentText.length) {
                timeoutRef.current = setTimeout(() => {
                    setDisplayText((prev) => prev + currentText.charAt(charIndex));
                    setCharIndex(charIndex + 1);
                }, speed);
            } else {
                timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration); // Pause before deleting
            }
        }

        // Clean up timeout to prevent memory leaks
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [texts, textIndex, charIndex, isDeleting, speed, pauseDuration]);

    return (
        <h1 className="2xl:text-7xl xl:text-5xl text-4xl font-medium mt-3.5 overflow-hidden md:h-20 bg-gradient-to-b from-white to-purple_400 text-transparent bg-clip-text will-change-transform">
            to Your {displayText}
        </h1>
    );
});

// Add display name for debugging
TypewriterText.displayName = 'TypewriterText';

export default TypewriterText;
