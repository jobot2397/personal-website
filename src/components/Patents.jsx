export default function Patents () {
    return (
        <div className="mx-auto rounded-lg">
            
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary-white">
        PATENTS
      </h2>
      <div className="pb-3 flex justify-center">
            <img className="max-w-sm rounded-xl border-3 border-border"src="/images/jpmc-patent.jpg">
            </img>
            </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
            
          <p className="text-lg font-medium">US-20250028739-A1:</p>
          <div>
            <p className="text-lg text-right font-medium">Data Visualization in the metaverse</p>
            <p className="text-sm text-right italic">Pending • Jan 2025</p>
          </div>
        </div>
        <p className="text-md">As an intern at JPMorgan, I participated in a firm-wide hackathon where a team had a week to bring an idea to the demo stage. I joined a team who's goal was to visualize stock and general market trends in virtual reality. I primarily worked on data visualization using three.js. The result from the week, was a second place finish along with a filed patent.</p>
        <div className="font-bold my-4 border-b-2 border-primary-white"/>
        <div className="pb-3 flex justify-center">
            <img className="max-w-sm rounded-xl border-3 border-border"src="/images/patent.png">
            </img>
            </div>
        <div className="grid grid-cols-2 gap-2">
          <p className="text-lg font-medium">US Patent 10,989,080:</p>
          <div>
            <p className="text-lg text-right font-medium">Automated engine oil change system and method</p>
            <p className="text-sm text-right italic">Apr 2021</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <p className="text-lg font-medium">US Patent 10,759,650:</p>
          <div>
            <p className="text-lg text-right font-medium">Automated engine oil change design</p>
            <p className="text-sm text-right italic">Sep 2021</p>
          </div>
        </div>
      <p className="text-md"> These patents describe a method and design for automating an engine oil change but could be adapted to change any fluid. The crux of this design relies on a custom bolt which incorporates a ball value inside the bolt to allow drainage and filling of oil through one point all while being a beacon for the robot to locate. I primarly worked on while I was a sophomore in high school and often think about but have yet to find a business model that makes sense. I learned a lot during this exerpience not just about the patent process but in general how to explain something both percisely to a patent lawyer and then simply to people who were curious.</p>
      </div>
    </div>
    )
}