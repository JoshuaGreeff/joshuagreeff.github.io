import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import emailIcon from '../assets/icons/email.svg';

import { useState } from 'react';

const CONFIG = {
    "GITHUB_LINK": "https://github.com/JoshuaGreeff",
    "LINKEDIN_LINK": "https://linkedin.com/in/JoshuaGreeff",
    "EMAIL": "jggreeff22@gmail.com"
}

const Socialbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed right-0 bottom-0 flex flex-col items-center space-y-4 md:p-2 p-1">
            <a href={CONFIG.GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="w-8 h-8 md:w-12 md:h-12" />
            </a>
            <a href={CONFIG.LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 md:w-12 md:h-12" />
            </a>
            <a href={"mailto:" + CONFIG.EMAIL} target="_blank" rel="noopener noreferrer">
                <img src={emailIcon} alt="Email" className="w-8 h-8 md:w-12 md:h-12" />
            </a>
        </div>
    );
};

export default Socialbar;