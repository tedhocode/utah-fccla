import { FileDown, ExternalLink, AlertCircle, ClipboardList, Users, Trophy, Shield } from 'lucide-react'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

type FormCategory = {
  icon: React.ElementType
  title: string
  color: string
  forms: {
    name: string
    description: string
    href: string
    external?: boolean
    note?: string
  }[]
}

const categories: FormCategory[] = [
  {
    icon: Users,
    title: 'Affiliation & Membership',
    color: 'bg-fccla-navy',
    forms: [
      {
        name: 'Chapter Affiliation',
        description: 'Affiliate your chapter and register members for the school year through the national portal.',
        href: 'https://www.registermychapter.com/fccla/',
        external: true,
        note: 'Completed online at registermychapter.com',
      },
      {
        name: 'Bulk Member Import Template',
        description: 'Spreadsheet template for uploading multiple student members at once into the registration portal.',
        href: '#',
        note: 'Download from portal after logging in',
      },
    ],
  },
  {
    icon: Trophy,
    title: 'STAR Events & Competitions',
    color: 'bg-fccla-red',
    forms: [
      {
        name: 'STAR Event Guidelines (Current Year)',
        description: 'Official guidelines, rubrics, and requirements for all STAR Events. Download individual event guides from National FCCLA.',
        href: 'https://fcclainc.org/compete/star-events',
        external: true,
      },
      {
        name: 'STAR Event Entry Form',
        description: 'Registration form to enter your students in STAR Events at the Region Conference.',
        href: '#',
        note: 'Contact your regional adviser for the current form',
      },
      {
        name: 'Accommodations Request Form',
        description: 'Request testing accommodations for STAR Events for students with documented disabilities.',
        href: '/compete/accommodations',
      },
      {
        name: 'Utah State Competition Entry Forms',
        description: 'Entry forms for Creed Speaking, Promo Video, Pin Design, Toys that Teach, and AI for Impact.',
        href: '#',
        note: 'Distributed via ListServ prior to State Leadership Conference',
      },
    ],
  },
  {
    icon: Shield,
    title: 'Conference & Travel',
    color: 'bg-fccla-navy',
    forms: [
      {
        name: 'Conference Registration',
        description: 'Register your chapter for Fall Leadership, Region, or State Leadership Conference.',
        href: '#',
        note: 'Links distributed via ListServ before each conference',
      },
      {
        name: 'Student Travel Permission Slip (Template)',
        description: "Generic student travel permission slip template. Customize with your school's letterhead and specific event details.",
        href: '#',
        note: 'Check with your school district for required format',
      },
      {
        name: 'Chaperone Medical Authorization (Template)',
        description: 'Medical authorization and emergency contact form for student conference attendance.',
        href: '#',
        note: 'Check with your school district for required format',
      },
    ],
  },
  {
    icon: ClipboardList,
    title: 'Chapter Administration',
    color: 'bg-fccla-red',
    forms: [
      {
        name: 'Chapter Bylaws Template',
        description: 'A template for writing or updating your chapter bylaws. Chapters are required to have active bylaws on file.',
        href: 'https://fcclainc.org/advise',
        external: true,
      },
      {
        name: 'Meeting Minutes Template',
        description: 'Standard meeting minutes template for chapter business meetings and officer team meetings.',
        href: '#',
      },
      {
        name: 'Project Planning Worksheet',
        description: 'Worksheet based on the FCCLA Planning Process for documenting chapter projects and National Programs.',
        href: 'https://fcclainc.org/advise/planning-process',
        external: true,
      },
      {
        name: 'Community Service Hour Log',
        description: 'Track member community service hours for recognition programs and chapter reporting.',
        href: '#',
      },
    ],
  },
]

export default function FormsPage() {
  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <FileDown size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Forms & Documents</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Commonly needed forms, templates, and official documents for FCCLA advisers
          </p>
        </div>
      </section>

      {/* Notice */}
      <section className="bg-fccla-red py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center">
          <AlertCircle size={24} className="flex-shrink-0" />
          <p className="font-semibold">
            Conference-specific forms are distributed through the Utah FACS ListServ prior to each event. Make sure you're subscribed to receive them.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Below are commonly needed forms organized by category. Some forms are available to download directly; others link to National FCCLA or are distributed through the ListServ. If you can't find what you need, check the Downloads page or contact the state office.
          </p>
        </div>
      </section>

      {/* Form Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {categories.map((category, i) => {
            const CatIcon = category.icon
            return (
              <div key={i}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${category.color} text-white rounded-xl flex items-center justify-center`}>
                    <CatIcon size={24} />
                  </div>
                  <h2 className="font-outfit text-2xl font-bold text-fccla-navy">{category.title}</h2>
                </div>

                {/* Forms Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {category.forms.map((form, j) => (
                    <div key={j} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-fccla-red hover:shadow-lg transition-all flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileDown size={20} className="text-fccla-red" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-1">{form.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{form.description}</p>
                        {form.note && (
                          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg mb-3 font-medium">
                            {form.note}
                          </p>
                        )}
                        {form.external ? (
                          <a
                            href={form.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-fccla-red font-bold text-sm hover:underline"
                          >
                            Access Form <ExternalLink size={14} />
                          </a>
                        ) : form.href !== '#' ? (
                          <Link
                            href={form.href}
                            className="inline-flex items-center gap-1.5 text-fccla-red font-bold text-sm hover:underline"
                          >
                            View Page →
                          </Link>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-gray-400 font-semibold text-sm">
                            <FileDown size={14} /> Coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Downloads Link */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-fccla-navy text-white rounded-2xl p-10">
            <FileDown size={48} className="mx-auto mb-4" />
            <h2 className="font-outfit text-2xl font-bold mb-3">Need More Downloads?</h2>
            <p className="text-white/80 mb-6">The Resources Downloads page has additional files and documents for advisers and members.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/downloads"
                className="inline-flex items-center justify-center gap-2 bg-fccla-red text-white px-8 py-3 rounded-xl font-bold hover:bg-fccla-red-dark transition-all"
              >
                Go to Downloads →
              </Link>
              <a
                href="https://fcclainc.org/advise"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-fccla-navy px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all"
              >
                National FCCLA Resources <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Can't Find What You Need?</h2>
          <p className="text-white/90 text-lg mb-8">
            Reach out to the Utah FCCLA state office and we'll help you track down the right document
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
    </PageTransition>
  )
}
