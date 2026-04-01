import { Calendar, Newspaper, Users, BookOpen, GraduationCap, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Building Tomorrow's Leaders Today
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Empowering Utah's Family, Career and Community Leaders of America to make a positive impact in their schools and communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/members/getting-started" className="bg-fccla-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all">
              Join FCCLA
            </Link>
            <Link href="/about" className="bg-white text-fccla-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-fccla-navy mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <EventCard 
              title="Fall Leadership Conference"
              date="October 2, 2025"
              location="Utah Valley Convention Center, Provo"
              href="/events/fall-leadership"
            />
            <EventCard 
              title="State Leadership Conference"
              date="March 24-25, 2026"
              location="Davis Conference Center, Layton"
              href="/events/state-conference"
            />
            <EventCard 
              title="National Leadership Conference"
              date="June 28 - July 2, 2026"
              location="Washington, D.C."
              href="/events/nationals"
            />
          </div>
          <div className="text-center mt-10">
            <Link href="/events/calendar" className="inline-block bg-fccla-red text-white px-8 py-3 rounded-xl font-bold hover:bg-fccla-red-dark transition-all">
              View Full Calendar →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-fccla-navy text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold mb-12 text-center">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NewsCard 
              title="2026 State Officer Applications Open"
              date="February 15, 2026"
              excerpt="Applications are now open for the 2026-2027 Utah FCCLA State Officer team. Don't miss this opportunity to lead!"
            />
            <NewsCard 
              title="Regional Conferences Announced"
              date="January 20, 2026"
              excerpt="All five regional conferences have been scheduled for January 2026. Check your region's date and location."
            />
            <NewsCard 
              title="National Programs Spotlight"
              date="December 10, 2025"
              excerpt="Learn about FCCLA's National Programs and how your chapter can get involved in making a difference."
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-fccla-navy mb-12 text-center">I am a...</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ActionCard 
              icon={<Users size={40} />}
              title="Member"
              description="Find resources, programs, and opportunities to grow as a leader in FCCLA."
              href="/members/getting-started"
            />
            <ActionCard 
              icon={<BookOpen size={40} />}
              title="Adviser"
              description="Access tools, training, and support to help your chapter succeed."
              href="/advisers/new-adviser-guide"
            />
            <ActionCard 
              icon={<Heart size={40} />}
              title="Partner With Us"
              description="Explore sponsorship opportunities and ways to support Utah FCCLA's mission."
              href="/resources/partner"
            />
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-outfit text-4xl md:text-5xl font-bold text-fccla-navy mb-6">What is FCCLA?</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Family, Career and Community Leaders of America (FCCLA) is a dynamic and effective national student organization that helps young people become leaders and address important personal, family, work, and societal issues through Family and Consumer Sciences education.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Utah FCCLA has been empowering students across the state for decades, providing opportunities for personal growth, career development, and community service.
              </p>
              <Link href="/about" className="inline-block bg-fccla-red text-white px-8 py-3 rounded-xl font-bold hover:bg-fccla-red-dark transition-all">
                Learn More About Us →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard number="1,500+" label="Active Members" />
              <StatCard number="50+" label="Chapters Statewide" />
              <StatCard number="5" label="Regional Districts" />
              <StatCard number="200K+" label="National Members" />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Thank You */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-fccla-red font-bold uppercase tracking-widest text-sm mb-4">A Special Thank You</p>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-fccla-navy mb-6">Our Sponsors</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Utah FCCLA is made possible by the generous support of our sponsors. Their investment in our programs directly impacts over 1,500 student leaders across the state.
          </p>
          {/* Sponsor logos / placeholder */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl py-16 px-8 mb-10">
            <p className="text-gray-400 font-semibold text-lg">Sponsor logos coming soon</p>
            <p className="text-gray-400 text-sm mt-2">We are grateful for every organization that makes our mission possible</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/sponsors"
              className="inline-block bg-fccla-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-fccla-navy-light transition-all"
            >
              View All Sponsors →
            </Link>
            <Link
              href="/resources/partner"
              className="inline-block border-2 border-fccla-navy text-fccla-navy px-8 py-3 rounded-xl font-bold hover:bg-fccla-navy hover:text-white transition-all"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* State Officers Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-fccla-navy mb-4">Meet Your State Officers</h2>
            <p className="text-gray-600 text-lg">Leading Utah FCCLA with passion and dedication</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <OfficerCard name="Kylee Bangerter" position="State President" school="Dixie High School" photo="/officer-photos/kylee.jpg" />
            <OfficerCard name="Rachel Ryu" position="1st Vice President" school="Timpview High School" photo="/officer-photos/rachel.jpg" />
            <OfficerCard name="Julianna Snow" position="2nd Vice President" school="Orem High School" photo="/officer-photos/julianna.jpg" />
            <OfficerCard name="Clara Pereira" position="3rd Vice President" school="Orem High School" photo="/officer-photos/clara.jpg" />
          </div>
          <div className="text-center">
            <Link href="/about/officers" className="inline-block bg-fccla-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-fccla-navy-light transition-all">
              Meet the Full Team →
            </Link>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}

function EventCard({ title, date, location, href }: { title: string, date: string, location: string, href: string }) {
  return (
    <Link href={href} className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-gray-100 hover:border-fccla-red group">
      <Calendar className="text-fccla-red mb-4" size={32} />
      <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-3 group-hover:text-fccla-red transition-colors">{title}</h3>
      <p className="text-gray-600 mb-2 font-semibold">{date}</p>
      <p className="text-gray-500">{location}</p>
    </Link>
  )
}

function NewsCard({ title, date, excerpt }: { title: string, date: string, excerpt: string }) {
  return (
    <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
      <Newspaper className="text-fccla-red mb-4" size={32} />
      <p className="text-white/70 text-sm mb-2">{date}</p>
      <h3 className="font-outfit text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/80">{excerpt}</p>
    </div>
  )
}

function ActionCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <Link href={href} className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-gray-100 hover:border-fccla-red group text-center">
      <div className="text-fccla-red mb-4 inline-block group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-3 group-hover:text-fccla-red transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl text-center border-2 border-fccla-red">
      <div className="font-outfit text-4xl font-extrabold text-fccla-red mb-2">{number}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  )
}

function OfficerCard({ name, position, school, photo }: { name: string, position: string, school: string, photo: string }) {
  return (
    <div className="text-center">
      <div className="relative w-full aspect-square rounded-2xl mb-4 overflow-hidden bg-gray-100">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-1">{name}</h3>
      <p className="text-fccla-red font-semibold mb-1">{position}</p>
      <p className="text-gray-600 text-sm">{school}</p>
    </div>
  )
}