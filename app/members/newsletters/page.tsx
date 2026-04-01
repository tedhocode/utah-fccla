import { Newspaper, Download, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/server'
import PageTransition from '@/components/PageTransition'

const defaultNewsletters = [
  { title: "March 2026 - Spring Forward with FCCLA", date: "March 2026", description: "State Conference highlights, scholarship deadlines, and officer elections", isFeatured: true },
  { title: "February 2026 - Road to State Conference", date: "February 15, 2026", description: "State Conference preview, competition tips, and last-minute registration info", isFeatured: false },
  { title: "January 2026 - New Year, New Goals", date: "January 10, 2026", description: "Regional conference schedule, National Programs updates, and member spotlights", isFeatured: false },
  { title: "December 2025 - Year in Review", date: "December 5, 2025", description: "2025 highlights, holiday message from state officers, and upcoming events", isFeatured: false },
  { title: "November 2025 - Fall Leadership Recap", date: "November 1, 2025", description: "Fall Conference highlights, chapter achievements, and State Conference registration opens", isFeatured: false },
  { title: "October 2025 - Compete & Connect", date: "October 10, 2025", description: "STAR Events overview, National Programs spotlight, and fall leadership prep", isFeatured: false },
  { title: "September 2025 - Welcome Back!", date: "September 5, 2025", description: "New year kickoff, officer introductions, and upcoming events calendar", isFeatured: false },
]

async function getNewsletters() {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('newsletters')
      .select('*')
      .order('issue_date', { ascending: false })

    if (error) throw error
    if (!data || data.length === 0) return null

    return data.map((newsletter: any) => ({
      title: newsletter.title,
      date: new Date(newsletter.issue_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      description: newsletter.description || '',
      isFeatured: newsletter.is_featured,
      link: newsletter.drive_link,
    }))
  } catch (error) {
    console.error('Error fetching newsletters:', error)
    return null
  }
}

export default async function NewslettersPage() {
  const dbNewsletters = await getNewsletters()
  const newsletters = dbNewsletters && dbNewsletters.length > 0 ? dbNewsletters : defaultNewsletters
  const featuredNewsletter = newsletters.find((n: any) => n.isFeatured) || newsletters[0]
  const archiveNewsletters = newsletters.slice(1)

  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-red to-red-700 text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Newsletters</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Stay informed about Utah FCCLA news, events, and opportunities
          </p>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 rounded-2xl border-2 border-fccla-red text-center">
            <Mail size={64} className="mx-auto mb-6 text-fccla-red" />
            <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Get the latest Utah FCCLA news, event updates, competition deadlines, and scholarship opportunities delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-fccla-red focus:outline-none text-lg"
              />
              <button className="bg-fccla-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Latest Newsletter</h2>

          <div className="bg-white rounded-2xl overflow-hidden border-2 border-fccla-red shadow-lg mb-12">
            <div className="bg-fccla-red text-white p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold uppercase tracking-wide">{featuredNewsletter.date}</span>
                <Newspaper size={32} />
              </div>
              <h3 className="font-outfit text-3xl font-bold mb-2">{featuredNewsletter.title}</h3>
              <p className="text-white/90">
                {featuredNewsletter.description}
              </p>
            </div>
            <div className="p-8">
              <h4 className="font-outfit text-xl font-bold text-fccla-navy mb-4">In This Issue:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-fccla-red">★</span>
                  <span className="text-gray-700">State Leadership Conference Recap - Over 1,500 members competed!</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fccla-red">★</span>
                  <span className="text-gray-700">Meet Your 2026-2027 State Officer Candidates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fccla-red">★</span>
                  <span className="text-gray-700">Scholarship Deadlines - Don't miss out on free money!</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fccla-red">★</span>
                  <span className="text-gray-700">Nationals Preview - See who's headed to Washington, D.C.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fccla-red">★</span>
                  <span className="text-gray-700">Chapter Spotlight - Westlake High School's Community Service Initiative</span>
                </li>
              </ul>
              <button className="w-full bg-fccla-navy text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy-light transition-all inline-flex items-center justify-center gap-2">
                <Download size={20} />
                Download {featuredNewsletter.date.split(' ')[0]} Newsletter (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Newsletter Archive</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {archiveNewsletters.map((newsletter: any, i: number) => (
              <NewsletterCard
                key={i}
                title={newsletter.title}
                date={newsletter.date}
                description={newsletter.description}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://drive.google.com/drive/folders/1c9yPxMznor1L4BvLutlSrbXqhrXuijDl?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-fccla-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-fccla-navy-light transition-all"
            >
              View All Newsletters on Google Drive
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Stay Connected</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200 hover:border-fccla-red transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-2">Instagram</h3>
              <p className="text-gray-600 mb-4 text-sm">Follow @utahfccla for daily updates</p>
              <a 
                href="https://instagram.com/utahfccla" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-fccla-red hover:text-fccla-red-dark font-semibold inline-flex items-center gap-1"
              >
                Follow Us
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200 hover:border-fccla-red transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-2">Facebook</h3>
              <p className="text-gray-600 mb-4 text-sm">Like our page for event updates</p>
              <a 
                href="https://facebook.com/utahfccla" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-fccla-red hover:text-fccla-red-dark font-semibold inline-flex items-center gap-1"
              >
                Like Us
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200 hover:border-fccla-red transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-fccla-red to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-2">Email Updates</h3>
              <p className="text-gray-600 mb-4 text-sm">Get newsletters & announcements</p>
              <a 
                href="#subscribe"
                className="text-fccla-red hover:text-fccla-red-dark font-semibold inline-flex items-center gap-1"
              >
                Subscribe
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-3xl font-bold text-white mb-4">Have News to Share?</h2>
          <p className="text-white/90 text-lg mb-8">
            Submit your chapter achievements, events, or success stories to be featured in our newsletter
          </p>
          <Link 
            href="/about/contact"
            className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Submit Your Story
          </Link>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}

function NewsletterCard({ title, date, description }: { title: string, date: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-fccla-red transition-all group">
      <div className="flex items-start gap-4 mb-4">
        <Newspaper size={32} className="text-fccla-red flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-outfit text-lg font-bold text-fccla-navy group-hover:text-fccla-red transition-colors mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
      <button className="text-fccla-red hover:text-fccla-red-dark font-semibold inline-flex items-center gap-2 text-sm">
        <Download size={16} />
        Download PDF
      </button>
    </div>
  )
}