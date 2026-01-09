import React from 'react';

export const Test = () => {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(120deg, #7b2ff2 20%, #0573e2ff 40%, #7b2ff2 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Space Grotesk, Inter, Arial, sans-serif',
      padding: '0',
      boxSizing: 'border-box',
    }}>

<h1 className='text-white font-bold text-[75px]'>Chamaththa Shamod</h1>
<h3 className='text-white font-medium text-[20px]'>Full-Stack Developer & UI/UX Enthusiast</h3>

      <p className='text-white w-[50%] text-center my-8'>Crafting elegant digital experiences with clean code and thoughtful design. Passionate about building products that make a difference.</p>


      <button className='bg-[#ffd34e] text-gray-600 px-7 py-3 rounded-md font-semibold text-[18px] shadow-md hover:bg-[#ffe082] transition cursor-pointer'> Let's Talk</button>


      {/* Feature cards */}
      <div style={{
        display: 'flex',
        gap: '32px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '0',
      }}>
       
        <div style={cardStyle}>
          <div style={cardTitleStyle}>1M+ free templates</div>
          <div style={cardDescStyle}>The perfect design for every need.</div>
          <div style={{marginTop: '18px'}}>
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=thumb&w=180&q=80" alt="Templates" style={imgStyle} />
          </div>
        </div>
       
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Social media marketing</div>
          <div style={cardDescStyle}>Schedule to socials. Watch the likes roll in.</div>
          <div style={{marginTop: '18px'}}>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=thumb&w=180&q=80" alt="Social" style={imgStyle} />
          </div>
        </div>
      
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Email marketing</div>
          <div style={cardDescStyle}>Send and track emails. Score more clicks.</div>
          <div style={{marginTop: '18px'}}>
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=thumb&w=180&q=80" alt="Email" style={imgStyle} />
          </div>
          <button style={{
            marginTop: '16px',
            background: '#e0e7ff',
            color: '#7b2ff2',
            fontWeight: 600,
            fontSize: '16px',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 20px',
            cursor: 'pointer',
          }}>Learn more</button>
        </div>
      
        <div style={cardStyle}>
          <div style={cardTitleStyle}>Event promotion</div>
          <div style={cardDescStyle}>Share on socials, email, web. Draw crowds!</div>
          <div style={{marginTop: '18px'}}>
            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=thumb&w=180&q=80" alt="Event" style={imgStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Card styles
const cardStyle = {
  background: '#fff',
  borderRadius: '24px',
  boxShadow: '0 4px 24px 0 rgba(30,98,230,0.10)',
  padding: '32px 28px',
  minWidth: '260px',
  maxWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '24px',
};

const cardTitleStyle = {
  fontWeight: 700,
  fontSize: '20px',
  color: '#1e293b',
  marginBottom: '8px',
  textAlign: 'center',
};

const cardDescStyle = {
  fontWeight: 400,
  fontSize: '15px',
  color: '#475569',
  textAlign: 'center',
};

const imgStyle = {
  width: '100%',
  maxWidth: '180px',
  borderRadius: '12px',
  boxShadow: '0 2px 8px 0 rgba(30,98,230,0.10)',
};
