import { ExternalLink } from 'lucide-react'
import { createAdminClient } from '@/lib/supabase/server'
import ScholarshipsSection from './ScholarshipsSection'

const defaultScholarships = [
  {
    id: 'national-program',
    category: 'national',
    name: 'FCCLA National Scholarship Program',
    amount: '$1,000 - $5,000',
    deadline: 'Typically March',
    description: 'Multiple scholarships ranging from $1,000 to $5,000 awarded annually to graduating seniors. Based on academic achievement, leadership, and FCCLA participation.',
    requirements: [
      'Must be a graduating high school senior',
      'Active FCCLA member in good standing',
      'Minimum 3.0 GPA',
      'Demonstrated leadership in FCCLA activities',
      'Planning to attend a post-secondary institution'
    ],
    applicationLink: 'https://fcclainc.org/engage/scholarships'
  },
  {
    id: 'star-event',
    category: 'national',
    name: 'STAR Event Achievement Scholarships',
    amount: 'Varies',
    deadline: 'Compete at NLC',
    description: 'Recognition awards for top STAR Event competitors at National Leadership Conference. Automatically considered when competing at nationals.',
    requirements: [
      'Qualify for National Leadership Conference',
      'Compete in a STAR Event at nationals',
      'Earn Gold or Silver recognition',
      'No additional application required'
    ],
    applicationLink: 'https://fcclainc.org/compete/star-events'
  },
  {
    id: 'national-programs-recognition',
    category: 'national',
    name: 'National Programs Recognition',
    amount: '$500 - $2,500',
    deadline: 'Varies by program',
    description: 'Monetary awards for outstanding National Program projects. Submit your project for state and national recognition to be considered.',
    requirements: [
      'Complete a National Program project',
      'Submit project for state recognition',
      'Earn Gold recognition at state level',
      'Advance to national competition',
      'Document measurable impact'
    ],
    applicationLink: 'https://fcclainc.org/engage/national-programs'
  },
  {
    id: 'corporate-partners',
    category: 'national',
    name: 'Corporate Partner Scholarships',
    amount: 'Varies',
    deadline: 'Varies',
    description: 'Scholarships sponsored by FCCLA corporate partners. Requirements and amounts vary by sponsor. Check National FCCLA website for current opportunities.',
    requirements: [
      'Active FCCLA member',
      'Meet sponsor-specific requirements',
      'Check National FCCLA website regularly',
      'Application requirements vary by sponsor'
    ],
    applicationLink: 'https://fcclainc.org/engage/scholarships'
  },
  {
    id: 'utah-state',
    category: 'state',
    name: 'Utah FCCLA State Scholarship',
    amount: '$1,000',
    deadline: 'March 1, 2026',
    description: 'Awarded annually to a graduating Utah FCCLA senior who demonstrates outstanding leadership, academic achievement, and commitment to FCCLA. Must have participated in state conferences and competitive events.',
    requirements: [
      'Utah FCCLA member in good standing',
      'Graduating high school senior',
      'Minimum 3.5 GPA',
      'Participated in State Leadership Conference',
      'Competed in at least one STAR Event or state competition',
      'Demonstrated chapter leadership'
    ],
    applicationLink: '#'
  },
  {
    id: 'state-officer-alumni',
    category: 'state',
    name: 'State Officer Alumni Scholarship',
    amount: '$500',
    deadline: 'April 15, 2026',
    description: 'Available to graduating seniors who served as Utah FCCLA State Officers. Recognizes the dedication and service of state officer team members.',
    requirements: [
      'Served as Utah FCCLA State Officer',
      'Graduating high school senior',
      'Completed full officer term',
      'Good standing with organization',
      'Essay about officer experience required'
    ],
    applicationLink: '#'
  },
  {
    id: 'chapter-recognition',
    category: 'state',
    name: 'Chapter Recognition Scholarship',
    amount: '$250 - $500',
    deadline: 'March 15, 2026',
    description: 'Multiple awards for members from chapters demonstrating exceptional community service, National Program participation, or membership growth.',
    requirements: [
      'Active chapter member',
      'Chapter must be in good standing',
      'Demonstrated chapter leadership',
      'Significant contribution to chapter success',
      'Chapter nomination may be required'
    ],
    applicationLink: '#'
  }
]

async function getScholarships() {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('scholarships')
      .select('*')
      .eq('is_active', true)

    if (error) throw error
    if (!data || data.length === 0) return null

    return data.map((scholarship: any) => ({
      id: scholarship.id.toString(),
      category: 'state' as const,
      name: scholarship.name,
      amount: scholarship.amount,
      deadline: scholarship.deadline,
      description: scholarship.description,
      requirements: scholarship.eligibility ? scholarship.eligibility.split('\n').filter((r: string) => r.trim()) : [],
      applicationLink: scholarship.link || '#',
    }))
  } catch (error) {
    console.error('Error fetching scholarships:', error)
    return null
  }
}

export default async function ScholarshipsPage() {
  const dbScholarships = await getScholarships()
  const scholarships = dbScholarships && dbScholarships.length > 0 ? dbScholarships : defaultScholarships

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">FCCLA Scholarships</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Funding your education through FCCLA membership and achievements
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            FCCLA members have access to numerous scholarship opportunities at the state and national level. These scholarships recognize academic achievement, leadership, community service, and competitive success. Many are available exclusively to FCCLA members!
          </p>
        </div>
      </section>

      {/* SPLIT VIEW - Scholarships */}
      <ScholarshipsSection scholarships={scholarships} />

      {/* Tips for Success - HORIZONTAL */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Tips for Scholarship Success</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="font-outfit text-xl font-bold text-fccla-red mb-4">Start Early</h3>
              <p className="text-gray-700 leading-relaxed">
                Many scholarship deadlines are in February-March of your senior year. Start gathering materials and writing essays in the fall to avoid last-minute stress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="font-outfit text-xl font-bold text-fccla-red mb-4">Document Everything</h3>
              <p className="text-gray-700 leading-relaxed">
                Keep records of your FCCLA activities, service hours, leadership roles, and achievements throughout high school. You'll need this information for applications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="font-outfit text-xl font-bold text-fccla-red mb-4">Get Strong Recommendations</h3>
              <p className="text-gray-700 leading-relaxed">
                Ask your FCCLA adviser, teachers, or community leaders who know you well. Give them plenty of notice and provide information about your accomplishments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="font-outfit text-xl font-bold text-fccla-red mb-4">Personalize Your Essays</h3>
              <p className="text-gray-700 leading-relaxed">
                Don't use generic essays. Highlight specific FCCLA experiences and explain how FCCLA has shaped your goals and values. Be authentic and specific.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="font-outfit text-xl font-bold text-fccla-red mb-4">Apply to Multiple Scholarships</h3>
              <p className="text-gray-700 leading-relaxed">
                Don't put all your eggs in one basket. Apply for as many scholarships as you qualify for. Even small scholarships add up!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="font-outfit text-xl font-bold text-fccla-red mb-4">Proofread Everything</h3>
              <p className="text-gray-700 leading-relaxed">
                Typos and errors can hurt your application. Have your adviser, parents, or English teacher review your materials before submitting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-3xl font-bold text-white mb-4">Need More Scholarship Information?</h2>
          <p className="text-white/90 text-lg mb-8">
            Visit the National FCCLA website for the complete list of scholarships and application details
          </p>
          <a
            href="https://fcclainc.org/engage/scholarships"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
          >
            National FCCLA Scholarships
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </main>
  )
}
