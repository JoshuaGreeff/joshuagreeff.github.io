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
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 p-2">
            <a href={CONFIG.GITHUB_LINK} target="_blank" rel="noopener noreferrer" style={{ }}>
                <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
            </a>
            <a href={CONFIG.LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href={"mailto:"+CONFIG.EMAIL} target="_blank" rel="noopener noreferrer">
                <img src={emailIcon} alt="Email" className="w-8 h-8" />
            </a>
        </div>
    );
};

export default Socialbar;