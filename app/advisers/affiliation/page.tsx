import { Link2, CheckCircle, AlertCircle, ExternalLink, Calendar, DollarSign, Users } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    number: 1,
    title: 'Go to the Registration Portal',
    description: 'Visit registermychapter.com — this is the official FCCLA affiliation and chapter management portal used by all chapters nationally.',
  },
  {
    number: 2,
    title: 'Create or Log In to Your Account',
    description: "If you're a new adviser, create an account using your school email. Returning advisers can log in with their existing credentials. Contact the state office if you've lost access.",
  },
  {
    number: 3,
    title: 'Enter Your Chapter Information',
    description: 'Add your school name, chapter details, and adviser information. Make sure your school and FCS program information is current and accurate.',
  },
  {
    number: 4,
    title: 'Register Your Members',
    description: 'Enter each student member individually or import using the bulk upload template. Students must be enrolled in an FCS course to be eligible for FCCLA membership.',
  },
  {
    number: 5,
    title: 'Pay Membership Dues',
    description: 'Membership dues are paid per student through the portal. Utah FCCLA state dues and National FCCLA dues are collected together. Check the current dues schedule on the portal.',
  },
  {
    number: 6,
    title: 'Submit and Confirm',
    description: 'Submit your affiliation and save your confirmation. You will receive a confirmation email. Keep this for your records — you may need it at conferences.',
  },
]

export default function AffiliationPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Link2 size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Affiliation & Portal</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Officially register your chapter and members for the school year
          </p>
        </div>
      </section>

      {/* Deadline Banner */}
      <section className="bg-fccla-red py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center">
          <AlertCircle size={28} className="flex-shrink-0" />
          <p className="text-lg font-bold">
            Annual affiliation deadline is typically mid-October. Affiliate early to ensure full eligibility for conferences and competitions.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Every FCCLA chapter must affiliate annually through the national registration portal. Affiliation officially registers your chapter and members with both Utah FCCLA and National FCCLA for the current school year. <strong className="text-fccla-red">Unaffiliated members are not eligible to attend conferences or compete at state and national events.</strong>
          </p>
        </div>
      </section>

      {/* Portal CTA - Big Button */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-fccla-navy text-white rounded-2xl p-10 text-center">
            <Link2 size={56} className="mx-auto mb-6" />
            <h2 className="font-outfit text-3xl font-bold mb-4">Access the Registration Portal</h2>
            <p className="text-white/85 text-lg mb-8">Register and manage your chapter at registermychapter.com</p>
            <a
              href="https://www.registermychapter.com/fccla/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-fccla-red text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Go to registermychapter.com <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Step-by-Step */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">How to Affiliate</h2>
          <div className="space-y-5">
            {steps.map((step) => (
              <div key={step.number} className="bg-white border-2 border-gray-200 rounded-2xl p-8 flex items-start gap-6 hover:border-fccla-red transition-all relative">
                <div className="w-12 h-12 bg-fccla-red text-white rounded-xl flex items-center justify-center font-outfit font-extrabold text-xl flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Important to Know</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all">
              <div className="w-12 h-12 bg-fccla-red rounded-xl flex items-center justify-center mb-5">
                <Calendar size={24} className="text-white" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3">Annual Deadline</h3>
              <p className="text-gray-700 leading-relaxed">
                Affiliation must be renewed every school year. The deadline is typically mid-October. Chapters affiliated after the deadline may have limited eligibility for early-year events.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all">
              <div className="w-12 h-12 bg-fccla-red rounded-xl flex items-center justify-center mb-5">
                <DollarSign size={24} className="text-white" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3">Dues Structure</h3>
              <p className="text-gray-700 leading-relaxed">
                Dues are collected per student and include both state (Utah FCCLA) and national (FCCLA Inc.) portions. Current dues amounts are listed in the registration portal. Advisers are also eligible for professional membership.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all">
              <div className="w-12 h-12 bg-fccla-red rounded-xl flex items-center justify-center mb-5">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3">Adding Members Late</h3>
              <p className="text-gray-700 leading-relaxed">
                You can add new members to your chapter throughout the year through the portal. Late-joining members must be affiliated before they are eligible to compete at region and state events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Troubleshooting */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Trouble with the Portal?</h2>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 space-y-4">
            {[
              { q: "I forgot my password.", a: "Use the 'Forgot Password' link on the portal login page. If you still can't access your account, contact the state office." },
              { q: "I'm a new adviser and don't have a portal account.", a: "Create a new account at registermychapter.com. Select your school from the directory and follow the prompts. Contact the state office if your school isn't listed." },
              { q: "My payment isn't processing.", a: "Try a different browser or clear your cache. If issues persist, contact registermychapter.com support or pay by check through the state office." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-fccla-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-fccla-navy">{item.q}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Need Help Affiliating?</h2>
          <p className="text-white/90 text-lg mb-8">
            The Utah FCCLA state office can help with portal issues, payment questions, and membership verification
          </p>
          <Link
            href="/about/contact"
            className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            Contact the State Office →
          </Link>
        </div>
      </section>
    </main>
  )
}
