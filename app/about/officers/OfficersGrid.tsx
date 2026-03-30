'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Mail, School, MapPin, X } from 'lucide-react'

export type Officer = {
  name: string
  position: string
  school: string
  region: string
  email: string
  photo: string
  bio?: string
}

export default function OfficersGrid({ officers }: { officers: Officer[] }) {
  const [selected, setSelected] = useState<Officer | null>(null)

  const close = useCallback(() => setSelected(null), [])

  // Close on Escape key
  useEffect(() => {
    if (!selected) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [selected, close])

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <>
      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {officers.map((officer, index) => (
          <button
            key={index}
            onClick={() => setSelected(officer)}
            className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-fccla-red hover:shadow-2xl hover:-translate-y-2 transition-all text-left w-full cursor-pointer"
          >
            <div className="relative h-80 bg-gray-100">
              <Image
                src={officer.photo}
                alt={officer.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-1">{officer.name}</h3>
              <p className="text-fccla-red font-semibold mb-4">{officer.position}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <School size={16} className="text-fccla-navy flex-shrink-0" />
                  <span>{officer.school}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-fccla-navy flex-shrink-0" />
                  <span>{officer.region}</span>
                </div>
                {officer.email && (
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-fccla-navy flex-shrink-0" />
                    <span className="text-fccla-red truncate">{officer.email}</span>
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal Card */}
          <div
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all"
              aria-label="Close"
            >
              <X size={20} className="text-fccla-navy" />
            </button>

            {/* Photo */}
            <div className="relative w-full md:w-64 flex-shrink-0 h-64 md:h-auto min-h-64">
              <Image
                src={selected.photo}
                alt={selected.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 256px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fccla-navy/60 to-transparent md:hidden" />
            </div>

            {/* Content */}
            <div className="flex flex-col p-8 overflow-y-auto">
              <h2 className="font-outfit text-3xl font-extrabold text-fccla-navy leading-tight mb-1">
                {selected.name}
              </h2>
              <p className="text-fccla-red font-bold text-lg mb-6">{selected.position}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 rounded-lg bg-fccla-navy/10 flex items-center justify-center flex-shrink-0">
                    <School size={16} className="text-fccla-navy" />
                  </div>
                  <span className="font-medium">{selected.school}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 rounded-lg bg-fccla-navy/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-fccla-navy" />
                  </div>
                  <span className="font-medium">{selected.region}</span>
                </div>
                {selected.email && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-lg bg-fccla-navy/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-fccla-navy" />
                    </div>
                    <a
                      href={`mailto:${selected.email}`}
                      className="text-fccla-red hover:underline font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {selected.email}
                    </a>
                  </div>
                )}
              </div>

              {selected.bio ? (
                <div>
                  <h3 className="font-outfit text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">About</h3>
                  <p className="text-gray-700 leading-relaxed">{selected.bio}</p>
                </div>
              ) : (
                <p className="text-gray-400 italic text-sm">Bio coming soon.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
