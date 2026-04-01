import { Calendar, MapPin, Download, ExternalLink, Trophy, ChefHat } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import PageTransition from '@/components/PageTransition'

export default function StateConferencePage() {
  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="relative text-white py-24 px-4 mt-20 overflow-hidden">
        <Image
          src="/header-images/state-conference-header.JPEG"
          alt="State Leadership Conference"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-fccla-navy/70" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">State Leadership Conference</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Utah's premier FCCLA event - Three days of competitions, workshops, and leadership development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.registermychapter.com/fccla/ut-state/Main.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-fccla-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all inline-flex items-center justify-center gap-2"
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
              <p className="text-gray-600">March 24-25, 2026</p>
              <p className="text-gray-600">9:30 AM - 3:30 PM</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <MapPin size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Location</h3>
              <p className="text-gray-600">Davis Conference Center</p>
              <p className="text-gray-600">1651 N 700 W, Layton, UT 84041</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <Trophy size={40} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Expected Attendance</h3>
              <p className="text-gray-600">1,500+ Members</p>
              <p className="text-gray-600">50+ Schools</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-8 text-center">What is State Leadership Conference?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Utah FCCLA State Conference is the biggest event of the year! Join chapter members and advisers from across the state to network, compete in STAR Events and state competitions, attend leadership workshops, and celebrate achievements.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              This is your opportunity to compete for state recognition, qualify for National Leadership Conference, and connect with over 1,500 FCCLA members who share your passion for leadership and Family and Consumer Sciences.
            </p>
          </div>

          <div className="mt-12 bg-fccla-red text-white p-10 rounded-2xl">
            <h3 className="font-outfit text-3xl font-bold mb-6">Conference Highlights</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">★</span>
                <span>Compete in STAR Events and State Competitions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">★</span>
                <span>Attend leadership workshops and skill-building sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">★</span>
                <span>Network with members from all five regions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">★</span>
                <span>Recognition ceremony celebrating state winners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">★</span>
                <span>Elect new state officers for the upcoming year</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Culinary & Baking Competitions */}
      <section className="bg-fccla-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <ChefHat size={64} className="mx-auto mb-6 text-fccla-red" />
            <h2 className="font-outfit text-4xl font-bold text-white mb-4">Baking & Pastry and Culinary Arts STAR Events</h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              State Culinary and Baking & Pastry information is now live!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Baking & Pastry */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Baking & Pastry</h3>
              <div className="space-y-4 mb-6">
                <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <span className="font-semibold text-fccla-navy group-hover:text-fccla-red">Competition Guidelines</span>
                  <Download size={20} className="text-gray-400" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <span className="font-semibold text-fccla-navy group-hover:text-fccla-red">Equipment List</span>
                  <Download size={20} className="text-gray-400" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <span className="font-semibold text-fccla-navy group-hover:text-fccla-red">Recipes</span>
                  <Download size={20} className="text-gray-400" />
                </a>
              </div>
            </div>

            {/* Culinary Arts */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Culinary Arts</h3>
              <div className="space-y-4 mb-6">
                <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <span className="font-semibold text-fccla-navy group-hover:text-fccla-red">Competition Guidelines</span>
                  <Download size={20} className="text-gray-400" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <span className="font-semibold text-fccla-navy group-hover:text-fccla-red">Equipment List</span>
                  <Download size={20} className="text-gray-400" />
                </a>
                <a href="#" className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <span className="font-semibold text-fccla-navy group-hover:text-fccla-red">Recipes</span>
                  <Download size={20} className="text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="#"
              className="inline-flex items-center gap-2 text-white hover:text-fccla-red transition-colors"
            >
              <Download size={20} />
              <span className="font-semibold">Medical Release Form (Required for Culinary & Baking)</span>
            </a>
          </div>
        </div>
      </section>

      {/* State Competitions Link */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Trophy size={48} className="mx-auto mb-6 text-fccla-red" />
          <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-4">State-Only Competitions</h2>
          <p className="text-gray-600 text-lg mb-8">
            In addition to STAR Events, compete in one of our five Utah-exclusive state competitions!
          </p>
          <Link 
            href="/compete/state-competitions"
            className="inline-block bg-fccla-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all"
          >
            View State Competitions →
          </Link>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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

      {/* Documents */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-8 text-center">Important Documents</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a href="#" className="flex items-center justify-between p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-fccla-red hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4">
                <Download size={32} className="text-fccla-red" />
                <div>
                  <h3 className="font-outfit text-lg font-bold text-fccla-navy group-hover:text-fccla-red transition-colors">Registration Letter</h3>
                </div>
              </div>
              <ExternalLink size={20} className="text-gray-400" />
            </a>

            <a href="#" className="flex items-center justify-between p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-fccla-red hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4">
                <Download size={32} className="text-fccla-red" />
                <div>
                  <h3 className="font-outfit text-lg font-bold text-fccla-navy group-hover:text-fccla-red transition-colors">Conference Program</h3>
                </div>
              </div>
              <ExternalLink size={20} className="text-gray-400" />
            </a>

            <a href="#" className="flex items-center justify-between p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-fccla-red hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4">
                <Download size={32} className="text-fccla-red" />
                <div>
                  <h3 className="font-outfit text-lg font-bold text-fccla-navy group-hover:text-fccla-red transition-colors">Code of Conduct</h3>
                </div>
              </div>
              <ExternalLink size={20} className="text-gray-400" />
            </a>

            <a href="#" className="flex items-center justify-between p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-fccla-red hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4">
                <Download size={32} className="text-fccla-red" />
                <div>
                  <h3 className="font-outfit text-lg font-bold text-fccla-navy group-hover:text-fccla-red transition-colors">Media Release Form</h3>
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
          <p className="text-white/90 text-lg mb-8">Reach out to Aubrey Turnbow Frandsen with any questions about State Leadership Conference</p>
          <Link 
            href="/about/contact"
            className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}