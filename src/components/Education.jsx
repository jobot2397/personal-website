export default function Education () {
    return (
        <div className=" mx-auto rounded-lg">
            <div className="pb-3 flex justify-center">
            <img className="max-w-sm "src="/images/screaming-bevo.png">
            </img>
            </div>
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-burnt-orange">
        EDUCATION
      </h2>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold ">
            The University of Texas at Austin
          </h3>
          <span className="text-md ">May 2023</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-1">
        <p className="text-lg">GPA:</p>
        <p className="text-lg text-right">3.4/4.0</p>
      </div>
        <div className="grid grid-cols-2 gap-2 mt-1">
        <p className="text-lg">Major:</p>
        <p className="text-lg text-right">Bachelor of Electrical and Computer Engineering</p>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mt-1">
        <p className="text-lg">Technical Route:</p>
        <p className="text-lg text-right">Software Engineering and Design</p>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mt-1">
        <p className="text-lg">Minor:</p>
        <p className="text-lg text-right">Business</p>
      </div>
      <div className="font-bold my-4 border-b-2 border-burnt-orange"/>
      <p className="text-md">I fondly remember my time at UT. I learned how to learn, realized the value of being able to articulate complex concepts and ontop of all I met my wonderful girlfriend. Even though I was burned many times by the football team I still go back and would recommend the school</p>
    </div>
    )
}