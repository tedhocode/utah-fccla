import { Sparkles, Target, ExternalLink, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/server'
import PageTransition from '@/components/PageTransition'

const defaultGoals = [
  {
    number: '01',
    title: 'Strengthen Chapter Membership',
    description: 'Grow chapter membership by at least 5% compared to last year. Focus on recruiting freshmen and under-represented student groups. Document recruitment efforts throughout the year.',
  },
  {
    number: '02',
    title: 'Expand Community Impact',
    description: 'Complete at least one FCCLA-driven community service project that addresses a local family and consumer science issue. Log hours and outcomes using the FCCLA Planning Process.',
  },
  {
    number: '03',
    title: 'Develop Student Leaders',
    description: 'Send at least one member to a leadership conference outside your school — whether regional, state, or national. Encourage members to run for officer positions.',
  },
  {
    number: '04',
    title: 'Compete at the State Level',
    description: 'Enter at least one STAR Event or Utah state competition at State Leadership Conference. Use the competition process to build real-world career and leadership skills.',
  },
  {
    number: '05',
    title: 'Connect with Your Community',
    description: 'Establish or strengthen a partnership with a local business, nonprofit, or community organization. Partnerships can support events, fundraising, or mentorship.',
  },
]

const defaultTheme = 'ConneCTEd'
const defaultDescription = 'This year, Utah FCCLA chapters are building deeper connections — to CTE, to their communities, and to the future of family and consumer sciences.'

async function getThemeAndGoals() {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('theme_goals')
      .select('*')
      .eq('is_active', true)
      .single()

    if (error) throw error
    if (!data) return null

    return {
      theme: data.theme_name,
      description: data.description,
      goals: (data.goals || []).map((goal: any, idx: number) => ({
        number: String(idx + 1).padStart(2, '0'),
        title: goal.title,
        description: goal.description,
      })),
    }
  } catch (error) {
    console.error('Error fetching theme and goals:', error)
    return null
  }
}

export default async function ThemeGoalsPage() {
  const themeData = await getThemeAndGoals()
  const theme = themeData?.theme || defaultTheme
  const description = themeData?.description || defaultDescription
  const goals = themeData?.goals || defaultGoals
  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="relative text-white py-24 px-4 mt-20 overflow-hidden">
        <img
          src="/header-images/connected-theme-header.png"
          alt="ConneCTEd theme header"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-fccla-red/80" />
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-white/80 uppercase tracking-widest text-sm font-bold mb-4">2025–2026 State Theme</p>
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">{theme}</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Theme Description */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 border-2 border-fccla-red shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-fccla-red text-white rounded-xl flex items-center justify-center flex-shrink-0">
                <Star size={24} />
              </div>
              <h2 className="font-outfit text-3xl font-bold text-fccla-navy">About This Year's Theme</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <strong className="text-fccla-red">"{theme}"</strong> celebrates the vital link between FCCLA and Career & Technical Education. This theme challenges chapters to deepen their roots in CTE — connecting students to real-world careers, to each other, and to the communities they serve through the lens of family and consumer sciences.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Chapters that align their programming, National Programs, and community service work with this theme are eligible for the <strong>State Goals Application</strong> — a recognition award presented at State Leadership Conference.
            </p>
            <a
              href="https://drive.google.com/file/d/1H5t8cvsjz-bv7fPRYk-OCgc4IMN2BBPg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-fccla-red text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all"
            >
              Download Full State Goals Document <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-fccla-navy text-white rounded-xl flex items-center justify-center flex-shrink-0">
              <Target size={24} />
            </div>
            <h2 className="font-outfit text-4xl font-bold text-fccla-navy">2025–2026 State Goals</h2>
          </div>
          <p className="text-gray-600 text-lg mb-12 ml-16">
            Five goals guide Utah FCCLA chapter programming under the ConneCTEd theme. Chapters that address these goals in their annual activities are eligible for the State Goals Award.
          </p>

          <div className="space-y-5">
            {goals.map((goal: any) => (
              <div key={goal.number} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red hover:shadow-xl transition-all flex gap-6 items-start">
                <div className="w-14 h-14 bg-fccla-red text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-outfit font-extrabold text-lg">
                  {goal.number}
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">{goal.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Goals Application CTA */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-fccla-navy text-white rounded-2xl p-10 text-center">
            <h2 className="font-outfit text-3xl font-bold mb-4">Apply for the State Goals Award</h2>
            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Chapters that align their programming with the ConneCTEd theme and state goals are eligible for recognition at State Leadership Conference. Applications are due <strong>March 2, 2026</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/awards"
                className="inline-flex items-center gap-2 bg-fccla-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all"
              >
                View Award Applications <ArrowRight size={18} />
              </Link>
              <a
                href="https://drive.google.com/file/d/1H5t8cvsjz-bv7fPRYk-OCgc4IMN2BBPg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-fccla-navy transition-all"
              >
                Download Goals PDF <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* National Theme Tie-in */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-6">National Theme Connection</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Utah's state theme complements the National FCCLA theme. Members who complete National Programs, run for national office, or attend the National Leadership Conference are living out the "Stronger Together" vision at the highest level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fcclainc.org/about/mission-vision"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-fccla-red text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all"
            >
              National FCCLA Mission <ExternalLink size={16} />
            </a>
            <Link
              href="/members/national-programs"
              className="inline-flex items-center gap-2 border-2 border-fccla-navy text-fccla-navy px-8 py-3 rounded-xl font-bold hover:bg-fccla-navy hover:text-white transition-all"
            >
              Explore National Programs →
            </Link>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
