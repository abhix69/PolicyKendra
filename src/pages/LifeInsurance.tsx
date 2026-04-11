import { BadgeCheck, HeartHandshake, Landmark, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function LifeInsurance() {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      <Helmet>
        <title>Best Life Insurance Plans in India | PolicyKendra</title>
        <meta
          name="description"
          content="Compare life insurance and term insurance plans in India with PolicyKendra. Get expert help near you to secure your family's future with the right protection."
        />
        <meta property="og:title" content="Best Life Insurance Plans in India | PolicyKendra" />
        <meta
          property="og:description"
          content="Explore term life and savings-based life insurance options in India with transparent comparison and advisor support from PolicyKendra."
        />
      </Helmet>

      <section
        className="relative min-h-[520px] md:min-h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30, 58, 138, 0.76), rgba(30, 58, 138, 0.76)), url("https://images.openai.com/static-rsc-4/RBSdcXF3e-o887YbvUpp0MG4OB4CUuryTXhu4E77aHqJKREnC3xziv07ddde6JBsOxbtAp2TLATM4Hh1fp7PLooqyKISsD06vhim8uWTADd85nUqUPf56SvwtnOeoK82n48J9XuM2PMnm0AL4Z2r2FZ4B5asGwvzp6fmNvOGyt_A2Oe9Diq3TCPRMIeQA0Oa?purpose=fullsize")'
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="site-container text-white animate-fade-in flex flex-col gap-4 md:gap-6 text-center md:text-left items-center md:items-start">
            <p className="uppercase tracking-wide text-blue-200 font-semibold mb-4">Life Insurance in India</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
              Secure Your Family with the Best Life Insurance Plans in India
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-blue-100 max-w-xl">
              Compare term insurance and life insurance options with PolicyKendra to protect long-term family goals, debts, and day-to-day financial stability.
            </p>
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <Link to="/contact" className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center bg-white text-blue-900 font-semibold px-7 py-3 rounded-full md:hover:bg-blue-50 transition-colors">
                Get Life Insurance Advice Near Me
              </Link>
              <Link to="/motor-insurance" className="w-full md:w-auto min-h-[48px] inline-flex items-center justify-center border border-blue-100 text-white px-7 py-3 rounded-full md:hover:bg-white/10 transition-colors">
                Explore Motor Insurance
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-blue-50">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Benefits of Life Insurance Plans in India</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm"><Shield className="w-10 h-10 text-blue-700 mb-3" /><h3 className="font-semibold mb-2">Income Replacement</h3><p className="text-sm md:text-base leading-relaxed text-slate-600">Ensures your family can continue meeting monthly expenses if something happens to you.</p></div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm"><HeartHandshake className="w-10 h-10 text-blue-700 mb-3" /><h3 className="font-semibold mb-2">Goal Protection</h3><p className="text-sm md:text-base leading-relaxed text-slate-600">Protects children’s education, marriage planning, and spouse retirement goals.</p></div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm"><Landmark className="w-10 h-10 text-blue-700 mb-3" /><h3 className="font-semibold mb-2">Debt Security</h3><p className="text-sm md:text-base leading-relaxed text-slate-600">Helps clear home loan, business loan, and liabilities without burdening your family.</p></div>
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm"><BadgeCheck className="w-10 h-10 text-blue-700 mb-3" /><h3 className="font-semibold mb-2">Tax Efficiency</h3><p className="text-sm md:text-base leading-relaxed text-slate-600">Offers tax advantages while building disciplined long-term protection in India.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="site-container space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="https://images.openai.com/static-rsc-4/NQ75f4RfsqU3m2VAEmVkL_-rmnBgMsnY4Q-oQV6MY2tYr5izpGzS67ZmE-01vg-5r02NpckIHb5naI5Cj46reRSpR4x6AIWgisc7KJBATzJ5hToU5Jt3xe1qNiBRrAcqWGcEJmcafMrqy_yzkX7MvixNqu__dr4zqCqK20jfiHU4tMEKCx5LTpL0WXCv6rhy?purpose=fullsize" alt="life insurance plans in India for family protection" className="rounded-xl w-full h-48 md:h-64 object-cover shadow-md" loading="lazy" decoding="async" />
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Types of Life Insurance You Should Understand</h2>
              <h3 className="text-xl font-semibold mb-2">Term Insurance</h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">Term insurance is pure risk cover with high sum assured at affordable premiums. It is often the first and most important protection layer for earning members.</p>
              <h3 className="text-xl font-semibold mb-2">Whole Life and Endowment Plans</h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">These options blend life cover with savings or maturity benefits. They can be suitable for conservative planners who want guaranteed payouts and structure.</p>
              <h3 className="text-xl font-semibold mb-2">ULIPs and Child Plans</h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">ULIPs combine market-linked growth with insurance. Child-oriented plans help map protection to milestone goals. PolicyKendra helps you choose based on risk appetite and timeline.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <img src="https://images.openai.com/static-rsc-4/QJ77bFoZzCKEIIW9NUesZIL9ixLtAwgO2C_F8tt2O5kn1GIZfOzSCQSw-WeXGiMDZ80qV-om1bF4wbXJSHheZMlEJhs4qVR5aWuYpSCvN0Ku_CHvRD-Dg-_Ud6zF6OQR95GucdAajRRXFv_DRoyD5Btr4p6iachP6FGXz1q6m5Xa97A2ZaO4dMbPbPOE_fMF?purpose=fullsize" alt="term insurance advisor near me in India" className="rounded-xl w-full h-48 md:h-64 object-cover shadow-md" loading="lazy" decoding="async" />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Real-Life Scenarios: Why Life Insurance Matters</h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">A young parent with a home loan and school-going children has years of financial responsibility ahead. If the primary earning member is absent unexpectedly, the family can face immediate cash flow challenges. A suitable life insurance policy can replace income and protect essential goals.</p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-4 max-w-xl">Business owners in India also need life cover to safeguard business continuity and family ownership interests. A well-structured policy can prevent forced sale of assets during difficult circumstances.</p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">When people search for life insurance near me, they usually want clarity, trust, and speed. PolicyKendra advisors simplify complex clauses, riders, and exclusions to help you make an informed decision.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="https://images.openai.com/static-rsc-4/TBqupKGJ8p8Q2fiNLAEsrpS4VUHfU8cvqz5PvKSkUObpbRW-zQMCWEGmkqZ2x9Rmb0UYrBmFWViTQWupWc8PMObo09tRyzEFeZ10EjCoIXX4UZkMnNAiHvaH8ODl2ZY5b-pAsqlAPt8llhgkkZJ4_ZvIm4KTXebij6MPZCP79z9F7wAO_z02aUkdG8T_YEfg?purpose=fullsize" alt="compare life insurance plans in India" className="rounded-xl w-full h-48 md:h-64 object-cover shadow-md" loading="lazy" decoding="async" />
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Compare Life Insurance Plans</h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-3 max-w-xl">Compare policies using claim settlement profile, insurer service quality, policy tenure flexibility, premium affordability, and relevant riders like critical illness or accidental disability.</p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 mb-3 max-w-xl">PolicyKendra helps you match life cover with inflation-adjusted income needs and liabilities, ensuring your protection strategy is realistic and sustainable.</p>
              <p className="text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">If you need life insurance in Delhi or a reliable advisor near me, our team offers local support with transparent plan comparisons and quick response.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-blue-50">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Life Insurance Comparison Table</h2>
          <div className="overflow-x-auto rounded-xl border border-blue-200 bg-white shadow-sm">
            <table className="min-w-full text-left">
              <thead className="bg-blue-100"><tr><th className="px-4 py-3">Criteria</th><th className="px-4 py-3">Term Insurance</th><th className="px-4 py-3">Endowment</th><th className="px-4 py-3">ULIP</th></tr></thead>
              <tbody>
                <tr className="border-t"><td className="px-4 py-3">Primary Goal</td><td className="px-4 py-3">Maximum protection</td><td className="px-4 py-3">Protection + guaranteed savings</td><td className="px-4 py-3">Protection + market growth</td></tr>
                <tr className="border-t"><td className="px-4 py-3">Premium Efficiency</td><td className="px-4 py-3">High</td><td className="px-4 py-3">Moderate</td><td className="px-4 py-3">Varies by market risk</td></tr>
                <tr className="border-t"><td className="px-4 py-3">Risk Level</td><td className="px-4 py-3">Low</td><td className="px-4 py-3">Low</td><td className="px-4 py-3">Medium to high</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="site-container">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Insurance Advisor Near You in Delhi</h2>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed text-center max-w-xl mx-auto mb-10">If you are searching for an insurance advisor near me for life insurance in Delhi, PolicyKendra offers one-to-one support, plan comparisons, and clear advice tailored to your financial goals.</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-semibold mb-2">What is the right age to buy life insurance in India?</h3><p className="text-slate-700">Earlier is generally better because premiums are lower and insurability is usually easier when you are younger and healthier.</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-semibold mb-2">How much life insurance cover should I take?</h3><p className="text-slate-700">Coverage should align with income replacement needs, liabilities, and major future goals such as education and home obligations.</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-semibold mb-2">Is term insurance enough?</h3><p className="text-slate-700">For many families, term insurance forms the core foundation. Additional savings-based plans can be added for specific objectives.</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-semibold mb-2">Can I buy life insurance near me with in-person guidance?</h3><p className="text-slate-700">Yes. PolicyKendra supports customers in Delhi and nearby locations with both digital and advisor-led assistance.</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-semibold mb-2">What documents are required?</h3><p className="text-slate-700">Typically identity proof, address proof, income details, and basic medical disclosures are required.</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-semibold mb-2">How quickly can a policy be issued?</h3><p className="text-slate-700">Depending on insurer underwriting and medical checks, issuance timelines can range from a few hours to a few days.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LifeInsurance;