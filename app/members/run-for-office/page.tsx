'use client'

import { useState } from 'react'
import { Trophy, Users, Target, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

const positions = [
  {
    id: 'president',
    title: 'President',
    level: 'executive',
    description: 'Lead the state officer team, preside over meetings and conferences, represent Utah FCCLA at National Leadership Conference, and work closely with the state adviser to guide the organization\'s direction.',
    responsibilities: [
      'Preside over all state officer meetings and executive board meetings',
      'Represent Utah FCCLA at National Leadership Conference',
      'Work with state adviser to set annual goals and strategic direction',
      'Lead state conference planning and execution',
      'Conduct chapter visits across all five regions',
      'Mentor vice presidents and provide leadership guidance'
    ],
    skills: ['Public Speaking', 'Strategic Planning', 'Team Leadership', 'Decision Making']
  },
  {
    id: 'vp1',
    title: '1st Vice President',
    level: 'executive',
    description: 'Support the President, lead specific committees and initiatives, manage state conference logistics, and step in to preside when the President is unavailable.',
    responsibilities: [
      'Serve as President in their absence',
      'Lead Fall Leadership Conference planning committee',
      'Coordinate with regional representatives',
      'Oversee conference registration and logistics',
      'Assist President with strategic initiatives',
      'Support chapter development efforts'
    ],
    skills: ['Event Planning', 'Logistics Management', 'Leadership', 'Communication']
  },
  {
    id: 'vp-membership',
    title: 'VP of Membership',
    level: 'specialized',
    description: 'Focus on chapter recruitment and retention, develop strategies to grow Utah FCCLA membership, and create resources to support new and existing chapters.',
    responsibilities: [
      'Develop and implement membership growth strategies',
      'Create resources for chapter recruitment',
      'Track membership data and trends',
      'Support new chapter development',
      'Recognize top-performing chapters',
      'Coordinate membership campaigns'
    ],
    skills: ['Marketing', 'Data Analysis', 'Relationship Building', 'Strategy Development']
  },
  {
    id: 'vp-development',
    title: 'VP of Development',
    level: 'specialized',
    description: 'Manage sponsorships and partnerships, work with corporate sponsors, and develop fundraising initiatives to support state programs and events.',
    responsibilities: [
      'Develop and maintain corporate partnerships',
      'Coordinate fundraising campaigns',
      'Manage sponsor relationships and benefits',
      'Create sponsorship packages and proposals',
      'Oversee grant applications',
      'Track fundraising progress and impact'
    ],
    skills: ['Business Development', 'Fundraising', 'Relationship Management', 'Financial Planning']
  },
  {
    id: 'vp-alumni',
    title: 'VP of Alumni Relations',
    level: 'specialized',
    description: 'Connect current members with FCCLA alumni, build an alumni network, and create opportunities for alumni engagement and mentorship.',
    responsibilities: [
      'Build and maintain alumni database',
      'Coordinate alumni engagement events',
      'Develop mentorship programs',
      'Create alumni communication channels',
      'Recognize outstanding alumni achievements',
      'Facilitate alumni chapter support'
    ],
    skills: ['Networking', 'Database Management', 'Event Planning', 'Communication']
  },
  {
    id: 'vp-history',
    title: 'VP of History',
    level: 'specialized',
    description: 'Document state events through photos and videos, maintain the state scrapbook, and preserve Utah FCCLA\'s history for future members.',
    responsibilities: [
      'Photograph and video all state events',
      'Maintain digital and physical scrapbooks',
      'Create recap videos and highlight reels',
      'Manage social media content creation',
      'Archive important documents and materials',
      'Coordinate with PR for content needs'
    ],
    skills: ['Photography', 'Videography', 'Creative Design', 'Organization']
  },
  {
    id: 'vp-community',
    title: 'VP of Community Service',
    level: 'specialized',
    description: 'Develop statewide service initiatives, promote National Programs, and coordinate community impact projects across all regions.',
    responsibilities: [
      'Plan and coordinate statewide service projects',
      'Promote National Programs to chapters',
      'Track and recognize service achievements',
      'Develop community partnerships',
      'Create service project resources',
      'Coordinate regional service events'
    ],
    skills: ['Project Planning', 'Community Outreach', 'Resource Development', 'Leadership']
  },
  {
    id: 'vp-national',
    title: 'VP of National Programs',
    level: 'specialized',
    description: 'Promote FCCLA\'s National Programs, create resources for chapters, and recognize outstanding program participation at the state level.',
    responsibilities: [
      'Promote all six National Programs',
      'Create program implementation resources',
      'Coordinate National Programs recognition',
      'Track program participation statewide',
      'Develop program workshops and training',
      'Support chapters in program planning'
    ],
    skills: ['Program Development', 'Training', 'Resource Creation', 'Communication']
  },
  {
    id: 'vp-pr',
    title: 'VP of Public Relations',
    level: 'specialized',
    description: 'Manage Utah FCCLA\'s social media, create marketing materials, write newsletters, and communicate with members and the public about state activities.',
    responsibilities: [
      'Manage all social media accounts',
      'Write and distribute monthly newsletters',
      'Create marketing and promotional materials',
      'Coordinate media coverage of events',
      'Develop brand consistency guidelines',
      'Engage members through digital platforms'
    ],
    skills: ['Social Media', 'Content Writing', 'Graphic Design', 'Marketing']
  },
  {
    id: 'vp-competitive',
    title: 'VP of Competitive Events',
    level: 'specialized',
    description: 'Promote STAR Events and state competitions, provide competition resources, and support members preparing for competitions.',
    responsibilities: [
      'Promote STAR Events and state competitions',
      'Create competition preparation resources',
      'Coordinate competition workshops',
      'Support competitors with questions',
      'Recognize competitive achievements',
      'Assist with competition logistics at conferences'
    ],
    skills: ['Event Promotion', 'Resource Development', 'Mentorship', 'Organization']
  }
]

export default function RunForOfficePage() {
  const [selectedPosition, setSelectedPosition] = useState(positions[0])

  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-red to-red-700 text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Run for State Office</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Lead Utah FCCLA and represent 1,500+ members across the state
          </p>
        </div>
      </section>

      {/* Why Run - HORIZONTAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-8 text-center">Why Run for State Office?</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
              Serving as a Utah FCCLA State Officer is one of the most rewarding leadership experiences you can have. You'll represent Utah at the national level, plan and execute state conferences, travel across Utah visiting chapters, and develop skills that will benefit you for life.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              State Officers serve a one-year term from June to June. It's a significant commitment, but the personal growth, friendships, and memories you'll make are absolutely worth it.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center">
              <Trophy size={48} className="text-fccla-red mb-4 mx-auto" />
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-3">Leadership Development</h3>
              <p className="text-gray-700 text-sm">
                Develop advanced leadership, public speaking, event planning, and teamwork skills
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center">
              <Users size={48} className="text-fccla-red mb-4 mx-auto" />
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-3">Statewide Impact</h3>
              <p className="text-gray-700 text-sm">
                Make a difference for 1,500+ FCCLA members across Utah
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center">
              <Target size={48} className="text-fccla-red mb-4 mx-auto" />
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-3">College & Career Benefits</h3>
              <p className="text-gray-700 text-sm">
                Stand out on applications with state-level leadership experience
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center">
              <Calendar size={48} className="text-fccla-red mb-4 mx-auto" />
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-3">Incredible Experiences</h3>
              <p className="text-gray-700 text-sm">
                Attend nationals, lead events, create lasting memories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT VIEW - Officer Positions */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Explore State Officer Positions</h2>
          
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* LEFT SIDEBAR - Position List */}
            <div className="lg:col-span-4 space-y-2">
              <div className="mb-4">
                <h3 className="font-outfit text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Executive Team</h3>
                {positions.filter(p => p.level === 'executive').map((position) => (
                  <button
                    key={position.id}
                    onClick={() => setSelectedPosition(position)}
                    className={`w-full text-left px-5 py-4 rounded-lg border transition-all mb-2 ${
                      selectedPosition.id === position.id
                        ? 'border-fccla-red bg-fccla-red text-white shadow-md'
                        : 'border-gray-200 bg-white hover:border-fccla-red'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-outfit font-bold ${
                        selectedPosition.id === position.id ? 'text-white' : 'text-fccla-navy'
                      }`}>
                        {position.title}
                      </span>
                      {selectedPosition.id === position.id && (
                        <ArrowRight size={18} className="text-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div>
                <h3 className="font-outfit text-sm font-bold text-gray-500 uppercase tracking-wide mb-3 mt-6">Specialized Positions</h3>
                {positions.filter(p => p.level === 'specialized').map((position) => (
                  <button
                    key={position.id}
                    onClick={() => setSelectedPosition(position)}
                    className={`w-full text-left px-5 py-4 rounded-lg border transition-all mb-2 ${
                      selectedPosition.id === position.id
                        ? 'border-fccla-red bg-fccla-red text-white shadow-md'
                        : 'border-gray-200 bg-white hover:border-fccla-red'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-outfit font-bold ${
                        selectedPosition.id === position.id ? 'text-white' : 'text-fccla-navy'
                      }`}>
                        {position.title}
                      </span>
                      {selectedPosition.id === position.id && (
                        <ArrowRight size={18} className="text-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT PANEL - Position Details */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden sticky top-28">
                {/* Position Header */}
                <div className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white p-10">
                  <h2 className="font-outfit text-4xl font-bold mb-4">{selectedPosition.title}</h2>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {selectedPosition.description}
                  </p>
                </div>

                {/* Position Content */}
                <div className="p-10">
                  {/* Skills */}
                  <div className="mb-8">
                    <h3 className="font-outfit text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Key Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPosition.skills.map((skill) => (
                        <span key={skill} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Key Responsibilities</h3>
                    <ul className="space-y-3">
                      {selectedPosition.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                          <span className="w-7 h-7 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-700 leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Application Process - HORIZONTAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Application Process</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                1
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3 mt-2">Review Requirements</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Must be an active FCCLA member in good standing, have attended at least one state conference, and meet GPA requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                2
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3 mt-2">Submit Application</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Complete the state officer application including essays, recommendations, and activity documentation. Due early March.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                3
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3 mt-2">Campaign at State</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Approved candidates campaign during State Leadership Conference. Create materials, give a speech, connect with delegates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                4
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3 mt-2">Election Results</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Voting delegates vote during State Conference. Results announced at closing ceremony. New officers begin in June.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-fccla-navy text-white p-8 rounded-2xl text-center">
            <h3 className="font-outfit text-2xl font-bold mb-4">Applications Open February 2026</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              State officer applications for the 2026-2027 term will open in February 2026. Talk to your chapter adviser or current state officers to learn more about the officer experience!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScVwv_-MtZIM71f0S9sJMr3G16ANF2fHdfGa_klZ5ICSQXaVw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-fccla-red text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all"
            >
              Apply Now
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Current Officers CTA */}
      <section className="bg-fccla-red py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-3xl font-bold text-white mb-4">Questions About Running?</h2>
          <p className="text-white/90 text-lg mb-8">
            Connect with current state officers to learn more about the officer experience
          </p>
          <Link 
            href="/about/officers"
            className="inline-flex items-center justify-center gap-2 bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Meet Current Officers
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}