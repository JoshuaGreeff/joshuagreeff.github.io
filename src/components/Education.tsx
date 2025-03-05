export default function EducationPage() {
    return (
      <div className="bg-gray-900 text-white py-10 px-5">
        <div className="max-w-6xl mx-auto space-y-12">
          <h1 className="text-4xl font-semibold text-center mb-8">Education</h1>
  
          {/* University Education */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">University of South Carolina Upstate</h2>
            <p className="text-lg">
              <strong>Bachelor of Science in Computer Science & Cybersecurity</strong> <br />
              2022 - Expected May 2025
            </p>
            <ul className="space-y-2">
              <li className="text-gray-400">GPA: 3.9/4.0</li>
              <li className="text-gray-400">Promise Scholar, Palmetto Fellows Recipient</li>
              <li className="text-gray-400">President's List/Dean's List (2021-2025)</li>
            </ul>
          </div>
  
          {/* High School Education */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">Boiling Springs High School</h2>
            <p className="text-lg">2018 - 2022</p>
            <ul className="space-y-2">
              <li className="text-gray-400">GPA: 3.9/4.0</li>
              <li className="text-gray-400">Scholar's Academy @ USC Upstate</li>
              <li className="text-gray-400">President's List/Dean's List (2021-2022) @ USC Upstate</li>

            </ul>
          </div>
        </div>
      </div>
    );
  }
  