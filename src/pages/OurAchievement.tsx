function OurAchievement() {
  const achievements = [
    {
      image: '/images/1.webp',
      title: ''
    },
    {
      image: '/images/28.webp',
      title: ''
    },
    {
      image: '/images/29.webp',
      title: ''
    },
    {
      image: '/images/30.webp',
      title: ''
    },
    {
      image: '/images/31.webp',
      title: ''
    },
    {
      image: '/images/32.webp',
      title: ''
    },
    {
      image: '/images/2.webp',
      title: ''
    },
    {
      image: '/images/3.webp',
      title: ''
    },
    {
      image: '/images/4.webp',
      title: ''
    },
    {
      image: '/images/5.webp',
      title: ''
    },
    {
      image: '/images/6.webp',
      title: ''
    },
    {
      image: '/images/7.webp',
      title: ''
    },
    {
      image: '/images/8.webp',
      title: ''
    },
    {
      image: '/images/9.webp',
      title: ''
    },
    {
      image: '/images/10.webp',
      title: ''
    },
    {
      image: '/images/11.webp',
      title: ''
    },
    {
      image: '/images/12.webp',
      title: ''
    },
    {
      image: '/images/13.webp',
      title: ''
    },
    {
      image: '/images/14.webp',
      title: ''
    },
    {
      image: '/images/15.webp',
      title: ''
    },
    {
      image: '/images/16.webp',
      title: ''
    },
    {
      image: '/images/17.webp',
      title: ''
    },
    {
      image: '/images/18.webp',
      title: ''
    },
    {
      image: '/images/19.webp',
      title: ''
    },
    {
      image: '/images/20.webp',
      title: ''
    },
    {
      image: '/images/21.webp',
      title: ''
    },
    {
      image: '/images/22.webp',
      title: ''
    },
    {
      image: '/images/23.webp',
      title: ''
    },
    {
      image: '/images/24.webp',
      title: ''
    },
    {
      image: '/images/25.webp',
      title: ''
    },
    {
      image: '/images/34.webp',
      title: ''
    },
    {
      image: '/images/26.webp',
      title: ''
    },
    {
      image: '/images/27.webp',
      title: ''
    }
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div
        className="relative min-h-[360px] md:min-h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1496469888073-80de7e952517?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80&fm=webp")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="site-container text-white px-4 animate-fade-in flex flex-col gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Achievements</h1>
            <p className="text-sm md:text-base leading-relaxed max-w-xl">A testament to our commitment to excellence</p>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="site-container">
          {/* Achievement Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 md:hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 md:h-64">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className={`w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-110 ${
                      achievement.image.endsWith('29.webp') ? '-rotate-90' : ''
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-xl font-semibold">{achievement.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Testimonials Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">"PolicyKendra made finding the right insurance policy simple and stress-free. Their team was incredibly helpful throughout the process."</p>
                <div className="font-semibold">- Kamal Wahi</div>
                <div className="text-sm text-gray-500">Business Owner</div>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">"I've been with PolicyKendra for over 6 years now. Their customer service is exceptional, and they always go above and beyond."</p>
                <div className="font-semibold">- Sujeet Barua</div>
                <div className="text-sm text-gray-500">Business Owner</div>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">"The best insurance advisory service I've ever worked with. They truly understand their clients' needs and deliver accordingly."</p>
                <div className="font-semibold">- Puneet Jain</div>
                <div className="text-sm text-gray-500">Business Owner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurAchievement;
