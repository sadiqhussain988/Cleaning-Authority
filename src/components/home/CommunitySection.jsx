import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CommunitySection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full bg-[#F8F9FB] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-12">

        {/* LEFT SIDE CONTENT */}
        <div
          className="pr-4"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-semibold leading-tight mb-6">
            Connect with Our <br /> Community
          </h2>

          <p className="text-lg text-blue-600 font-medium mb-6">
            We proudly service homeowners in the following areas:
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Anaheim, Foothill Ranch, Irvine, Lake Forest, Orange, Santa Ana,
            Tustin, Villa Park, Yorba Linda{" "}
            <span className="text-green-600 font-medium cursor-pointer">
              See All
            </span>
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            We may service additional communities. Please contact us for more
            information.
          </p>
        </div>

        {/* RIGHT SIDE MAP */}
        <div
          className="w-full h-[420px] shadow-md rounded-md overflow-hidden"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <iframe
            title="Service Area Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424626.0289921034!2d-117.977326!3d33.708680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd25b7f04e3d09%3A0xb6ce3a9c749d5857!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
