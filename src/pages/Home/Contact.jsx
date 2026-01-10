import React from 'react';

export const Contact = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center py-8" style={{fontFamily: "Space Grotesk, Inter, Arial, sans-serif"}}>
      <span className="text-[#7c3aed] font-medium text-[15px] mt-8">Let's Talk</span>
      <h2 className="text-[50px] text-gray-800 mb-4 " style={{ fontWeight: "800"}}>Get In Touch</h2>
      <p className="text-gray-600 text-center max-w-xl mb-12">
        Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
      </p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Contact Form */}
        <form className="md:col-span-1 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">Your Name</label>
              <input type="text" placeholder="John Doe" className=" text-[14px] w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] bg-white" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">Your Email</label>
              <input type="email" placeholder="john@example.com" className="text-[14px] w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] bg-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Your Message</label>
            <textarea rows={5} placeholder="Tell me about your project..." className="text-[14px] w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] bg-white resize-none" />
          </div>
          <button type="submit" className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-[16px] py-3 rounded-xl flex items-center justify-center gap-2 text-lg transition-all mt-2">
            Send Message <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
</svg>
</span>
          </button>
        </form>
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#f8f8fa] hover:bg-[#ede9fe] rounded-xl p-5 flex items-center gap-4 group cursor-pointer transition-colors">
            <span className="bg-[#ede9fe] text-[#7c3aed] rounded-lg p-3 text-2xl transition-colors duration-200 group-hover:bg-[#7c3aed] group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
</span>
            <div>
              <div className="text-xs text-gray-500 font-semibold">Email</div>
              <div className="font-medium">alex@example.com</div>
            </div>
          </div>
          <div className="bg-[#f8f8fa] hover:bg-[#ede9fe] rounded-xl p-5 flex items-center gap-4 group cursor-pointer transition-colors">
            <span className="bg-[#ede9fe] text-[#7c3aed] rounded-lg p-3 text-2xl transition-colors duration-200 group-hover:bg-[#7c3aed] group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
</span>
            <div>
              <div className="text-xs text-gray-500 font-semibold">Phone</div>
              <div className="font-medium">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="bg-[#f8f8fa] hover:bg-[#ede9fe] rounded-xl p-5 flex items-center gap-4 group cursor-pointer transition-colors">
            <span className="bg-[#ede9fe] text-[#7c3aed] rounded-lg p-3 text-2xl transition-colors duration-200 group-hover:bg-[#7c3aed] group-hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span>
            <div>
              <div className="text-xs text-gray-500 font-semibold">Location</div>
              <div className="font-medium">San Francisco, CA</div>
            </div>
          </div>
          <div className="w-full mt-8">
            
        <div className=" border-t border-gray-200 pt-6">
          <p className='text-gray-500  text-[14px] mb-6'>Follow me on social media</p>
          <div className="flex items-center gap-4">
            <span className="group text-2xl bg-[#f3f3f6] hover:bg-[#7c3aed] rounded-lg p-2 cursor-pointer transition-colors duration-200">{/* GitHub */} <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path className="transition-colors duration-200 group-hover:fill-white" fill="#18181B" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg></span>
            <span className="group text-2xl bg-[#f3f3f6] hover:bg-[#7c3aed] rounded-lg p-2 cursor-pointer transition-colors duration-200">{/* LinkedIn */} <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path className="transition-colors duration-200 group-hover:fill-white" fill="#18181B" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></span>
            <span className="group text-2xl bg-[#f3f3f6] hover:bg-[#7c3aed] rounded-lg p-2 cursor-pointer transition-colors duration-200">{/* Twitter */} <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path className="transition-colors duration-200 group-hover:fill-white" fill="#18181B" d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg></span>
          </div>
        </div>
        {/* Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white rounded-2xl p-5 flex  gap-4 shadow-lg">
          <span className="w-4 h-3 mt-2 bg-green-400 rounded-full inline-block mr-2"></span>
          <div>
            <div className="font-semibold">Available for new projects</div>
            <div className="text-sm mt-1">I'm currently taking on new projects. Let's build something amazing together!</div>
          </div>
        </div>
      </div>
        </div>
        
      </div>
      {/* Socials and Banner */}
      
    </section>
  );
};
