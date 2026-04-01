import { Heart, Star, Users, Trophy, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getSiteSettings } from '@/actions/admin/content'
import PageTransition from '@/components/PageTransition'

const impactItems = [
  {
    icon: Trophy,
    title: 'Competition Support',
    description: 'Covers registration fees, travel assistance, and materials for students competing at State and National Leadership Conference.',
  },
  {
    icon: Users,
    title: 'Leadership Development',
    description: 'Funds workshops, training sessions, and resources that help members develop as leaders in their schools and communities.',
  },
  {
    icon: Star,
    title: 'Scholarships',
    description: 'Contributes to the Utah FCCLA scholarship fund, helping graduating seniors pursue higher education in family and consumer sciences.',
  },
  {
    icon: Heart,
    title: 'Chapter Programs',
    description: 'Supports chapter programming, community service initiatives, and National Programs that make a real difference in Utah communities.',
  },
]

const FALLBACK_PAYPAL = 'https://www.paypal.com/donate?token=em3UjBbdOqWidmubfb38IJ2bfIuMJGFA_WqI0CcbNQMhlW-fEmkr6awhxrAUv7OzgY9Rx-PYgHnvg9CG'

export default async function DonatePage() {
  let paypalLink = FALLBACK_PAYPAL
  try {
    const settings = await getSiteSettings()
    const setting = (settings as any[]).find((s: any) => s.key === 'paypal_link')
    if (setting?.value) paypalLink = setting.value
  } catch { /* use fallback */ }

  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-red to-red-700 text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Heart size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Support Utah FCCLA</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Your contribution helps Utah students build leadership skills, compete at the highest levels, and make a lasting impact on their communities.
          </p>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-fccla-red p-10 text-center shadow-lg">
            <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-4">Make a Donation</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Utah FCCLA is a nonprofit organization supported by member dues, conference fees, and generous donors like you. Every dollar goes directly toward student programs and leadership opportunities.
            </p>
            <a
              href={paypalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-fccla-red text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-red-700 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Donate Now <ExternalLink size={20} />
            </a>
            <p className="text-sm text-gray-500 mt-5">
              Utah FCCLA is a 501(c)(3) nonprofit organization. Donations may be tax-deductible — consult your tax adviser.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-4 text-center">Where Your Gift Goes</h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            Donations directly fund programs and opportunities that benefit Utah FCCLA's 4,000+ student members.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {impactItems.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red hover:shadow-xl transition-all flex gap-5 items-start">
                  <div className="w-14 h-14 bg-fccla-red text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Other Ways to Support</h2>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all text-center">
              <div className="w-16 h-16 bg-fccla-navy text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star size={28} />
              </div>
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-3">Sponsor an Event</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Businesses and organizations can sponsor State Leadership Conference, Fall Conference, or specific STAR Event categories.
              </p>
              <Link
                href="/resources/partner"
                className="text-fccla-red hover:text-red-700 font-bold text-sm inline-flex items-center gap-1"
              >
                Learn About Sponsorship <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all text-center">
              <div className="w-16 h-16 bg-fccla-navy text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy size={28} />
              </div>
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-3">Fund a Scholarship</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Establish or contribute to a named scholarship for graduating Utah FCCLA seniors. Contact us to discuss options.
              </p>
              <Link
                href="/about/contact"
                className="text-fccla-red hover:text-red-700 font-bold text-sm inline-flex items-center gap-1"
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all text-center">
              <div className="w-16 h-16 bg-fccla-navy text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users size={28} />
              </div>
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-3">Volunteer</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Serve as an evaluator at region or state competitions, present a workshop, or help at conferences as a volunteer.
              </p>
              <Link
                href="/resources/partner"
                className="text-fccla-red hover:text-red-700 font-bold text-sm inline-flex items-center gap-1"
              >
                Get Involved <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="bg-fccla-navy py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Questions About Giving?</h2>
          <p className="text-white/85 text-lg mb-8">
            Reach out to the Utah FCCLA state office to learn more about donation options, tax information, or sponsorship packages.
          </p>
          <Link
            href="/about/contact"
            className="inline-block bg-fccla-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            Contact the State Office →
          </Link>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
