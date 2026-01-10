import React from 'react';
// Place your project images in assets and update the paths below
import ecommerceImg from '../../assets/image1.png';
import aiImg from '../../assets/image1.png';
import analyticsImg from '../../assets/image.png';
import socialImg from '../../assets/image.png';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard. Built with Next.js and Node.js.',
    img: ecommerceImg,
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    title: 'AI Content Generator',
    desc: 'An AI-powered content generation tool that helps marketers create engaging copy. Integrated with GPT-4 API.',
    img: aiImg,
    tech: ['React', 'Python', 'OpenAI', 'FastAPI'],
  },
  {
    title: 'Real-time Analytics Dashboard',
    desc: 'A comprehensive analytics dashboard with real-time data visualization and custom reporting features.',
    img: analyticsImg,
    tech: ['React', 'D3.js'],
  },
  {
    title: 'Social Media Scheduler',
    desc: 'A social media management tool for scheduling posts across multiple platforms with analytics tracking.',
    img: socialImg,
    tech: ['Vue.js', 'Node.js'],
  },
];

export const Projects = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-[#f7f7f8] py-8">
      <span className="text-[#7c3aed] font-medium text-[15px] mt-8">My Recent Work</span>
      <h2  className="text-[50px] text-gray-800 mb-4 "
        style={{ fontWeight: "800" }}>Featured Projects</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {/* Top row */}
        <div className="flex flex-col gap-8">
          {/* E-Commerce Platform */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <img src={projects[0].img} alt={projects[0].title} className="h-48 w-full object-cover" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-1">{projects[0].title}</h3>
              <p className="text-gray-600 text-sm mb-3">{projects[0].desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {projects[0].tech.map((t) => (
                  <span key={t} className="bg-[#ede9fe] text-[#7c3aed] text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
          {/* Real-time Analytics Dashboard */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="flex items-center">
              <img src={projects[2].img} alt={projects[2].title} className="h-20 w-20 object-cover m-4 rounded-lg" />
              <div className="flex flex-col flex-1 p-2">
                <h3 className="text-lg font-bold mb-1">{projects[2].title}</h3>
                <p className="text-gray-600 text-sm mb-2">{projects[2].desc}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[2].tech.map((t) => (
                    <span key={t} className="bg-[#ede9fe] text-[#7c3aed] text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-8">
          {/* AI Content Generator */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <img src={projects[1].img} alt={projects[1].title} className="h-48 w-full object-cover" />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-1">{projects[1].title}</h3>
              <p className="text-gray-600 text-sm mb-3">{projects[1].desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {projects[1].tech.map((t) => (
                  <span key={t} className="bg-[#ede9fe] text-[#7c3aed] text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
          {/* Social Media Scheduler */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="flex items-center">
              <img src={projects[3].img} alt={projects[3].title} className="h-20 w-20 object-cover m-4 rounded-lg" />
              <div className="flex flex-col flex-1 p-2">
                <h3 className="text-lg font-bold mb-1">{projects[3].title}</h3>
                <p className="text-gray-600 text-sm mb-2">{projects[3].desc}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[3].tech.map((t) => (
                    <span key={t} className="bg-[#ede9fe] text-[#7c3aed] text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-4 px-8 py-2 border-2 border-[#7c3aed] text-[#7c3aed] font-semibold rounded-full flex items-center gap-2 hover:bg-[#ede9fe] transition-all">
        View All Projects <span className="ml-1">→</span>
      </button>
    </section>
  );
};
