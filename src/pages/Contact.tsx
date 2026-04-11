import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contact() {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps?q=28.6184025,77.0321361', '_blank');
  };

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div 
        className="relative min-h-[360px] md:min-h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80&fm=webp")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="site-container text-white px-4 animate-fade-in flex flex-col gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contact Us</h1>
            <p className="text-sm md:text-base leading-relaxed max-w-xl">Get in touch with our expert team for personalized insurance guidance</p>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-20 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-xl"><strong>PolicyKendra</strong> Plot No -120
UGF , Front Side , Sewak Park , 
Near Metro Piller No. 782 ,Dwarka More , Delhi 110059<br />India</p>
                    <button
                      onClick={openGoogleMaps}
                      className="mt-2 text-blue-600 md:hover:text-blue-800 font-medium flex items-center"
                    >
                      View on Google Maps
                      <MapPin className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600"> +91 9811315408</p>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600"> +91 9911555604</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600">contact@policykendra.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600">Monday - Saturday: 10:00 AM - 6:30 PM<br/></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-[1px] shadow-2xl">
                <div className="rounded-3xl bg-white/95 p-6 md:p-8 backdrop-blur-sm">
                  <div className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Quick Enquiry</p>
                    <h2 className="mt-2 text-3xl font-bold text-slate-900">Send us your requirement</h2>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600">
                      Share your details and we will reach out with the right insurance guidance.
                    </p>
                  </div>

                  <form
                    action="https://formsubmit.co/contact.policykendra@gmail.com"
                    method="POST"
                    className="grid grid-cols-1 gap-5"
                  >
                    <input type="hidden" name="_subject" value="New PolicyKendra enquiry" />
                    <input type="hidden" name="_captcha" value="false" />

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-700">Full Name</span>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Enter your full name"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-700">Phone Number</span>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Enter your phone number"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-700">Email Address</span>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Enter your email address"
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-slate-700">Requirement</span>
                        <select
                          name="requirement"
                          required
                          defaultValue=""
                          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                        >
                          <option value="" disabled>
                            Select insurance type
                          </option>
                          <option value="Health Insurance">Health Insurance</option>
                          <option value="Life Insurance">Life Insurance</option>
                          <option value="Motor Insurance">Motor Insurance</option>
                        </select>
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-slate-700">Additional Details</span>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell us what you need, your timeline, or any specific policy questions"
                        className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </label>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 focus:outline-none focus:ring-4 focus:ring-blue-200"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
