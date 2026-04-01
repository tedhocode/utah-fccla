import { Heart, CheckCircle, ExternalLink, Mail, Users, Star, Trophy } from 'lucide-react'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

const benefits = [
  {
    icon: Users,
    title: 'Reach 1,500+ Students',
    description: 'Your brand is seen by over 1,500 active student members across 50+ schools in Utah — ambitious, motivated leaders who represent the future workforce.',
  },
  {
    icon: Star,
    title: 'Conference Recognition',
    description: "Your organization's name and logo are featured at Utah FCCLA's three major annual conferences — Fall Leadership, Region Conferences, and State Leadership Conference.",
  },
  {
    icon: Trophy,
    title: 'Website & Materials',
    description: 'Sponsors are recognized on the Utah FCCLA website and in official conference programs and materials distributed to members and advisers statewide.',
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: "Sponsoring Utah FCCLA directly funds scholarships, conference programming, and leadership development opportunities for students across the state.",
  },
]

const partnershipTypes = [
  {
    title: 'Conference Sponsor',
    description: 'Sponsor one or more of our annual conferences. Your brand is featured prominently in event programs, signage, and digital materials.',
    examples: 'Fall Leadership, Region Conferences, State Leadership Conference',
  },
  {
    title: 'Scholarship Sponsor',
    description: "Fund scholarships awarded to outstanding Utah FCCLA seniors at State Leadership Conference. A meaningful way to directly impact students' futures.",
    examples: 'Annual scholarships awarded at State Leadership Conference',
  },
  {
    title: 'Award Sponsor',
    description: 'Sponsor specific awards or recognition categories at state competitions. Your brand is associated with excellence and student achievement.',
    examples: 'STAR Event awards, State Competition prizes, Chapter recognition',
  },
  {
    title: 'In-Kind Partner',
    description: 'Contribute goods, services, or expertise to Utah FCCLA events and programs. In-kind partnerships are flexible and highly valued.',
    examples: 'Printing, supplies, venue, food & beverage, services',
  },
]

export default function PartnerPage() {
  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Heart size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Partner With Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Invest in the next generation of Utah leaders by partnering with Utah FCCLA
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Utah FCCLA is a premier leadership organization connecting students across the state. Our sponsors and partners play a vital role in making our programs, conferences, and scholarships possible. We'd love to have your organization join us in developing Utah's future leaders.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Why Partner With Utah FCCLA?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const BenefitIcon = benefit.icon
              return (
                <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red hover:shadow-xl transition-all text-center">
                  <div className="w-14 h-14 bg-fccla-red text-white rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <BenefitIcon size={28} />
                  </div>
                  <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-4 text-center">Partnership Opportunities</h2>
          <p className="text-gray-600 text-center mb-12 text-lg max-w-2xl mx-auto">
            We work with partners to create flexible arrangements that fit your goals and budget
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {partnershipTypes.map((type, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all">
                <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-3">{type.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{type.description}</p>
                <div className="bg-fccla-red/5 border border-fccla-red/20 rounded-xl px-4 py-3">
                  <span className="text-xs font-bold text-fccla-red uppercase tracking-wide">Examples: </span>
                  <span className="text-sm text-gray-700">{type.examples}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">What Partners Receive</h2>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-10">
            <div className="space-y-5">
              {[
                'Logo placement on the Utah FCCLA website',
                'Recognition in conference programs and materials',
                'Verbal recognition at sponsored events',
                'Signage opportunities at conferences (when applicable)',
                'Direct connection to a motivated student membership base',
                'Acknowledgment in newsletters and social media (when applicable)',
                'Opportunity to provide scholarship awards with your organization\'s name',
                'Custom partnership arrangements available — contact us to discuss',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-fccla-red flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-fccla-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-12">Your Reach With Utah FCCLA</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1,500+', label: 'Student Members' },
              { number: '50+', label: 'School Chapters' },
              { number: '5', label: 'Regions Statewide' },
              { number: '3', label: 'Annual Conferences' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-outfit text-5xl font-extrabold text-fccla-red mb-2">{stat.number}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Mail size={56} className="mx-auto mb-6 text-white" />
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Ready to Partner?</h2>
          <p className="text-white/90 text-lg mb-8">
            Reach out to the Utah FCCLA state office to discuss partnership opportunities and get started
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact"
              className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Contact Us to Get Started →
            </Link>
            <Link
              href="/resources/sponsors"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-fccla-red transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              View Current Sponsors →
            </Link>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
