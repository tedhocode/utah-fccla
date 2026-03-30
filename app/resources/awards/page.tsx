import { Award, Star, ExternalLink, CheckCircle, Trophy, Users, Heart, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/server'

const staticAwards = [
  {
    icon: Trophy,
    color: 'from-fccla-red to-red-700',
    name: 'National Award of Excellence',
    level: 'Chapter Award',
    description: "FCCLA's premier chapter recognition program. Chapters earn Gold, Silver, or Bronze recognition by completing activities in eight areas including membership, programming, STAR Events, and community service.",
    eligibility: 'All affiliated chapters',
    howToApply: 'Complete the Chapter Activities Report submitted through the national portal. Deadline is typically in the spring.',
    link: 'https://fcclainc.org/engage/recognition/award-of-excellence',
  },
  {
    icon: Star,
    color: 'from-fccla-navy to-fccla-navy-light',
    name: 'STAR Events Recognition',
    level: 'Individual / Team Award',
    description: 'Members who compete in STAR Events earn Gold, Silver, or Bronze recognition based on their scores. Gold medal recipients at state may qualify to represent Utah at the National Leadership Conference.',
    eligibility: 'Affiliated members who compete',
    howToApply: 'Compete at your Region Conference. Top placers advance to State. State gold medalists may advance to Nationals.',
    link: '/compete/star-events',
  },
  {
    icon: Award,
    color: 'from-fccla-red to-red-700',
    name: 'Outstanding Chapter Award',
    level: 'Utah State Award',
    description: 'Utah FCCLA recognizes outstanding chapters at State Leadership Conference based on chapter activities, growth, community impact, and competition performance throughout the year.',
    eligibility: 'All affiliated Utah chapters',
    howToApply: 'Contact Utah FCCLA for the current year nomination criteria. Awards are announced at State Leadership Conference.',
    link: null,
  },
  {
    icon: Users,
    color: 'from-fccla-navy to-fccla-navy-light',
    name: 'National Programs Recognition',
    level: 'Individual / Chapter Award',
    description: 'Members and chapters who complete National Programs (Power of One, Community Service, FACTS, etc.) can earn state and national recognition. Outstanding projects may qualify for additional awards and scholarships.',
    eligibility: 'Members participating in National Programs',
    howToApply: 'Document your project using the FCCLA Planning Process and submit for recognition through the national portal.',
    link: 'https://fcclainc.org/engage/national-programs',
  },
  {
    icon: Heart,
    color: 'from-fccla-red to-red-700',
    name: 'Community Service Award',
    level: 'Chapter Award',
    description: 'Chapters that complete significant community service through FCCLA National Programs or local initiatives may be recognized at the state level. Awards recognize hours served, impact, and project quality.',
    eligibility: 'Affiliated chapters with documented service',
    howToApply: 'Track service hours and project documentation throughout the year. Submit for recognition through state channels.',
    link: null,
  },
  {
    icon: Star,
    color: 'from-fccla-navy to-fccla-navy-light',
    name: 'Adviser of the Year',
    level: 'Adviser Award',
    description: 'Utah FCCLA recognizes outstanding advisers who go above and beyond in supporting their chapter, developing student leaders, and contributing to the state organization.',
    eligibility: 'Active Utah FCCLA advisers',
    howToApply: 'Nominations accepted from members, peers, and administrators. Contact the state office for nomination process.',
    link: null,
  },
]

async function getAwardDeadlines() {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('award_deadlines')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) throw error
    if (!data || data.length === 0) return null

    return data.map((award: any) => ({
      title: award.award_name,
      description: award.description,
      deadline: award.deadline ? new Date(award.deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : '',
      link: award.link,
      linkLabel: award.link_label || 'View Application',
    }))
  } catch (error) {
    console.error('Error fetching award deadlines:', error)
    return null
  }
}

export default async function AwardsPage() {
  const dbAwards = await getAwardDeadlines()
  const awardDeadlines = dbAwards && dbAwards.length > 0 ? dbAwards : null

  return (
    <main>
      {/* Header */}
      <section className="relative text-white py-24 px-4 mt-20 overflow-hidden">
        <img
          src="/header-images/medals-header.jpeg"
          alt="Awards header"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-fccla-navy/75" />
        <div className="relative max-w-7xl mx-auto text-center">
          <Award size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Awards & Recognition</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Celebrating the achievements of Utah FCCLA members, chapters, and advisers
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            FCCLA offers a rich system of recognition for members, chapters, and advisers at both the state and national level. Whether you're competing in STAR Events, running a community service project, or growing your chapter membership — there's a recognition program for you.
          </p>
        </div>
      </section>

      {/* State Award Applications Hub */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-fccla-red text-white rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock size={24} />
            </div>
            <h2 className="font-outfit text-4xl font-bold text-fccla-navy">Apply for State Awards</h2>
          </div>
          <p className="text-gray-600 text-lg mb-10 ml-16">
            Utah FCCLA state award applications are due annually in early March. Submit before State Leadership Conference.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {awardDeadlines && awardDeadlines.length > 0 ? (
              awardDeadlines.map((award: any, idx: number) => (
                <div key={idx} className="bg-white border-2 border-fccla-red rounded-2xl p-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy size={22} className="text-fccla-red flex-shrink-0" />
                    <h3 className="font-outfit text-xl font-bold text-fccla-navy">{award.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {award.description}
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-5 flex items-center gap-2">
                    <Clock size={14} className="text-fccla-red flex-shrink-0" />
                    <span className="text-xs font-bold text-fccla-red">Deadline: {award.deadline}</span>
                  </div>
                  {award.link && (
                    award.link.startsWith('http') ? (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-fccla-red text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition-all mt-auto"
                      >
                        {award.linkLabel} <ExternalLink size={14} />
                      </a>
                    ) : (
                      <Link
                        href={award.link}
                        className="inline-flex items-center gap-2 bg-fccla-red text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition-all mt-auto"
                      >
                        {award.linkLabel} <ArrowRight size={14} />
                      </Link>
                    )
                  )}
                </div>
              ))
            ) : (
              <>
                <div className="bg-white border-2 border-fccla-red rounded-2xl p-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy size={22} className="text-fccla-red flex-shrink-0" />
                    <h3 className="font-outfit text-xl font-bold text-fccla-navy">4-Star Chapter Award</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    Utah's premier chapter recognition award. Chapters are evaluated on membership growth, programming, competition, community service, and adviser involvement throughout the year.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-5 flex items-center gap-2">
                    <Clock size={14} className="text-fccla-red flex-shrink-0" />
                    <span className="text-xs font-bold text-fccla-red">Applications due March 2, 2026</span>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1HMXKmHYJOVrwluN8Bkj4o2hBOB3ioXPZ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-fccla-red text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition-all mt-auto"
                  >
                    View Application <ExternalLink size={14} />
                  </a>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-7 flex flex-col hover:border-fccla-red transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Star size={22} className="text-fccla-red flex-shrink-0" />
                    <h3 className="font-outfit text-xl font-bold text-fccla-navy">State Goals Application</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    Chapters that complete Utah FCCLA's state goals earn recognition at State Leadership Conference. Document your chapter's work toward this year's state theme and goals.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-5 flex items-center gap-2">
                    <Clock size={14} className="text-fccla-red flex-shrink-0" />
                    <span className="text-xs font-bold text-fccla-red">Applications due March 2, 2026</span>
                  </div>
                  <Link
                    href="/about/theme-goals"
                    className="inline-flex items-center gap-2 bg-fccla-navy text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-fccla-navy-light transition-all mt-auto"
                  >
                    View This Year's Goals <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-7 flex flex-col hover:border-fccla-red transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={22} className="text-fccla-red flex-shrink-0" />
                    <h3 className="font-outfit text-xl font-bold text-fccla-navy">Adviser & Member Awards</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    Nominate outstanding advisers, members, and officers for Utah FCCLA recognition. Awards include Adviser of the Year, Member of the Year, and Officer of the Year — announced at State Conference.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-5 flex items-center gap-2">
                    <Clock size={14} className="text-fccla-red flex-shrink-0" />
                    <span className="text-xs font-bold text-fccla-red">Nominations due March 2, 2026</span>
                  </div>
                  <Link
                    href="/about/contact"
                    className="inline-flex items-center gap-2 bg-fccla-navy text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-fccla-navy-light transition-all mt-auto"
                  >
                    Submit a Nomination <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-7 flex flex-col hover:border-fccla-red transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Award size={22} className="text-fccla-red flex-shrink-0" />
                    <h3 className="font-outfit text-xl font-bold text-fccla-navy">National Awards (via Portal)</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    National Award of Excellence, National Programs recognition, and other national awards are submitted through the FCCLA National Portal. Utah's submission window typically closes March 1.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 mb-5 flex items-center gap-2">
                    <Clock size={14} className="text-fccla-red flex-shrink-0" />
                    <span className="text-xs font-bold text-fccla-red">National Portal deadline: March 1</span>
                  </div>
                  <a
                    href="https://fcclainc.org/engage/recognition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-fccla-navy text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-fccla-navy-light transition-all mt-auto"
                  >
                    National Recognition Hub <ExternalLink size={14} />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {staticAwards.map((award, i) => {
            const AwardIcon = award.icon
            return (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-fccla-red hover:shadow-2xl transition-all">
                <div className="flex flex-col md:flex-row">
                  {/* Color accent bar */}
                  <div className={`bg-gradient-to-b ${award.color} w-full md:w-2 flex-shrink-0`} />
                  <div className="p-8 md:p-10 flex-1">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className={`w-16 h-16 bg-gradient-to-br ${award.color} text-white rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <AwardIcon size={30} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h2 className="font-outfit text-2xl font-bold text-fccla-navy">{award.name}</h2>
                          <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                            {award.level}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">{award.description}</p>
                        <div className="grid md:grid-cols-2 gap-4 mb-5">
                          <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Eligibility</p>
                            <p className="text-gray-700 text-sm">{award.eligibility}</p>
                          </div>
                          <div className="bg-fccla-red/5 rounded-xl p-4">
                            <p className="text-xs font-bold text-fccla-red uppercase tracking-wide mb-1">How to Apply</p>
                            <p className="text-gray-700 text-sm">{award.howToApply}</p>
                          </div>
                        </div>
                        {award.link && (
                          award.link.startsWith('http') ? (
                            <a
                              href={award.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-fccla-red text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-fccla-red-dark transition-all"
                            >
                              Learn More <ExternalLink size={14} />
                            </a>
                          ) : (
                            <a
                              href={award.link}
                              className="inline-flex items-center gap-2 bg-fccla-red text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-fccla-red-dark transition-all"
                            >
                              Learn More →
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Tips for Earning Recognition</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tip: 'Start early', detail: 'Recognition deadlines often fall in the spring. Start documenting your chapter activities and projects in September.' },
              { tip: 'Document everything', detail: 'Keep records of service hours, meeting attendance, competition entries, and project outcomes throughout the year.' },
              { tip: 'Use the Planning Process', detail: "FCCLA's five-step Planning Process is built into most recognition programs. Using it from the start makes applying much easier." },
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle size={22} className="text-fccla-red flex-shrink-0 mt-0.5" />
                  <h3 className="font-outfit text-xl font-bold text-fccla-navy">{item.tip}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Ready to Earn Recognition?</h2>
          <p className="text-white/90 text-lg mb-8">
            Explore STAR Events and National Programs to find the best path to recognition for your chapter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compete/star-events"
              className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Explore STAR Events →
            </Link>
            <Link
              href="/members/national-programs"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-fccla-red transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              National Programs →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
