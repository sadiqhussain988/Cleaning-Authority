import React from "react";
import { Link } from "react-router-dom";


const SpecialOffer = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 bg-white px-4">
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-10 tracking-wide text-center"   style={{
              fontFamily: "europa, sans-serif",
              fontSize: "34.1216px",
              fontWeight: "400",
              lineHeight: "40.9459px",
              color: "rgb(34, 34, 34)",
            }}>
        Special Offers
      </h2>

      {/* Main Box */}
      <div className="bg-[#e4f3fa] border border-[#c7d9e0] w-full max-w-[550px] p-4 md:p-4 shadow-sm">
        
        {/* Dashed Inner Border */}
        <div className="border-2 border-dashed border-[#157bbd] p-6 md:p-10 text-center">

          {/* $30 OFF */}
          <h3
            className="mb-3"
            style={{
              fontFamily: "neuzeit-grotesk, sans-serif",
              fontSize: "34px",
              fontWeight: "400",
              lineHeight: "38px",
              color: "rgb(0,121,193)",
            }}
          >
            $30 OFF
          </h3>

          {/* Subtitle */}
          <p
            className="mb-4"
            style={{
              fontFamily: "neuzeit-grotesk, sans-serif",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "26px",
              color: "rgb(34,34,34)",
            }}
          >
            $15 Off Each of Your First 2 Cleans
          </p>

          {/* Location */}
          <p
            className="mb-4"
            style={{
              fontFamily: "neuzeit-grotesk, sans-serif",
              fontSize: "15px",
              fontWeight: "400",
              lineHeight: "18px",
              color: "rgb(34,34,34)",
            }}
          >
            The Cleaning Authority - Irvine
          </p>

          {/* Small description */}
          <p
            className="leading-5 mx-auto mb-4 max-w-[450px]"
            style={{
              fontFamily: "neuzeit-grotesk, sans-serif",
              fontSize: "11px",
              fontWeight: "400",
              lineHeight: "17px",
              color: "rgb(34,34,34)",
            }}
          >
            Offer valid for new weekly, bi-weekly, and 4 week customers only.
            Not valid with any other offer. Not redeemable for cash. Please
            present this coupon at in home estimate.
          </p>

          {/* Button */}
         <Link to="/print"> <button className="bg-[#66a038] text-white px-6 py-2 cursor-pointer hover:bg-[#0079C1] transition-all duration-300 text-sm font-medium">
            PRINT
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
