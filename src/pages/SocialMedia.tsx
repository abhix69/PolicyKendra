import { Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';

function SocialMedia() {
  return (
    <div className="min-h-screen animate-fade-in">
      {/* Hero Section */}
      <div 
        className="relative min-h-[360px] md:min-h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80&fm=webp")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="site-container text-white px-4 animate-fade-in flex flex-col gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Connect With Us</h1>
            <p className="text-sm md:text-base leading-relaxed max-w-xl">Stay updated with our latest news and updates</p>
          </div>
        </div>
      </div>

      <div className="py-12 md:py-20 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a 
              href="https://www.youtube.com/@policykendra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-50 p-4 md:p-6 rounded-lg md:hover:bg-red-50 transition-all duration-300 animate-slide-up"
            >
              <Youtube className="w-16 h-16 text-red-600 mb-4 mx-auto md:group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-center mb-2">YouTube</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 text-center">Watch our insurance guides and tips</p>
            </a>

            <a 
              href="https://www.instagram.com/policykendra.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-50 p-4 md:p-6 rounded-lg md:hover:bg-pink-50 transition-all duration-300 animate-slide-up"
            >
              <Instagram className="w-16 h-16 text-pink-600 mb-4 mx-auto md:group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-center mb-2">Instagram</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 text-center">Follow our daily updates and stories</p>
            </a>

            <a 
              href="https://www.facebook.com/profile.php?id=61572488695969&sk=about" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-50 p-4 md:p-6 rounded-lg md:hover:bg-blue-50 transition-all duration-300 animate-slide-up"
            >
              <Facebook className="w-16 h-16 text-blue-600 mb-4 mx-auto md:group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-center mb-2">Facebook</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 text-center">Join our community discussions</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/policy-kendra-bb552a348/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gray-50 p-4 md:p-6 rounded-lg md:hover:bg-blue-50 transition-all duration-300 animate-slide-up"
            >
              <Linkedin className="w-16 h-16 text-blue-800 mb-4 mx-auto md:group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-center mb-2">LinkedIn</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 text-center">Connect with our professionals</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
