import { ExternalLink, FileText, BookOpen, GraduationCap, Users, Mail, ClipboardList } from 'lucide-react'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

const resources = [
  {
    icon: Users,
    title: 'Affiliation & Chapter Registration',
    description: 'Affiliate your chapter, renew membership, and access your chapter portal through the official registration system.',
    cta: 'Go to Portal',
    href: 'https://www.registermychapter.com/fccla/',
    external: true,
    highlight: true,
  },
  {
    icon: FileText,
    title: 'Forms & Documents',
    description: 'Affiliation forms, STAR Events paperwork, conference travel forms, and chapter admin documents.',
    cta: 'View Forms',
    href: '/advisers/forms',
    external: false,
    highlight: false,
  },
  {
    icon: ClipboardList,
    title: 'FACS ListServ File Cabinet',
    description: 'Access shared resources, past newsletters, and files distributed through the Utah FCCLA adviser email list.',
    cta: 'Open File Cabinet',
    href: '#',
    external: true,
    highlight: false,
  },
  {
    icon: BookOpen,
    title: 'New Adviser Guide',
    description: 'Just getting started? Walk through the six key steps to launching a successful FCCLA chapter.',
    cta: 'Read the Guide',
    href: '/advisers/new-adviser-guide',
    external: false,
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: 'Training & Professional Development',
    description: 'State training events, national adviser workshops, and resources to grow as an FCCLA chapter adviser.',
    cta: 'View Training',
    href: '/advisers/training',
    external: false,
    highlight: false,
  },
  {
    icon: ExternalLink,
    title: 'National FCCLA Adviser Resources',
    description: 'Curriculum guides, STAR Events materials, the Adviser Handbook, and exclusive resources on the national site.',
    cta: 'Visit National FCCLA',
    href: 'https://fcclainc.org/advisers',
    external: true,
    highlight: false,
  },
]

export default function AdvisersPage() {
  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="relative text-white py-24 px-4 mt-20 overflow-hidden">
        <img
          src="/header-images/for-advisers-header.png"
          alt="For Advisers header"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-fccla-navy/75" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">For Advisers</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Everything you need to run a thriving FCCLA chapter in one place
          </p>
        </div>
      </section>

      {/* Resource Buttons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {resources.map((r, i) => {
              const Icon = r.icon
              const inner = (
                <div
                  className={`flex gap-5 items-start p-7 rounded-2xl border-2 transition-all hover:-translate-y-1 hover:shadow-xl h-full ${
                    r.highlight
                      ? 'border-fccla-red bg-fccla-red text-white hover:bg-red-700'
                      : 'border-gray-200 bg-white hover:border-fccla-red'
                  }`}
                >
                  <div className={`mt-1 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${r.highlight ? 'bg-white/20' : 'bg-gray-100'}`}>
                    <Icon size={24} className={r.highlight ? 'text-white' : 'text-fccla-navy'} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-outfit text-xl font-bold mb-2 ${r.highlight ? 'text-white' : 'text-fccla-navy'}`}>
                      {r.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${r.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                      {r.description}
                    </p>
                    <span className={`inline-flex items-center gap-1.5 font-bold text-sm ${r.highlight ? 'text-white underline' : 'text-fccla-red'}`}>
                      {r.cta}
                      {r.external && <ExternalLink size={14} />}
                      {!r.external && <span>→</span>}
                    </span>
                  </div>
                </div>
              )

              return r.external ? (
                <a key={i} href={r.href} target={r.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer" className="block h-full">
                  {inner}
                </a>
              ) : (
                <Link key={i} href={r.href} className="block h-full">
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ListServ Sign-Up Banner */}
      <section className="bg-gray-50 border-y border-gray-200 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Mail size={40} className="mx-auto mb-4 text-fccla-navy" />
          <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-3">Stay in the Loop</h2>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            The Utah FCCLA FACS ListServ is the primary way we communicate with advisers. Important deadlines, forms, and updates are distributed through this email list — make sure you're subscribed.
          </p>
          <a
            href="mailto:utahfccla@gmail.com?subject=Subscribe to FACS ListServ"
            className="inline-block bg-fccla-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-fccla-navy-light transition-all"
          >
            Request ListServ Subscription
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-3">Questions?</h2>
          <p className="text-gray-600 mb-6">Reach out to the Utah FCCLA state office for adviser support.</p>
          <a
            href="mailto:utahfccla@gmail.com"
            className="inline-flex items-center gap-2 text-fccla-red font-bold text-lg hover:underline"
          >
            <Mail size={20} />
            utahfccla@gmail.com
          </a>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
