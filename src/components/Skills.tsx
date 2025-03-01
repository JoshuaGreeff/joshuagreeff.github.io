const CONFIG = {
  "SKILLS": [
    {
      "title": "Programming Languages",
      "items": ["JavaScript", "SQL", "Python", "C++", "Java", "PowerShell", "Bash Scripting"]
    },
    {
      "title": "Operating System/Software Skills",
      "items": ["Debian Linux", "Windows", "Microsoft Office", "Active Directory", "VMware", "VirtualBox", "Proxmox", "Hyper-V", "Docker", "Kubernetes", "Cloudflare", "AWS", "Microservice Architecture"]
    },
    {
      "title": "Networking & Security",
      "items": ["Firewall Configuration", "VPN Setup", "VLANs & Subnetting", "Self-Hosted Services", "Internal Services"]
    },
    {
      "title": "Hardware & Infrastructure",
      "items": ["Desktop Assembly/Repair", "Device Troubleshooting", "Server Setup & Maintenance", "Storage Solutions", "RAID", "NAS"]
    }
  ]
}

const COLORS = [
  "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-red-500",  "bg-indigo-500", "bg-purple-600", 
  "bg-orange-500", "bg-teal-500", "bg-emerald-500", "bg-pink-500", "bg-cyan-500"
];

export default function SkillsPage() {
  let colorIndex = 0;

  return (
    <div className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-semibold text-center mb-8">Industry Skills</h1>
        <h2 className="border-b-2 border-blue-500"></h2>

        {CONFIG.SKILLS.map((skill, skillIndex) => (
          <div key={skillIndex} className="space-y-4">
            <h3 className="text-xl font-medium">{skill.title}</h3>
            <ul className="flex flex-wrap gap-3">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex} className={`${COLORS[colorIndex++ % COLORS.length]} px-4 py-2 rounded-lg`}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}