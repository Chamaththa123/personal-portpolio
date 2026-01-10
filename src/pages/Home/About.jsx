import React from 'react';
import devImg from '../../assets/image1.png'; // Update with your actual image path

export const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center py-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 mt-8">
        {/* Left: Image and Experience */}
        <div className="relative flex-shrink-0 flex justify-center items-center w-full md:w-1/2">
          <img
            src={devImg}
            alt="Developer desk"
            className="rounded-2xl shadow-xl w-[420px] h-[320px] object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-[#7c3aed] text-white rounded-xl px-7 py-6 flex flex-col items-center shadow-lg">
            <span className="text-4xl font-bold leading-none">5+</span>
            <span className="text-xs mt-1">Years of Experience</span>
          </div>
        </div>

        {/* Right: About Content */}
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-[#7c3aed] font-medium text-sm">Get To Know Me</span>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-2">About Me</h2>
          <h3 className="text-2xl font-semibold text-gray-800">Passionate developer crafting digital experiences</h3>
          <p className="text-gray-600 text-base max-w-2xl">
            I'm a full-stack developer based in San Francisco with a passion for creating beautiful, functional, and user-centered digital experiences. With 5+ years of experience in the field, I specialize in building scalable web applications and delivering clean, efficient code.
          </p>
          <p className="text-gray-600 text-base max-w-2xl">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts. I believe in continuous learning and staying updated with the latest industry trends.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {/* Clean Code */}
            <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
              <span className="text-[#7c3aed] text-2xl">&lt;/&gt;</span>
              <span className="font-semibold text-lg">Clean Code</span>
              <span className="text-gray-500 text-sm">Writing maintainable, scalable code following best practices</span>
            </div>
            {/* UI/UX Design */}
            <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
              <span className="text-[#7c3aed] text-2xl">&#128187;</span>
              <span className="font-semibold text-lg">UI/UX Design</span>
              <span className="text-gray-500 text-sm">Creating beautiful, intuitive user experiences</span>
            </div>
            {/* Performance */}
            <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
              <span className="text-[#7c3aed] text-2xl">&#9889;</span>
              <span className="font-semibold text-lg">Performance</span>
              <span className="text-gray-500 text-sm">Optimizing applications for speed and efficiency</span>
            </div>
            {/* Collaboration */}
            <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
              <span className="text-[#7c3aed] text-2xl">&#128101;</span>
              <span className="font-semibold text-lg">Collaboration</span>
              <span className="text-gray-500 text-sm">Working effectively in agile team environments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
