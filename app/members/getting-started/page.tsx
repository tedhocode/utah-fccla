import { Users, School, Award, Target, Heart, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'

export default function GettingStartedPage() {
  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-red to-red-700 text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">Getting Started with FCCLA</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Welcome to Utah FCCLA! Here's everything you need to know to begin your leadership journey.
          </p>
        </div>
      </section>

      {/* What is FCCLA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-6">What is FCCLA?</h2>
            <p className="text-gray-700 text-lg leading -relaxed mb-6 max-w-4xl mx-auto">
              Family, Career and Community Leaders of America (FCCLA) is a dynamic and effective national Career and Technical Student Organization that gives students opportunities to expand their leadership potential and develop skills for life through Family and Consumer Sciences education.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              FCCLA members are middle and high school students who are taking or have taken Family and Consumer Sciences courses. Members develop leadership skills, explore career opportunities, make new friends, and give back to their communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <Users size={48} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Leadership</h3>
              <p className="text-gray-600">Develop essential leadership skills through conferences, competitions, and chapter activities</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <School size={48} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Career Prep</h3>
              <p className="text-gray-600">Explore career pathways in education, hospitality, human services, and more</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <Heart size={48} className="mx-auto mb-4 text-fccla-red" />
              <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-2">Community</h3>
              <p className="text-gray-600">Make a positive impact through service projects and National Programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join - HORIZONTAL FLOW */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">How to Join</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                1
              </div>
              <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-4 mt-2">Talk to Your FACS Teacher</h3>
              <p className="text-gray-700 leading-relaxed">
                If your school has an FCCLA chapter, speak with your Family and Consumer Sciences teacher or chapter adviser. They'll provide you with membership forms and information about your chapter's activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                2
              </div>
              <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-4 mt-2">Pay Your Dues</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Complete your membership form and pay annual dues. National dues are $6 per member, plus any state and local chapter fees.
              </p>
              <p className="text-sm text-gray-600 italic">
                Note: Some schools may offer scholarships to help cover membership costs. Ask your adviser!
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                3
              </div>
              <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-4 mt-2">Get Involved!</h3>
              <p className="text-gray-700 leading-relaxed">
                Attend chapter meetings, participate in community service projects, compete in STAR Events, and attend conferences. The more you participate, the more you'll gain from FCCLA!
              </p>
            </div>
          </div>

          <div className="mt-12 bg-fccla-navy text-white p-8 rounded-2xl">
            <h3 className="font-outfit text-2xl font-bold mb-4">No FCCLA Chapter at Your School?</h3>
            <p className="text-white/90 mb-6">
              If your school doesn't have an FCCLA chapter yet, talk to your FACS teacher or Career and Technical Education coordinator about starting one! Contact the state office for resources and support to get your chapter started.
            </p>
            <Link 
              href="/about/contact"
              className="inline-block bg-fccla-red text-white px-8 py-3 rounded-xl font-bold hover:bg-fccla-red-dark transition-all"
            >
              Contact Us to Start a Chapter
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">What You'll Do as a Member</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <Award size={40} className="text-fccla-red mb-4" />
              <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-4">Compete in STAR Events</h3>
              <p className="text-gray-700 leading-relaxed">
                Showcase your skills in areas like culinary arts, early childhood education, hospitality, fashion design, and more. Win at state and advance to nationals!
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <Users size={40} className="text-fccla-red mb-4" />
              <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-4">Attend Conferences</h3>
              <p className="text-gray-700 leading-relaxed">
                Experience Fall Leadership, Regional Conferences, State Leadership Conference, and even National Leadership Conference in destinations across the country.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <Heart size={40} className="text-fccla-red mb-4" />
              <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-4">Give Back Through Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Participate in National Programs like Power of One, Community Service, and more. Make a real difference in your school and community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <Target size={40} className="text-fccla-red mb-4" />
              <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-4">Develop Leadership Skills</h3>
              <p className="text-gray-700 leading-relaxed">
                Run for chapter or state office, lead projects, organize events, and build skills that will benefit you in college, career, and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">
            Talk to your chapter adviser or check out the National FCCLA website for more information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://fcclainc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2"
            >
              Visit National FCCLA
              <ExternalLink size={20} />
            </a>
            <Link 
              href="/events/calendar"
              className="bg-fccla-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy-light transition-all inline-flex items-center justify-center gap-2"
            >
              View Upcoming Events
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}