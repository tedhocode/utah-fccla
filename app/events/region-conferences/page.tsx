'use client'

import { useState } from 'react'
import { Calendar, MapPin, Users } from 'lucide-react'
import PageTransition from '@/components/PageTransition'

export default function RegionConferencesPage() {
  const [activeRegion, setActiveRegion] = useState(1)

  const regions = [
    {
      number: 1,
      name: "Region 1",
      date: "January 2026",
      location: "TBD",
      schools: ["Layton High School", "Northridge High School", "Clearfield High School", "Davis High School", "Syracuse High School"],
      description: "Region 1 covers the northern Wasatch Front, including Davis and Weber counties."
    },
    {
      number: 2,
      name: "Region 2",
      date: "January 2026",
      location: "TBD",
      schools: ["Salt Lake City schools", "West Valley schools", "Murray schools"],
      description: "Region 2 covers Salt Lake County and surrounding areas."
    },
    {
      number: 3,
      name: "Region 3",
      date: "January 2026",
      location: "TBD",
      schools: ["Westlake High School", "Orem High School", "Lehi High School", "Pleasant Grove High School", "Lone Peak High School", "Manila High School"],
      description: "Region 3 covers Utah County and the northern region, including Provo, Orem, Lehi, and American Fork areas."
    },
    {
      number: 4,
      name: "Region 4",
      date: "January 2026",
      location: "TBD",
      schools: ["Timpview High School", "Carbon High School", "Maple Mountain High School", "Spanish Fork High School"],
      description: "Region 4 covers central Utah, including Carbon County and southern Utah County."
    },
    {
      number: 5,
      name: "Region 5",
      date: "January 2026",
      location: "TBD",
      schools: ["Dixie High School", "Snow Canyon High School", "Hurricane High School", "Desert Hills High School"],
      description: "Region 5 covers southern Utah, including Washington County and the St. George area."
    }
  ]

  const currentRegion = regions[activeRegion - 1]

  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-red to-red-700 text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Region Conferences</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Five regional conferences bringing together chapters from across Utah
          </p>
        </div>
      </section>

      {/* Region Tabs */}
      <section className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 sticky top-20 z-40">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <button
                key={region.number}
                onClick={() => setActiveRegion(region.number)}
                className={`px-8 py-3 rounded-lg font-bold text-lg transition-all ${
                  activeRegion === region.number
                    ? 'bg-fccla-red text-white shadow-lg'
                    : 'bg-white text-fccla-navy hover:bg-gray-200'
                }`}
              >
                Region {region.number}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Region Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Region Header */}
          <div className="text-center mb-12">
            <h2 className="font-outfit text-5xl font-extrabold text-fccla-navy mb-4">{currentRegion.name}</h2>
            <p className="text-gray-600 text-lg">{currentRegion.description}</p>
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200 hover:border-fccla-red transition-all">
              <Calendar size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Date</h3>
              <p className="text-gray-600">{currentRegion.date}</p>
              <p className="text-sm text-gray-500 mt-2">Check back for exact date</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200 hover:border-fccla-red transition-all">
              <MapPin size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Location</h3>
              <p className="text-gray-600">{currentRegion.location}</p>
              <p className="text-sm text-gray-500 mt-2">To be announced</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200 hover:border-fccla-red transition-all">
              <Users size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Who Attends</h3>
              <p className="text-gray-600">Region {currentRegion.number} Chapters</p>
            </div>
          </div>

          {/* About Region Conferences */}
          <div className="bg-fccla-navy text-white p-10 rounded-2xl mb-12">
            <h3 className="font-outfit text-3xl font-bold mb-6">About Region Conferences</h3>
            <p className="text-lg leading-relaxed mb-6">
              Region Conferences are a great opportunity to connect with FCCLA members from nearby chapters, practice your competitive events before State Conference, and build regional networks that last throughout the year.
            </p>
            <p className="text-lg leading-relaxed">
              Each region hosts its own conference with workshops, team-building activities, and regional competitions. This is your chance to represent your school at the regional level and prepare for state!
            </p>
          </div>

          {/* Schools in Region */}
          <div className="bg-white p-10 rounded-2xl border-2 border-gray-200">
            <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Schools in {currentRegion.name}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {currentRegion.schools.map((school, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{school}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6 italic text-center">
              * This list may not be exhaustive. Contact your adviser to confirm your region.
            </p>
          </div>
        </div>
      </section>

      {/* General Info */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-8 text-center">Conference Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="font-outfit text-xl font-bold text-fccla-red mb-4">Leadership Workshops</h3>
              <p className="text-gray-700 leading-relaxed">
                Participate in hands-on workshops designed to develop your leadership skills and prepare you for State Conference.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="font-outfit text-xl font-bold text-fccla-red mb-4">Regional Networking</h3>
              <p className="text-gray-700 leading-relaxed">
                Connect with chapters from your region, share ideas, and build lasting friendships with nearby schools.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="font-outfit text-xl font-bold text-fccla-red mb-4">Competition Practice</h3>
              <p className="text-gray-700 leading-relaxed">
                Get valuable feedback on your STAR Event projects before competing at the state level.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="font-outfit text-xl font-bold text-fccla-red mb-4">Regional Recognition</h3>
              <p className="text-gray-700 leading-relaxed">
                Celebrate your chapter's achievements and recognize outstanding members from your region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-fccla-red py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-3xl font-bold text-white mb-4">Questions About Your Region?</h2>
          <p className="text-white/90 text-lg mb-8">
            Contact your regional representative or the state office for more information
          </p>
          <a 
            href="/about/contact"
            className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}