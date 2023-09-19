import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const about = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-3xl font-semibold mb-4">About Us</h1>
          <p className="text-gray-700">
            Movie platforms heavily rely on algorithms to curate and recommend
            content to users. These algorithms analyze user preferences, viewing
            history, and engagement to suggest relevant movies. The theoretical
            challenge lies in creating algorithms that strike a balance between
            offering personalized recommendations and introducing users to new
            and diverse content.
          </p>
          <p className="text-gray-700 mt-4">
            Movie platforms heavily rely on algorithms to curate and recommend
            content to users. These algorithms analyze user preferences, viewing
            history, and engagement to suggest relevant movies. The theoretical
            challenge lies in creating algorithms that strike a balance between
            offering personalized recommendations and introducing users to new
            and diverse content.
          </p>
          <p className="text-gray-700 mt-4">
            Movie platforms heavily rely on algorithms to curate and recommend
            content to users. These algorithms analyze user preferences, viewing
            history, and engagement to suggest relevant movies. The theoretical
            challenge lies in creating algorithms that strike a balance between
            offering personalized recommendations and introducing users to new
            and diverse content.
          </p>
          Movie platforms utilize various monetization models, including
          subscription-based, ad-supported, and pay-per-view. Theoretical
          discussions would explore the trade-offs between these models in terms
          of revenue generation, user experience, and market penetration.
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default about;
