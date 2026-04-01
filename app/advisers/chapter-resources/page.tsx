import { FolderOpen, ExternalLink, CheckCircle, Target, Users, Lightbulb, ClipboardList, Calendar } from 'lucide-react'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

const resourceCategories = [
  {
    icon: Target,
    title: 'The FCCLA Planning Process',
    color: 'bg-fccla-red',
    description: 'The backbone of every FCCLA project. The five-step Planning Process guides members from identifying a concern to evaluating their impact. Use it for chapter projects, National Programs, and STAR Events.',
    items: [
      'Identify concerns in your school or community',
      'Set a specific, measurable goal',
      'Form a plan of action',
      'Act — implement your project',
      'Follow up and evaluate your impact',
    ],
    link: { label: 'Planning Process Resources', href: 'https://fcclainc.org/advise/planning-process', external: true },
  },
  {
    icon: Users,
    title: 'Chapter Officer Resources',
    color: 'bg-fccla-navy',
    description: 'Resources for your chapter officer team — from running effective meetings to delegating responsibilities and building a strong chapter culture.',
    items: [
      'Chapter officer roles and responsibilities',
      'Meeting agenda templates',
      'Parliamentary procedure basics',
      'Officer transition and training tips',
      'Goal-setting and strategic planning',
    ],
    link: { label: 'Officer Resources at National FCCLA', href: 'https://fcclainc.org/advise', external: true },
  },
  {
    icon: Lightbulb,
    title: 'Chapter Activity Ideas',
    color: 'bg-fccla-red',
    description: 'Need ideas for your chapter? Use these to keep members engaged, earn recognition, and make a real impact in your school and community throughout the year.',
    items: [
      'Service projects tied to National Programs',
      'Career exploration activities and job shadows',
      'Recruitment events and membership drives',
      'Community awareness campaigns',
      'Fundraisers to cover conference and competition fees',
    ],
    link: null,
  },
  {
    icon: ClipboardList,
    title: 'Chapter Recognition Programs',
    color: 'bg-fccla-navy',
    description: 'FCCLA offers several programs to recognize outstanding chapters, advisers, and members. Pursuing these recognitions is a great way to set goals and celebrate achievements.',
    items: [
      'FCCLA National Award of Excellence — chapter recognition program',
      'National Adviser Award programs',
      'Membership growth awards and challenges',
      'State recognition programs (contact Utah FCCLA)',
      'Community service hour tracking for chapter awards',
    ],
    link: { label: 'Learn About Chapter Recognition', href: 'https://fcclainc.org/engage/recognition', external: true },
  },
  {
    icon: Calendar,
    title: 'Year-Round Planning Calendar',
    color: 'bg-fccla-red',
    description: 'A successful FCCLA year follows a predictable rhythm. Use this general timeline to plan ahead and avoid missing key deadlines.',
    items: [
      'August–September: Recruit members, plan kick-off meeting',
      'October: Affiliate chapter, Fall Leadership Conference',
      'November–January: Work on STAR Events and chapter projects',
      'February: Region Conference — STAR Event competition',
      'March: State Leadership Conference — compete and celebrate',
      'April–May: Recognize seniors, plan for next year, NLC prep',
    ],
    link: { label: 'View Events Calendar', href: '/events/calendar', external: false },
  },
]

export default function ChapterResourcesPage() {
  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <FolderOpen size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Chapter Resources</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Tools, templates, and guidance for running a successful FCCLA chapter
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you're planning your first chapter project or looking to take your chapter to the next level, these resources will help. From the FCCLA Planning Process to officer training and chapter recognition programs — it's all here.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {resourceCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 hover:border-fccla-red hover:shadow-2xl transition-all">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className={`w-16 h-16 ${category.color} text-white rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <CategoryIcon size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-outfit text-2xl font-bold text-fccla-navy mb-3">{category.title}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{category.description}</p>
                    <ul className="space-y-2 mb-6">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-fccla-red flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {category.link && (
                      category.link.external ? (
                        <a
                          href={category.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-fccla-red text-white px-6 py-3 rounded-xl font-bold hover:bg-fccla-red-dark transition-all"
                        >
                          {category.link.label} <ExternalLink size={16} />
                        </a>
                      ) : (
                        <Link
                          href={category.link.href}
                          className="inline-flex items-center gap-2 bg-fccla-red text-white px-6 py-3 rounded-xl font-bold hover:bg-fccla-red-dark transition-all"
                        >
                          {category.link.label} →
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* National Resources */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-fccla-navy text-white rounded-2xl p-10 text-center">
            <FolderOpen size={56} className="mx-auto mb-6" />
            <h2 className="font-outfit text-3xl font-bold mb-4">National FCCLA Adviser Hub</h2>
            <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
              The National FCCLA website has a full library of printable resources, curriculum integration guides, and adviser tools.
            </p>
            <a
              href="https://fcclainc.org/advise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-fccla-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all"
            >
              Visit Adviser Hub <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Looking for Downloadable Forms?</h2>
          <p className="text-white/90 text-lg mb-8">
            Find permission slips, STAR Event forms, and other documents in the Forms & Documents section
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/advisers/forms"
              className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Forms & Documents →
            </Link>
            <Link
              href="/resources/downloads"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-fccla-red transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Downloads →
            </Link>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
