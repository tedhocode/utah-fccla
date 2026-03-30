'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChefHat, Scissors, Baby, Mic, Briefcase, Heart, Leaf, Building2, ExternalLink, Star, ArrowRight, X } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    id: 'culinary',
    name: 'Culinary Arts & Food Science',
    icon: ChefHat,
    color: 'from-fccla-red to-red-700',
    description: 'Compete in hands-on culinary challenges, food science research, and nutrition projects that showcase your skills in the kitchen and lab.',
    events: [
      { name: 'Culinary Arts', type: 'Individual/Team', description: 'Demonstrate culinary skills by preparing dishes in a timed competition setting using provided ingredients and kitchen facilities.' },
      { name: 'Baking & Pastry', type: 'Individual/Team', description: 'Showcase baking and pastry arts skills by preparing baked goods, desserts, and pastries under competition conditions.' },
      { name: 'Food Innovations', type: 'Individual/Team', description: 'Create and present an innovative food product that addresses a consumer need, demonstrating knowledge of food science and product development.' },
      { name: 'Food Science', type: 'Individual/Team', description: 'Apply scientific principles to research a food-related problem or question and present findings through display and oral presentation.' },
      { name: 'Food Service Management', type: 'Team', description: 'Plan, cost, and present a complete food service operation including menu development, marketing, and financial projections.' },
      { name: 'Nutrition & Wellness', type: 'Individual/Team', description: 'Research and present a nutrition or wellness topic, demonstrating understanding of how food choices impact health and wellbeing.' },
    ]
  },
  {
    id: 'fashion',
    name: 'Fashion & Textiles',
    icon: Scissors,
    color: 'from-fccla-navy to-fccla-navy-light',
    description: "Express your creativity through garment construction, original design, and sustainable fashion in FCCLA's fashion and textiles events.",
    events: [
      { name: 'Fashion Construction', type: 'Individual', description: 'Construct a garment or textile project demonstrating sewing skills, knowledge of textiles, and attention to quality craftsmanship.' },
      { name: 'Fashion Design', type: 'Individual/Team', description: 'Design an original fashion collection and present design concepts, illustrations, and textile selections to a panel of judges.' },
      { name: 'Fashion Show', type: 'Chapter', description: 'Organize and produce a chapter fashion show with a theme, original garments, commentary, and stage production elements.' },
      { name: 'Recycle & Redesign', type: 'Individual/Team', description: 'Transform recycled or repurposed materials into a wearable garment or textile item, emphasizing sustainability and creativity.' },
    ]
  },
  {
    id: 'childhood',
    name: 'Early Childhood & Human Development',
    icon: Baby,
    color: 'from-fccla-red to-red-700',
    description: 'Demonstrate your knowledge of child development and early education through hands-on activities and research presentations.',
    events: [
      { name: 'Children & Their Families', type: 'Individual/Team', description: 'Research and present on a topic related to child development, family dynamics, or parenting, demonstrating knowledge of human development principles.' },
      { name: 'Early Childhood Education', type: 'Individual/Team', description: 'Plan and implement an educational activity for young children, demonstrating understanding of child development and age-appropriate learning.' },
      { name: 'Focus on Children', type: 'Individual/Team', description: "Develop and present a project that positively impacts children's lives, addressing a need or issue affecting children in your community." },
    ]
  },
  {
    id: 'leadership',
    name: 'Leadership & Communications',
    icon: Mic,
    color: 'from-fccla-navy to-fccla-navy-light',
    description: 'Build and demonstrate your communication, leadership, and interpersonal skills through speaking, role-play, and leadership challenges.',
    events: [
      { name: 'Human Relations', type: 'Individual/Team', description: 'Demonstrate conflict resolution and communication skills through a role-play scenario addressing a human relations problem in a school or community setting.' },
      { name: 'Illustrated Talk', type: 'Individual', description: 'Deliver a prepared speech on a Family and Consumer Sciences topic using visual aids to enhance understanding and engagement.' },
      { name: 'Interpersonal Communications', type: 'Individual/Team', description: 'Demonstrate effective communication skills through a role-play scenario requiring active listening, empathy, and problem-solving.' },
      { name: 'Leadership', type: 'Individual/Team', description: 'Address a complex leadership scenario by developing and presenting a plan of action that demonstrates strong leadership principles and decision-making.' },
      { name: 'Parliamentary Procedure', type: 'Chapter Team', description: "Conduct a formal meeting using parliamentary procedure, demonstrating knowledge of Robert's Rules of Order in a competitive team format." },
    ]
  },
  {
    id: 'business',
    name: 'Business & Entrepreneurship',
    icon: Briefcase,
    color: 'from-fccla-red to-red-700',
    description: 'Launch your entrepreneurial journey with business planning, financial literacy, career preparation, and technology innovation events.',
    events: [
      { name: 'Applied Technology', type: 'Individual/Team', description: 'Develop and present a technological solution to a problem, demonstrating skills in research, design, and technology application.' },
      { name: 'Entrepreneurship', type: 'Individual/Team', description: 'Develop a comprehensive business plan for an original business idea and present it to a panel of judges as if pitching to investors.' },
      { name: 'Financial Literacy', type: 'Individual/Team', description: 'Demonstrate understanding of personal finance concepts by developing and presenting a financial plan addressing a real-life scenario.' },
      { name: 'Job Interview', type: 'Individual', description: 'Prepare a professional résumé and portfolio, then complete a mock job interview demonstrating career readiness and professional communication skills.' },
      { name: 'Life Event Planning', type: 'Individual/Team', description: 'Plan a major life event (such as a wedding or graduation) within a set budget, presenting detailed logistics, costs, and creative elements.' },
    ]
  },
  {
    id: 'community',
    name: 'Community & Chapter Service',
    icon: Heart,
    color: 'from-fccla-navy to-fccla-navy-light',
    description: "Showcase your chapter's impact through service projects, community involvement, and year-in-review presentations.",
    events: [
      { name: 'Chapter Service Project Display', type: 'Chapter', description: "Create a visual display showcasing your chapter's service project, its planning process, implementation, and community impact." },
      { name: 'Chapter Service Project Video', type: 'Chapter', description: "Produce a video documenting your chapter's service project, telling your story and demonstrating the positive change you've made." },
      { name: 'My Community', type: 'Chapter', description: 'Develop and implement a chapter project that addresses a specific need in your community, documenting the process and measurable outcomes.' },
      { name: 'Chapter in Review Display', type: 'Chapter', description: "Present a visual display summarizing your chapter's activities, accomplishments, membership, and community involvement for the year." },
      { name: 'Chapter in Review Portfolio', type: 'Chapter', description: "Compile a comprehensive portfolio documenting your chapter's programs, events, growth, and achievements throughout the year." },
    ]
  },
  {
    id: 'environment',
    name: 'Environment & Sustainability',
    icon: Leaf,
    color: 'from-fccla-red to-red-700',
    description: 'Take action on environmental issues and explore careers in sustainability through research-based projects and awareness campaigns.',
    events: [
      { name: 'Environmental Ambassador', type: 'Individual/Team', description: 'Develop and implement an environmental awareness or action project, demonstrating knowledge of sustainability issues and community engagement strategies.' },
      { name: 'Careers Investigation', type: 'Individual/Team', description: 'Research a career pathway in Family and Consumer Sciences, presenting findings through a display or portfolio with personal career planning components.' },
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Interior Design',
    icon: Building2,
    color: 'from-fccla-navy to-fccla-navy-light',
    description: "Design beautiful spaces and plan unforgettable experiences in FCCLA's hospitality, tourism, and interior design events.",
    events: [
      { name: 'Hospitality, Tourism & Recreation', type: 'Individual/Team', description: 'Plan a complete hospitality experience such as a hotel event, tour package, or recreational program, including logistics, marketing, and financial planning.' },
      { name: 'Interior Design', type: 'Individual/Team', description: 'Design a functional and aesthetically pleasing interior space using principles of design, presenting floor plans, material selections, and a design rationale.' },
    ]
  },
]

type EventModal = {
  name: string
  type: string
  description: string
  categoryName: string
  categoryColor: string
}

export default function STAREventsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [modalEvent, setModalEvent] = useState<EventModal | null>(null)

  const closeModal = useCallback(() => setModalEvent(null), [])

  useEffect(() => {
    if (!modalEvent) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [modalEvent, closeModal])

  useEffect(() => {
    document.body.style.overflow = modalEvent ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalEvent])

  const Icon = selectedCategory.icon

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-fccla-navy-light text-white py-24 px-4 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <Star size={64} className="mx-auto mb-6" />
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-6">STAR Events</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Students Taking Action with Recognition — FCCLA's premier competitive events program
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            STAR Events are competitive events in which members are <strong className="text-fccla-red">recognized for proficiency and achievement</strong> in areas taught in Family and Consumer Sciences and related occupations programs. Members compete at region, state, and national levels — earning recognition for real-world skills.
          </p>
        </div>
      </section>

      {/* Split View */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">

            {/* LEFT SIDEBAR - Category List */}
            <div className="lg:col-span-4 space-y-3">
              <h2 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">Event Categories</h2>
              {categories.map((category) => {
                const CatIcon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      selectedCategory.id === category.id
                        ? 'border-fccla-red bg-fccla-red text-white shadow-lg'
                        : 'border-gray-200 bg-white hover:border-fccla-red'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <CatIcon size={28} className={selectedCategory.id === category.id ? 'text-white' : 'text-fccla-red'} />
                      <div className="flex-1">
                        <h3 className={`font-outfit text-base font-bold leading-tight ${
                          selectedCategory.id === category.id ? 'text-white' : 'text-fccla-navy'
                        }`}>
                          {category.name}
                        </h3>
                        <p className={`text-sm mt-1 ${
                          selectedCategory.id === category.id ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {category.events.length} event{category.events.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                      {selectedCategory.id === category.id && (
                        <ArrowRight size={20} className="text-white flex-shrink-0" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* RIGHT PANEL - Category Details */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
                {/* Category Header */}
                <div className={`bg-gradient-to-br ${selectedCategory.color} text-white p-10`}>
                  <Icon size={64} className="mb-6" />
                  <h2 className="font-outfit text-4xl font-bold mb-4">{selectedCategory.name}</h2>
                  <p className="text-white/90 text-lg leading-relaxed">{selectedCategory.description}</p>
                </div>

                {/* Events List */}
                <div className="p-10">
                  <h3 className="font-outfit text-2xl font-bold text-fccla-navy mb-6">
                    Events in this Category
                  </h3>
                  <div className="space-y-4">
                    {selectedCategory.events.map((event, index) => (
                      <button
                        key={index}
                        onClick={() => setModalEvent({
                          name: event.name,
                          type: event.type,
                          description: event.description,
                          categoryName: selectedCategory.name,
                          categoryColor: selectedCategory.color,
                        })}
                        className="w-full text-left p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-fccla-red hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h4 className="font-outfit text-xl font-bold text-fccla-navy group-hover:text-fccla-red transition-colors">{event.name}</h4>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                            event.type.includes('Chapter')
                              ? 'bg-fccla-navy/10 text-fccla-navy'
                              : event.type === 'Individual'
                              ? 'bg-fccla-red/10 text-fccla-red'
                              : 'bg-gray-200 text-gray-700'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed line-clamp-2">{event.description}</p>
                        <p className="text-fccla-red text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          Click to learn more →
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">How STAR Events Work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Choose Your Event', desc: 'Select a STAR Event that aligns with your FCS coursework, skills, and interests. You can enter multiple events!' },
              { step: 2, title: 'Prepare Your Entry', desc: 'Study the official event guidelines, complete required components, and practice your presentation with your adviser.' },
              { step: 3, title: 'Compete at Region', desc: 'Compete at your Region Conference. Top placers advance to State Leadership Conference in March.' },
              { step: 4, title: 'Advance to Nationals', desc: 'State gold medalists may qualify to represent Utah at the National Leadership Conference in Washington D.C.' },
            ].map((item) => (
              <div key={item.step} className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-fccla-red transition-all relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-fccla-red text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-outfit text-xl font-bold text-fccla-navy mb-3 mt-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-outfit text-4xl font-bold text-fccla-navy mb-12 text-center">Good to Know</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Performance vs. Submission',
                desc: 'Some STAR Events are performance-based (you present live) while others require advance submission of materials. Check your event guidelines carefully.',
              },
              {
                title: 'Eligibility & Levels',
                desc: 'Events are open to Junior (grades 6–9) and Senior (grades 9–12) members. Some events require active chapter membership and FCS coursework.',
              },
              {
                title: 'Official Guidelines',
                desc: "Always use the current year's official event guidelines from National FCCLA. Guidelines are updated annually and contain scoring rubrics, requirements, and tips.",
              },
            ].map((fact, i) => (
              <div key={i} className="bg-fccla-navy text-white p-8 rounded-2xl">
                <div className="w-12 h-12 bg-fccla-red rounded-xl flex items-center justify-center mb-4">
                  <Star size={24} />
                </div>
                <h3 className="font-outfit text-xl font-bold mb-3">{fact.title}</h3>
                <p className="text-white/85 leading-relaxed">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fccla-red py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-outfit text-4xl font-bold text-white mb-6">Ready to Compete?</h2>
          <p className="text-white/90 text-lg mb-8">
            Download the official STAR Events guidelines and start preparing your entry today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fcclainc.org/compete/star-events"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-fccla-red px-10 py-4 rounded-xl font-bold text-lg hover:bg-fccla-navy hover:text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Official Guidelines <ExternalLink size={20} />
            </a>
            <Link
              href="/compete/state-competitions"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-fccla-red transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Utah State Competitions →
            </Link>
          </div>
        </div>
      </section>
      {/* Event Detail Modal */}
      {modalEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Header */}
            <div className={`bg-gradient-to-br ${modalEvent.categoryColor} text-white p-8`}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
                aria-label="Close"
              >
                <X size={20} className="text-white" />
              </button>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-2">{modalEvent.categoryName}</p>
              <h2 className="font-outfit text-3xl font-extrabold leading-tight mb-3">{modalEvent.name}</h2>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white`}>
                {modalEvent.type}
              </span>
            </div>

            {/* Body */}
            <div className="p-8">
              <h3 className="font-outfit text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">About this Event</h3>
              <p className="text-gray-700 leading-relaxed mb-8">{modalEvent.description}</p>

              <a
                href="https://fcclainc.org/compete/star-events"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-fccla-red text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all"
              >
                View Event on National FCCLA
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
