import Link from 'next/link'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import PageTransition from '@/components/PageTransition'

export default function AboutPage() {
  const purposes = [
    "To provide opportunities for personal development and preparation for adult life",
    "To strengthen the function of the family as a basic unit of society",
    "To encourage democracy through cooperative action in the home and community",
    "To encourage individual and group involvement in helping achieve global cooperation and harmony",
    "To promote greater understanding between youth and adults",
    "To provide opportunities for making decisions and for assuming responsibilities",
    "To prepare for the multiple roles of men and women in today's society",
    "To promote Family and Consumer Sciences and related occupations"
  ]

  return (
    <PageTransition>
    <main>
      {/* Page Header */}
      <section className="relative text-white py-24 px-4 mt-20 overflow-hidden">
        <Image
          src="/header-images/about-fccla-header.jpeg"
          alt="About Utah FCCLA"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-fccla-navy/70" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">About Utah FCCLA</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">Building tomorrow's leaders through Family and Consumer Sciences education</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                To promote personal growth and leadership development through Family and Consumer Sciences education. Focusing on the multiple roles of family member, wage earner and community leader, members develop skills for life through character development, creative and critical thinking, interpersonal communication, practical knowledge, and career preparation.
              </p>

              <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-6">About FCCLA</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Family, Career and Community Leaders of America is a nonprofit national career and technical student organization for young men and women in Family and Consumer Sciences education in public and private school through grade 12.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Since 1945, FCCLA members have been making a difference in their families, careers, and communities by addressing important personal, work, and societal issues through Family and Consumer Sciences education.
              </p>
            </div>
            <div className="w-full h-96 lg:h-[500px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
              Mission Image: Students at Conference
            </div>
          </div>
        </div>
      </section>

      {/* Purposes Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-fccla-navy text-center mb-16">Our Purposes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {purposes.map((purpose, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border-l-4 border-fccla-red hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="font-outfit text-3xl font-extrabold text-fccla-red mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-gray-700 leading-relaxed">{purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-fccla-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white text-center mb-16">Utah FCCLA By The Numbers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <StatCard number="1,500+" label="Active Members" />
            <StatCard number="50+" label="School Chapters" />
            <StatCard number="5" label="Regions" />
            <StatCard number="200K+" label="National Members" />
          </div>
        </div>
      </section>

      {/* State Officers Section */}
      <section className="bg-fccla-red py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-5xl font-extrabold text-white text-center mb-6">Utah State Officers</h2>
          <p className="text-white/95 text-xl text-center max-w-3xl mx-auto mb-16">
            Meet the 2025-2026 State Executive Council leading Utah FCCLA with passion, dedication, and vision.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Kylee Bangerter', position: 'State President', photo: '/officer-photos/kylee.jpg' },
                { name: 'Rachel Ryu', position: '1st Vice President', photo: '/officer-photos/rachel.jpg' },
                { name: 'Julianna Snow', position: '2nd Vice President', photo: '/officer-photos/julianna.jpg' },
                { name: 'Clara Pereira', position: '3rd Vice President', photo: '/officer-photos/clara.jpg' },
              ].map((officer) => (
                <div key={officer.name} className="rounded-xl overflow-hidden border-2 border-white/30 hover:border-white/70 transition-all">
                  <div className="relative aspect-square bg-white/10">
                    <Image src={officer.photo} alt={officer.name} fill className="object-cover object-top" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <div className="px-3 py-2 bg-black/20">
                    <p className="font-outfit font-bold text-white text-sm leading-tight">{officer.name}</p>
                    <p className="text-white/75 text-xs">{officer.position}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-white">
              <p className="text-lg mb-6 leading-relaxed opacity-95">
                Our State Executive Council is composed of 12 dedicated student leaders from across Utah's five regions. These officers serve as the voice of Utah FCCLA members, plan statewide events, lead workshops, and represent our organization at the national level.
              </p>
              <p className="text-lg mb-8 leading-relaxed opacity-95">
                Each officer brings unique skills, experiences, and perspectives to create an inclusive and dynamic leadership team committed to empowering every member to reach their full potential.
              </p>
              <Link 
                href="/about/officers" 
                className="inline-block bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Meet the Full Team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Board & Staff Section */}
      <section className="bg-fccla-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-5xl font-extrabold text-white text-center mb-6">Board & Staff</h2>
          <p className="text-white/95 text-xl text-center max-w-3xl mx-auto mb-16">
            The adult leadership team guiding and supporting Utah FCCLA's mission across the state.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <p className="text-lg mb-6 leading-relaxed opacity-95">
                The Utah FCCLA Board of Directors and professional staff provide strategic guidance, mentorship, and operational support to ensure our organization thrives. This dedicated team of educators, industry professionals, and FCCLA alumni works behind the scenes to create opportunities for student growth and success.
              </p>
              <p className="text-lg mb-8 leading-relaxed opacity-95">
                From securing funding and partnerships to developing programs and resources, our board and staff are committed to making Utah FCCLA the premier leadership organization for Family and Consumer Sciences students.
              </p>
              <Link 
                href="/about/board" 
                className="inline-block bg-fccla-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Learn More About Our Leadership →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/10 border-2 border-white/15 rounded-xl flex items-center justify-center text-white/60 text-sm hover:bg-white/20 hover:border-white/30 transition-all">
                  Board Member {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-5xl font-extrabold text-fccla-navy text-center mb-6">Get In Touch</h2>
          <p className="text-gray-600 text-xl text-center max-w-3xl mx-auto mb-16">
            Have questions about Utah FCCLA? We're here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ContactCard 
              icon={<Mail size={40} />}
              title="Email Us"
              description="Reach out to our state office for general inquiries, membership questions, or event information."
            />
            <ContactCard 
              icon={<MapPin size={40} />}
              title="Office Location"
              description="Utah State Board of Education Career & Technical Education"
            />
            <ContactCard 
              icon={<MessageCircle size={40} />}
              title="Connect With Us"
              description="Follow us on social media for the latest updates, event photos, and member spotlights."
            />
          </div>

          <div className="text-center">
            <Link 
              href="/about/contact" 
              className="inline-block bg-fccla-red text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-fccla-red-dark transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Visit Our Contact Page →
            </Link>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="text-center">
      <div className="font-outfit text-6xl font-extrabold text-fccla-red mb-3">{number}</div>
      <div className="text-white/90 text-lg">{label}</div>
    </div>
  )
}

function ContactCard({ icon, title, description }: any) {
  return (
    <div className="text-center p-10 bg-gray-50 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all">
      <div className="w-20 h-20 bg-fccla-red text-white rounded-full mx-auto mb-6 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
