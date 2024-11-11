import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Forge Your Career Here."
          text="Not Everyone Has What It Takes, Witness the Odds Bow to Your Will."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative ml-auto">
              <h4 className="h4 mb-4">Partnership Objectives</h4>
              <p className="body- mb-[3rem] text-n-3">
              The overarching aim of this partnership is to bridge the chasm between academic instruction and industry requisites by endowing students with practical training and tangible experience. Through this collaboration, we aspire to:
              </p>
              <div className="flex-1 bg-[#D9D9D9]">
                  <div className="w-1/2 h-0.5 bg-color-1"></div>
                </div>
              
              {/* <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul> */}
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0  justify-end  bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h3 mb-4">Registration Fee</h4>
                <p className="body-2 mb-[3rem]">
                Commitment: The registration fee ensures that students are committed to the program, helping us manage resources effectively and maintain high standards of training and support.
                </p>
                <div className="flex-1 bg-[#D9D9D9]">
                  <div className="w-1/2 h-0.5 bg-color-1"></div>
                </div><br />
                <p className="body-2 mb-[3rem] ">
                Administrative Costs: The fee helps cover initial administrative expenses associated with setting up and maintaining the program, ensuring a seamless experience for all participants.
                </p>
                <div className="flex-1 bg-[#D9D9D9]">
                  <div className="w-1/2 h-0.5 bg-color-1"></div>
                </div><br />
                <p className="body-2 mb-[3rem] ">
                Free Training: Despite this small registration fee, the training itself is provided at no additional cost. We are dedicated to offering high-quality training and real-world experience without imposing further financial burdens on students.
                </p>
                <div className="flex-1 bg-[#D9D9D9]">
                  <div className="w-1/2 h-0.5 bg-color-1"></div>
                </div><br />
                <p className="body-2 mb-[3rem] ">
                Refundable Fee: For students who are selected for the program, the registration fee will be fully refunded. This ensures that financial constraints do not deter talented candidates from participating, and it demonstrates our commitment to accessibility and inclusivity.
                </p>
                
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Program Details</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Target Audience: Our program is designed for 1st and 2nd-year students from technical disciplines and 1st-year students from BBA and MBA programs. By engaging students early in their academic journey, we aim to build a strong foundation for their professional development.
                </p>
                <div className="flex-1 bg-[#D9D9D9]">
                  <div className="w-1/2 h-0.5 bg-color-1"></div>
                </div><br />
                <p className="body-2 mb-[2rem] text-n-3">
                Duration: Internships will be structured to align with the academic calendar, offering part-time opportunities during the semester and full-time roles during academic breaks. Students will work 3-4 hours per day after their classes, allowing them to gain valuable experience without compromising their studies. The internship duration can range from 6 months to 2 years, providing flexibility for students to work alongside their academic commitments.
                </p>
                <div className="flex-1 bg-[#D9D9D9]">
                  <div className="w-1/2 h-0.5 bg-color-1"></div>
                </div><br />
                <p className="body-2 mb-[2rem] text-n-3">
                Compensation: Interns receive a competitive stipend based on their contributions, ensuring financial rewards aligned with their efforts and impact.
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
