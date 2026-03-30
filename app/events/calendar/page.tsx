import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function EventsCalendarPage() {
  const events = [
    {
      title: "Fall Leadership Conference",
      date: "October 2, 2025",
      time: "9:30 AM - 5:00 PM",
      location: "Utah Valley Convention Center, Provo, UT",
      description: "Join other chapter officers and advisers across the state to network, expand your leadership skills, and explore National Programs.",
      registrationLink: "#"
    },
    {
      title: "State Leadership Conference",
      date: "March 24-25, 2026",
      time: "9:30 AM - 3:30 PM",
      location: "Davis Conference Center, Layton, UT",
      description: "Three days of competitions, workshops, and networking with over 1,500 FCCLA members across Utah.",
      registrationLink: "#"
    },
    {
      title: "National Leadership Conference",
      date: "June 28 - July 2, 2026",
      time: "All Day",
      location: "Anaheim, CA",
      description: "Represent Utah at the national level and compete with the best FCCLA chapters from across the country.",
      registrationLink: "#"
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Calendar size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Events Calendar</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">Mark your calendars for Utah FCCLA's upcoming conferences and competitions</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-fccla-red hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h2 className="font-outfit text-3xl font-bold text-fccla-navy mb-4">{event.title}</h2>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={20} className="mr-3 text-fccla-red" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={20} className="mr-3 text-fccla-red" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>
                </div>
                <Link 
                  href={event.registrationLink}
                  className="bg-fccla-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-fccla-red-dark transition-all inline-flex items-center gap-2 whitespace-nowrap"
                >
                  Register Now
                  <ExternalLink size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
