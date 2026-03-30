'use client'

import { useState } from 'react'
import { Layers, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const clusters = [
  {
    id: 'agriculture',
    name: 'Agriculture, Food & Natural Resources',
    fcsRelevance: 'high',
    description: 'Covers the production, processing, marketing, distribution, financing, and development of agricultural commodities and resources. Includes food science, nutrition, and sustainable agriculture.',
    fccsConnection: 'Connects directly to FCCLA Food Science, Nutrition & Wellness, and Environmental Ambassador STAR Events.',
    careers: ['Food Scientist', 'Nutritionist', 'Agricultural Manager', 'Environmental Scientist', 'Food Service Director'],
  },
  {
    id: 'architecture',
    name: 'Architecture & Construction',
    fcsRelevance: 'medium',
    description: 'Careers in designing, planning, managing, building, and maintaining the built environment. Includes residential design, interior architecture, and facilities management.',
    fccsConnection: 'Connects to FCCLA Interior Design and Housing & Furnishings STAR Events.',
    careers: ['Interior Designer', 'Architect', 'Construction Manager', 'Facilities Manager', 'Landscape Designer'],
  },
  {
    id: 'arts',
    name: 'Arts, A/V Technology & Communications',
    fcsRelevance: 'medium',
    description: 'Includes careers in designing, producing, exhibiting, performing, writing, and publishing multimedia content.',
    fccsConnection: 'Connects to FCCLA Fashion Design, Illustrated Talk, and Chapter Service Project Video STAR Events.',
    careers: ['Graphic Designer', 'Fashion Designer', 'Multimedia Producer', 'Public Relations Specialist', 'Journalist'],
  },
  {
    id: 'business',
    name: 'Business Management & Administration',
    fcsRelevance: 'medium',
    description: 'Careers in planning, organizing, directing, and evaluating business functions essential to efficient and productive business operations.',
    fccsConnection: 'Connects to FCCLA Entrepreneurship, Job Interview, Financial Literacy, and Applied Technology STAR Events.',
    careers: ['Business Manager', 'Entrepreneur', 'Human Resources Specialist', 'Operations Manager', 'Office Administrator'],
  },
  {
    id: 'education',
    name: 'Education & Training',
    fcsRelevance: 'high',
    description: 'Careers in planning, managing, and providing education and training services, and related learning support services.',
    fccsConnection: 'Strongly connects to FCCLA Early Childhood Education, Children & Their Families, and Focus on Children STAR Events.',
    careers: ['Early Childhood Educator', 'Teacher', 'Instructional Designer', 'School Counselor', 'Child Development Specialist'],
  },
  {
    id: 'finance',
    name: 'Finance',
    fcsRelevance: 'medium',
    description: 'Careers in financial and investment planning, banking, insurance, and business financial management.',
    fccsConnection: 'Connects to FCCLA Financial Literacy, Entrepreneurship, and Life Event Planning STAR Events.',
    careers: ['Financial Planner', 'Accountant', 'Insurance Agent', 'Loan Officer', 'Personal Banker'],
  },
  {
    id: 'health',
    name: 'Health Science',
    fcsRelevance: 'high',
    description: 'Careers in planning, managing, and providing therapeutic services, diagnostic services, health informatics, support services, and biotechnology.',
    fccsConnection: 'Connects to FCCLA Nutrition & Wellness, Human Relations, and Children & Their Families STAR Events.',
    careers: ['Nurse', 'Dietitian', 'Health Educator', 'Medical Assistant', 'Public Health Specialist'],
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Tourism',
    fcsRelevance: 'high',
    description: 'Encompasses the management, marketing, and operations of restaurants, lodging, attractions, recreation, events, and travel.',
    fccsConnection: 'Directly connects to FCCLA Hospitality, Tourism & Recreation, Culinary Arts, Baking & Pastry, and Food Service Management STAR Events.',
    careers: ['Hotel Manager', 'Chef', 'Event Planner', 'Travel Agent', 'Restaurant Manager'],
  },
  {
    id: 'human-services',
    name: 'Human Services',
    fcsRelevance: 'high',
    description: 'Careers preparing individuals for employment in consumer services, counseling, mental health, family & community services, and personal care.',
    fccsConnection: 'Core FCS cluster. Connects to nearly all FCCLA National Programs and many STAR Events including Human Relations, Interpersonal Communications, and Focus on Children.',
    careers: ['Social Worker', 'Family Counselor', 'Consumer Advocate', 'Community Health Worker', 'Personal Care Aide'],
  },
  {
    id: 'it',
    name: 'Information Technology',
    fcsRelevance: 'low',
    description: 'Covers designing, developing, supporting, and managing hardware, software, multimedia, and systems integration.',
    fccsConnection: 'Connects to FCCLA Applied Technology STAR Event.',
    careers: ['Software Developer', 'Network Administrator', 'Cybersecurity Analyst', 'UX Designer', 'Data Analyst'],
  },
  {
    id: 'law',
    name: 'Law, Public Safety, Corrections & Security',
    fcsRelevance: 'low',
    description: 'Careers in planning, managing, and providing legal, public safety, protective services, and homeland security.',
    fccsConnection: "Connects to FCCLA's STOP the Violence and FACTS National Programs.",
    careers: ['Attorney', 'Police Officer', 'Paralegal', 'Emergency Manager', 'Security Specialist'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    fcsRelevance: 'low',
    description: 'Careers in planning, managing, and performing the processing of materials into intermediate or final products.',
    fccsConnection: 'Minimal direct connection to FCS programs.',
    careers: ['Production Manager', 'Quality Control Specialist', 'Industrial Designer', 'Manufacturing Technician'],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    fcsRelevance: 'medium',
    description: 'Careers in planning, managing, and performing marketing activities to reach organizational objectives.',
    fccsConnection: 'Connects to FCCLA Entrepreneurship, Fashion Show, and Chapter in Review STAR Events.',
    careers: ['Marketing Manager', 'Brand Strategist', 'Social Media Manager', 'Advertising Specialist', 'Market Researcher'],
  },
  {
    id: 'stem',
    name: 'Science, Technology, Engineering & Mathematics',
    fcsRelevance: 'medium',
    description: 'Careers in planning, managing, and providing scientific research and professional and technical services.',
    fccsConnection: 'Connects to FCCLA Food Science, Environmental Ambassador, and Applied Technology STAR Events.',
    careers: ['Research Scientist', 'Engineer', 'Environmental Scientist', 'Food Technologist', 'Biomedical Researcher'],
  },
  {
    id: 'transportation',
    name: 'Transportation, Distribution & Logistics',
    fcsRelevance: 'low',
    description: 'Careers in planning, managing, and moving people, materials, and goods.',
    fccsConnection: "Minimal direct FCS connection, though FCCLA's FACTS program addresses transportation safety.",
    careers: ['Logistics Manager', 'Supply Chain Analyst', 'Transportation Planner', 'Fleet Manager'],
  },
  {
    id: 'government',
    name: 'Government & Public Administration',
    fcsRelevance: 'low',
    description: 'Careers in executing governmental functions including governance, national security, foreign service, revenue and taxation, and regulation.',
    fccsConnection: "Connects to FCCLA's leadership and advocacy programs including Run for Office and state/national officer positions.",
    careers: ['Policy Analyst', 'Government Administrator', 'City Planner', 'Public Affairs Specialist', 'Elected Official'],
  },
]

const relevanceColors = {
  high: 'bg-fccla-red/10 text-fccla-red border-fccla-red/30',
  medium: 'bg-fccla-navy/10 text-fccla-navy border-fccla-navy/30',
  low: 'bg-gray-100 text-gray-600 border-gray-300',
}

const relevanceLabels = {
  high: 'Strong FCS Connection',
  medium: 'FCS Connected',
  low: 'General CTE',
}

export default function CTEClustersPage() {
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all')
  const [selected, setSelected] = useState(clusters[8]) // Human Services default

  const filtered = filter === 'all' ? clusters : clusters.filter(c => c.fcsRelevance === filter)

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Layers size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">CTE Career Clusters</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore the 16 national CTE Career Clusters and how they connect to FCCLA and Family & Consumer Sciences
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Career and Technical Education (CTE) organizes career preparation into <strong className="text-fccla-red">16 Career Clusters</strong> that help students connect their education to real-world careers. FCCLA is the official CTSO for the <strong className="text-fccla-red">Human Services cluster</strong> — but FCS education and FCCLA connect to many others too.
          </p>
        </div>
      </section>

      {/* Filter + Split View */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="text-sm font-semibold text-gray-500 self-center uppercase tracking-wide">Filter:</span>
            {[
              { key: 'all', label: 'All 16 Clusters' },
              { key: 'high', label: 'Strong FCS Connection' },
              { key: 'medium', label: 'FCS Connected' },
              { key: 'low', label: 'General CTE' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => { setFilter(f.key as typeof filter); setSelected(filtered[0] || clusters[0]) }}
                className={`px-5 py-2 rounded-xl font-semibold text-sm transition-all ${
                  filter === f.key
                    ? 'bg-fccla-red text-white shadow-md'
                    : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-fccla-red'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-8">

            {/* LEFT: Cluster List */}
            <div className="lg:col-span-4 space-y-2">
              {filtered.map((cluster) => (
                <button
                  key={cluster.id}
                  onClick={() => setSelected(cluster)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selected.id === cluster.id
                      ? 'border-fccla-red bg-fccla-red text-white shadow-lg'
                      : 'border-gray-200 bg-white hover:border-fccla-red'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1">
                      <p className={`font-outfit font-bold text-sm leading-tight ${selected.id === cluster.id ? 'text-white' : 'text-fccla-navy'}`}>
                        {cluster.name}
                      </p>
                      <span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full border font-semibold ${
                        selected.id === cluster.id
                          ? 'bg-white/20 text-white border-white/30'
                          : relevanceColors[cluster.fcsRelevance as keyof typeof relevanceColors]
                      }`}>
                        {relevanceLabels[cluster.fcsRelevance as keyof typeof relevanceLabels]}
                      </span>
                    </div>
                    {selected.id === cluster.id && <ArrowRight size={16} className="text-white flex-shrink-0" />}
                  </div>
                </button>
              ))}
            </div>

            {/* RIGHT: Detail Panel */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden sticky top-24">
                <div className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white p-10">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block ${
                    selected.fcsRelevance === 'high' ? 'bg-fccla-red text-white' :
                    selected.fcsRelevance === 'medium' ? 'bg-white/20 text-white' :
                    'bg-white/10 text-white/80'
                  }`}>
                    {relevanceLabels[selected.fcsRelevance as keyof typeof relevanceLabels]}
                  </span>
                  <h2 className="font-outfit text-3xl font-bold mb-4">{selected.name}</h2>
                  <p className="text-white/85 leading-relaxed">{selected.description}</p>
                </div>

                <div className="p-10 space-y-8">
                  {/* FCCLA Connection */}
                  <div className="bg-fccla-red/5 border border-fccla-red/20 rounded-xl p-6">
                    <h3 className="font-outfit text-lg font-bold text-fccla-red mb-2">FCCLA Connection</h3>
                    <p className="text-gray-700 leading-relaxed">{selected.fccsConnection}</p>
                  </div>

                  {/* Example Careers */}
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-4">Example Careers</h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.careers.map((career, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Explore Careers Through FCCLA</h2>
          <p className="text-white/90 text-lg mb-8">
            STAR Events and National Programs let you develop real skills in your career area of interest
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compete/star-events"
              className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Explore STAR Events →
            </Link>
            <a
              href="https://careertech.org/career-clusters"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-fccla-red transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              CareerTech.org <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
