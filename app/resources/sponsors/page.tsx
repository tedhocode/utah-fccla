import { Heart, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/server'

type Sponsor = {
  name: string
  website?: string
  description?: string
  tier?: string
  logo_url?: string
}

const defaultSponsors: Sponsor[] = [
  // Add sponsors here — example:
  // { name: 'Example Company', website: 'https://example.com', description: 'Supporting Utah students since 2020.' },
]

async function getSponsors() {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('sponsors')
      .select('*')
      .eq('is_active', true)
      .order('tier', { ascending: true })

    if (error) throw error
    if (!data || data.length === 0) return null

    return data.map((sponsor: any) => ({
      name: sponsor.name,
      website: sponsor.website,
      description: sponsor.description,
      tier: sponsor.tier,
      logo_url: sponsor.logo_url,
    }))
  } catch (error) {
    console.error('Error fetching sponsors:', error)
    return null
  }
}

export default async function SponsorsPage() {
  const dbSponsors = await getSponsors()
  const sponsors = dbSponsors && dbSponsors.length > 0 ? dbSponsors : defaultSponsors
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Heart size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Our Sponsors</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            The generous organizations and individuals who make Utah FCCLA possible
          </p>
        </div>
      </section>

      {/* Thank You Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Utah FCCLA is deeply grateful for the support of our sponsors and partners. Their contributions fund state conferences, scholarships, leadership development programs, and opportunities for over{' '}
            <strong className="text-fccla-red">1,500 student members</strong> across 50+ schools statewide. We couldn't do it without them.
          </p>
        </div>
      </section>

      {/* Sponsors Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-4 text-center">Thank You to Our Sponsors</h2>
          <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
            Each of these organizations has invested in the future of Utah's student leaders
          </p>

          {sponsors && sponsors.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsors.map((sponsor: any, i: number) => (
                <div
                  key={i}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red hover:shadow-xl transition-all flex flex-col"
                >
                  {/* Logo */}
                  <div className="h-24 flex items-center justify-center bg-gray-50 rounded-xl mb-6 border border-gray-100">
                    {sponsor.logo_url ? (
                      <img
                        src={sponsor.logo_url}
                        alt={sponsor.name}
                        className="max-h-20 max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm font-medium">Sponsor Logo</span>
                    )}
                  </div>
                  <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">{sponsor.name}</h3>
                  {sponsor.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{sponsor.description}</p>
                  )}
                  {sponsor.website && (
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-fccla-red font-semibold text-sm hover:underline mt-auto"
                    >
                      Visit Website <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-2xl p-16 text-center">
              <Heart size={48} className="mx-auto mb-5 text-gray-300" />
              <p className="font-outfit text-xl font-bold text-gray-400 mb-2">Sponsor information coming soon</p>
              <p className="text-gray-400 text-sm max-w-sm mx-auto">
                Interested in supporting Utah FCCLA?{' '}
                <Link href="/resources/partner" className="text-fccla-red font-bold hover:underline">
                  Learn about partnership opportunities →
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-fccla-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-4">Your Sponsorship Makes a Difference</h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
            When you sponsor Utah FCCLA, you invest directly in the next generation of leaders
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1,500+', label: 'Student Members Reached' },
              { number: '50+', label: 'School Chapters Supported' },
              { number: '5', label: 'Regions Across Utah' },
              { number: '3', label: 'Major Conferences Per Year' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-outfit text-5xl font-extrabold text-fccla-red mb-2">{stat.number}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Become a Sponsor</h2>
          <p className="text-white/90 text-lg mb-8">
            Partner with Utah FCCLA and help shape the leaders of tomorrow
          </p>
          <Link
            href="/resources/partner"
            className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            View Partnership Opportunities →
          </Link>
        </div>
      </section>
    </main>
  )
}
