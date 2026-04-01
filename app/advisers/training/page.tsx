import { GraduationCap, Calendar, ExternalLink, Monitor, Users, BookOpen } from 'lucide-react'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

const stateTrainings = [
  {
    event: 'Fall Leadership Conference',
    date: 'October (Annual)',
    location: 'Provo, UT',
    description: 'The first major training event of the year. Includes adviser workshops, an overview of the year ahead, STAR Event preparation sessions, and networking with advisers from across the state.',
    link: '/events/fall-leadership',
    type: 'In-Person',
  },
  {
    event: 'Region Conferences',
    date: 'February (Annual)',
    location: 'Varies by Region',
    description: 'Region conferences are excellent professional learning opportunities. Advisers can observe STAR Event judging, connect with regional leadership, and support their competing students.',
    link: '/events/region-conferences',
    type: 'In-Person',
  },
  {
    event: 'State Leadership Conference',
    date: 'March 24–25, 2026 (Layton, UT)',
    location: 'Layton, UT',
    description: "Utah's largest FCCLA event. Adviser workshops and breakout sessions are offered alongside student competitions and general sessions. A must-attend for all Utah FCCLA advisers.",
    link: '/events/state-conference',
    type: 'In-Person',
  },
]

const nationalResources = [
  {
    icon: Monitor,
    title: 'Adviser Webinar Series',
    description: 'National FCCLA hosts regular webinars on topics including STAR Events, National Programs, chapter management, and advocacy. Most are free and recorded for later viewing.',
    link: 'https://fcclainc.org/advise/professional-development',
  },
  {
    icon: GraduationCap,
    title: 'National Leadership Conference',
    description: 'NLC in Washington D.C. each July includes an adviser strand with professional development sessions, networking, and recognition. An unforgettable experience for advisers and students alike.',
    link: 'https://fcclainc.org/attend/national-leadership-conference',
  },
  {
    icon: BookOpen,
    title: 'Online Learning Center',
    description: "National FCCLA's online learning platform offers self-paced courses for new and experienced advisers. Topics include FCCLA basics, the Planning Process, competition prep, and more.",
    link: 'https://fcclainc.org/advise',
  },
]

export default function TrainingPage() {
  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <GraduationCap size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Training & Webinars</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Professional development opportunities for Utah FCCLA advisers
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Strong advisers build strong chapters. Utah FCCLA and National FCCLA provide a range of in-person and online training opportunities to help you grow as an adviser, stay current with FCCLA programs, and connect with the FCS educator community.
          </p>
        </div>
      </section>

      {/* Utah State Trainings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-4">Utah State Training Events</h2>
          <p className="text-gray-600 mb-12 text-lg">Every major Utah FCCLA conference includes adviser training components</p>

          <div className="space-y-6">
            {stateTrainings.map((training, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-10 hover:border-fccla-red hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-fccla-red text-white rounded-2xl flex items-center justify-center">
                      <Calendar size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-outfit text-2xl font-bold text-fccla-navy">{training.event}</h3>
                      <span className="text-xs font-bold bg-fccla-red/10 text-fccla-red px-3 py-1 rounded-full">
                        {training.type}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 mb-3">{training.date} · {training.location}</p>
                    <p className="text-gray-700 leading-relaxed mb-5">{training.description}</p>
                    <Link
                      href={training.link}
                      className="inline-flex items-center gap-2 bg-fccla-navy text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-fccla-navy-light transition-all"
                    >
                      View Event Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Resources */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-4">National Training Resources</h2>
          <p className="text-gray-600 mb-12 text-lg">From National FCCLA — available to all advisers year-round</p>

          <div className="grid md:grid-cols-3 gap-6">
            {nationalResources.map((resource, i) => {
              const ResIcon = resource.icon
              return (
                <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red hover:shadow-xl transition-all flex flex-col">
                  <div className="w-14 h-14 bg-fccla-red text-white rounded-2xl flex items-center justify-center mb-5 flex-shrink-0">
                    <ResIcon size={28} />
                  </div>
                  <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3">{resource.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-1">{resource.description}</p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fccla-red font-bold hover:underline"
                  >
                    Learn More <ExternalLink size={16} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FACS ListServ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-fccla-navy text-white rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-fccla-red rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users size={40} />
            </div>
            <div>
              <h2 className="font-outfit text-3xl font-bold mb-3">Join the Utah FACS ListServ</h2>
              <p className="text-white/85 text-lg leading-relaxed mb-6">
                The Utah FACS ListServ is how Utah FCCLA communicates with advisers statewide. Training announcements, deadlines, and resources are all distributed here. If you're not on the ListServ, you're missing critical information.
              </p>
              <Link
                href="/about/contact"
                className="inline-flex items-center gap-2 bg-white text-fccla-navy px-8 py-3 rounded-xl font-bold hover:bg-fccla-red hover:text-white transition-all"
              >
                Contact Us to Join →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Ready to Grow as an Adviser?</h2>
          <p className="text-white/90 text-lg mb-8">
            Start by registering for Fall Leadership Conference — the best place for new and returning advisers to connect
          </p>
          <Link
            href="/events/fall-leadership"
            className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            View Fall Leadership Info →
          </Link>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
