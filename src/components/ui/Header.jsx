import React from 'react';


export const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 pt-6 pb-4 bg-transparent absolute top-0 left-0 w-full z-50"       style={{
        
        fontFamily: "Space Grotesk, Inter, Arial, sans-serif",
        
      }}>
      <div className="text-2xl font-bold text-gray-900 select-none">
        {'<'}<span className="text-purple-600">Dev/</span>{'>'}
      </div>
      <nav className="flex gap-8 flex-1 justify-center">
        <a href="#about" className="text-white  font-medium transition-colors">About</a>
        <a href="#education" className="text-white  font-medium transition-colors">Education</a>
        <a href="#experience" className="text-white  font-medium transition-colors">Experience</a>
        <a href="#skills" className="text-white  font-medium transition-colors">Skills</a>
        <a href="#projects" className="text-white  font-medium transition-colors">Projects</a>
        <a href="#contact" className="text-white  font-medium transition-colors">Contact</a>
      </nav>
      <a href="#resume" className="bg-[#ffd34e] text-gray-800 px-6 py-2 rounded-lg font-semibold text-base transition-colors hover:bg-purple-700 ml-6">Contact</a>
    </header>
  );
}
