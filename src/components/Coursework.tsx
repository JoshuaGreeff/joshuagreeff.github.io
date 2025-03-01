export default function RelevantCourseworkPage() {
    return (
      <div className="bg-gray-900 text-white py-10 px-5">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-4xl font-semibold text-center mb-8">Relevant Coursework</h1>
  
          {/* Computer Science */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">Computer Science</h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-400">Computer Science (I, II, III)</p>
              <p className="text-gray-400">C++ Programming</p>
              <p className="text-gray-400">Python Programming</p>
              <p className="text-gray-400">MATLAB Programming</p>
              <p className="text-gray-400">Software Engineering</p>
              <p className="text-gray-400">E-Business Web App Dev.</p>
              <p className="text-gray-400">Knowledge Discovery & Data Mining</p>
            </div>
          </div>
  
          {/* Cybersecurity & Networking */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">Cybersecurity & Networking</h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-400">Digital Forensics and Tech.</p>
              <p className="text-gray-400">Applied Cybersecurity</p>
              <p className="text-gray-400">Applied Cryptography</p>
              <p className="text-gray-400">Computer Architecture</p>
              <p className="text-gray-400">Principles of Org. Mgmt.</p>
              <p className="text-gray-400">Computer Security</p>
              <p className="text-gray-400">Networking Technology</p>
              <p className="text-gray-400">Network Security</p>
            </div>
          </div>
  
          {/* Management & IT */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">Management & IT</h2>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-400">Fundamentals of Relational Database Mgmt. Systems</p>
              <p className="text-gray-400">Cloud Based Information Resource Mgmt.</p>
              <p className="text-gray-400">Public Speaking</p>
              <p className="text-gray-400">Management of Innovation and Intellectual Property</p>
              <p className="text-gray-400">Operating Systems</p>
              <p className="text-gray-400">Operations Management</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  