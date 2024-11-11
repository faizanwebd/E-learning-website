import Heading from "./Heading";
import Section from "./Section";
import { socials } from "../constants";

const Roadmap = () => {
  return (
    <Section crosses className="!px-0 !py-10" id="contact">
      <div className="container "> <br /> <br />
        <Heading title="Get in Touch with Us" text="We're here to answer any questions you may have and provide the support you need. Reach out to us, and let's start a conversation."/ >
        
        {/* Contact Form */}
        <form className="relative bg-opacity-40 bg-gray-900 p-6 rounded-2xl shadow-2xl max-w-lg mx-auto backdrop-blur-md border border-gray-500 border-opacity-40" aria-labelledby="contact-form-title">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-30 rounded-2xl blur-md -z-10"></div>
          
          <h2 id="contact-form-title" className="text-2xl text-white font-semibold text-center mb-6">Contact Us</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <input
                type="text"
                id="first-name"
                className="peer pt-6 pb-2 pl-4 pr-3 rounded-lg bg-transparent border border-gray-600 text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 w-full transition-all duration-300"
                placeholder="First Name"
                required
                aria-label="First Name"
                onFocus={(e) => e.target.placeholder = ''}  // Clear placeholder on focus
                onBlur={(e) => e.target.placeholder = e.target.value ? '' : 'First Name'}  // Restore placeholder if empty on blur
              />
              <label
                htmlFor="first-name"
                className="absolute left-4 top-4 text-sm text-gray-400 transition-all duration-300 transform origin-top-left pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500"
              >
                First Name
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="last-name"
                className="peer pt-6 pb-2 pl-4 pr-3 rounded-lg bg-transparent border border-gray-600 text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 w-full transition-all duration-300"
                placeholder="Last Name"
                required
                aria-label="Last Name"
                onFocus={(e) => e.target.placeholder = ''}  // Clear placeholder on focus
                onBlur={(e) => e.target.placeholder = e.target.value ? '' : 'Last Name'}  // Restore placeholder if empty on blur
              />
              <label
                htmlFor="last-name"
                className="absolute left-4 top-4 text-sm text-gray-400 transition-all duration-300 transform origin-top-left pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500"
              >
                Last Name
              </label>
            </div>
          </div>
          
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              className="peer pt-6 pb-2 pl-4 pr-3 rounded-lg bg-transparent border border-gray-600 text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 w-full transition-all duration-300"
              placeholder="Email Address"
              required
              aria-label="Email Address"
              onFocus={(e) => e.target.placeholder = ''}  // Clear placeholder on focus
              onBlur={(e) => e.target.placeholder = e.target.value ? '' : 'Email Address'}  // Restore placeholder if empty on blur
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-4 text-sm text-gray-400 transition-all duration-300 transform origin-top-left pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500"
            >
              Email Address
            </label>
          </div>
          
          <div className="relative mb-4">
            <input
              type="text"
              id="company"
              className="peer pt-6 pb-2 pl-4 pr-3 rounded-lg bg-transparent border border-gray-600 text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 w-full transition-all duration-300"
              placeholder="Company"
              required
              aria-label="Company"
              onFocus={(e) => e.target.placeholder = ''}  // Clear placeholder on focus
              onBlur={(e) => e.target.placeholder = e.target.value ? '' : 'Company'}  // Restore placeholder if empty on blur
            />
            <label
              htmlFor="company"
              className="absolute left-4 top-4 text-sm text-gray-400 transition-all duration-300 transform origin-top-left pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500"
            >
              Company
            </label>
          </div>
          
          <div className="relative mb-4">
            <textarea
              id="message"
              className="peer pt-6 pb-2 pl-4 pr-3 rounded-lg bg-transparent border border-gray-600 text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 w-full h-32 resize-none transition-all duration-300"
              placeholder="Message"
              required
              aria-label="Message"
              onFocus={(e) => e.target.placeholder = ''}  // Clear placeholder on focus
              onBlur={(e) => e.target.placeholder = e.target.value ? '' : 'Message'}  // Restore placeholder if empty on blur
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-4 text-sm text-gray-400 transition-all duration-300 transform origin-top-left pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500" 
            >
              Message
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 shadow-lg transition duration-300 transform hover:scale-105"
            aria-label="Submit"
          >
            Submit
          </button>
        </form>

        {/* Footer */}
        <footer className="mt-20 text-center text-white">
          <div className="flex justify-center gap-20 space-x-20">
            {/* Pages Links */}
            <div>
              <h3 className="font-semibold mb-2">Pages</h3>
              <ul className="space-y-1">
                <li><a href="#hero" className="hover:text-purple-500" aria-label="Home">Home</a></li>
                <li><a href="#features" className="hover:text-purple-500" aria-label="Upskill">Upskill</a></li>
                <li><a href="#how-to-use" className="hover:text-purple-500" aria-label="Careers">Careers</a></li>
                <li><a href="#pricing" className="hover:text-purple-500" aria-label="Services">Services</a></li>
                <li><a href="#contact" className="hover:text-purple-500" aria-label="Contact">Contact</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1">
                <li><a href="/terms" className="hover:text-purple-500" aria-label="Terms of Service">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-purple-500" aria-label="Privacy Policy">Privacy Policy</a></li>
                <li><a href="/refund" className="hover:text-purple-500" aria-label="Refund Policy">Refund Policy</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <ul className="flex space-x-4">
                {socials.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-purple-500 transition-all"
                    aria-label={`Follow us on ${item.title}`}
                  >
                    <img src={item.iconUrl} width={16} height={16} alt={item.title} className="text-white hover:text-purple-500" />
                  </a>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 ">
            <p>© {new Date().getFullYear()}. GokBoru Tech's. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Section>
  );
};

export default Roadmap;