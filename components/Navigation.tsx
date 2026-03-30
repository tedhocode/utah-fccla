'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  {
    title: 'About',
    items: [
      { label: 'Mission & History', href: '/about' },
      { label: 'State Officers', href: '/about/officers' },
      { label: 'Board & Staff', href: '/about/board' },
      { label: 'State Theme & Goals', href: '/about/theme-goals' },
      { label: 'Region Map', href: '/about/regions' },
      { label: 'Sponsors', href: '/resources/sponsors' },
      { label: 'Contact Us', href: '/about/contact' },
    ],
  },
  {
    title: 'Events',
    items: [
      { label: 'Fall Leadership', href: '/events/fall-leadership' },
      { label: 'Region Conferences', href: '/events/region-conferences' },
      { label: 'State Leadership', href: '/events/state-conference' },
      { label: 'Nationals', href: '/events/nationals' },
      { label: 'Calendar', href: '/events/calendar' },
      { label: 'Conference Proceedings', href: '/events/proceedings' },
    ],
  },
  {
    title: 'Compete',
    items: [
      { label: 'STAR Events', href: '/compete/star-events' },
      { label: 'State Competitions', href: '/compete/state-competitions' },
      { label: 'Accommodations', href: '/compete/accommodations' },
    ],
  },
  {
    title: 'For Members',
    items: [
      { label: 'Getting Started', href: '/members/getting-started' },
      { label: 'National Programs', href: '/members/national-programs' },
      { label: 'Run for Office', href: '/members/run-for-office' },
      { label: 'Scholarships', href: '/members/scholarships' },
      { label: 'Newsletters', href: '/members/newsletters' },
    ],
  },
  {
    title: 'For Advisers',
    items: [
      { label: 'Adviser Hub', href: '/advisers' },
      { label: 'Affiliation & Portal', href: '/advisers/affiliation' },
      { label: 'Forms & Documents', href: '/advisers/forms' },
      { label: 'State Theme & Goals', href: '/about/theme-goals' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Downloads', href: '/resources/downloads' },
      { label: 'Awards & Recognition', href: '/resources/awards' },
      { label: 'CTE Career Clusters', href: '/resources/cte-clusters' },
      { label: 'Partner With Us', href: '/resources/partner' },
    ],
  },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleDropdownEnter = (title: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setActiveDropdown(title)
  }

  const handleDropdownLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/utah-fccla-logo.png" alt="Utah FCCLA" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((nav) => (
              <NavDropdown
                key={nav.title}
                title={nav.title}
                items={nav.items}
                isOpen={activeDropdown === nav.title}
                onMouseEnter={() => handleDropdownEnter(nav.title)}
                onMouseLeave={handleDropdownLeave}
              />
            ))}
            <Link
              href="/donate"
              className="bg-fccla-red text-white px-6 py-2.5 rounded-lg font-bold hover:bg-fccla-red-dark transition-all"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-fccla-navy"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            {navItems.map((nav) => (
              <MobileNavSection key={nav.title} title={nav.title} items={nav.items} />
            ))}
            <Link
              href="/donate"
              className="block bg-fccla-red text-white px-6 py-3 rounded-lg font-bold text-center"
            >
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavDropdown({
  title,
  items,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: {
  title: string
  items: { label: string; href: string }[]
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="flex items-center space-x-1 font-medium cursor-default">
        <Link
          href={items[0].href}
          className={`transition-colors duration-150 ${isOpen ? 'text-fccla-red' : 'text-fccla-navy hover:text-fccla-red'}`}
        >
          {title}
        </Link>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-fccla-red' : 'text-fccla-navy'}`}
        />
      </div>

      {/* Dropdown panel — always rendered so CSS transition works */}
      <div
        className={`absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl py-2 border border-gray-100 origin-top transition-all duration-150 ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-fccla-red transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

function MobileNavSection({
  title,
  items,
}: {
  title: string
  items: { label: string; href: string }[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-fccla-navy font-bold text-lg"
      >
        <span>{title}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 space-y-2 pl-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-fccla-red transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
