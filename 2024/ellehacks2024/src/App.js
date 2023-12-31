import Green from "./img/Green.png"
import Red from "./img/Red.png"
import Yellow from "./img/Yellow.png"

function App() {
  return (
    <>
      {/* Join Us Section */}
      <h1 className="text-4xl md:text-6xl p-20 pl-12 md:pl-36 pb-8 bg-mainBgRed font-body font-bold text-white">Join Us</h1>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-3 md:gap-5 md:px-20 mx-auto md:mb-24 p-2.5 md:p-0">
        {/* <!-- Section 1 - Mentor --> */}
        <section className="w-full p-2 md:p-10 pb-12 md:pb-16 md:pt-44 flex flex-col justify-end md:justify-between items-center bg-faintBgRed">
          {/* Mentor Image */}
          <div className="w-full md:h-72 md:mb-2">
            <img src={Yellow} alt="Mentor Image" className="w-56 h-56 rounded-md object-contain mx-auto"></img>
          </div>
          {/* Mentor Card */}
          <div className="w-full bg-white p-1 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl hover:shadow-section1FaintBgYellow shadow-black">
            <a href="#" className="text-xl md:text-4xl font-bold bg-section1FaintBgYellow w-full py-2 md:py-3 rounded text-center inline-block hover:bg-section1FaintBgYellowHover">Mentor</a>
            <p className="text-black my-4 md:my-8 text-center text-base md:text-2xl font-bold">
              Become a mentor
            </p>
          </div>
        </section>

        {/* <!-- Section 2 - Hacker --> */}
        <section className="w-full p-2 md:pt-0 md:p-10 pb-12 md:pb-16 pt-0 flex flex-col justify-end md:justify-between items-center bg-faintBgRed">
          {/* Hacker Image */}
          <div className="w-full md:h-88 my-10 md:my-0">
            <img src={Red} alt="About Us Image" className="w-full h-full rounded-md object-contain mx-auto"></img>
          </div>
          {/* Hacker Card */}
          <div className="w-full bg-white p-1 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl hover:shadow-white shadow-black">
            <a href="#" className="text-xl md:text-4xl font-bold bg-mainBgRed w-full py-2 md:py-3 rounded text-center inline-block hover:bg-section2mainBgRedHover">Hacker</a>
            <p className="text-black my-3 md:my-7 text-center text-base md:text-2xl font-bold">
              Become a Hacker
            </p>
            <p className="text-black my-3 md:my-7 text-center text-sm md:text-xl md:w-3/4 mx-auto">
              Come out and join us for ElleHacks 2024
            </p>
          </div>
        </section>

        {/* <!-- Section 3 - Volunteer -->  */}
        <section className="w-full p-2 md:p-10 pb-12 md:pb-16 md:pt-44 flex flex-col justify-end md:justify-between items-center bg-faintBgRed">
          {/* Volunteer Image */}
          <div className="w-full md:h-72 md:mb-2">
            <img src={Green} alt="Contact Us Image" className="w-56 h-56 rounded-md object-contain mx-auto"></img>
          </div>
          {/* Volunteer Card */}
          <div className="w-full bg-white p-1 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl hover:shadow-section3FaintBgGreen shadow-black">
            <a href="#" className="text-xl md:text-4xl font-bold bg-section3FaintBgGreen w-full py-2 md:py-3 rounded text-center inline-block hover:bg-section3FaintBgGreenHover">Volunteer</a>
            <p className="text-black my-4 md:my-8 text-center text-base md:text-2xl font-bold">
              Become a volunteer
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
