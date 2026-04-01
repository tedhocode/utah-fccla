import { Calendar, MapPin, ExternalLink, Globe, Plane, Trophy, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function NationalsPage() {
  return (
    <main>
      {/* National FCCLA Link Banner */}
      <section className="bg-gradient-to-r from-fccla-red to-red-700 py-6 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <Globe size={32} />
              <div>
                <p className="font-semibold">For complete National Leadership Conference information</p>
                <p className="text-sm text-white/90">Visit the official National FCCLA website</p>
              </div>
            </div>
            <a 
              href="https://fcclainc.org/attend/national-leadership-conference"
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
      <section className="relative text-white py-24 px-4 overflow-hidden">
        <Image
          src="/header-images/national-leadership-header.jpg"
          alt="National Leadership Conference"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-fccla-navy/70" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Plane size={20} />
            <span className="text-sm font-semibold uppercase tracking-wide">National Event</span>
          </div>
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">National Leadership Conference</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-4">
            Represent Utah on the national stage and compete with the best FCCLA chapters from across the country
          </p>
          <p className="text-fccla-red text-lg font-semibold">
            July 5th - July 11th, 2026 • Washington, D.C
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <Calendar size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Date</h3>
              <p className="text-gray-600">June 28 - July 2, 2026</p>
              <p className="text-gray-600">5 Days</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <MapPin size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Location</h3>
              <p className="text-gray-600">Walter E. Washington Convention Center</p>
              <p className="text-gray-600">Washington, D.C.</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <Users size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Expected Attendance</h3>
              <p className="text-gray-600">6,000+ Members</p>
              <p className="text-gray-600">All 50 States</p>
            </div>
          </div>
        </div>
      </section>

      {/* About NLC */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-8 text-center">The Ultimate FCCLA Experience</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              National Leadership Conference (NLC) is FCCLA's premier event, bringing together over 6,000 members from all 50 states for an unforgettable week of competition, learning, and celebration. This is where Utah's best compete on the national stage.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Qualifying at State Leadership Conference earns you the opportunity to represent Utah at NLC. Compete in national STAR Events, attend exclusive workshops, network with members nationwide, and experience the incredible energy of thousands of FCCLA members united by a shared passion for leadership.
            </p>
          </div>

          <div className="mt-12 bg-fccla-navy text-white p-10 rounded-2xl">
            <h3 className="font-outfit text-3xl font-bold mb-6">What to Expect at NLC</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">★</span>
                <span>Compete in national STAR Events against the best chapters in the country</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">★</span>
                <span>Attend world-class leadership workshops and keynote sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">★</span>
                <span>Network with 6,000+ FCCLA members from across the nation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">★</span>
                <span>Celebrate achievements at the National Recognition Ceremony</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">★</span>
                <span>Explore Washington, D.C. and visit iconic national monuments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">★</span>
                <span>Elect national officers and shape FCCLA's future</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to Qualify */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Trophy size={64} className="mx-auto mb-6 text-fccla-red" />
            <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-4">How to Qualify</h2>
            <p className="text-gray-600 text-lg">Represent Utah at the national level</p>
          </div>

          <div className="bg-white p-10 rounded-2xl border-2 border-fccla-red">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Compete at State Leadership Conference</h3>
                  <p className="text-gray-700">Participate in STAR Events at Utah's State Leadership Conference in March</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Earn Gold or Silver Recognition</h3>
                  <p className="text-gray-700">Achieve Gold or Silver level in your competitive event to qualify for nationals</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Register for NLC</h3>
                  <p className="text-gray-700">Complete your national registration and prepare to represent Utah in Washington, D.C.!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/events/state-conference"
              className="inline-block bg-fccla-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all"
            >
              Learn About State Conference →
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Anaheim */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Plane size={64} className="mx-auto mb-6 text-fccla-red" />
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-6">Beyond the Conference</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            NLC is held in Washington, D.C. — home to iconic national monuments, world-class museums, and rich American history. Many chapters extend their trip to explore the Smithsonian, the National Mall, the Lincoln Memorial, and more.
          </p>
          <p className="text-gray-600 italic">
            Talk to your adviser about planning chapter activities before or after the conference!
          </p>
        </div>
      </section>

      {/* CTA to National FCCLA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Globe size={64} className="mx-auto mb-6 text-white" />
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Ready to Learn More?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Visit the National FCCLA website for complete conference details, registration information, hotel booking, and the full NLC schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://fcclainc.org/attend/national-leadership-conference"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
            >
              National FCCLA Website
              <ExternalLink size={20} />
            </a>
            <Link 
              href="/about/contact"
              className="bg-fccla-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy-light transition-all"
            >
              Contact Utah FCCLA
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}