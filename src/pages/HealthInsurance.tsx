import { HeartPulse, ShieldCheck, Stethoscope, WalletCards } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function HealthInsurance() {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <Helmet>
        <title>Best Health Insurance Plans in India | PolicyKendra</title>
        <meta
          name="description"
          content="Compare health insurance plans in India with PolicyKendra. Get expert advice, understand benefits, and choose affordable coverage near you in Delhi and across India."
        />
        <meta property="og:title" content="Best Health Insurance Plans in India | PolicyKendra" />
        <meta
          property="og:description"
          content="Find the right health insurance plan in India with transparent comparison, local advisor support, and expert guidance from PolicyKendra."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        className="relative min-h-[520px] md:min-h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(8, 47, 73, 0.75), rgba(8, 47, 73, 0.75)), url("https://images.openai.com/static-rsc-4/TqQA8TnjM9mQqnlCfA-yXWhQYiqHZLPyrEiJehrJNddjet49N-74ZPewTRv5LLtINmZukIwqQs2fV7vbaExJgsVk9mFKx6OhEMCzjqlmh-nSdI1hiqT0U6qywidCWsAezhu0CO1RYqbjHYZgOESPE4UKa10z9V_MuowhiNzVMCMzEAFVLX0Mi4PQFJClWEzJ?purpose=fullsize")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="site-container text-white animate-fade-in flex flex-col gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
            <p className="uppercase tracking-wide text-cyan-200 font-semibold mb-4">Health Insurance in India</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
              Compare the Best Health Insurance Plans in India with Confidence
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-cyan-100 max-w-xl">
              From individual coverage to family floater plans, PolicyKendra helps you compare trusted health insurance plans in India and choose the right protection before a medical emergency appears.
            </p>
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <Link to="/contact" className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center bg-cyan-400 text-slate-900 font-semibold px-7 py-3 rounded-full md:hover:bg-cyan-300 transition-colors">
                Talk to a Health Insurance Advisor
              </Link>
              <Link to="/life-insurance" className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center border border-cyan-200 text-white px-7 py-3 rounded-full md:hover:bg-white/10 transition-colors">
                Explore Life Insurance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Top Benefits of Health Insurance Plans in India</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
              <HeartPulse className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cashless Hospitalization</h3>
              <p className="text-slate-600 text-sm">Access treatment in network hospitals without arranging large upfront cash during emergencies.</p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
              <ShieldCheck className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Protection</h3>
              <p className="text-slate-600 text-sm">Protect savings from expensive surgeries, ICU stays, and long recovery periods.</p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
              <Stethoscope className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Preventive Care Support</h3>
              <p className="text-slate-600 text-sm">Many plans include wellness checks, annual health screenings, and teleconsultation benefits.</p>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-slate-100">
              <WalletCards className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tax Savings</h3>
              <p className="text-slate-600 text-sm">Get deductions under applicable tax rules while securing your family in India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="site-container space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.openai.com/static-rsc-4/FwyNB7mesMrZec2ux8IOywf9hMHdi0mLXUmptFiLaU50alncHjiGL0nFNsNYQ1KsfRLPV_UcD0Tub7PeHVluXx8JKo45wDDmZ0NasSMt1ttIgn0VZman--QUlciryMN8o3lYB64SM368uvySNEcwusui7XLHldRt3kYde0cMetprkGZ6DYP_EoEw4go59VyT?purpose=fullsize"
              alt="health insurance plans in India for families"
              className="rounded-xl w-full h-48 md:h-64 object-cover shadow-md"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Types of Health Insurance You Should Compare</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Individual Plans</h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">
                Individual health insurance covers one person and is ideal for professionals, young adults, and senior citizens who want focused coverage limits. You can customize room rent limits, add-on covers, and deductible options based on your expected usage.
              </p>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Family Floater Plans</h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">
                Family floater plans are often cost-effective for couples and parents with children. A single sum insured is shared across members, offering flexibility while reducing premium burden compared to buying multiple individual policies.
              </p>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Senior Citizen and Critical Illness Plans</h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">
                Specialized plans provide higher coverage relevance for older adults and critical diseases. PolicyKendra helps you evaluate waiting periods, co-pay clauses, and claim settlement records before finalizing.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <img
                src="https://images.openai.com/static-rsc-4/YLQN7HdReerIaeWlPcv4Mf2Rwk1RwzDv_TZGQDk1YsmVc6gxAgtdAVRpBzXmpzZM_p_outUXdkz-uR6OyHSmCE2aHIGHyugnYl_BpgMq5zgh1uGk5qZGfHSLRPtVQarsdbiC9u4JsxdNoMR3y-Vgq11b_BMOviLeSzxAgQ7s2wdcBFS2pBSe5ZdFEHSfTVnK?purpose=fullsize"
                alt="best health insurance plans in India comparison"
                className="rounded-xl w-full h-48 md:h-64 object-cover shadow-md"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Health Insurance Matters in Real Life</h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">
                Imagine a sudden medical emergency where hospitalization costs run into lakhs. Without health insurance, this can become a financial burden. With the right insurance plan, you can focus on recovery while your expenses are covered. PolicyKendra helps you find the right protection before such situations arise.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">
                In India, even routine treatments can quickly escalate due to diagnostics, specialist fees, and post-hospital medications. A strong policy can include pre and post hospitalization coverage, ambulance cost protection, and day-care procedure support.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">
                Families searching for health insurance near me often prioritize quick onboarding and claim support. Our advisors explain policy clauses in plain language, helping you avoid surprises at claim time.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.openai.com/static-rsc-4/HpHLEAK2AT5n-XjSPcW77hlwbTWEPKXO2JWnvSfOGvrEzf5bya1yFe4OkWQqlshi5kSgx7cy-WRTIKVufI9WD2UJnJJvAOqSCJvuXLOm__sEf-7ZQlU8d71yfrjZR67r4-qyxsfM2_5AKmBS1ewEaj2w7E3KgzHOGtLA3OAAEinVgfphYPMxzrqCxmRvt0Kc?purpose=fullsize"
              alt="health insurance advisor near me in Delhi"
              className="rounded-xl w-full h-48 md:h-64 object-cover shadow-md"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Compare Health Insurance Plans Easily</h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">
                Comparing plans only by low premium is risky. You should evaluate room rent cap, claim process, exclusions, waiting periods, restoration benefits, and network hospital strength in your city.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">
                PolicyKendra helps customers across India compare coverage depth and premium efficiency together. Whether you are a salaried employee, business owner, or a parent planning long-term health security, we create shortlists that match your budget and risk profile.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">
                If you are searching for insurance advisor near me or health insurance in Delhi, our team offers local support with transparent comparisons and human guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-slate-50">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Health Insurance Comparison Table</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">Criteria</th>
                  <th className="px-4 py-3 font-semibold text-slate-800">Basic Plan</th>
                  <th className="px-4 py-3 font-semibold text-slate-800">Family Floater</th>
                  <th className="px-4 py-3 font-semibold text-slate-800">Comprehensive Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-700">Ideal for</td>
                  <td className="px-4 py-3 text-slate-700">Young individuals</td>
                  <td className="px-4 py-3 text-slate-700">Families with children</td>
                  <td className="px-4 py-3 text-slate-700">High medical risk households</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-700">Coverage Scope</td>
                  <td className="px-4 py-3 text-slate-700">Hospitalization focused</td>
                  <td className="px-4 py-3 text-slate-700">Shared family coverage</td>
                  <td className="px-4 py-3 text-slate-700">Hospital + critical benefits</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-700">Premium Range</td>
                  <td className="px-4 py-3 text-slate-700">Lower</td>
                  <td className="px-4 py-3 text-slate-700">Moderate</td>
                  <td className="px-4 py-3 text-slate-700">Higher but broader</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-700">Claim Comfort</td>
                  <td className="px-4 py-3 text-slate-700">Average</td>
                  <td className="px-4 py-3 text-slate-700">Good</td>
                  <td className="px-4 py-3 text-slate-700">Best for frequent use</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Trusted Health Insurance Partner in India</h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed text-center max-w-xl mx-auto mb-10">
            PolicyKendra works with leading insurance providers in India to offer reliable and transparent insurance solutions. Our expert advisors guide you through every step of selecting the right policy.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Which is the best health insurance plan in India?</h3>
              <p className="text-slate-700">The best plan depends on your age, medical history, family size, and preferred hospitals. Comparing features is more important than choosing the lowest premium.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Can I buy health insurance near me in Delhi with advisor support?</h3>
              <p className="text-slate-700">Yes. PolicyKendra provides local advisory support in Delhi and nearby locations, including plan selection and claim guidance.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">What is a waiting period in health insurance?</h3>
              <p className="text-slate-700">A waiting period is the time before certain claims become eligible, often applied to pre-existing diseases and specific treatments.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">Does health insurance cover day-care procedures?</h3>
              <p className="text-slate-700">Most modern plans include many day-care procedures that do not require 24-hour hospitalization.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">How much health insurance coverage should a family in India choose?</h3>
              <p className="text-slate-700">Coverage should reflect city healthcare costs, family size, and inflation. Many families begin with moderate coverage and scale as needed.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900 mb-2">How quickly can I compare and buy a policy?</h3>
              <p className="text-slate-700">With the right documents, most customers can compare plans and complete purchase within a short consultation window.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HealthInsurance;