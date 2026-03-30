'use client'

import { useState } from 'react'
import { FileText, Download, ChevronDown, ChevronUp, BookOpen } from 'lucide-react'

type ConferenceType = 'state-leadership' | 'fall-leadership' | 'region'

interface ProceedingDoc {
  label: string
  href: string
}

interface Conference {
  year: string
  type: ConferenceType
  title: string
  date: string
  location: string
  docs: ProceedingDoc[]
}

const conferences: Conference[] = [
  // ─── 2024–2025 ────────────────────────────────────────────────────────────
  {
    year: '2024-2025',
    type: 'state-leadership',
    title: 'State Leadership Conference',
    date: 'March 21, 2025',
    location: 'SLCC Miller Campus, Sandy, UT',
    docs: [
      { label: 'Conference Agenda', href: '#' },
      { label: 'Meeting Minutes', href: '#' },
      { label: 'Delegate Proceedings', href: '#' },
    ],
  },
  {
    year: '2024-2025',
    type: 'fall-leadership',
    title: 'Fall Leadership Conference',
    date: 'October 2024',
    location: 'Provo, UT',
    docs: [
      { label: 'Conference Agenda', href: '#' },
      { label: 'Meeting Minutes', href: '#' },
    ],
  },
  // ─── 2023–2024 ────────────────────────────────────────────────────────────
  {
    year: '2023-2024',
    type: 'state-leadership',
    title: 'State Leadership Conference',
    date: 'March 26–27, 2024',
    location: 'Layton, UT',
    docs: [
      { label: 'Conference Agenda', href: '#' },
      { label: 'Meeting Minutes', href: '#' },
      { label: 'Delegate Proceedings', href: '#' },
    ],
  },
  {
    year: '2023-2024',
    type: 'fall-leadership',
    title: 'Fall Leadership Conference',
    date: 'October 2023',
    location: 'Utah County',
    docs: [
      { label: 'Conference Agenda', href: '#' },
      { label: 'Meeting Minutes', href: '#' },
    ],
  },
  // ─── 2022–2023 ────────────────────────────────────────────────────────────
  {
    year: '2022-2023',
    type: 'state-leadership',
    title: 'State Leadership Conference',
    date: 'March 2023',
    location: 'Utah',
    docs: [
      { label: 'Conference Agenda', href: '#' },
      { label: 'Meeting Minutes', href: '#' },
    ],
  },
  {
    year: '2022-2023',
    type: 'fall-leadership',
    title: 'Fall Leadership Conference',
    date: 'October 2022',
    location: 'Utah',
    docs: [
      { label: 'Conference Agenda', href: '#' },
      { label: 'Meeting Minutes', href: '#' },
    ],
  },
]

const typeLabels: Record<ConferenceType, string> = {
  'state-leadership': 'State Leadership',
  'fall-leadership': 'Fall Leadership',
  'region': 'Region Conference',
}

const typeBadgeColors: Record<ConferenceType, string> = {
  'state-leadership': 'bg-fccla-red/10 text-fccla-red',
  'fall-leadership': 'bg-fccla-navy/10 text-fccla-navy',
  'region': 'bg-gray-100 text-gray-700',
}

function ConferenceRow({ conference }: { conference: Conference }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`bg-white border-2 rounded-2xl overflow-hidden transition-all ${expanded ? 'border-fccla-red shadow-lg' : 'border-gray-200 hover:border-fccla-red'}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
            conference.type === 'state-leadership' ? 'bg-fccla-red' : 'bg-fccla-navy'
          }`}>
            <FileText size={20} className="text-white" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-outfit text-xl font-bold text-fccla-navy">{conference.title}</h3>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${typeBadgeColors[conference.type]}`}>
                {typeLabels[conference.type]}
              </span>
            </div>
            <p className="text-gray-500 text-sm">{conference.date} · {conference.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-sm text-gray-400 hidden sm:block">{conference.docs.length} document{conference.docs.length !== 1 ? 's' : ''}</span>
          {expanded
            ? <ChevronUp size={20} className="text-fccla-red" />
            : <ChevronDown size={20} className="text-gray-400" />
          }
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="pt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {conference.docs.map((doc, i) => (
              <a
                key={i}
                href={doc.href}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-fccla-red hover:bg-fccla-red/5 transition-all group"
              >
                <Download size={18} className="text-fccla-red flex-shrink-0" />
                <span className="text-sm font-semibold text-fccla-navy group-hover:text-fccla-red transition-colors">
                  {doc.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ProceedingsPage() {
  const [activeYear, setActiveYear] = useState<string>('2024-2025')

  const years = [...new Set(conferences.map(c => c.year))].sort((a, b) => b.localeCompare(a))
  const filtered = conferences.filter(c => c.year === activeYear)

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <BookOpen size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Conference Proceedings</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Agendas, minutes, and official documents from Utah FCCLA conferences
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Conference proceedings include official agendas, meeting minutes, delegate assembly records, and key documents from Utah FCCLA's annual conferences. These records are available to members, advisers, and the public for transparency and reference.
          </p>
        </div>
      </section>

      {/* Year Tabs + Conferences */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Year Selector */}
          <div className="mb-10">
            <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">School Year</p>
            <div className="flex flex-wrap gap-3">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    activeYear === year
                      ? 'bg-fccla-navy text-white shadow-md'
                      : 'bg-white text-fccla-navy border-2 border-gray-200 hover:border-fccla-navy'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Conference List */}
          <div className="space-y-4">
            {filtered.map((conf, i) => (
              <ConferenceRow key={i} conference={conf} />
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <FileText size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg font-medium">No proceedings found for this year</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Note for webmaster */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 flex items-start gap-4">
            <FileText size={24} className="text-fccla-red flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-outfit text-lg font-bold text-fccla-navy mb-2">Looking for an older document?</h3>
              <p className="text-gray-600 leading-relaxed">
                If you're looking for proceedings from a year not listed here, please reach out to the Utah FCCLA state office. Documents prior to this archive may be available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
