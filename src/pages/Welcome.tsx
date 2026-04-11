import { Shield, Award, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Welcome() {
  const partnerLogos = [
    '/images/ageas.webp',
    '/images/pnb.webp',
    '/images/icicip.webp',
    '/images/bajaj.webp',
    '/images/max.webp',
    '/images/tata.webp'
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>Best Insurance Plans in India | PolicyKendra</title>
        <meta
          name="description"
          content="Compare the best insurance plans in India including health, life, and motor insurance. Get expert advice with PolicyKendra."
        />
        <meta property="og:title" content="Best Insurance Plans in India | PolicyKendra" />
        <meta
          property="og:description"
          content="Compare the best insurance plans in India including health, life, and motor insurance. Get expert advice with PolicyKendra."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.policykendra.in/" />
      </Helmet>

      {/* Hero Section */}
      <div 
        className="relative min-h-[520px] md:min-h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80&fm=webp")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="site-container text-white animate-fade-in flex flex-col gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl">Compare the Best Insurance Plans in India</h1>
            <p className="text-sm md:text-base leading-relaxed max-w-xl">
              Find the right health, life, and motor insurance plans with expert guidance from PolicyKendra. Secure your future with trusted insurance solutions.
            </p>
            <Link
              to="/contact"
              className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-full text-base font-semibold md:hover:bg-blue-700 transition duration-300 mt-4 md:mt-0"
            >
              Get Free Insurance Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="py-12 bg-gray-50">
        <div className="site-container">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-16 h-16 object-contain md:hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="site-container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose PolicyKendra?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">Wide range of insurance policies tailored to your needs</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">Professional advisors to help you make informed decisions</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600">Dedicated support team available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Insurance Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Insurance</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-xl">
                Get the best health insurance plans in India for individuals and families. Compare policies, premiums, and coverage options easily.
              </p>
              <Link to="/health-insurance" className="w-full md:w-auto min-h-[48px] inline-flex items-center mt-4 text-blue-600 font-medium md:hover:text-blue-700">
                Explore Health Plans
              </Link>
            </article>
            <article className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Life Insurance</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-xl">
                Secure your family&apos;s future with top life insurance and term insurance plans in India tailored to your needs.
              </p>
              <Link to="/life-insurance" className="w-full md:w-auto min-h-[48px] inline-flex items-center mt-4 text-blue-600 font-medium md:hover:text-blue-700">
                Explore Life Plans
              </Link>
            </article>
            <article className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Motor Insurance</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 max-w-xl">
                Compare car and bike insurance plans in India. Get affordable motor insurance with complete coverage.
              </p>
              <Link to="/motor-insurance" className="w-full md:w-auto min-h-[48px] inline-flex items-center mt-4 text-blue-600 font-medium md:hover:text-blue-700">
                Explore Motor Plans
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Why Insurance in India */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Insurance is Important in India</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Insurance plays a crucial role in financial planning in India. With rising medical costs and uncertainties, having the right health insurance plan ensures that you and your family are protected during emergencies. Life insurance provides long-term financial security, while motor insurance protects you from unexpected expenses related to accidents or damages. Choosing the right insurance plan in India can help you manage risks effectively and secure your future.
          </p>
        </div>
      </section>

      {/* Compare Plans Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Compare Insurance Plans Easily</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center max-w-xl mx-auto">
            PolicyKendra helps you compare the best insurance plans in India from top providers. Whether you are looking for affordable health insurance, reliable life insurance, or comprehensive motor insurance, our experts guide you in choosing the right policy based on your needs and budget.
          </p>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Insurance Advisor Near You in Delhi</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center max-w-xl mx-auto">
            Looking for an insurance advisor near you? PolicyKendra offers expert insurance guidance in Delhi and nearby areas. Whether you need health insurance, life insurance, or motor insurance, our team helps you find the best policies quickly and efficiently.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <article className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Which is the best health insurance in India?</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-xl">The best health insurance depends on your needs, budget, and coverage requirements.</p>
            </article>
            <article className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How can I compare insurance plans?</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-xl">You can compare plans based on premium, benefits, claim settlement ratio, and coverage.</p>
            </article>
            <article className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is term insurance?</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-xl">Term insurance provides life coverage for a specific period at affordable premiums.</p>
            </article>
            <article className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Is motor insurance mandatory in India?</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-xl">Yes, third-party motor insurance is legally required in India.</p>
            </article>
            <article className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How can I get insurance near me?</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-xl">You can contact PolicyKendra for expert assistance and quick policy comparisons.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-blue-600 py-12 md:py-20">
        <div className="site-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-sm md:text-base leading-relaxed text-white mb-8 max-w-xl mx-auto">Contact us today for a free consultation</p>
          <Link
            to="/contact"
            className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-full text-base font-semibold md:hover:bg-gray-100 transition duration-300 mt-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
