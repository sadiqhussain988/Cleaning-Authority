import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ReliableHoursSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const PERSON_IMG =
    "https://www.thecleaningauthority.com/assets/content/positions-testimonial.2403130848226.png";
  const BROOM_IMG =
    "https://www.thecleaningauthority.com/assets/content/positions-testimonial-flair.2403130930046.png";

  return (
    <div className="w-full">

      {/* TOP LIGHT BLUE SECTION */}
      <section
        className="w-full bg-[#E4F5FC] pt-20 pb-20 text-center px-4"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Reliable hours. Flexible life.
        </h1>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          Make the switch to a job that gives you more time for the people and
          things you love. Cleaning jobs at Cleanic Authority have established
          Monday–Friday daytime hours, so you&apos;re free to do what you enjoy
          on the weekends. Every weekend.
        </p>

        <p className="mt-4 text-lg">
          Learn more about{" "}
          <a
            href="#jobs"
            className="text-sky-600 font-semibold underline hover:text-sky-800"
          >
            entry-level housecleaner
          </a>{" "}
          jobs below.
        </p>
      </section>

      {/* YELLOW TESTIMONIAL SECTION */}
      <section className="w-full bg-[#FFD600] rounded-t-[40px] md:rounded-t-[50px] px-6 md:px-12 py-16 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

          {/* LEFT TEXT BLOCK */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
              More free time to <br /> spend with family
            </h2>

            <p className="text-gray-900 text-lg leading-relaxed mb-4">
              Barbara Paredes was referred to Cleanic Authority by a friend who
              was already working there. She stopped by the office and
              interviewed on the spot for a job as a Professional Housecleaner.
              Years later, she’s still with the company, cleaning homes and
              helping in the office when needed.
            </p>

            <p className="text-gray-900 text-lg leading-relaxed mb-4">
              Barbara enjoys the freedom that comes with her job, especially
              being able to move around a house as she works instead of
              standing in one place all day, every day. As the mother of two
              daughters that both play sports,{" "}
              <span className="font-bold">
                she appreciates the established Monday through Friday hours that
                give her the free time she needs
              </span>{" "}
              to attend their games. Being paid every week is also a big plus.
            </p>

            <p className="text-gray-900 text-lg leading-relaxed">
              Barbara was recently honored as Employee of the Year at
              Cleanic Authority&apos;s annual convention.
            </p>
          </div>

          {/* RIGHT SIDE BUBBLE + IMAGES */}
          <div className="relative" data-aos="fade-left">

            {/* QUOTE BUBBLE */}
            <div className="bg-[#A9E5F3] rounded-[50px] p-10 shadow-md relative">
              <p className="text-3xl md:text-4xl font-extrabold text-gray-900">
                &ldquo;I like my work. <br /> I like being here.&rdquo;
              </p>
            </div>

            {/* BROOM IMAGE — slightly larger */}
            <img
              src={BROOM_IMG}
              alt="Cleaning tool"
              className="absolute -top-8 right-0 w-60 md:w-76 rotate-3 drop-shadow-xl"
            />

            {/* PERSON IMAGE — slightly larger */}
            <div className="mt-10 text-center">
              <img
                src={PERSON_IMG}
                alt="Employee"
                className="w-86 h-86 mx-auto rounded-full object-cover border-4 border-white shadow-lg"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Barbara Paredes
              </h3>
              <p className="text-gray-800">Professional Housecleaner</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ReliableHoursSection;
