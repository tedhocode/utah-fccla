'use client'

import { useState } from 'react'
import { Hotel, MapPin, Calendar, Clock, Car, ChevronDown, ChevronUp, Phone, CreditCard, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: 'Do I have to stay at the conference hotel?',
    answer: "You are not required to stay at the conference hotel, but we strongly encourage it. Staying on-site keeps your chapter together, makes early morning competition check-ins easy, and gives you the full State Leadership experience. Plus, our negotiated group rate is typically very competitive."
  },
  {
    question: 'How many people can share a room?',
    answer: 'Standard rooms accommodate 2–4 people. We recommend 2 students per bed maximum for comfort. Chaperone/adviser rooms should be separate from student rooms per FCCLA policy and school district requirements.'
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Cancellations made before the booking deadline receive a full refund. Cancellations within 72 hours of check-in may be subject to a one-night penalty. Contact the hotel directly for their specific cancellation terms.'
  },
  {
    question: 'Can boys and girls share a floor?',
    answer: 'Room assignments are made by your chapter adviser. It is your school and district policy that governs chaperone and rooming arrangements. We recommend advisers review their district policies before booking.'
  },
  {
    question: 'Is parking available at the hotel?',
    answer: 'Yes, parking is available at the conference hotel. Please confirm parking rates and availability directly with the hotel when booking, as rates and policies may vary.'
  },
  {
    question: 'Are meals included with the hotel stay?',
    answer: 'Hotel room rates do not include meals unless specified. Conference registration includes the State Leadership banquet dinner. Breakfast, lunch, and other meals are on your own. The hotel and nearby restaurants have a variety of dining options.'
  },
]

export default function AccommodationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Hotel size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Accommodations</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Hotel and travel information for State Leadership Conference 2026
          </p>
        </div>
      </section>

      {/* Conference Summary Bar */}
      <section className="bg-fccla-red py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            <div className="flex flex-col items-center gap-2">
              <Calendar size={24} className="opacity-80" />
              <p className="font-bold text-lg">March 24–25, 2026</p>
              <p className="text-sm opacity-80">Conference Dates</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin size={24} className="opacity-80" />
              <p className="font-bold text-lg">Layton, Utah</p>
              <p className="text-sm opacity-80">Conference Location</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock size={24} className="opacity-80" />
              <p className="font-bold text-lg">March 23, 2026</p>
              <p className="text-sm opacity-80">Check-in Night</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users size={24} className="opacity-80" />
              <p className="font-bold text-lg">Group Rate Available</p>
              <p className="text-sm opacity-80">Book Through Utah FCCLA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-4 text-center">Conference Hotel</h2>
          <p className="text-gray-600 text-center mb-12 text-lg max-w-2xl mx-auto">
            Utah FCCLA has secured a group rate at the official conference hotel. Book early — rooms go fast!
          </p>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Hotel Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-fccla-red hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white p-8">
                <Hotel size={48} className="mb-4" />
                <h3 className="font-outfit text-3xl font-bold mb-2">Official Conference Hotel</h3>
                <p className="text-white/80 text-lg">State Leadership Conference 2026</p>
              </div>
              <div className="p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="text-fccla-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-fccla-navy">Hotel details coming soon</p>
                    <p className="text-gray-600 text-sm">Check back for hotel name, address, and direct booking link</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CreditCard size={22} className="text-fccla-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-fccla-navy">Group Rate</p>
                    <p className="text-gray-600 text-sm">Rate per night to be announced — book using the Utah FCCLA group code</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={22} className="text-fccla-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-fccla-navy">Check-in / Check-out</p>
                    <p className="text-gray-600 text-sm">Check-in: March 23, 2026 (Sunday evening) · Check-out: March 25, 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={22} className="text-fccla-red flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-fccla-navy">Questions?</p>
                    <p className="text-gray-600 text-sm">Contact Utah FCCLA state staff for booking assistance</p>
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8">
                <Link
                  href="/about/contact"
                  className="block text-center bg-fccla-red text-white px-8 py-4 rounded-xl font-bold hover:bg-fccla-red-dark transition-all"
                >
                  Contact Us for Hotel Info
                </Link>
              </div>
            </div>

            {/* What's Included + Tips */}
            <div className="space-y-6">
              {/* What's Included */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">What's Included</h3>
                <div className="space-y-4">
                  {[
                    'Access to all conference sessions and workshops',
                    'State Leadership banquet dinner (Saturday evening)',
                    'Recognition and awards ceremony',
                    'STAR Event and state competition judging',
                    'Opening and closing general sessions',
                    'Delegate voting and business meetings',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-fccla-red flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">Conference registration required. Hotel room is separate from registration.</p>
              </div>

              {/* Booking Tips */}
              <div className="bg-fccla-navy text-white rounded-2xl p-8">
                <h3 className="font-outfit text-2xl font-bold mb-5">Booking Tips</h3>
                <div className="space-y-4">
                  {[
                    { tip: 'Book early', detail: 'The group block typically sells out 4–6 weeks before the conference.' },
                    { tip: 'Use the group code', detail: 'Always use the Utah FCCLA group code to get the discounted rate.' },
                    { tip: 'Confirm your reservation', detail: 'Call the hotel to verify your booking a week before arriving.' },
                    { tip: 'Review district policies', detail: 'Check your school district travel policy before finalizing rooming arrangements.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-fccla-red rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                      <div>
                        <span className="font-bold">{item.tip}: </span>
                        <span className="text-white/85">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-4 text-center">Getting There</h2>
          <p className="text-gray-600 text-center mb-12 text-lg">Layton is conveniently located off I-15, about 25 miles north of Salt Lake City</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all">
              <div className="w-12 h-12 bg-fccla-red rounded-xl flex items-center justify-center mb-5">
                <Car size={24} className="text-white" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3">By Car</h3>
              <p className="text-gray-700 leading-relaxed">
                Layton is easily accessible via I-15. Take exit 331 (Layton Parkway) or 332 (Hill Field Road) depending on your hotel. Free or low-cost parking is available at the conference hotel.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all">
              <div className="w-12 h-12 bg-fccla-red rounded-xl flex items-center justify-center mb-5">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3">TRAX / FrontRunner</h3>
              <p className="text-gray-700 leading-relaxed">
                UTA FrontRunner commuter rail stops in Layton at the Layton Station. From Salt Lake City, FrontRunner runs along the Wasatch Front making it a convenient option for chapters along the corridor.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red transition-all">
              <div className="w-12 h-12 bg-fccla-red rounded-xl flex items-center justify-center mb-5">
                <Hotel size={24} className="text-white" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3">From SLC Airport</h3>
              <p className="text-gray-700 leading-relaxed">
                Salt Lake City International Airport is approximately 30 minutes south. Rental cars, rideshares (Uber/Lyft), and shuttle services are available. I-15 North connects the airport to Layton.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-12 text-lg">Everything you need to know about staying at the conference hotel</p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white border-2 rounded-2xl overflow-hidden transition-all ${
                  openFaq === i ? 'border-fccla-red shadow-lg' : 'border-gray-200 hover:border-fccla-red'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-outfit text-lg font-bold text-fccla-navy pr-4">{faq.question}</h3>
                  {openFaq === i
                    ? <ChevronUp size={22} className="text-fccla-red flex-shrink-0" />
                    : <ChevronDown size={22} className="text-gray-400 flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Ready for State Leadership?</h2>
          <p className="text-white/90 text-lg mb-8">
            Learn what to expect at the conference and start preparing your STAR Event entries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events/state-conference"
              className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              View State Conference Info →
            </Link>
            <Link
              href="/compete/star-events"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-fccla-red transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Explore STAR Events →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
