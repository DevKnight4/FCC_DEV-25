import { useRef } from 'react';
import React, { useState }  from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';



function ContactUs() {
	const [newName, setName] = useState("");
	
	const [newEmail, setEmail] = useState("");
	const [newMessage, setMessage] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const form = useRef();

	 const handleCloseAlert = () => {
	  setShowAlert(false);
	};

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      
    }, 3000);

    emailjs
      .sendForm('service_n5syje9', 'template_11magxv', form.current, {
        publicKey: 'FdGbMicLGYogvjO-Y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          
		  
		  
		  setName("");
		  
		  setEmail("");
		  setMessage("");



        },
        (error) => {
          console.log('FAILED...', error.text);
		  
		 
		  
        },
      );
	}

  
	

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0E17' }}>
      {/* Contact Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Partner with Us for Smarter Financial & Consulting Solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      value={newName} 
                      onChange={(e) => setName(e.target.value)}
                      
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:border-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-200">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={newEmail} 
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:border-gray-500"
                      placeholder="Enter your email address"
                    />
                  </div>

                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-200">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={newMessage} 
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 hover:border-gray-500 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                      isSubmitted
                        ? 'bg-green-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-cyan-500/25'
                    }`}
                    style={{
                      boxShadow: isSubmitted ? 'none' : '0 0 20px rgba(0, 230, 138, 0.3)'
                    }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </button>
                  
                </form>
              </div>
            </div>

            
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  We're here to help bring your vision to life. Reach out through any of the channels below.
                </p>
              </div>

              
              <div className="space-y-6">
                
                <div className="group flex items-center space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-cyan-500/30">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-200">
                      fcc@nitrr.com
                    </p>
                  </div>
                </div>

                
                <div className="group flex items-center space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-cyan-500/30">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-200">
                      +91 9399556248
                    </p>
                  </div>
                </div>

                
                <div className="group flex items-center space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 border border-transparent hover:border-cyan-500/30">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-200">
                      NIT Raipur, G.E Road<br />
                      Raipur
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="mt-8 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Quick Response</span>
                </div>
                <p className="text-gray-300 mt-2">
                  We typically respond within 2-4 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default ContactUs;
