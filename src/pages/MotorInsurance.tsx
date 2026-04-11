import { CarFront, FileCheck2, Gauge, Wrench } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function MotorInsurance() {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <Helmet>
        <title>Best Motor Insurance Plans in India | PolicyKendra</title>
        <meta
          name="description"
          content="Compare car and bike insurance plans in India with PolicyKendra. Get expert guidance near you for comprehensive, third-party, and add-on motor insurance cover."
        />
        <meta property="og:title" content="Best Motor Insurance Plans in India | PolicyKendra" />
        <meta
          property="og:description"
          content="Find affordable and reliable motor insurance in India with transparent comparison and advisor support from PolicyKendra."
        />
      </Helmet>

      <section
        className="relative min-h-[520px] md:min-h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(127, 29, 29, 0.72), rgba(127, 29, 29, 0.72)), url("https://images.openai.com/static-rsc-4/7BwsOS5XsQaEzBznGZfwRqYoSOPLaaMJ8oorxO1HbVttnle2DSpPL4WMxp3qeMnXxYHxRbFg92wL2uYfYAGVQRPNebV3XCgF8KnCD1U0QTkKnCd9OpaDj0rXPNUw5Q-J8H-Qf6WfwrQE6E6znrycXJhCU8GRW_Kx6A4dNW0byLbwiYyGcCb60eKPBxjPiZdb?purpose=fullsize")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="site-container text-white animate-fade-in flex flex-col gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
            <p className="uppercase tracking-wide text-rose-200 font-semibold mb-4">Motor Insurance in India</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
              Compare Car and Bike Insurance Plans in India with Expert Help
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-rose-100 max-w-xl">
              PolicyKendra helps you compare motor insurance near me options, from legally required third-party policies to comprehensive plans with strong add-on protection.
            </p>
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <Link to="/contact" className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center bg-white text-rose-900 font-semibold px-7 py-3 rounded-full md:hover:bg-rose-50 transition-colors">
                Get Motor Insurance Quotes
              </Link>
              <Link to="/health-insurance" className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center border border-rose-200 text-white px-7 py-3 rounded-full md:hover:bg-white/10 transition-colors">
                Explore Health Insurance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-rose-50">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Benefits of Choosing the Right Motor Insurance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm"><CarFront className="w-10 h-10 text-rose-700 mb-3" /><h3 className="font-semibold mb-2">Accident Protection</h3><p className="text-sm md:text-base leading-relaxed text-slate-600">Covers repair costs after collision, reducing out-of-pocket burden.</p></div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm"><FileCheck2 className="w-10 h-10 text-rose-700 mb-3" /><h3 className="font-semibold mb-2">Legal Compliance</h3><p className="text-sm md:text-base leading-relaxed text-slate-600">Third-party motor insurance is mandatory in India for road legality.</p></div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm"><Wrench className="w-10 h-10 text-rose-700 mb-3" /><h3 className="font-semibold mb-2">Cashless Garage Support</h3><p className="text-sm md:text-base leading-relaxed text-slate-600">Get fast repair service through network garages and simplified claims.</p></div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm"><Gauge className="w-10 h-10 text-rose-700 mb-3" /><h3 className="font-semibold mb-2">Add-on Flexibility</h3><p className="text-sm md:text-base leading-relaxed text-slate-600">Enhance protection with zero depreciation, engine cover, and roadside assistance.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="site-container space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="https://images.openai.com/static-rsc-4/pKJsxiAnobE0ToyxeCl9sakd-3_5cHHGyHvkthvQvnugTCrK1yCkjDk7VbTsUMOA41EKeqBrK2HHMzdLxGBO2n7Lzn8lpWIqh8L6jLCZwK46JuG86mnSQyNWCuXZxwmHLT5EszRWv6Hjh2J7f2CIx8t1B2CMHVyAZC5BDt8k4mAFG_kW2az-RKvvKrXkVn1A?purpose=fullsize" alt="motor insurance plans in India for car and bike" className="rounded-xl w-full h-48 md:h-64 object-cover shadow-md" loading="lazy" decoding="async" />
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Types of Motor Insurance Plans in India</h2>
              <h3 className="text-xl font-semibold mb-2">Third-Party Insurance</h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">This is the legal minimum and covers damages caused to third-party people or property. It does not cover your own vehicle losses.</p>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Insurance</h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">Comprehensive policies cover own damage and third-party liabilities, making them suitable for most private car and bike owners in India.</p>
              <h3 className="text-xl font-semibold mb-2">Standalone Own Damage</h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">Useful when you already have valid third-party cover and want separate own-damage protection with optional add-ons.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <img src="https://images.openai.com/static-rsc-4/A9X-I2XKaBHhEEUh2JmgBuUEtbOMqzozc4N2goCZHookweVKNdAF1fUjetmzY3p4NBwGCHWUIkK615c-_fR7ajSgyReLNvVdmZgctUqnnnKjbOetr9Zi2BSho9ydIhKzqt2H9GoC2tW-2w6ceu7Rhmv28QPDDZ7pXm3Ck3Qd8jt-8wAcVJpSOwM5mfbvD2lv?purpose=fullsize" alt="motor insurance near me with fast claim support" className="rounded-xl w-full h-48 md:h-64 object-cover shadow-md" loading="lazy" decoding="async" />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Real-Life Scenarios: Why Motor Insurance Matters</h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">A minor accident in city traffic can result in expensive repairs. Comprehensive motor insurance helps absorb this financial shock while keeping your mobility intact.</p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">During monsoons, engine damage due to water ingress can become a high-cost event. Add-ons like engine protect are helpful for flood-prone regions in India.</p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">If you often search for car insurance near me or bike insurance near me, choose a plan with strong cashless garage access and responsive claim support.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="https://images.openai.com/static-rsc-4/M5g8L2KTMcmrOO7Z68bkKr43LnKLgT1HdY_ux7ncj7Pa4pgW9wWukryVcdex-ZuC68Hje4wRSfLmZzL9MQRrHhclz4YUxG-lSJ40WRF-UNCRvEMYDuX4bCUbfJOTu9BtDFMvFu1yNAP9C7sD8g2Jo3eyGW8P2HLRlkSk7lCHm0ZOZEwRKHlg8Y1lomxU4A68?purpose=fullsize" alt="compare car and bike insurance plans in India" className="rounded-xl w-full h-48 md:h-64 object-cover shadow-md" loading="lazy" decoding="async" />
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Compare Motor Insurance Plans the Smart Way</h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-3 max-w-xl">Focus on IDV accuracy, no-claim bonus structure, deductible level, and claim settlement process, not just premium discounts.</p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-3 max-w-xl">At PolicyKendra, we help customers compare insurer reliability, add-on value, and renewal experience before making a final decision.</p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">For people looking for motor insurance in Delhi, we provide advisor-backed shortlists that balance affordability and claim comfort.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-rose-50">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Motor Insurance Comparison Table</h2>
          <div className="overflow-x-auto rounded-xl border border-rose-200 bg-white shadow-sm">
            <table className="min-w-full text-left">
              <thead className="bg-rose-100"><tr><th className="px-4 py-3">Criteria</th><th className="px-4 py-3">Third-Party</th><th className="px-4 py-3">Comprehensive</th><th className="px-4 py-3">Comprehensive + Add-ons</th></tr></thead>
              <tbody>
                <tr className="border-t"><td className="px-4 py-3">Legal Requirement</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Yes</td></tr>
                <tr className="border-t"><td className="px-4 py-3">Own Damage Cover</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Yes, enhanced</td></tr>
                <tr className="border-t"><td className="px-4 py-3">Premium Level</td><td className="px-4 py-3">Lowest</td><td className="px-4 py-3">Moderate</td><td className="px-4 py-3">Higher with better value</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Insurance Advisor Near You in Delhi</h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed text-center max-w-xl mx-auto mb-10">Searching for motor insurance advisor near me? PolicyKendra supports customers across Delhi and India with quick quote comparison, add-on recommendations, and smooth renewal guidance.</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-rose-50 rounded-lg p-5"><h3 className="font-semibold mb-2">Is motor insurance mandatory in India?</h3><p className="text-slate-700">Yes. Third-party insurance is mandatory by law for all vehicles on Indian roads.</p></div>
            <div className="bg-rose-50 rounded-lg p-5"><h3 className="font-semibold mb-2">What is the difference between third-party and comprehensive insurance?</h3><p className="text-slate-700">Third-party covers external liability only, while comprehensive also covers your own vehicle damage.</p></div>
            <div className="bg-rose-50 rounded-lg p-5"><h3 className="font-semibold mb-2">Can I transfer my no-claim bonus?</h3><p className="text-slate-700">Yes, no-claim bonus can usually be transferred when switching insurer or buying a new vehicle under eligible terms.</p></div>
            <div className="bg-rose-50 rounded-lg p-5"><h3 className="font-semibold mb-2">Which add-ons are most useful?</h3><p className="text-slate-700">Zero depreciation, roadside assistance, engine protect, and return-to-invoice are commonly useful add-ons.</p></div>
            <div className="bg-rose-50 rounded-lg p-5"><h3 className="font-semibold mb-2">How can I find motor insurance near me in Delhi?</h3><p className="text-slate-700">Contact PolicyKendra for local advisor support and customized comparison of car and bike insurance plans.</p></div>
            <div className="bg-rose-50 rounded-lg p-5"><h3 className="font-semibold mb-2">How fast is the claim process?</h3><p className="text-slate-700">Timelines vary by insurer and case complexity, but policies with strong network garages usually offer smoother claim handling.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MotorInsurance;