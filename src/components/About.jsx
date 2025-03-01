import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
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