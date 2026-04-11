import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Menu, PhoneCall, X } from 'lucide-react';
import companyLogo from '../images/logo.webp';

const Welcome = lazy(() => import('./pages/Welcome'));
const About = lazy(() => import('./pages/About'));
const OurManagement = lazy(() => import('./pages/OurManagement'));
const Contact = lazy(() => import('./pages/Contact'));
const SocialMedia = lazy(() => import('./pages/SocialMedia'));
const AssociatedBrands = lazy(() => import('./pages/AssociatedBrands'));
const OurAchievement = lazy(() => import('./pages/OurAchievement'));
const Insurance = lazy(() => import('./pages/Insurance'));
const HealthInsurance = lazy(() => import('./pages/HealthInsurance'));
const LifeInsurance = lazy(() => import('./pages/LifeInsurance'));
const MotorInsurance = lazy(() => import('./pages/MotorInsurance'));
const NotFound = lazy(() => import('./pages/NotFound'));

const routePaths = {
  home: '/',
  about: '/about',
  insurance: '/insurance',
  management: '/our-management',
  contact: '/contact',
  social: '/social',
  brands: '/associated-brands',
  achievement: '/our-achievements',
  healthInsurance: '/health-insurance',
  lifeInsurance: '/life-insurance',
  motorInsurance: '/motor-insurance'
} as const;

const navItems = [
  { to: routePaths.home, label: 'Welcome' },
  { to: routePaths.about, label: 'About Us' },
  { to: routePaths.insurance, label: 'Insurance' },
  { to: routePaths.management, label: 'Our Management' },
  { to: routePaths.contact, label: 'Contact' },
  { to: routePaths.social, label: 'Social Media' },
  { to: routePaths.brands, label: 'Associated Brands' },
  { to: routePaths.achievement, label: 'Our Achievements' }
];

const insuranceSubItems = [
  { to: routePaths.healthInsurance, label: 'Health Insurance' },
  { to: routePaths.lifeInsurance, label: 'Life Insurance' },
  { to: routePaths.motorInsurance, label: 'Motor Insurance' }
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isInsuranceActive =
    pathname === routePaths.insurance ||
    pathname === routePaths.healthInsurance ||
    pathname === routePaths.lifeInsurance ||
    pathname === routePaths.motorInsurance;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const desktopNavClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
      isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
    }`;

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
    }`;

  const desktopItemBase = 'px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-200';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollToTop />

      <nav className="bg-white/95 backdrop-blur shadow-md fixed w-full z-50 border-b border-gray-100">
        <div className="site-container">
          <div className="flex justify-between h-16 items-center gap-4">
            <NavLink to={routePaths.home} className="flex items-center shrink-0">
              <img
                src={companyLogo}
                alt="PolicyKendra company logo"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-100"
                loading="eager"
                decoding="async"
              />
              <span className="ml-2 text-xl font-bold text-gray-800 leading-none">PolicyKendra</span>
            </NavLink>

            <div className="hidden md:flex items-center gap-1 ml-4">
              {navItems.map((item) => (
                item.to === '/insurance' ? (
                  <div key={item.to} className="relative group">
                    <NavLink
                      to={item.to}
                      className={`${desktopItemBase} ${
                        isInsuranceActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                      }`}
                    >
                      {item.label}
                    </NavLink>
                    <div className="absolute left-0 top-full mt-1 hidden group-hover:block min-w-[220px] rounded-lg border border-gray-200 bg-white shadow-lg p-2">
                      {insuranceSubItems.map((subItem) => (
                        <NavLink
                          key={subItem.to}
                          to={subItem.to}
                          className={({ isActive }) =>
                            `block px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                              isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
                            }`
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink key={item.to} to={item.to} className={desktopNavClass} end={item.to === routePaths.home}>
                    {item.label}
                  </NavLink>
                )
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-label="Toggle navigation menu"
              >
                <Menu className="block h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="h-16 px-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={companyLogo}
              alt="PolicyKendra company logo"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-blue-100"
              loading="eager"
              decoding="async"
            />
            <span className="ml-2 text-lg font-bold text-gray-800">PolicyKendra</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-3 space-y-1 overflow-y-auto h-[calc(100%-4rem)]">
          {navItems.map((item) => (
            item.to === '/insurance' ? (
              <div key={item.to} className="space-y-1">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive || isInsuranceActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
                <div className="pl-4 space-y-1">
                  {insuranceSubItems.map((subItem) => (
                    <NavLink
                      key={subItem.to}
                      to={subItem.to}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileNavClass}
                end={item.to === routePaths.home}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            )
          ))}
        </div>
      </aside>

      <main className="pt-16">
        <Suspense
          fallback={
            <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-gray-600">
              Loading page...
            </div>
          }
        >
          <Routes>
            <Route path={routePaths.home} element={<Welcome />} />
            <Route path={routePaths.about} element={<About />} />
            <Route path={routePaths.insurance} element={<Insurance />} />
            <Route path={routePaths.management} element={<OurManagement />} />
            <Route path={routePaths.contact} element={<Contact />} />
            <Route path={routePaths.social} element={<SocialMedia />} />
            <Route path={routePaths.brands} element={<AssociatedBrands />} />
            <Route path={routePaths.achievement} element={<OurAchievement />} />
            <Route path={routePaths.healthInsurance} element={<HealthInsurance />} />
            <Route path={routePaths.lifeInsurance} element={<LifeInsurance />} />
            <Route path={routePaths.motorInsurance} element={<MotorInsurance />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <a
        href="https://wa.me/919911555604"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab fixed bottom-5 left-4 z-50"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-fab__icon-wrap">
          <svg viewBox="0 0 16 16" className="whatsapp-fab__icon" fill="white" aria-hidden="true">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </span>
        <span className="whatsapp-fab__bg" aria-hidden="true" />
      </a>

      <a
        href="tel:+919911555604"
        className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
        aria-label="Call now +91 9911555604"
      >
        <PhoneCall className="h-5 w-5" />
        <span>Call Now!</span>
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
