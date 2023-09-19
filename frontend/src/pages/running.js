import Footer from "@/components/Footer";
import React from "react";

function Running() {
  return (
    <div>
      <div className="flex justify-center items-center h-20 bg-green-300">
        <div className="text-lg text-green-900 animate-marquee">
          Kid's Movies
        </div>
      </div>
      <br></br>

      <iframe
        className="w-full h-96"
        src="https://www.youtube.com/embed/fOyDi37OxSw"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <br></br>
      <br></br>
      <iframe
        className="w-full h-96"
        src="https://www.youtube.com/watch?v=u5M5NdSICVQ"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      <Footer />
    </div>
  );
}

export default Running;
