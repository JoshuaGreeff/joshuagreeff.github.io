export default function IndustryExperiencePage() {
    return (
      <div className="bg-gray-900 text-white py-10 px-5">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-4xl font-semibold text-center mb-8">Industry Experience</h1>
  
          {/* G-Automation Inc. Experience */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">
              G-Automation Inc. | Spartanburg, SC
            </h2>
            <p className="text-lg">Feb. 2024 – Jan. 2025</p>
            <h3 className="text-xl font-medium">Infrastructure & Web Development Intern</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Built and deployed a WordPress static site over Cloudflare Pages for the startup.
              </li>
              <li className="text-gray-400">
                Designed the startup's cloud infrastructure and set up software suites and network resources.
              </li>
            </ul>
          </div>
  
          {/* University of South Carolina Upstate Experience */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">
              University of South Carolina Upstate | USC | Spartanburg, SC
            </h2>
            <p className="text-lg">Aug. 2023 – Dec. 2023</p>
            <h3 className="text-xl font-medium">Walk-In Student Tutor</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Provided walk-in tutoring for mathematics and computer science students, offering academic support and problem-solving guidance.
              </li>
              <li className="text-gray-400">
                Assisted with coursework and reinforced concepts in programming, algorithms, and mathematics.
              </li>
            </ul>
          </div>
  
          {/* Boysen USA Experience */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2">
              Boysen USA | BUSA | Greenville, SC
            </h2>
            <p className="text-lg">Jun. 2020 – Nov. 2023</p>
            <h3 className="text-xl font-medium">Digital Integration Intern</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Developed and deployed multiple small-scale applications facilitating data input within a closed network.
              </li>
              <li className="text-gray-400">
                Did occasional application updates and maintenance until the systems were phased out late 2024.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  