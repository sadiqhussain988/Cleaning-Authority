import React, { useState, useRef, useEffect } from "react";

const AuthorityBrandsCarousel = () => {
    const brands = [
        { id: 1, name: 'Benjamin Franklin', logo: 'https://www.thecleaningauthority.com/images/authority-brands/asp.2012151506040.png', url: 'https://www.asppoolco.com/' },
        { id: 2, name: 'Cleaning Authority', logo: 'https://www.thecleaningauthority.com/images/authority-brands/ben-franklin.2012151506080.png', url: 'https://www.benjaminfranklinplumbing.com' },
        { id: 3, name: 'GoodyCalls', logo: 'https://www.thecleaningauthority.com/images/authority-brands/TCA-logo.2105261111215.png', url: 'https://www.thecleaningauthority.com' },
        { id: 4, name: 'DRYmedic', logo: 'https://www.thecleaningauthority.com/images/authority-brands/DoodyCalls-logo.2107141540324.png', url: 'https://doodycalls.com/' },
        { id: 5, name: 'Homewatch Care', logo: 'https://www.thecleaningauthority.com/images/authority-brands/Drymedic-Logo.2301181555497.png', url: 'https://www.drymedic.com/' },
        { id: 6, name: 'Brand 6', logo: 'https://www.thecleaningauthority.com/images/authority-brands/homewatch.2012151506120.png', url: 'https://www.homewatchcare.com' },
        { id: 7, name: 'Brand 7', logo: 'https://www.thecleaningauthority.com/images/authority-brands/JNK-005_Oval_Logo_Final_no_tagline_RGB.2301181555091.png', url: 'https://www.junkluggers.com/' },
        { id: 8, name: 'Brand 8', logo: 'https://www.thecleaningauthority.com/images/authority-brands/lsq_logo_fullcolor[1].2502201302352.png', url: 'https://lawnsquad.com/' },
        { id: 9, name: 'Brand 9', logo: 'https://www.thecleaningauthority.com/images/authority-brands/Image-9.2105261112362.png', url: 'https://www.mistersparky.com/' },
        { id: 10, name: 'Brand 10', logo: 'https://www.thecleaningauthority.com/images/authority-brands/monster.2012151506180.png', url: 'https://www.monstertreeservice.com/' },
        { id: 11, name: 'Brand 11', logo: 'https://www.thecleaningauthority.com/images/authority-brands/msq_pluslogo_fullcolor_horizontal.1)[1].2502200938003.png', url: 'https://www.mosquitosquad.com/' },
        { id: 12, name: 'Brand 12', logo: 'https://www.thecleaningauthority.com/images/authority-brands/one-hour.2012151506260.png', url: 'https://www.onehourheatandair.com/' },
        { id: 13, name: 'Brand 13', logo: 'https://www.thecleaningauthority.com/sub/55878/images/SM-logo-EPS.png', url: 'https://www.screenmobile.com/' },
        { id: 14, name: 'Brand 14', logo: 'https://www.thecleaningauthority.com/images/authority-brands/STOP-logo.2104191057477.png', url: 'https://www.stoprestoration.com/' },
        { id: 15, name: 'Brand 15', logo: 'https://www.thecleaningauthority.com/images/brand-logos/woofies-logo.2202011543542.png', url: 'https://www.woofies.com/' }
    ];

    const brandsContainer = useRef(null);
    const [itemsPerStep, setItemsPerStep] = useState(6);
    const [currentStep, setCurrentStep] = useState(0);

    // Slide count responsive logic
    const updateItemsPerStep = () => {
        if (window.innerWidth < 400) setItemsPerStep(1);
        else if (window.innerWidth < 640) setItemsPerStep(2);
        else if (window.innerWidth < 900) setItemsPerStep(3);
        else if (window.innerWidth < 1100) setItemsPerStep(5);
        else setItemsPerStep(6);
    };

    useEffect(() => {
        updateItemsPerStep();
        window.addEventListener("resize", updateItemsPerStep);
        return () => window.removeEventListener("resize", updateItemsPerStep);
    }, []);

    const totalSteps = Math.ceil(brands.length / itemsPerStep);

    const scrollToStep = (step) => {
        if (brandsContainer.current) {
            const container = brandsContainer.current;
            const scrollAmount = container.scrollWidth / totalSteps * step;
            container.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            scrollToStep(nextStep);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            const prevStep = currentStep - 1;
            setCurrentStep(prevStep);
            scrollToStep(prevStep);
        }
    };

    // ORIGINAL ARROWS YOU PROVIDED
    const LeftArrow = () => (
        <svg viewBox="0 0 24 24" className="w-3 h-3">
            <path
                transform="rotate(-90)"
                d="M-14.434 2.765a2.824 2.824 0 0 1 4.868 0l9.176 15.607A2.824 2.824-26.117 0 1-2.823 22.627H-21.176a2.824 2.824 0 0 1-2.434-4.255Z"
                fill="currentColor"
            />
        </svg>
    );

    const RightArrow = () => (
        <svg viewBox="0 0 24 24" className="w-3 h-3">
            <path
                transform="rotate(90)"
                d="M9.566-21.235a2.824 2.824 0 0 1 4.868 0l9.176 15.608A2.824 2.824-2.117 0 1 21.177-1.373H2.824a2.824 2.824 0 0 1-2.434-4.255Z"
                fill="currentColor"
            />
        </svg>
    );

    return (
        <div className="bg-white px-4">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <div className="text-center   font-sans text-[34.12px] font-normal leading-[40.95px] text-gray-800 mb-12">
                    <h2 className="text-3xl font-bold  mb-4">
Part of the Authority Brands Family
                    </h2>

                    <p className="  max-w-2xl mx-auto" style={{
    fontFamily: "neuzeit-grotesk, sans-serif",
    fontSize: "14.2173px",
    fontWeight: "400",
    lineHeight: "23.7003px",
    color: "rgb(34,34,34)",
  }}>
Authority Brands is the leading provider of in-home services, building brands that support the success of franchisees as well as better the lives of the homeowners we serve and the people we employ.

                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div
                        ref={brandsContainer}
                        className="flex gap-6 overflow-hidden"
                    >
                        {brands.map((brand) => (
                            <div
                                key={brand.id}
                                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/5 xl:w-1/6 flex flex-col items-center justify-center p-4"
                            >
                                <a href={brand.url} rel="noopener noreferrer">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="h-14 object-contain mb-2 hover:opacity-80 cursor-pointer"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons — ORIGINAL DESIGN */}
                    <div className="flex justify-center items-center space-x-4 mt-6 text-gray-600" style={{ fontSize: "14px" }}>
                        <button
                            onClick={handlePrev}
                            className="text-[#66a038] cursor-pointer hover:text-[#0079C1]"
                            disabled={currentStep === 0}
                        >
                            <LeftArrow />
                        </button>

                        <span className="font-medium">
                            {currentStep + 1}/{totalSteps}
                        </span>

                        <button
                            onClick={handleNext}
                            className="text-[#66a038] cursor-pointer hover:text-[#0079C1]"
                            disabled={currentStep === totalSteps - 1}
                        >
                            <RightArrow />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorityBrandsCarousel;
