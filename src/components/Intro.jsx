import { useConfig } from "../context/ConfigContext";
import { useState, useEffect } from "react";

const wordTypingDuration = 1000; // Time (ms) to type each word
const pauseDuration = 2000; // Pause before deleting & switching words

const vowels = ["a", "e", "i", "o", "u"];

function Intro() {
    const config = useConfig();

    const JOB_TITLES = config.JOB_TITLES.map((t) => `${t.trim()} `);

    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const currentPhrase = JOB_TITLES[phraseIndex];
    const typingSpeed = wordTypingDuration / currentPhrase.length;

    useEffect(() => {
        let timeout;

        if (!isDeleting && text === currentPhrase) {
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && text === "") {
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % JOB_TITLES.length);
            }, pauseDuration);
        } else {
            timeout = setTimeout(() => {
                setText((prev) =>
                    isDeleting ? prev.slice(0, -1) : currentPhrase.slice(0, prev.length + 1)
                );
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, phraseIndex, typingSpeed]);

    return (
        <div className="text-2xl font-medium mt-2 flex items-center">
            <span>I'm&nbsp;{vowels.includes(text[0]?.toLowerCase()) ? "an" : "a"}&nbsp;</span>
            <span className="text-orange-500">{text}</span>
            <span className="text-orange-500 font-bold animate-[blink_1s_step-start_infinite]">|</span>
        </div>
    );
}

export default Intro;
