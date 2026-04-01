import { BookOpen, CheckCircle, ExternalLink, Users, Calendar, ClipboardList, Mail } from 'lucide-react'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

const steps = [
  {
    number: 1,
    title: 'Understand What FCCLA Is',
    description: 'FCCLA (Family, Career and Community Leaders of America) is a national career and technical student organization for students in Family and Consumer Sciences education. It is the only CTSO with a focus on family and consumer sciences, careers, and communities.',
    action: 'Read through the About section of this site and review the national FCCLA website.',
    icon: BookOpen,
  },
  {
    number: 2,
    title: 'Affiliate Your Chapter',
    description: 'Affiliation is how your chapter officially registers with Utah FCCLA and National FCCLA for the school year. It must be completed annually through the online registration portal.',
    action: 'Visit the Affiliation & Portal page for step-by-step instructions.',
    link: '/advisers/affiliation',
    icon: ClipboardList,
  },
  {
    number: 3,
    title: 'Join the Utah FACS ListServ',
    description: 'The Utah FACS ListServ is the primary communication channel for Utah FCCLA advisers. Important announcements, deadlines, event info, and resources are distributed here.',
    action: 'Contact the Utah FCCLA state office to be added to the ListServ email list.',
    link: '/about/contact',
    icon: Mail,
  },
  {
    number: 4,
    title: 'Plan Your First Meetings',
    description: "Hold a kick-off meeting with students to introduce FCCLA, elect chapter officers, and set goals for the year. Use the FCCLA Planning Process to guide your chapter's projects.",
    action: 'Visit the Chapter Resources page for meeting templates and planning materials.',
    link: '/advisers/chapter-resources',
    icon: Users,
  },
  {
    number: 5,
    title: 'Register for Fall Leadership',
    description: 'Fall Leadership Conference is the first major Utah FCCLA event of the year, held each October. It is a great opportunity for new members and advisers to get oriented and meet the state officer team.',
    action: 'Check the Events section for registration details and deadlines.',
    link: '/events/fall-leadership',
    icon: Calendar,
  },
  {
    number: 6,
    title: 'Prepare for Region & State Competitions',
    description: 'STAR Events and state competitions are a core part of the FCCLA experience. Familiarize yourself with the event guidelines early so students have plenty of time to prepare.',
    action: 'Review the Compete section for STAR Events guidelines and state competition details.',
    link: '/compete/star-events',
    icon: CheckCircle,
  },
]

export default function NewAdviserGuidePage() {
  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <BookOpen size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">New Adviser Guide</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Everything you need to know to launch a successful FCCLA chapter
          </p>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to Utah FCCLA! Whether you're taking over an existing chapter or starting one from scratch, this guide will walk you through the key steps to get your chapter up and running. You've made a great decision — <strong className="text-fccla-red">FCCLA is one of the most impactful experiences you can offer your students.</strong>
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Your First Year Checklist</h2>
          <div className="space-y-6">
            {steps.map((step) => {
              const StepIcon = step.icon
              return (
                <div key={step.number} className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-10 hover:border-fccla-red hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex items-center gap-4 md:flex-col md:items-center md:w-20 flex-shrink-0">
                      <div className="w-14 h-14 bg-fccla-red text-white rounded-2xl flex items-center justify-center font-outfit font-extrabold text-2xl">
                        {step.number}
                      </div>
                      <StepIcon size={24} className="text-fccla-red hidden md:block" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-3">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{step.description}</p>
                      <div className="flex items-start gap-2 bg-fccla-red/5 border border-fccla-red/20 rounded-xl p-4">
                        <CheckCircle size={18} className="text-fccla-red flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">
                          <span className="font-semibold text-fccla-red">Next step: </span>
                          {step.link ? (
                            <Link href={step.link} className="text-fccla-navy underline hover:text-fccla-red font-medium transition-colors">
                              {step.action}
                            </Link>
                          ) : (
                            step.action
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Key Facts for Advisers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Adviser Eligibility', body: 'Any licensed teacher who teaches Family and Consumer Sciences courses can advise an FCCLA chapter. Chapters must be affiliated with the school FCS program.' },
              { title: 'Affiliation Deadline', body: 'Chapters must affiliate annually, typically by mid-October. Late affiliation may affect eligibility for some competitions and conferences. Don\'t miss this deadline!' },
              { title: 'Adviser Membership', body: 'Advisers can join FCCLA as professional members through National FCCLA. Professional membership provides access to resources, networking, and recognition programs.' },
              { title: 'Chapter Size', body: 'There is no minimum or maximum chapter size. Some chapters have 5 members, others have 200+. Any size can be a thriving, award-winning chapter.' },
              { title: 'CTE Connection', body: 'FCCLA is the official CTSO for FCS education. Participation may count toward CTE pathways and is recognized by the Utah State Board of Education.' },
              { title: 'You\'re Not Alone', body: 'Utah FCCLA has 5 regions with regional advisers who can provide support. The state listserv connects you with hundreds of experienced FCS advisers statewide.' },
            ].map((fact, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all">
                <h3 className="font-outfit text-xl font-bold text-fccla-red mb-3">{fact.title}</h3>
                <p className="text-gray-700 leading-relaxed">{fact.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-fccla-navy text-white rounded-2xl p-10 text-center">
            <BookOpen size={56} className="mx-auto mb-6" />
            <h2 className="font-outfit text-3xl font-bold mb-4">National Adviser Resources</h2>
            <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
              National FCCLA maintains a comprehensive library of adviser guides, planning templates, and professional development resources.
            </p>
            <a
              href="https://fcclainc.org/advise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-fccla-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all"
            >
              National FCCLA Adviser Resources <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Questions? We're Here to Help.</h2>
          <p className="text-white/90 text-lg mb-8">
            The Utah FCCLA state office and your regional adviser are your best resources as a new adviser
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about/contact"
              className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Contact the State Office →
            </Link>
            <Link
              href="/advisers/affiliation"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-fccla-red transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Affiliate Your Chapter →
            </Link>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
