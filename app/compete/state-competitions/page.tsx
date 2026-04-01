import { Trophy, Video, Mic, Palette, Wrench, Sparkles, Download, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

export default function StateCompetitionsPage() {
  const competitions = [
    {
      title: "Promo Video",
      icon: <Video size={40} />,
      description: "Create a promotional video showcasing your chapter's activities, impact, and FCCLA spirit. Videos must be 60-90 seconds and highlight your chapter's unique story.",
      eligibility: "All members",
      rules: "Submit by February 1st"
    },
    {
      title: "Creed Speaking",
      icon: <Mic size={40} />,
      description: "Demonstrate your public speaking skills by presenting the FCCLA Creed. Competitors are judged on delivery, voice, stage presence, and understanding of the Creed's meaning.",
      eligibility: "Junior members only",
      rules: "3-5 minute presentation"
    },
    {
      title: "Nationals Pin Design",
      icon: <Palette size={40} />,
      description: "Design the official pin for National Leadership Conference. Showcase your creativity while incorporating FCCLA's mission, the conference theme, and visual appeal.",
      eligibility: "All members",
      rules: "Digital or hand-drawn submissions accepted"
    },
    {
      title: "Toys that Teach",
      icon: <Wrench size={40} />,
      description: "Create an educational toy that teaches a specific concept or skill. Projects are judged on creativity, educational value, safety, and age-appropriateness.",
      eligibility: "All members",
      rules: "Must be original design"
    },
    {
      title: "AI for Impact",
      icon: <Sparkles size={40} />,
      description: "Develop an AI-powered solution that addresses a real-world problem in your community. Present your concept, prototype, and potential impact.",
      eligibility: "All members",
      rules: "NEW competition for 2025-2026"
    }
  ]

  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Trophy size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">State Competitions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">Utah-exclusive competitions you can enter alongside your STAR Event at State Leadership Conference</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            In addition to national STAR Events, Utah FCCLA offers <strong className="text-fccla-red">five exclusive state competitions</strong> that allow members to showcase their creativity, leadership, and skills. These competitions take place at State Leadership Conference in March and winners are recognized during the awards ceremony.
          </p>
        </div>
      </section>

      {/* Competitions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {competitions.map((comp, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 hover:border-fccla-red hover:shadow-2xl transition-all">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 bg-fccla-red text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  {comp.icon}
                </div>
                <div className="flex-1">
                  <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-4">{comp.title}</h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{comp.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                      <span className="text-sm font-semibold text-gray-600">Eligibility: </span>
                      <span className="text-sm text-gray-800">{comp.eligibility}</span>
                    </div>
                    <div className="bg-fccla-red/10 px-4 py-2 rounded-lg">
                      <span className="text-sm font-semibold text-fccla-red">{comp.rules}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Ready to Compete?</h2>
          <p className="text-white/90 text-lg mb-8">Review the full guidelines and register for State Leadership Conference</p>
          <Link 
            href="/events/state-conference"
            className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            View State Conference Details →
          </Link>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
