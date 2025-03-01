export default function SkillsPage() {
    return (
      <div className="bg-gray-900 text-white py-10 px-5">
        <div className="max-w-6xl mx-auto space-y-12">
          <h1 className="text-4xl font-semibold text-center mb-8">Industry Skills</h1>
          <h2 className="border-b-2 border-blue-500"></h2>
          
          {/* Industry Skills Section */}
          <div className="space-y-8">

            {/* Programming Languages */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Programming Languages</h3>
              <ul className="flex flex-wrap gap-3">
                <li className="bg-blue-500 px-4 py-2 rounded-lg">JavaScript</li>
                <li className="bg-green-500 px-4 py-2 rounded-lg">SQL</li>
                <li className="bg-yellow-500 px-4 py-2 rounded-lg">Python</li>
                <li className="bg-gray-500 px-4 py-2 rounded-lg">Basic C++</li>
                <li className="bg-red-500 px-4 py-2 rounded-lg">Basic Java</li>
              </ul>
            </div>
  
            {/* Operating System/Software Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Operating System/Software Skills</h3>
              <ul className="flex flex-wrap gap-3">
                <li className="bg-blue-700 px-4 py-2 rounded-lg">Debian Linux</li>
                <li className="bg-gray-700 px-4 py-2 rounded-lg">Windows OS</li>
                <li className="bg-gray-500 px-4 py-2 rounded-lg">Microsoft Office</li>
                <li className="bg-blue-400 px-4 py-2 rounded-lg">Active Directory</li>
                <li className="bg-indigo-500 px-4 py-2 rounded-lg">VMware</li>
                <li className="bg-purple-600 px-4 py-2 rounded-lg">VirtualBox</li>
                <li className="bg-green-500 px-4 py-2 rounded-lg">Proxmox</li>
                <li className="bg-blue-500 px-4 py-2 rounded-lg">Hyper-V</li>
                <li className="bg-gray-600 px-4 py-2 rounded-lg">Docker</li>
                <li className="bg-yellow-400 px-4 py-2 rounded-lg">Kubernetes</li>
                <li className="bg-green-500 px-4 py-2 rounded-lg">Cloudflare</li>
                <li className="bg-blue-500 px-4 py-2 rounded-lg">AWS</li>
                <li className="bg-orange-600 px-4 py-2 rounded-lg">Microservice Architecture</li>
              </ul>
            </div>
  
            {/* Networking & Security */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Networking & Security</h3>
              <ul className="flex flex-wrap gap-3">
                <li className="bg-teal-500 px-4 py-2 rounded-lg">Firewall Configuration</li>
                <li className="bg-indigo-500 px-4 py-2 rounded-lg">VPN Setup</li>
                <li className="bg-purple-700 px-4 py-2 rounded-lg">VLANs & Subnetting</li>
                <li className="bg-gray-600 px-4 py-2 rounded-lg">Self-Hosted Services</li>
                <li className="bg-yellow-500 px-4 py-2 rounded-lg">Internal Services</li>
              </ul>
            </div>
  
            {/* Hardware & Infrastructure */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Hardware & Infrastructure</h3>
              <ul className="flex flex-wrap gap-3">
                <li className="bg-red-500 px-4 py-2 rounded-lg">Desktop Assembly/Repair</li>
                <li className="bg-blue-600 px-4 py-2 rounded-lg">Device Troubleshooting</li>
                <li className="bg-green-500 px-4 py-2 rounded-lg">Server Setup & Maintenance</li>
                <li className="bg-gray-500 px-4 py-2 rounded-lg">Storage Solutions</li>
                <li className="bg-gray-700 px-4 py-2 rounded-lg">RAID</li>
                <li className="bg-yellow-500 px-4 py-2 rounded-lg">NAS</li>
                <li className="bg-orange-600 px-4 py-2 rounded-lg">SAN</li>
                <li className="bg-green-500 px-4 py-2 rounded-lg">DAS</li>
                <li className="bg-gray-400 px-4 py-2 rounded-lg">Basic PowerShell</li>
                <li className="bg-gray-600 px-4 py-2 rounded-lg">Basic Bash Scripting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  