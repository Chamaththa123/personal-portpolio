import React from 'react';

export const Contact = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-[#f7f7f8] py-8">
      <span className="text-[#7c3aed] font-medium text-sm mt-8">Let's Talk</span>
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
      <p className="text-gray-600 text-center max-w-xl mb-12">
        Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
      </p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Contact Form */}
        <form className="md:col-span-2 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] bg-white" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">Your Email</label>
              <input type="email" placeholder="john@example.com" className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] bg-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Your Message</label>
            <textarea rows={5} placeholder="Tell me about your project..." className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] bg-white resize-none" />
          </div>
          <button type="submit" className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-lg transition-all mt-2">
            Send Message <span className="ml-1">✈️</span>
          </button>
        </form>
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#f8f8fa] rounded-xl p-5 flex items-center gap-4">
            <span className="bg-[#ede9fe] text-[#7c3aed] rounded-lg p-3 text-2xl">✉️</span>
            <div>
              <div className="text-xs text-gray-500 font-semibold">Email</div>
              <div className="font-medium">alex@example.com</div>
            </div>
          </div>
          <div className="bg-[#f8f8fa] rounded-xl p-5 flex items-center gap-4">
            <span className="bg-[#ede9fe] text-[#7c3aed] rounded-lg p-3 text-2xl">📞</span>
            <div>
              <div className="text-xs text-gray-500 font-semibold">Phone</div>
              <div className="font-medium">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="bg-[#f8f8fa] rounded-xl p-5 flex items-center gap-4">
            <span className="bg-[#ede9fe] text-[#7c3aed] rounded-lg p-3 text-2xl">📍</span>
            <div>
              <div className="text-xs text-gray-500 font-semibold">Location</div>
              <div className="font-medium">San Francisco, CA</div>
            </div>
          </div>
        </div>
      </div>
      {/* Socials and Banner */}
      <div className="w-full max-w-5xl mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-gray-200 pt-6">
          <div className="flex items-center gap-4">
            <span className="text-2xl bg-[#f3f3f6] rounded-lg p-2 cursor-pointer">{/* GitHub */} <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#18181B" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg></span>
            <span className="text-2xl bg-[#f3f3f6] rounded-lg p-2 cursor-pointer">{/* LinkedIn */} <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#18181B" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></span>
            <span className="text-2xl bg-[#f3f3f6] rounded-lg p-2 cursor-pointer">{/* Twitter */} <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#18181B" d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg></span>
          </div>
        </div>
        {/* Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white rounded-2xl p-6 flex items-center gap-4 shadow-lg">
          <span className="w-3 h-3 bg-green-400 rounded-full inline-block mr-2"></span>
          <div>
            <div className="font-semibold">Available for new projects</div>
            <div className="text-sm mt-1">I'm currently taking on new projects. Let's build something amazing together!</div>
          </div>
        </div>
      </div>
    </section>
  );
};
