import profilepic from '../assets/media/profilepic.png';

const About = () => {
    return (
        <div id='about' className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-900 p-4">
            <img src={profilepic} alt="" className="max-w-1/2 w-72 mb-20" />
            <div className="border-2 border-blue-500 text-white rounded-md p-6 max-w-5/6">
                <h1 className="text-3xl font-bold mb-4 border-b-2 border-b-blue-500">About Me</h1>
                <p className="text-lg mb-2">
                    Technically skilled and hands-on IT Systems Engineer with experience in <b>microservice architecture</b>, <b>software development</b>, and <b>cloud infrastructure</b> from internships, previous positions, and personal home lab projects.
                </p>
                <p className="text-lg mb-2">
                    Graduating in May 2025 as a USC Upstate <b>Computer Science</b> and <b>Cybersecurity</b> double major with minors in <b>Mathematics</b> and <b>Business Administration</b>.
                </p>
                <p className="text-lg">
                    Seeking a job opportunity in <b>Cybersecurity</b>, <b>IT</b>, or <b>Cloud Architecture</b>.
                </p>
            </div>
        </div>
    );
};

export default About;