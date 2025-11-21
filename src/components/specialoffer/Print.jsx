import React from "react";

const Print = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 bg-white px-4">
      
      {/* Title */}
     

      {/* Main Box */}
      <div className="bg-[#e4f3fa] border border-[#c7d9e0] w-full max-w-[550px] p-4 md:p-3 shadow-sm">
        
        {/* Dashed Inner Border */}
        <div className="border-2 border-dashed border-[#157bbd] p-6 md:p-10 text-center">
<div className=" flex justify-center items-center mb-4">
    <img src="https://www.thecleaningauthority.com/assets/logo.2012151510120.png" className="h-25" alt="" />
</div>
          {/* $30 OFF */}
          <h3
            className="mb-"
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

          
        </div>
      </div>
    </div>
  );
};

export default Print;
