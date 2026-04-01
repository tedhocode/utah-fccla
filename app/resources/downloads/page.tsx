import { Download, ExternalLink, Image, FileText, Trophy, Users, Layers } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

type DownloadItem = {
  name: string
  description: string
  href: string
  external?: boolean
  note?: string
}

type DownloadCategory = {
  icon: React.ElementType
  color: string
  title: string
  items: DownloadItem[]
}

const categories: DownloadCategory[] = [
  {
    icon: Image,
    color: 'bg-fccla-navy',
    title: 'Logos & Branding',
    items: [
      {
        name: 'Utah FCCLA Logo (PNG)',
        description: 'Official Utah FCCLA logo on transparent background, suitable for digital use.',
        href: '#',
        note: 'Contact state office for current logo files',
      },
      {
        name: 'Utah FCCLA Logo (SVG)',
        description: 'Vector version of the Utah FCCLA logo for high-resolution print use.',
        href: '#',
        note: 'Contact state office for current logo files',
      },
      {
        name: 'National FCCLA Brand Assets',
        description: 'Official FCCLA logos, color palette, and typography guidelines from National FCCLA.',
        href: 'https://fcclainc.org/about/brand-assets',
        external: true,
      },
    ],
  },
  {
    icon: Trophy,
    color: 'bg-fccla-red',
    title: 'STAR Events & Competition',
    items: [
      {
        name: 'STAR Events Guidelines (Current Year)',
        description: 'Official event guidelines, rubrics, and requirements for all STAR Events. Updated annually by National FCCLA.',
        href: 'https://fcclainc.org/compete/star-events',
        external: true,
      },
      {
        name: 'Creed Speaking Rubric (State Event)',
        description: 'Official rubric for the Utah FCCLA Creed Speaking state competition.',
        href: '/documents/fccla_creed_speaking_state_event_rubric__1__1.pdf',
        external: true,
      },
      {
        name: 'Food Art Rubric (State Event)',
        description: 'Official rubric and event description for the Utah-only Food Art state competition.',
        href: '/documents/food_art_state_event_description___rubric_2024.docx__1__1.pdf',
        external: true,
      },
      {
        name: 'Fashion Sketch Rubric (State Event)',
        description: 'Official rubric and event description for the Utah-only Fashion Sketch state competition.',
        href: '/documents/fashion_sketch_state_event_description___rubric_2024.docx__1__1.pdf',
        external: true,
      },
    ],
  },
  {
    icon: Users,
    color: 'bg-fccla-navy',
    title: 'Membership & Affiliation',
    items: [
      {
        name: 'Membership Recruitment Materials',
        description: 'Flyers and handouts to help recruit new students to your FCCLA chapter.',
        href: 'https://fcclainc.org/engage/membership',
        external: true,
      },
      {
        name: 'FCCLA Creed',
        description: 'Official FCCLA Creed text — used in chapter meetings and the Creed Speaking competition.',
        href: 'https://fcclainc.org/about/creed',
        external: true,
      },
      {
        name: 'FCCLA Motto, Colors & Flower',
        description: "Official FCCLA symbols, motto, and colors reference sheet for chapter use.",
        href: 'https://fcclainc.org/about',
        external: true,
      },
    ],
  },
  {
    icon: FileText,
    color: 'bg-fccla-red',
    title: 'Chapter Planning',
    items: [
      {
        name: 'FCCLA Planning Process Worksheet',
        description: 'The five-step Planning Process worksheet for guiding chapter and individual projects.',
        href: 'https://fcclainc.org/advise/planning-process',
        external: true,
      },
      {
        name: 'Chapter Bylaws Template',
        description: 'Template for writing or updating your chapter bylaws.',
        href: 'https://fcclainc.org/advise',
        external: true,
      },
      {
        name: 'Meeting Minutes Template',
        description: 'Standard template for recording chapter meeting minutes.',
        href: '#',
        note: 'Contact state office to request',
      },
    ],
  },
  {
    icon: Layers,
    color: 'bg-fccla-navy',
    title: 'State-Specific Documents',
    items: [
      {
        name: 'Utah FCCLA State Bylaws',
        description: 'Official bylaws and policy & procedures for Utah FCCLA.',
        href: '#',
        note: 'Contact state office to request current version',
      },
      {
        name: 'Utah Region Map',
        description: 'Map of Utah showing the five FCCLA regions and school assignments.',
        href: '#',
        note: 'Contact state office to request',
      },
      {
        name: 'State Conference Proceedings',
        description: 'Official agendas and minutes from past Utah FCCLA conferences.',
        href: '/events/proceedings',
      },
    ],
  },
]

export default function DownloadsPage() {
  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Download size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Downloads</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Logos, guidelines, templates, and official documents for members and advisers
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Find downloadable resources organized by category below. Files hosted by National FCCLA link directly to their website. For Utah-specific documents, contact the state office if a link isn't available yet.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-14">
          {categories.map((cat) => {
            const CatIcon = cat.icon
            return (
              <div key={cat.title}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${cat.color} text-white rounded-xl flex items-center justify-center`}>
                    <CatIcon size={24} />
                  </div>
                  <h2 className="font-outfit text-2xl font-bold text-fccla-navy">{cat.title}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-fccla-red hover:shadow-lg transition-all flex flex-col"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Download size={18} className="text-fccla-red flex-shrink-0 mt-0.5" />
                        <h3 className="font-outfit text-base font-bold text-fccla-navy leading-tight">{item.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1">{item.description}</p>
                      {item.note && (
                        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg mb-3 font-medium">
                          {item.note}
                        </p>
                      )}
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-fccla-red font-bold text-sm hover:underline mt-auto"
                        >
                          Download <ExternalLink size={13} />
                        </a>
                      ) : item.href !== '#' ? (
                        <a href={item.href} className="inline-flex items-center gap-1.5 text-fccla-red font-bold text-sm hover:underline mt-auto">
                          View →
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm font-semibold mt-auto">Coming soon</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Can't Find What You Need?</h2>
          <p className="text-white/90 text-lg mb-8">
            Reach out to the Utah FCCLA state office and we'll track down the right document for you
          </p>
          <a
            href="/about/contact"
            className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            Contact the State Office →
          </a>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
