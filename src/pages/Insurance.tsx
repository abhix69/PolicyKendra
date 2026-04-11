import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, HeartPulse, CarFront } from 'lucide-react';

function Insurance() {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <Helmet>
        <title>Insurance Plans in India | PolicyKendra</title>
        <meta
          name="description"
          content="Explore insurance plans in India with PolicyKendra. Choose from Health Insurance, Life Insurance, and Motor Insurance with expert guidance."
        />
      </Helmet>

      <section
        className="relative min-h-[420px] md:min-h-[520px] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30, 41, 59, 0.72), rgba(30, 41, 59, 0.72)), url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="site-container text-white text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Insurance Plans</h1>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              Compare the right insurance options for your needs. Select a category below to explore detailed health, life, and motor insurance pages.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="site-container">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Choose an Insurance Category</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
              <HeartPulse className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Insurance</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">
                Explore health insurance plans in India for individuals, families, and senior citizens.
              </p>
              <Link
                to="/health-insurance"
                className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold md:hover:bg-cyan-700 transition-colors"
              >
                Go to Health Insurance
              </Link>
            </article>

            <article className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Life Insurance</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">
                Compare life insurance and term insurance plans to secure your family’s future.
              </p>
              <Link
                to="/life-insurance"
                className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold md:hover:bg-blue-700 transition-colors"
              >
                Go to Life Insurance
              </Link>
            </article>

            <article className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-gray-100">
              <CarFront className="w-10 h-10 text-rose-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Motor Insurance</h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">
                Find the right car and bike insurance coverage with practical claim-focused comparisons.
              </p>
              <Link
                to="/motor-insurance"
                className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center px-6 py-3 rounded-full bg-rose-600 text-white font-semibold md:hover:bg-rose-700 transition-colors"
              >
                Go to Motor Insurance
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insurance;
