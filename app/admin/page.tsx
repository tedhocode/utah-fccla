import { createAdminClient } from '@/lib/supabase/server'
import { Users, Calendar, FileText, Newspaper, Award, Settings } from 'lucide-react'
import Link from 'next/link'

async function getStats() {
  const supabase = createAdminClient()
  const [officers, events, docs, newsletters, scholarships] = await Promise.all([
    supabase.from('state_officers').select('id', { count: 'exact', head: true }),
    supabase.from('events').select('id', { count: 'exact', head: true }),
    supabase.from('documents').select('id', { count: 'exact', head: true }),
    supabase.from('newsletters').select('id', { count: 'exact', head: true }),
    supabase.from('scholarships').select('id', { count: 'exact', head: true }),
  ])
  return {
    officers: officers.count ?? 0,
    events: events.count ?? 0,
    docs: docs.count ?? 0,
    newsletters: newsletters.count ?? 0,
    scholarships: scholarships.count ?? 0,
  }
}

const quickLinks = [
  { label: 'Edit State Officers', href: '/admin/about', icon: Users, description: 'Update officer names, schools, photos' },
  { label: 'Edit Events', href: '/admin/events', icon: Calendar, description: 'Update dates, locations, registration links' },
  { label: 'Manage Documents', href: '/admin/resources', icon: FileText, description: 'Add or update downloads and PDFs' },
  { label: 'Add Newsletter', href: '/admin/members', icon: Newspaper, description: 'Publish a new newsletter issue' },
  { label: 'Award Deadlines', href: '/admin/resources', icon: Award, description: 'Update application deadlines' },
  { label: 'Site Settings', href: '/admin/settings', icon: Settings, description: 'Contact email, PayPal link, social media' },
]

export default async function AdminDashboard() {
  let stats = { officers: 0, events: 0, docs: 0, newsletters: 0, scholarships: 0 }
  try {
    stats = await getStats()
  } catch {
    // DB not connected yet — show zeros
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white font-outfit">Dashboard</h1>
        <p className="text-gray-400 mt-1">Welcome back, Troy. Here's what you can manage.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {[
          { label: 'State Officers', value: stats.officers, color: 'text-fccla-red' },
          { label: 'Events', value: stats.events, color: 'text-blue-400' },
          { label: 'Documents', value: stats.docs, color: 'text-green-400' },
          { label: 'Newsletters', value: stats.newsletters, color: 'text-purple-400' },
          { label: 'Scholarships', value: stats.scholarships, color: 'text-yellow-400' },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <p className={`text-3xl font-bold font-outfit ${stat.color}`}>{stat.value}</p>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-fccla-red hover:bg-gray-800 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-fccla-red/10 text-fccla-red rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-fccla-red group-hover:text-white transition-all">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{link.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{link.description}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Setup note if DB not connected */}
      {stats.officers === 0 && (
        <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5">
          <p className="text-yellow-400 font-semibold text-sm mb-1">⚠️ Database Setup Required</p>
          <p className="text-gray-400 text-sm">
            Run <code className="bg-gray-800 px-1.5 py-0.5 rounded text-yellow-300">supabase-schema.sql</code> in your Supabase SQL editor to create all tables and seed data. Then confirm your API keys in <code className="bg-gray-800 px-1.5 py-0.5 rounded text-yellow-300">.env.local</code>.
          </p>
        </div>
      )}
    </div>
  )
}
