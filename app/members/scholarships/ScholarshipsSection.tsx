'use client'

import { useState } from 'react'
import { Award, DollarSign, GraduationCap, ArrowRight, ExternalLink, Download } from 'lucide-react'

type Scholarship = {
  id: string
  category: string
  name: string
  amount: string | null
  deadline: string | null
  description: string | null
  requirements: string[]
  applicationLink: string
}

export default function ScholarshipsSection({ scholarships }: { scholarships: Scholarship[] }) {
  const national = scholarships.filter(s => s.category === 'national')
  const state = scholarships.filter(s => s.category === 'state')

  const [activeCategory, setActiveCategory] = useState<'national' | 'state'>('national')
  const filteredScholarships = activeCategory === 'national' ? national : state
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship>(filteredScholarships[0] ?? scholarships[0])

  function switchCategory(cat: 'national' | 'state') {
    setActiveCategory(cat)
    const list = cat === 'national' ? national : state
    if (list.length > 0) setSelectedScholarship(list[0])
  }

  if (scholarships.length === 0) return null

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => switchCategory('national')}
            className={`px-10 py-4 rounded-xl font-bold text-lg transition-all ${
              activeCategory === 'national'
                ? 'bg-fccla-red text-white shadow-lg'
                : 'bg-white text-fccla-navy border-2 border-gray-200 hover:border-fccla-red'
            }`}
          >
            <GraduationCap size={24} className="inline mr-2" />
            National Scholarships
          </button>
          <button
            onClick={() => switchCategory('state')}
            className={`px-10 py-4 rounded-xl font-bold text-lg transition-all ${
              activeCategory === 'state'
                ? 'bg-fccla-red text-white shadow-lg'
                : 'bg-white text-fccla-navy border-2 border-gray-200 hover:border-fccla-red'
            }`}
          >
            <DollarSign size={24} className="inline mr-2" />
            Utah Scholarships
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4 space-y-3">
            {filteredScholarships.length === 0 && (
              <p className="text-gray-500 text-sm p-4">No scholarships listed yet.</p>
            )}
            {filteredScholarships.map((scholarship) => (
              <button
                key={scholarship.id}
                onClick={() => setSelectedScholarship(scholarship)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                  selectedScholarship?.id === scholarship.id
                    ? 'border-fccla-red bg-fccla-red text-white shadow-lg'
                    : 'border-gray-200 bg-white hover:border-fccla-red'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Award size={28} className={`flex-shrink-0 ${selectedScholarship?.id === scholarship.id ? 'text-white' : 'text-fccla-red'}`} />
                  <div className="flex-1">
                    <h3 className={`font-outfit text-lg font-bold mb-1 ${selectedScholarship?.id === scholarship.id ? 'text-white' : 'text-fccla-navy'}`}>
                      {scholarship.name}
                    </h3>
                    <p className={`text-sm font-semibold ${selectedScholarship?.id === scholarship.id ? 'text-white' : 'text-fccla-red'}`}>
                      {scholarship.amount}
                    </p>
                  </div>
                  {selectedScholarship?.id === scholarship.id && (
                    <ArrowRight size={20} className="text-white flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT PANEL */}
          {selectedScholarship && (
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden sticky top-28">
                <div className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white p-10">
                  <div className="flex items-start justify-between mb-4">
                    <Award size={56} />
                    <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">
                      {selectedScholarship.amount}
                    </span>
                  </div>
                  <h2 className="font-outfit text-4xl font-bold mb-4">{selectedScholarship.name}</h2>
                  <p className="text-white/90 text-lg leading-relaxed mb-4">{selectedScholarship.description}</p>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="text-sm font-semibold">Deadline:</span>
                    <span className="text-sm">{selectedScholarship.deadline}</span>
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Requirements</h3>
                  {selectedScholarship.requirements.length > 0 ? (
                    <ul className="space-y-3 mb-8">
                      {selectedScholarship.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                          <span className="w-7 h-7 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">✓</span>
                          <span className="text-gray-700 leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 mb-8">See application for requirements.</p>
                  )}

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-outfit text-lg font-bold text-fccla-navy mb-3">Ready to Apply?</h4>
                    <a
                      href={selectedScholarship.applicationLink}
                      target={selectedScholarship.applicationLink.startsWith('http') ? '_blank' : '_self'}
                      rel={selectedScholarship.applicationLink.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="inline-flex items-center gap-2 bg-fccla-red text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all"
                    >
                      {selectedScholarship.applicationLink.startsWith('http') ? (
                        <><span>Visit Application Page</span><ExternalLink size={20} /></>
                      ) : (
                        <><span>Download Application</span><Download size={20} /></>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
