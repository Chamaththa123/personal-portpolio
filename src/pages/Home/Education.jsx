import React from 'react';

export const Education = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-[#f9fafb] py-8">
     <span className="text-[#7c3aed] font-medium text-[15px] mt-8">My Academic Journey</span>
      <h2  className="text-[50px] text-gray-800 mb-4 "
        style={{ fontWeight: "800" }}>Education</h2>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
        {/* Academic Background Timeline */}
        <div className="flex-1">
          <h3 className="flex items-center text-xl font-semibold mb-6">
            <span className="text-[#7c3aed] mr-2 text-2xl">🎓</span> Academic Background
          </h3>
          <div className="relative pl-8">
            {/* Timeline vertical line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[#a78bfa] z-0" />
            {/* Master Card */}
            <div className="relative mb-10">
              {/* Timeline Icon */}
              <div className="absolute left-0 top-8 w-8 h-8 flex items-center justify-center z-10">
                <span className="bg-white border-2 border-[#a78bfa] w-7 h-7 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#a78bfa" opacity="0.15"/>
                    <path d="M8 8h8v8H8z" fill="#a78bfa" opacity="0.3"/>
                    <path d="M12 7v5l3 2" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className="ml-12">
                <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-2">
                  <span className="text-[#7c3aed] text-base font-semibold">2018 - 2020</span>
                  <h4 className="text-2xl font-bold mt-1 mb-1">Master of Science in Computer Science</h4>
                  <span className="text-gray-800 font-semibold text-lg">Stanford University</span>
                  <p className="text-gray-500 text-base mt-1">Specialized in Artificial Intelligence and Machine Learning. Graduated with honors.</p>
                  <span className="inline-block mt-3 bg-[#ede9fe] text-[#7c3aed] text-base font-bold px-4 py-1 rounded-full shadow">GPA: 3.9/4.0</span>
                </div>
              </div>
            </div>
            {/* Bachelor Card */}
            <div className="relative mb-4">
              {/* Timeline Icon */}
              <div className="absolute left-0 top-8 w-8 h-8 flex items-center justify-center z-10">
                <span className="bg-white border-2 border-[#a78bfa] w-7 h-7 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#a78bfa" opacity="0.15"/>
                    <rect x="7" y="7" width="10" height="10" rx="3" fill="#a78bfa" opacity="0.3"/>
                    <path d="M12 7v5l3 2" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className="ml-12">
                <div className="bg-white rounded-2xl shadow p-8 flex flex-col gap-2">
                  <span className="text-[#7c3aed] text-base font-semibold">2014 - 2018</span>
                  <h4 className="text-2xl font-bold mt-1 mb-1">Bachelor of Science in Software Engineering</h4>
                  <span className="text-gray-800 font-semibold text-lg">MIT</span>
                  <p className="text-gray-500 text-base mt-1">Focus on full-stack development and software architecture. Dean's List all semesters.</p>
                  <span className="inline-block mt-3 bg-[#ede9fe] text-[#7c3aed] text-base font-bold px-4 py-1 rounded-full shadow">GPA: 3.8/4.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex-1">
          <h3 className="flex items-center text-xl font-semibold mb-6">
            <span className="text-[#7c3aed] mr-2 text-2xl">🏅</span> Certifications
          </h3>
          <div className="bg-gradient-to-br from-[#f3e8ff] to-[#f8fafc] rounded-2xl shadow p-8">
            {/* Cert List */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-[#ede9fe] text-[#7c3aed] rounded-lg p-2 text-xl">🏅</span>
                  <div>
                    <div className="font-semibold">AWS Solutions Architect</div>
                    <div className="text-xs text-gray-500">Amazon Web Services</div>
                  </div>
                </div>
                <span className="text-[#7c3aed] font-semibold">2023</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-[#ede9fe] text-[#7c3aed] rounded-lg p-2 text-xl">🏅</span>
                  <div>
                    <div className="font-semibold">Google Cloud Professional</div>
                    <div className="text-xs text-gray-500">Google</div>
                  </div>
                </div>
                <span className="text-[#7c3aed] font-semibold">2022</span>
              </div>
              <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="bg-[#ede9fe] text-[#7c3aed] rounded-lg p-2 text-xl">🏅</span>
                  <div>
                    <div className="font-semibold">Meta Front-End Developer</div>
                    <div className="text-xs text-gray-500">Meta</div>
                  </div>
                </div>
                <span className="text-[#7c3aed] font-semibold">2022</span>
              </div>
            </div>
            {/* Stats */}
            <div className="flex justify-between items-center border-t border-[#e9d5ff] pt-6">
              <div className="flex flex-col items-center">
                <span className="text-[#7c3aed] text-2xl font-bold">15+</span>
                <span className="text-xs text-gray-500 mt-1">Certifications</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#7c3aed] text-2xl font-bold">100+</span>
                <span className="text-xs text-gray-500 mt-1">Courses</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#7c3aed] text-2xl font-bold">500+</span>
                <span className="text-xs text-gray-500 mt-1">Hours Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
