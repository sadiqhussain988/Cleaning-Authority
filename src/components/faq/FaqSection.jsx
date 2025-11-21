import React from "react";

const FaqSection = () => {
    return (
        <section className="w-full pt-8 md:pt-16 ">
            <div className="w-[94%] md:w-[89%] mx-auto  max-w-7xl">

                <div className="w-full px-4 md:px-6 lg:px-24 py-8 md:py-16 flex justify-center flex-col bg-white">

                    {/* Title */}
                    <h1 className=" font-europa text-[34.12px] font-normal leading-[40.95px] text-[#222222] mb-4 text-center md:text-left   text-2xl md:text-3xl lg:text-4xl   "             style={{ fontFamily: 'europa, sans-serif' }}
>
                        Frequently Asked Questions
                    </h1>

                    {/* Sub description */}
                    <p className=" leading-relaxed mb-6 max-w-5xl text-sm md:text-base text-center md:text-left"   Style = {{
    fontFamily: 'neuzeit-grotesk, sans-serif',
    fontSize: '17.0608px',
    fontWeight: '400',
    lineHeight: '28.4403px',
    color: 'rgb(34, 34, 34)'
  }}>
                        Our goal is to provide the best customer service and to answer all of your questions in a timely manner.
                        Below are just some of the frequently asked questions we receive.
                    </p>

                    {/* Highlight Notice */}
                    <p className="text-gray-800 font-medium mb-6 md:mb-8 text-sm md:text-base text-center md:text-left">
                        If you do not see your answer below, please do not hesitate to contact our team by calling{" "}
                        <span className="text-[#66a038] hover:text-[#0079C1] hover:under font-semibold underline decoration-[#66a038] hover:decoration-[#0079C1] cursor-pointer decoration-2 underline-offset-2" onClick={() => window.open('', '_blank')}>(888) 658-0659</span>.
                    </p>

                    {/* Blue Question Box */}
                    <div className="bg-[#dfeef5] border border-blue-200 py-4 md:py-6 px-4 md:px-8 rounded-sm mb-6 max-w-5xl mx-auto md:mx-0 w-full">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#0079C1] text-center md:text-left">
                            How do I reschedule a cleaning with The Cleaning Authority?
                        </h2>
                    </div>

                    {/* Answer Paragraph 1 */}
                    <p className="text-gray-700 leading-relaxed max-w-5xl mb-4 md:mb-6 text-sm md:text-base text-center md:text-left"  style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }} >
                        It's simple. Call the local office at{" "}
                        <span className="text-[#66a038] hover:text-[#0079C1] hover:under font-semibold underline decoration-[#66a038] hover:decoration-[#0079C1] cursor-pointer decoration-2 underline-offset-2" onClick={() => window.open('', '_blank')}>(888) 658-0659</span> and speak with a representative
                        from The Cleaning Authority. They will assist you in rescheduling your clean.
                    </p>

                    {/* Answer Paragraph 2 */}
                    <p className="text-gray-700 leading-relaxed max-w-5xl mb-4 md:mb-6 text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>
                        If your location is using the MyTCA app, you can use it to request an alternate day for your clean.
                        To request to reschedule a clean on the app, click on the "Next Cleaning" banner found on the home page
                        or select "Cleanings" on the bottom menu and select the arrow next to the clean date you wish to reschedule.
                        From there, tap on the top right icon (3 vertical dots) and select "Reschedule Cleaning". Please select at
                        least two alternate days that work best and select "Confirm". We will then reach out to you with your finalized
                        clean date. To reschedule a clean on the app, you must put in the request at least 48 hours in advance of your next clean.
                    </p>

                    {/* Answer Paragraph 3 */}
                    <p className="text-gray-700 leading-relaxed max-w-5xl text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>
                        Keep in mind, there also may be times when weather makes it unsafe for us to travel and carry equipment
                        and supplies to your home. Driveways and sidewalks must be cleared and accessible. Holidays may also
                        necessitate a schedule change. Your understanding and cooperation in rescheduling is greatly appreciated.
                    </p>
                    <div className="bg-[#dfeef5] border border-blue-200 mt-6 py-4 md:py-6 px-4 md:px-8 rounded-sm mb-6 max-w-5xl mx-auto md:mx-0 w-full">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#0079C1] text-center md:text-left">
                            Will my house be inspected after every clean?

                        </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed max-w-5xl text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>Our Quality Control Inspectors inspect our teams on a regular basis. They may enter your home after the team leaves. The Cleaning Authority does these inspections to ensure the highest quality standards for our house cleaning services.</p>
                    <div className="bg-[#dfeef5] border border-blue-200 mt-6 py-4 md:py-6 px-4 md:px-8 rounded-sm mb-6 max-w-5xl mx-auto md:mx-0 w-full">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#0079C1] text-center md:text-left">
                            I have an alarm system. What do I do on days my house is cleaned?


                        </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed max-w-5xl text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>If your home has a security system, please provide us with the code and steps necessary for us to turn off the alarm. We will reset the alarm when we leave. Alternatively, you may want to disable it on the day of your scheduled clean.</p>
                    <div className="bg-[#dfeef5] border border-blue-200 mt-6 py-4 md:py-6 px-4 md:px-8 rounded-sm mb-6 max-w-5xl mx-auto md:mx-0 w-full">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#0079C1] text-center md:text-left">
                            How do I cancel a cleaning with The Cleaning Authority?



                        </h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed max-w-5xl mb-4 md:mb-6 text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>
                        It's simple. Call the local office at{" "}
                        <span className="text-[#66a038] hover:text-[#0079C1] hover:under font-semibold underline decoration-[#66a038] hover:decoration-[#0079C1] cursor-pointer decoration-2 underline-offset-2" onClick={() => window.open('', '_blank')}>(888) 658-0659</span> and speak with a representative from The Cleaning Authority.
                        They will assist you in rescheduling your clean.
                    </p>

                    {/* Answer Paragraph 2 */}
                    <p className="text-gray-700 leading-relaxed max-w-5xl mb-4 md:mb-6 text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>
                        If your location is using the MyTCA app, you can use it to request a cancellation. To request to cancel your next clean on the app, click on the “Next Cleaning” banner found on the home page. From there, tap on the top right icon (3 vertical dots) and select “Cancel Cleaning”. You will not be able to select “Confirm Cancellation” unless there is a payment method in your wallet. To cancel a clean on the app, you must put in the request at least 48 hours in advance of your next clean.
                    </p>

                    {/* Answer Paragraph 3 */}
                    <p className="text-gray-700 leading-relaxed max-w-5xl text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>
                        Keep in mind, there also may be times when weather makes it unsafe for us to travel and carry equipment
                        and supplies to your home. Driveways and sidewalks must be cleared and accessible. Holidays may also
                        necessitate a schedule change. Your understanding and cooperation in rescheduling is greatly appreciated.
                    </p>

                    <div className="bg-[#dfeef5] border border-blue-200 mt-6 py-4 md:py-6 px-4 md:px-8 rounded-sm mb-6 max-w-5xl mx-auto md:mx-0 w-full">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#0079C1] text-center md:text-left">
                            What if I want to schedule an extra clean?


                        </h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed max-w-5xl text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>You may call the local office or <span className="text-[#66a038] hover:text-[#0079C1] hover:under font-semibold underline decoration-[#66a038] hover:decoration-[#0079C1] cursor-pointer decoration-2 underline-offset-2" onClick={() => window.open('', '_blank')}>(888) 658-0659</span> and speak with a representative from The Cleaning Authority. They will assist you in scheduling an additional clean!</p>
                    <div className="bg-[#dfeef5] border border-blue-200 mt-6 py-4 md:py-6 px-4 md:px-8 rounded-sm mb-6 max-w-5xl mx-auto md:mx-0 w-full">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#0079C1] text-center md:text-left">
                            How do I add extra rooms to my clean?



                        </h2>

                    </div>
                    <p className="" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }} >Looking to add on request rooms to your next clean? No problem! You may call the local office or      <span className="text-[#66a038] hover:text-[#0079C1] hover:under font-semibold underline decoration-[#66a038] hover:decoration-[#0079C1] cursor-pointer decoration-2 underline-offset-2" onClick={() => window.open('', '_blank')}>(888) 658-0659</span> and  <br />speak with a representative from The Cleaning Authority. They will assist you with getting on request rooms!</p>
                    <br />
                    <p className=" leading-relaxed max-w-5xl mb-4 md:mb-6 text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>
                        To add an auto tip in the app, select “Account” on the bottom menu and then select “Wallet”. In the wallet, there will be a “Set Auto Tip to Enable a Default Tipping Amount” option if your payment method has already been added. Tap on the amount desired or if you’d like to set a different amount, select “Custom”. Once an auto tip is set, the amount will be charged automatically and separately each clean. You are able to edit auto tips for particular cleans or remove them if needed.
                    </p>
                    <div className="bg-[#dfeef5] border border-blue-200 mt-6 py-4 md:py-6 px-4 md:px-8 rounded-sm mb-6 max-w-5xl mx-auto md:mx-0 w-full">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#0079C1] text-center md:text-left">
                            What if I want to know if my team is on the way?

                        </h2>

                    </div>
                    <p   className=" leading-relaxed max-w-5xl mb-4 md:mb-6 text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>If your local office is using the MyTCA app, you can view an estimated time of arrival through a display feature in the app. Once cleaners have arrived at your home, the display banner will change to “Cleaning in Process”.
</p>
 <div className="bg-[#dfeef5] border border-blue-200 mt-6 py-4 md:py-6 px-4 md:px-8 rounded-sm mb-6 max-w-5xl mx-auto md:mx-0 w-full">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#0079C1] text-center md:text-left">
How do I refer a friend or family member?



                        </h2>
                     
                    </div>
                    <p  className=" leading-relaxed max-w-5xl mb-4 md:mb-6 text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>For locations that are using the MyTCA app and have implemented the referral program, you can refer a friend through the app by selecting the “Refer a Friend” banner on the home page or selecting the “Referrals” icon from the bottom menu. From there, provide us with your friend’s email address, and we will send a referral email.</p>
                    <div className="bg-[#dfeef5] border border-blue-200 mt-6 py-4 md:py-6 px-4 md:px-8 rounded-sm mb-6 max-w-5xl mx-auto md:mx-0 w-full">
                        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#0079C1] text-center md:text-left">
What if I’m not satisfied with the service?



                        </h2>
                     
                    </div>
                    <p className=" leading-relaxed max-w-5xl mb-4 md:mb-6 text-sm md:text-base text-center md:text-left" style={{
                        fontFamily: "neuzeit-grotesk, sans-serif",
                        fontSize: "17px",
                        fontWeight: 400,
                        lineHeight: "28px",
                        color: "rgb(34,34,34)"
                    }}>As part of our satisfaction guarantee, if you’re ever unhappy with any area we’ve cleaned, we’ll return the next business day and re-clean it.</p>




                </div>
            </div>
        </section>
    );
};

export default FaqSection;