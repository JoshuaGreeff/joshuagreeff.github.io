import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import emailIcon from '../assets/icons/email.svg';

const CONFIG = {
    "GITHUB_LINK": "https://github.com/JoshuaGreeff",
    "LINKEDIN_LINK": "https://linkedin.com/in/JoshuaGreeff",
    "EMAIL": "jggreeff22@gmail.com"
}

const Socialbar = () => {
    return (
        <div className="fixed right-1 bottom-1 flex flex-col items-center space-y-4 md:p-2 p-1">
            <a href={CONFIG.GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="w-8 h-8 md:w-12 md:h-12 bg-gray-900 rounded-full" />
            </a>
            <a href={CONFIG.LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 md:w-12 md:h-12 bg-gray-900 rounded-full" />
            </a>
            <a href={"mailto:" + CONFIG.EMAIL} target="_blank" rel="noopener noreferrer">
                <img src={emailIcon} alt="Email" className="w-8 h-8 md:w-12 md:h-12 bg-gray-900 rounded-full" />
            </a>
        </div>
    );
};

export default Socialbar;