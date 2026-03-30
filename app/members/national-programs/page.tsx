'use client'

import { useState } from 'react'
import { Heart, Users, Lightbulb, Target, Trophy, ExternalLink, ArrowRight, Download, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const programs = [
  {
    id: 'power-of-one',
    name: 'Power of One',
    icon: Users,
    color: 'from-fccla-red to-red-700',
    description: 'Focus on personal growth and development. Choose from five units: A Better You, Family Ties, Working on Working, Take the Lead, and Speak Out for FCCLA. Set personal goals and track your progress throughout the year.',
    tags: ['Personal Growth', 'Goal Setting', 'Self-Improvement'],
    units: [
      'A Better You - Health and wellness',
      'Family Ties - Strengthening family relationships',
      'Working on Working - Career readiness',
      'Take the Lead - Leadership development',
      'Speak Out for FCCLA - Advocacy and recruitment'
    ]
  },
  {
    id: 'community-service',
    name: 'Community Service',
    icon: Heart,
    color: 'from-fccla-navy to-fccla-navy-light',
    description: 'Give back to your community through meaningful service projects. Plan and implement projects that address real needs in your school or local area. Document your impact and inspire others to serve.',
    tags: ['Service', 'Community Impact', 'Leadership'],
    units: [
      'Identify community needs through research',
      'Plan and organize service projects',
      'Recruit volunteers and gather resources',
      'Implement your project and track impact',
      'Share results and inspire others to serve'
    ]
  },
  {
    id: 'career-connection',
    name: 'Career Connection',
    icon: Target,
    color: 'from-fccla-red to-red-700',
    description: 'Explore career pathways in Family and Consumer Sciences fields. Complete job shadows, informational interviews, and career research. Build a professional portfolio and prepare for your future career.',
    tags: ['Career Exploration', 'Job Shadowing', 'Portfolio'],
    units: [
      'Explore FCS career pathways and opportunities',
      'Conduct informational interviews with professionals',
      'Complete job shadowing experiences',
      'Build a professional portfolio',
      'Set career goals and action plans'
    ]
  },
  {
    id: 'families-first',
    name: 'Families First',
    icon: Heart,
    color: 'from-fccla-navy to-fccla-navy-light',
    description: 'Strengthen your family and help other families in your community. Address issues like family communication, financial literacy, and work-life balance. Develop projects that support healthy families.',
    tags: ['Family Wellness', 'Communication', 'Community Support'],
    units: [
      'Assess family strengths and challenges',
      'Develop family communication skills',
      'Explore work-life balance strategies',
      'Financial literacy and family budgeting',
      'Support other families through service'
    ]
  },
  {
    id: 'facts',
    name: 'Families Acting for Community Traffic Safety (FACTS)',
    icon: Lightbulb,
    color: 'from-fccla-red to-red-700',
    description: 'Promote traffic safety awareness in your community. Address issues like distracted driving, seat belt use, and pedestrian safety. Create campaigns that save lives.',
    tags: ['Safety', 'Awareness', 'Advocacy'],
    units: [
      'Research traffic safety issues in your community',
      'Develop awareness campaigns',
      'Partner with local law enforcement',
      'Implement safety education programs',
      'Measure impact and share results'
    ]
  },
  {
    id: 'stop-violence',
    name: 'STOP the Violence',
    icon: Heart,
    color: 'from-fccla-navy to-fccla-navy-light',
    description: 'Take a stand against violence in all its forms. Address bullying, dating violence, child abuse, and community safety. Create awareness campaigns and support resources.',
    tags: ['Prevention', 'Awareness', 'Support'],
    units: [
      'Identify types of violence and warning signs',
      'Develop prevention and awareness programs',
      'Create support resources for victims',
      'Partner with community organizations',
      'Promote healthy relationships and conflict resolution'
    ]
  }
]

export default function NationalProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0])

  const Icon = selectedProgram.icon

  return (
    <main>
      {/* National FCCLA Link Banner */}
      <section className="bg-gradient-to-r from-fccla-red to-red-700 py-6 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <Globe size={32} />
              <div>
                <p className="font-semibold">For complete National Programs information</p>
                <p className="text-sm text-white/90">Visit the official National FCCLA website</p>
              </div>
            </div>
            <a
              href="https://fcclainc.org/engage/national-programs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-fccla-red px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all inline-flex items-center gap-2 whitespace-nowrap"
            >
              Visit National FCCLA
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">National Programs</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Make a difference in your community while developing essential life skills through FCCLA's National Programs
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            FCCLA's National Programs provide opportunities for members to make a positive impact while developing critical skills in leadership, planning, goal-setting, problem-solving, and more. Each program is designed to help you grow as a leader while serving your community.
          </p>
        </div>
      </section>

      {/* SPLIT VIEW - Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* LEFT SIDEBAR - Program List */}
            <div className="lg:col-span-4 space-y-3">
              <h2 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Select a Program</h2>
              {programs.map((program) => {
                const ProgramIcon = program.icon
                return (
                  <button
                    key={program.id}
                    onClick={() => setSelectedProgram(program)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      selectedProgram.id === program.id
                        ? 'border-fccla-red bg-fccla-red text-white shadow-lg'
                        : 'border-gray-200 bg-white hover:border-fccla-red'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <ProgramIcon size={32} className={selectedProgram.id === program.id ? 'text-white' : 'text-fccla-red'} />
                      <div className="flex-1">
                        <h3 className={`font-outfit text-lg font-bold ${
                          selectedProgram.id === program.id ? 'text-white' : 'text-fccla-navy'
                        }`}>
                          {program.name}
                        </h3>
                      </div>
                      {selectedProgram.id === program.id && (
                        <ArrowRight size={20} className="text-white" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* RIGHT PANEL - Program Details */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
                {/* Program Header */}
                <div className={`bg-gradient-to-br ${selectedProgram.color} text-white p-10`}>
                  <Icon size={64} className="mb-6" />
                  <h2 className="font-outfit text-4xl font-bold mb-4">{selectedProgram.name}</h2>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {selectedProgram.description}
                  </p>
                </div>

                {/* Program Content */}
                <div className="p-10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProgram.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Units/Components */}
                  <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Program Components</h3>
                  <ul className="space-y-4">
                    {selectedProgram.units.map((unit, index) => (
                      <li key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <span className="w-8 h-8 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 leading-relaxed">{unit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Program Fliers */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-4">Program Fliers</h2>
            <p className="text-gray-600 text-lg">Download and share these fliers to promote National Programs in your chapter</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { file: 'power-of-one.png', name: 'Power of One' },
              { file: 'community-service.png', name: 'Community Service' },
              { file: 'facts.png', name: 'FACTS' },
              { file: 'stand-up.png', name: 'Stand Up' },
            ].map((flier) => (
              <div key={flier.file} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-fccla-red hover:shadow-xl transition-all flex flex-col">
                <div className="relative w-full">
                  <Image
                    src={`/national-program-fliers/${flier.file}`}
                    alt={`${flier.name} flier`}
                    width={600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-4 mt-auto border-t border-gray-100">
                  <p className="font-outfit font-bold text-fccla-navy mb-3">{flier.name}</p>
                  <a
                    href={`/national-program-fliers/${flier.file}`}
                    download
                    className="inline-flex items-center gap-2 bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 transition-all w-full justify-center"
                  >
                    <Download size={16} />
                    Download Flier
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate - HORIZONTAL */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">How to Participate</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                1
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3 mt-2">Choose a Program</h3>
              <p className="text-gray-700 leading-relaxed">Select the National Program(s) that align with your interests and goals. You can participate in multiple programs!</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                2
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3 mt-2">Plan Your Project</h3>
              <p className="text-gray-700 leading-relaxed">Use the FCCLA Planning Process to identify concerns, set goals, and create an action plan. Work with your chapter or individually.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                3
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3 mt-2">Take Action</h3>
              <p className="text-gray-700 leading-relaxed">Implement your project, track your progress, and document your impact. Make a real difference in your community!</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                4
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3 mt-2">Apply for Recognition</h3>
              <p className="text-gray-700 leading-relaxed">Submit your project for state or national recognition. Win awards, scholarships, and the satisfaction of making a difference!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-fccla-navy text-white p-10 rounded-2xl text-center">
            <Trophy size={64} className="mx-auto mb-6" />
            <h2 className="font-outfit text-3xl font-bold mb-4">Earn National Recognition</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Outstanding National Program projects can earn Gold, Silver, or Bronze recognition at the state and national level. Top projects may also qualify for scholarships!
            </p>
            <Link 
              href="/compete/state-competitions"
              className="inline-block bg-fccla-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all"
            >
              Learn About Competitions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-3xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
          <p className="text-white/90 text-lg mb-8">
            Learn more about National Programs on the National FCCLA website
          </p>
          <a 
            href="https://fcclainc.org/engage/national-programs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Visit National FCCLA
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </main>
  )
}