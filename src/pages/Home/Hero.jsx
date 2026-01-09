import React from "react";
import devImg from '../../assets/hero/mobile.png';
import { useEffect, useState } from "react";

export const Hero = () => {
  // Automated hover state for cards
  const [hoveredCard, setHoveredCard] = useState(-1);

  useEffect(() => {
    let current = 0;
    setHoveredCard(0);
    const interval = setInterval(() => {
      current = (current + 1) % 4;
      setHoveredCard(current);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] px-4 md:px-0 max-w-6xl mx-auto gap-12 md:gap-0">
    //   {/* Left: Text Content */}
    //   <div className="flex-1 flex flex-col items-start justify-center md:pr-12">
    //     <span className="text-purple-600 font-semibold mb-2 text-lg">Hello, I'm</span>
    //     <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-2">
    //       Alex <span className="text-purple-600">Johnson</span>
    //     </h1>
    //     <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-4">Full-Stack Developer & UI/UX Enthusiast</h2>
    //     <p className="text-gray-500 mb-8 max-w-xl">
    //       Crafting elegant digital experiences with clean code and thoughtful design. Passionate about building products that make a difference.
    //     </p>
    //     <div className="flex gap-4 mb-6">
    //       <a href="#work" className="bg-purple-600 text-white px-7 py-3 rounded-full font-semibold text-base shadow-md hover:bg-purple-700 transition">View My Work</a>
    //       <a href="#contact" className="bg-white border border-gray-300 text-gray-900 px-7 py-3 rounded-full font-semibold text-base shadow-sm hover:bg-gray-100 transition">Get In Touch</a>
    //     </div>
    //     <div className="flex gap-4">
    //       <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75c.414 0 .75.336.75.75v15a.75.75 0 01-.75.75h-9a.75.75 0 01-.75-.75v-15a.75.75 0 01.75-.75h9zm-7.5 0v16.5m6-16.5v16.5" /></svg></a>
    //       <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.268c.627-.958 1.761-1.268 2.5-1.268 1.933 0 3.5 1.567 3.5 3.5v5.5z"/></svg></a>
    //       <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.138a4.822 4.822 0 00-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg></a>
    //       <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.75a.75.75 0 01-.75.75h-17a.75.75 0 01-.75-.75v-.75" /></svg></a>
    //     </div>
    //   </div>
    //   {/* Right: Profile Image and Badges */}
    //   <div className="flex-1 flex items-center justify-center relative">
    //     <div className="relative">
    //       <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Johnson" className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white" />
    //       {/* Top right badge */}
    //       <div className="absolute -top-6 right-0 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 text-gray-700 font-semibold text-base">
    //         <span className="inline-block"><svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-purple-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9.75 17.25v-1.5a2.25 2.25 0 012.25-2.25h0a2.25 2.25 0 012.25 2.25v1.5M12 14.25v-2.25m0 0a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z' /></svg></span>
    //         5+ Years
    //       </div>
    //       {/* Bottom left badge */}
    //       <div className="absolute -bottom-6 left-0 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 text-gray-700 font-semibold text-base">
    //         <span className="inline-block"><svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5 text-pink-500' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8 0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.411-3.589 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z'/></svg></span>
    //         50+ Projects
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div
      className="relative"
      style={{
        minHeight: "100vh",
        width: "100vw",
        background:
          "linear-gradient(120deg, #7b2ff2 20%, #298cf0ff 40%, #7b2ff2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //   justifyContent: 'center',
        fontFamily: "Space Grotesk, Inter, Arial, sans-serif",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <h1 className="text-white font-bold text-[75px] mt-10">
        Chamaththa Shamod
      </h1>
      <h3 className="text-white font-medium text-[20px]">
        Full-Stack Developer & UI/UX Enthusiast
      </h3>

      <p className="text-white w-[50%] text-center my-8">
        Crafting elegant digital experiences with clean code and thoughtful
        design. Passionate about building products that make a difference.
      </p>

      <button className="bg-[#ffd34e] text-gray-600 px-7 py-3 rounded-md font-semibold text-[18px] shadow-md hover:bg-[#ffe082] transition cursor-pointer">
        {" "}
        Let's Talk
      </button>

      <div className="absolute bottom-0 flex gap-6 items-end">
        <div className="flex flex-col items-end">
          <div className={`bg-white h-[250px] w-[300px] rounded-t-4xl p-2 border border-transparent transition-all duration-300 cursor-pointer ${hoveredCard === 0 ? 'scale-105 h-[270px] w-[320px] border-4 border-black' : ''}`}> 
          <h1 className="text-center mt-2 text-[18px]">1M+ free templates</h1>
          <p className="text-center text-[14px]">
            Schedule to socials. Watch the likes roll in.
          </p>
          <img
                      src={devImg}
                      alt="Developer desk"
                     className="rounded-2xl shadow-xl w-[320px] h-[150px] object-cover"
                    />
        </div>
        </div>
        <div className="flex flex-col items-end">
          <div className={`bg-white h-[250px] w-[300px] rounded-t-4xl p-2 border border-transparent transition-all duration-300 cursor-pointer ${hoveredCard === 1 ? 'scale-105 h-[270px] w-[320px] border-4 border-black' : ''}`}> 
          <h1 className="text-center mt-2 text-[18px]">
            Social media marketing
          </h1>
          <p className="text-center text-[14px]">
            Schedule to socials. Watch the likes roll in.
          </p>
          <img
                      src={devImg}
                      alt="Developer desk"
                      className="rounded-2xl shadow-xl w-[320px] h-[150px] object-cover"
                    />
        </div>
        </div>
        <div className="flex flex-col items-end">
          <div className={`bg-white h-[250px] w-[300px] rounded-t-4xl p-2 border border-transparent transition-all duration-300 cursor-pointer ${hoveredCard === 2 ? 'scale-105 h-[270px] w-[320px] border-4 border-black' : ''}`}> 
          <h1 className="text-center mt-2 text-[18px]">
            Social media marketing
          </h1>
          <p className="text-center text-[14px]">
            Schedule to socials. Watch the likes roll in.
          </p>
          <img
                      src={devImg}
                      alt="Developer desk"
                      className="rounded-2xl shadow-xl w-[320px] h-[150px] object-cover"
                    />
        </div>
        </div>
        <div className="flex flex-col items-end">
          <div className={`bg-white h-[250px] w-[300px] rounded-t-4xl p-2 border border-transparent transition-all duration-300 cursor-pointer ${hoveredCard === 3 ? 'scale-105 h-[270px] w-[320px] border-4 border-black' : ''}`}> 
          <h1 className="text-center mt-2 text-[18px]">
            Social media marketing
          </h1>
          <p className="text-center text-[14px]">
            Schedule to socials. Watch the likes roll in.
          </p>
          <img
                      src={devImg}
                      alt="Developer desk"
                      className="rounded-2xl shadow-xl w-[320px] h-[150px] object-cover"
                    />
          </div>
        </div>
      </div>
    </div>
  );
};

// Card styles
const cardStyle = {
  background: "#fff",
  borderRadius: "24px",
  boxShadow: "0 4px 24px 0 rgba(30,98,230,0.10)",
  padding: "32px 28px",
  minWidth: "260px",
  maxWidth: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "24px",
};

const cardTitleStyle = {
  fontWeight: 700,
  fontSize: "20px",
  color: "#1e293b",
  marginBottom: "8px",
  textAlign: "center",
};

const cardDescStyle = {
  fontWeight: 400,
  fontSize: "15px",
  color: "#475569",
  textAlign: "center",
};

const imgStyle = {
  width: "100%",
  maxWidth: "180px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px 0 rgba(30,98,230,0.10)",
};
