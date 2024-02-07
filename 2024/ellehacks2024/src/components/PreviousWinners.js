import React from "react";

function PreviousWinners() {
    return (
      <div id="previouswinners">

      {/* Previous Prizes and Winners */}
      <section className="px-10 md:px-32 pb-14 md:pb-20">
        
        {/* Heading */}
        <h1 className="text-4.5xl md:text-6xl bg-mainBgRed font-sans font-semibold text-white text-left my-10 md:my-14">Previous Prices & Winners!</h1>

        {/* Div section with text */}
        <div className="grid grid-cols-2 gap-8 md:gap-14">

          {/* Column 1 */}
          <div className="bg-white w-full h-96 rounded-md"></div>

          {/* Column 2 */}
          <div className="md:pr-24">
            <h1 className="text-2xl md:text-5.5xl font-sans">Check out some of our winners and prizes from ElleHacks 2023!</h1>
          </div>
        </div>
      </section>
    </div>    
    );
  }
  
export default PreviousWinners;
