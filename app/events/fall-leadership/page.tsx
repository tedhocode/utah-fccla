import { Calendar, MapPin, Download, ExternalLink, Clock, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function FallLeadershipPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative text-white py-24 px-4 mt-20 overflow-hidden">
        <Image
          src="/header-images/fall-leadership-header.jpg"
          alt="Fall Leadership Conference"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-fccla-red/70" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Fall Leadership Conference</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            The Ultimate Leadership Experience to kick off the year
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.registermychapter.com/fccla/ut-fall/Main.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
            >
              Register Now
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <Calendar size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Date</h3>
              <p className="text-gray-600">October 2, 2025</p>
              <p className="text-gray-600">9:30 AM - 5:00 PM</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <MapPin size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Location</h3>
              <p className="text-gray-600">Utah Valley Convention Center</p>
              <p className="text-gray-600">220 W Center St, Provo, UT 84601</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <Users size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Who Should Attend</h3>
              <p className="text-gray-600">Chapter Officers & Advisers</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Conference */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-8 text-center">What is Fall Leadership Conference?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Utah FCCLA Fall Conference is an incredible opportunity to join other chapter officers and advisers across the state to network, expand your leadership skills, sharpen your talents, and explore National Programs and Career Pathways.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Don't miss this opportunity to come together for the Ultimate Leadership Experience!
            </p>
          </div>

          {/* What to Expect */}
          <div className="mt-12 bg-fccla-navy text-white p-10 rounded-2xl">
            <h3 className="font-outfit text-3xl font-bold mb-6">What to Expect</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">✓</span>
                <span>Leadership training workshops led by industry experts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">✓</span>
                <span>Team building activities with chapters from across Utah</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">✓</span>
                <span>Goal setting sessions for your chapter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">✓</span>
                <span>Networking opportunities with state officers and advisers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red text-2xl">✓</span>
                <span>Introduction to National Programs and competitive events</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-8 text-center">Dress Code</h2>
          
          <div className="bg-white p-8 rounded-2xl border-2 border-fccla-red mb-6">
            <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Mandatory Attire for General Sessions / Workshops</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-fccla-red">★</span>
                <span>FCCLA Red blazer is encouraged</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red">★</span>
                <span>Red, black, or white polo or professional white shirt (long or short sleeves)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red">★</span>
                <span>Black bottoms (slacks, skirt, sheath dress)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red">★</span>
                <span>Shoes (black dress shoes preferred)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red">✗</span>
                <span>Jeans, t-shirts, and athletic wear are NOT acceptable</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
            <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Advisers / Chaperones / Guests</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-fccla-red">★</span>
                <span>Business professional attire</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fccla-red">✗</span>
                <span>Jeans, t-shirts, and athletic wear are NOT acceptable</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Documents & Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-8 text-center">Important Documents</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="#"
              className="flex items-center justify-between p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-fccla-red hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <Download size={32} className="text-fccla-red" />
                <div>
                  <h3 className="font-outfit text-lg font-bold text-fccla-navy group-hover:text-fccla-red transition-colors">Registration Letter</h3>
                  <p className="text-sm text-gray-600">Conference details and registration info</p>
                </div>
              </div>
              <ExternalLink size={20} className="text-gray-400" />
            </a>

            <a 
              href="#"
              className="flex items-center justify-between p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-fccla-red hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <Download size={32} className="text-fccla-red" />
                <div>
                  <h3 className="font-outfit text-lg font-bold text-fccla-navy group-hover:text-fccla-red transition-colors">Conference Program</h3>
                  <p className="text-sm text-gray-600">Full schedule and workshop details</p>
                </div>
              </div>
              <ExternalLink size={20} className="text-gray-400" />
            </a>

            <a 
              href="#"
              className="flex items-center justify-between p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-fccla-red hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <Download size={32} className="text-fccla-red" />
                <div>
                  <h3 className="font-outfit text-lg font-bold text-fccla-navy group-hover:text-fccla-red transition-colors">Code of Conduct</h3>
                  <p className="text-sm text-gray-600">Required for all attendees</p>
                </div>
              </div>
              <ExternalLink size={20} className="text-gray-400" />
            </a>

            <a 
              href="#"
              className="flex items-center justify-between p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-fccla-red hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-4">
                <Download size={32} className="text-fccla-red" />
                <div>
                  <h3 className="font-outfit text-lg font-bold text-fccla-navy group-hover:text-fccla-red transition-colors">Media Release Form</h3>
                  <p className="text-sm text-gray-600">Photo and video consent</p>
                </div>
              </div>
              <ExternalLink size={20} className="text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-fccla-red py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-3xl font-bold text-white mb-4">Questions?</h2>
          <p className="text-white/90 text-lg mb-8">Reach out to Aubrey Turnbow Frandsen with any questions about Fall Leadership Conference</p>
          <Link 
            href="/about/contact"
            className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}