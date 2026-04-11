function OurManagement() {
  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div 
        className="relative min-h-[360px] md:min-h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80&fm=webp")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="site-container text-white px-4 animate-fade-in flex flex-col gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Management</h1>
            <p className="text-sm md:text-base leading-relaxed max-w-xl">
              Meet the visionary leaders behind PolicyKendra
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="site-container">

          {/* Neeraj Chaudhary Section (NOW FIRST) */}
          <div className="mb-20 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold text-purple-800 mb-4">NEERAJ CHAUDHARY</h2>
                <p className="text-base md:text-lg text-purple-600 mb-6">Director & Founder</p>

                <div className="text-sm md:text-base leading-relaxed text-gray-600 max-w-xl space-y-4">
                  <p className="mb-4">
                    Neeraj Chaudhary brings over 20 years of experience across both the insurance and banking sectors, combining financial insight with practical customer solutions.
                  </p>
                  <p className="mb-4">
                    His strategic thinking and operational expertise have been instrumental in shaping PolicyKendra’s growth and strengthening client relationships nationwide.
                  </p>
                  <p>
                    Neeraj remains committed to building innovative, reliable, and future-ready financial advisory services.
                  </p>
                </div>
              </div>

              <div className="relative group order-1 md:order-2">
                <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 transform transition-all duration-300 md:group-hover:scale-105">
                  <img 
                    src="https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/founder.webp"
                    alt="Neeraj Chaudhary" 
                    className="h-full w-full object-contain object-center p-4"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Vidya Jha Section (NOW SECOND) */}
          <div className="mb-20 animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              <div className="relative group">
                <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 transform transition-all duration-300 md:group-hover:scale-105">
                  <img 
                    src="https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/co-founder.webp"
                    alt="Vidya Jha" 
                    className="h-full w-full object-contain object-center p-4"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-purple-800 mb-4">VIDYA JHA</h2>
                <p className="text-base md:text-lg text-purple-600 mb-6">Co-Founder</p>

                <div className="text-sm md:text-base leading-relaxed text-gray-600 max-w-xl space-y-4">
                  <p className="mb-4">
                    With over two decades of experience in the insurance industry, Vidya Jha has played a pivotal role in transforming how advisory services are delivered to clients.
                  </p>
                  <p className="mb-4">
                    Her focus on transparency, ethical practices, and customer-centric solutions has helped PolicyKendra grow into a trusted name across the country.
                  </p>
                  <p>
                    She continues to guide the company’s vision with strong leadership and deep industry expertise.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OurManagement;
