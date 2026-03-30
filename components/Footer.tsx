import Link from 'next/link'
import { Instagram, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-fccla-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-outfit text-2xl font-extrabold text-fccla-red mb-4">
              UTAH FCCLA
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering tomorrow's leaders through Family and Consumer Sciences education.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-fccla-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-fccla-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-fccla-red transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-outfit text-lg font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <FooterLink href="/about">Mission & Vision</FooterLink>
              <FooterLink href="/about/officers">State Officers</FooterLink>
              <FooterLink href="/about/board">Board Members</FooterLink>
              <FooterLink href="/about/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-outfit text-lg font-bold mb-4">Events</h4>
            <ul className="space-y-2">
              <FooterLink href="/events/fall-leadership">Fall Leadership</FooterLink>
              <FooterLink href="/events/state-conference">State Conference</FooterLink>
              <FooterLink href="/events/nationals">Nationals</FooterLink>
              <FooterLink href="/events/calendar">Calendar</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-outfit text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="/compete/star-events">Competitive Events</FooterLink>
              <FooterLink href="/members/scholarships">Scholarships</FooterLink>
              <FooterLink href="/resources/downloads">Downloads</FooterLink>
              <FooterLink href="/resources/partner">Sponsors</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-sm">
          <p>© 2026 Utah FCCLA. All rights reserved.</p>
          <p>Nondiscrimination Policy</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/70 hover:text-white transition-colors text-sm">
        {children}
      </Link>
    </li>
  )
}
