function AssociatedBrands() {
  const insurancePartners = {
    life: [
      { name: 'Ageas Federal', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/ageas.webp' },
      { name: 'PNB MetLife', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/pnb.webp' },
      { name: 'Bajaj Allianz', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/bajaj.webp' },
      { name: 'ICICI Prudential', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/icicip.webp' },
      { name: 'HDFC Life', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/hdfclife.webp' },
      { name: 'Tata AIA', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/tata.webp' },
      { name: 'Max Life', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/max.webp' }
    ],
    health: [
      { name: 'Niva Bupa', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/niva.webp' },
      { name: 'Care Health', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/car.webp' },
      { name: 'Star Health', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/star.webp' },
      { name: 'HDFC ERGO', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/hdfcergo.webp' },
      { name: 'ICICI Lombard', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/icicil.webp' }
    ],
    motor: [
      { name: 'Bajaj Allianz Car Insurance', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/bajaj.webp' },
      { name: 'ICICI Lombard Car Insurance', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/icicil.webp' },
      { name: 'Cholamandalam MS Car Insurance', logo: 'https://raw.githubusercontent.com/abhix6/PolicyKendra/main/images/chola.webp' }
    ]
  };

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div 
        className="relative min-h-[360px] md:min-h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80&fm=webp")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="site-container text-white px-4 animate-fade-in flex flex-col gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Trusted Partners</h1>
            <p className="text-sm md:text-base leading-relaxed max-w-xl">Collaborating with industry leaders to provide you the best insurance solutions</p>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-20 bg-white">
        <div className="site-container">
          {/* Life Insurance Partners */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Life Insurance Partners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {insurancePartners.life.map((partner, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md md:hover:shadow-xl transition-all duration-300 transform md:group-hover:scale-105">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 mx-auto mb-4 object-contain transition-all duration-300 md:group-hover:scale-110" 
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-center text-sm md:text-base font-medium text-gray-800">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Insurance Partners */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text">
              Health Insurance Partners
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {insurancePartners.health.map((partner, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md md:hover:shadow-xl transition-all duration-300 transform md:group-hover:scale-105">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 mx-auto mb-4 object-contain transition-all duration-300 md:group-hover:scale-110" 
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-center text-sm md:text-base font-medium text-gray-800">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Motor Insurance Partners */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">
              Motor Insurance Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {insurancePartners.motor.map((partner, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md md:hover:shadow-xl transition-all duration-300 transform md:group-hover:scale-105">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 mx-auto mb-4 object-contain transition-all duration-300 md:group-hover:scale-110" 
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="text-center text-sm md:text-base font-medium text-gray-800">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssociatedBrands;
