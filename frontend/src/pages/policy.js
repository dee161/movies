import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const policy = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
          <p className="text-gray-700">
            When you create an account or use our services, we may collect
            personal information such as your name, email address, payment
            information, and profile picture.
          </p>
          <p className="text-gray-700 mt-4">
            When you create an account or use our services, we may collect
            personal information such as your name, email address, payment
            information, and profile picture.
          </p>
          <p className="text-gray-700 mt-4">
            We use cookies and similar tracking technologies to collect data
            about your browsing behavior and preferences.
          </p>
          <br></br>
          We implement reasonable security measures to protect your data from
          unauthorized access and disclosure.
          <p className="text-gray-700 mt-4">
            We may update this Privacy Policy from time to time. Please review
            it periodically for changes.
          </p>
          <p className="text-gray-700 mt-4">
            Our platform is not intended for children under the age of 13. We do
            not knowingly collect information from children under 13.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default policy;
