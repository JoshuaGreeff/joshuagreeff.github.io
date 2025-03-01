import { useState, useEffect } from "react";
import background from "../assets/media/background.png";

const CONFIG = {
  "FIRST_NAME": "Joshua",
  "LAST_NAME": "Greeff",

  "JOB_TITLES": ["Glorified IT Guy", "Microservices Architect", "Systems Administrator", "Cloud Architect", "Security Engineer"],
  "JOB_EMOJIS": ["🤖", "🏗️", "🖥️", "☁️", "🔐"]
}

const wordTypingDuration = 1000; // Time (ms) to type each word
const pauseDuration = 1500; // Pause before deleting & switching words

const vowels = ["a", "e", "i", "o", "u"];

function Intro() {
  const JOB_TITLES = CONFIG.JOB_TITLES.map((t) => `${t.trim()} `);

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = JOB_TITLES[phraseIndex];
  const typingSpeed = wordTypingDuration / currentPhrase.length;

  useEffect(() => {
    let timeout;

    if (!isDeleting && text === currentPhrase + CONFIG.JOB_EMOJIS[phraseIndex]) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % JOB_TITLES.length);
      }, pauseDuration / 3);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting ?
            prev === currentPhrase + CONFIG.JOB_EMOJIS[phraseIndex] ?
              currentPhrase :
              prev.slice(0, -1) :
            prev === currentPhrase ?
              currentPhrase + CONFIG.JOB_EMOJIS[phraseIndex] :
              currentPhrase.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  return (
    <div className="w-full h-screen text-center text-white items-center flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl lg:text-9xl font-light mt-2">{CONFIG.FIRST_NAME} <span className="font-bold">{CONFIG.LAST_NAME}</span></h1>
      <div className="w-full whitespace-nowrap text-xl md:text-4xl lg:text-5xl font-medium mt-6">
        <span>I'm {vowels.includes(text[0]?.toLowerCase()) ? "an" : "a"}&nbsp;</span>
        <span className="text-blue-500">{text}</span>
        <span className="text-blue-500 font-bold animate-[blink_0.5s_step-start_infinite]">|</span>
      </div>

      {/* Mouse Bottom Effect To Indicate Scroll Functionality */}
      <div className="absolute bottom-0 w-20 h-20 rounded-t-full items-center justify-center flex">
        <div className="relative border-2 border-white w-10 h-15 rounded-full items-center justify-center flex">
          <div className="w-full h-full rounded-full bg-black opacity-10" />
          <div className="absolute top-3 w-1 h-3 bg-white animate-bounce rounded-full" />
        </div>
      </div>
      

      <img src={background} alt="" className="fixed object-cover inset-0 w-full h-full -z-10" />
    </div>
  );
}

export default Intro;
