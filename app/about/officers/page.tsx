import Image from 'next/image'
import { createAdminClient } from '@/lib/supabase/server'
import OfficersGrid, { type Officer } from './OfficersGrid'
import PageTransition from '@/components/PageTransition'

const defaultOfficers: Officer[] = [
  { name: "Kylee Bangerter",    position: "State President",            school: "Dixie High School",          region: "Region 5", email: "president@utahfccla.org",         photo: "/officer-photos/kylee.jpg" },
  { name: "Rachel Ryu",         position: "First Vice President",       school: "Timpview High School",        region: "Region 4", email: "vicepres1@utahfccla.org",         photo: "/officer-photos/rachel.jpg" },
  { name: "Julianna Snow",      position: "Second Vice President",      school: "Orem High School",            region: "Region 3", email: "vicepres2@utahfccla.org",         photo: "/officer-photos/julianna.jpg" },
  { name: "Clara Pereira",      position: "Third Vice President",       school: "Orem High School",            region: "Region 3", email: "vicepres3@utahfccla.org",         photo: "/officer-photos/clara.jpg" },
  { name: "Brielle Kohler",     position: "VP of Membership",           school: "Layton High School",          region: "Region 1", email: "vpmembership@utahfccla.org",      photo: "/officer-photos/brielle.jpg" },
  { name: "Teddy Ho",           position: "VP of Development",          school: "Westlake High School",        region: "Region 3", email: "vpdevelopment@utahfccla.org",     photo: "/officer-photos/teddy.jpg" },
  { name: "Emme Stockdale",     position: "VP of Alumni & Associates",  school: "Carbon High School",          region: "Region 4", email: "vpalumni@utahfccla.org",          photo: "/officer-photos/emme.jpg" },
  { name: "Anna Dupaix",        position: "VP of History",              school: "Manila High School",          region: "Region 3", email: "vphistory@utahfccla.org",         photo: "/officer-photos/anna.jpg" },
  { name: "Colby Goodrich",     position: "VP of Community Service",    school: "Lehi High School",            region: "Region 3", email: "vpcommservice@utahfccla.org",     photo: "/officer-photos/colby.jpg" },
  { name: "Kameron Hughes",     position: "VP of National Programs",    school: "Westlake High School",        region: "Region 3", email: "vpprograms@utahfccla.org",        photo: "/officer-photos/kameron.jpg" },
  { name: "Jennilyn Hess",      position: "VP of Public Relations",     school: "Maple Mountain High School",  region: "Region 4", email: "vppublicrelations@utahfccla.org", photo: "/officer-photos/jennilyn.jpg" },
  { name: "Elsie Christiansen", position: "VP of Competitive Events",   school: "Dixie High School",          region: "Region 5", email: "vpcompevents@utahfccla.org",      photo: "/officer-photos/elsie.jpg" },
]

async function getOfficers(): Promise<Officer[] | null> {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('state_officers')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) throw error
    if (!data || data.length === 0) return null

    return data.map((officer: any) => ({
      name: officer.officer_name,
      position: officer.office_title,
      school: officer.school || '',
      region: officer.region || '',
      email: officer.email || '',
      photo: officer.photo_url || '/officer-photos/default.jpg',
      bio: officer.bio || '',
    }))
  } catch (error) {
    console.error('Error fetching officers:', error)
    return null
  }
}

export default async function StateOfficersPage() {
  const dbOfficers = await getOfficers()
  const officers = dbOfficers && dbOfficers.length > 0 ? dbOfficers : defaultOfficers

  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="relative text-white mt-20 overflow-hidden min-h-[480px] flex items-end">
        <Image
          src="/officers-group-photo.jpg"
          alt="2025-2026 Utah FCCLA State Executive Council"
          fill
          className="object-cover object-[center_55%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fccla-navy/90 via-fccla-navy/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 pb-16 pt-32">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-4">2025–2026 State Executive Council</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Meet the dedicated student leaders representing Utah FCCLA across all five regions
          </p>
        </div>
      </section>

      {/* Officers Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <OfficersGrid officers={officers} />
        </div>
      </section>

      {/* Former Officers Link */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-4">Former State Officers</h2>
          <p className="text-gray-600 mb-6">View the legacy of past Utah FCCLA State Executive Councils</p>
          <a
            href="https://docs.google.com/document/d/1eFuSTmyyw8H3PVrULFELKCIshTVe0tGZSW7NjciAZds/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-fccla-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
          >
            View Former Officers →
          </a>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
