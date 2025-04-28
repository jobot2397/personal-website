export default function Experience () {
    return (
        <div className="mx-auto rounded-lg">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary-white">
          EXPERIENCE
        </h2>
        
        <div className="space-y-6">
          {/* Fifth Job */}
          <div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-lg font-medium">JPMorgan Chase – Software Engineer II:</p>
              <div>
                <p className="text-lg text-right font-medium">Plano, TX</p>
                <p className="text-sm text-right italic">Feb 2025 – Present</p>
              </div>
            </div>
            <ul className="list-disc ml-6 mt-2">
              <li>Early promotion from Software Engineer Program (SEP)</li>
              <li>Migrated 15 microservices from Springboot 2.7 to Springboot 3.3</li>
            </ul>
          </div>
          
          <div className="my-4 border-b-2 border-primary-white"/>
          
          {/* Fourth Job */}
          <div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-lg font-medium">JPMorgan Chase – SEP Software Engineer I:</p>
              <div>
                <p className="text-lg text-right font-medium">Plano, TX</p>
                <p className="text-sm text-right italic">Aug 2023 – Feb 2025</p>
              </div>
            </div>
            <ul className="list-disc ml-6 mt-2">
              <li>Full stack software engineer on the MyReports 2.0 Reporting Platform team under the Corporate and Investment Bank line of business</li>
              <li>Built an analysis tool to find rouge code not scheduled for release by comparing git commits with their associated Jira</li>
              <li>Managed production support, feature development, and infrastructure maintenance</li>
            </ul>
          </div>

          <div className="my-4 border-b-2 border-primary-white"/>
          
          {/* Third Job */}
          <div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-lg font-medium">JPMorgan Chase – SEP Software Engineer Intern:</p>
              <div>
                <p className="text-lg text-right font-medium">Plano, TX</p>
                <p className="text-sm text-right italic">Jun 2022 – Aug 2022</p>
              </div>
            </div>
            <ul className="list-disc ml-6 mt-2">
              <li>Improved JPMS intake dashboard performance by 95% down to 0.5 seconds</li>
              <li>Innovation Week Hackathon Finalist – developed a VR centric banking app and trading platform aimed at visualizing stock market tends across sectors</li>
              <li>SEP (Software Engineer Program) A two-year technology program aimed at giving young developers hands on experience with production grade financial software</li>
            </ul>
          </div>

          <div className="my-4 border-b-2 border-primary-white"/>
          
          {/* Second Job */}
          <div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-lg font-medium">Ligero Technical Services – Junior Software Engineer:</p>
              <div>
                <p className="text-lg text-right font-medium">Austin, TX</p>
                <p className="text-sm text-right italic">January 2021 – August 2021</p>
              </div>
            </div>
            <ul className="list-disc ml-6 mt-2">
              <li>Maintained and debugged AutolazeQL software package</li>
              <li>Designed and implemented 5 new features including, linearization of paths, DXF, TXT, and CSV file import, and geometry rotation, scaling, and moving</li>
              <li>Processed and developed customer features and fix bugs</li>
            </ul>
          </div>

          <div className="my-4 border-b-2 border-primary-white"/>
          
          {/* First Job */}
          <div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-lg font-medium">University of Texas at Austin – Programming Intern:</p>
              <div>
                <p className="text-lg text-right font-medium">Austin, TX</p>
                <p className="text-sm text-right italic">May 2017 – September 2017</p>
              </div>
            </div>
            <ul className="list-disc ml-6 mt-2">
              <li>Created an app to construct 3D flight paths to be flown autonomously by a quadcopter</li>
              <li>Aided in development of path planning for automatic 3D scanning by quadcopter</li>
            </ul>
          </div>
        </div>
      </div>
    )
}