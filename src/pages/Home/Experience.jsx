import React from 'react';
import googleLogo from '../../assets/image.png';
import netflixLogo from '../../assets/image.png';

export const Experience = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center  py-8">
      <span className="text-[#7c3aed] font-medium text-[15px] mt-8">My Professional Journey</span>
      <h2  className="text-[50px] text-gray-800 mb-4 "
        style={{ fontWeight: "800" }}>Work Experience</h2>
      <div className="w-full max-w-5xl relative flex flex-col items-center">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#e9d5ff] -translate-x-1/2 z-0" />

        {/* Experience 1 - Top (right) */}
        <div className="w-full flex justify-end relative z-10 mb-24">
          <div className="relative flex flex-col items-end w-1/2 pr-8">
            <div className="bg-white rounded-2xl shadow-lg p-7 w-[420px] flex flex-col gap-2">
              <div className="flex items-center gap-4 mb-2">
                <img src={googleLogo} alt="Google" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <h3 className="text-xl font-bold">Senior Full-Stack Developer</h3>
                  <span className="text-[#7c3aed] font-semibold">Google</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm mb-2">
                <span>📍 San Francisco, CA</span>
                <span>📅 2022 - Present</span>
              </div>
              <p className="text-gray-600 text-base mb-2">
                Leading development of cloud-based solutions and mentoring junior developers. Architecting scalable microservices and implementing CI/CD pipelines.
              </p>
              <div>
                <span className="font-semibold text-gray-800">Key Achievements:</span>
                <ul className="list-disc ml-6 text-sm mt-1 text-[#7c3aed]">
                  <li>Led a team of 8 developers to deliver a $2M project on time</li>
                  <li>Improved application performance by 40% through optimization</li>
                  <li>Implemented automated testing, increasing code coverage to 95%</li>
                </ul>
              </div>
            </div>
            {/* Timeline dot */}
            <div className="absolute left-1 top-16 -ml-3 w-4 h-4 bg-white border-4 border-[#a78bfa] rounded-full z-20" />
          </div>
        </div>

        {/* Experience 2 - Bottom (left) */}
        <div className="w-full flex justify-start relative z-10 mb-24">
          <div className="relative flex flex-col items-start w-1/2 pl-8">
            <div className="bg-white rounded-2xl shadow-lg p-7 w-[420px] flex flex-col gap-2">
              <div className="flex items-center gap-4 mb-2">
                <img src={netflixLogo} alt="Meta" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                  <span className="text-[#7c3aed] font-semibold">Meta</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-sm mb-2">
                <span>📍 Menlo Park, CA</span>
                <span>📅 2020 - 2022</span>
              </div>
              <p className="text-gray-600 text-base mb-2">
                Developed and maintained React-based web applications. Collaborated with design teams to implement pixel-perfect UIs.
              </p>
              <div>
                <span className="font-semibold text-gray-800">Key Achievements:</span>
                <ul className="list-disc ml-6 text-sm mt-1 text-[#7c3aed]">
                  <li>Built features used by 100M+ daily active users</li>
                  <li>Reduced page load time by 60% using code splitting</li>
                  <li>Mentored 5 junior developers through onboarding</li>
                </ul>
              </div>
            </div>
            {/* Timeline dot */}
            <div className="absolute right-1 top-16 -mr-3 w-4 h-4 bg-white border-4 border-[#a78bfa] rounded-full z-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
