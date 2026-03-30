'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard, Users, Calendar, Trophy, BookOpen,
  GraduationCap, FolderOpen, Settings, LogOut, ChevronLeft,
  Menu, Award, Flag
} from 'lucide-react'

const navSections = [
  {
    label: 'Overview',
    items: [
      { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    ],
  },
  {
    label: 'Content',
    items: [
      { label: 'About', href: '/admin/about', icon: Flag },
      { label: 'Events', href: '/admin/events', icon: Calendar },
      { label: 'Compete', href: '/admin/compete', icon: Trophy },
      { label: 'For Members', href: '/admin/members', icon: BookOpen },
      { label: 'For Advisers', href: '/admin/advisers', icon: GraduationCap },
      { label: 'Resources', href: '/admin/resources', icon: FolderOpen },
    ],
  },
  {
    label: 'System',
    items: [
      { label: 'Settings', href: '/admin/settings', icon: Settings },
    ],
  },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  // Don't wrap the login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Sidebar */}
      <aside
        className={`flex-shrink-0 flex flex-col bg-gray-900 border-r border-gray-800 transition-all duration-200 ${
          collapsed ? 'w-16' : 'w-60'
        }`}
      >
        {/* Logo */}
        <div className={`flex items-center gap-3 px-4 h-16 border-b border-gray-800 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 bg-fccla-red rounded-lg flex items-center justify-center flex-shrink-0">
            <Award size={16} className="text-white" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-white font-bold text-sm font-outfit truncate">Utah FCCLA</p>
              <p className="text-gray-500 text-xs">Admin Panel</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navSections.map((section) => (
            <div key={section.label} className="mb-4">
              {!collapsed && (
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest px-4 mb-1">
                  {section.label}
                </p>
              )}
              {section.items.map((item) => {
                const Icon = item.icon
                const active = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg transition-colors ${
                      active
                        ? 'bg-fccla-red text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    } ${collapsed ? 'justify-center' : ''}`}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon size={18} className="flex-shrink-0" />
                    {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
                  </Link>
                )
              })}
            </div>
          ))}
        </nav>

        {/* Bottom controls */}
        <div className="border-t border-gray-800 p-2 space-y-1">
          <Link
            href="/"
            target="_blank"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-sm ${collapsed ? 'justify-center' : ''}`}
            title={collapsed ? 'View Site' : undefined}
          >
            <ChevronLeft size={16} />
            {!collapsed && 'View Site'}
          </Link>
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-gray-800 transition-colors text-sm ${collapsed ? 'justify-center' : ''}`}
            title={collapsed ? 'Log Out' : undefined}
          >
            <LogOut size={16} />
            {!collapsed && 'Log Out'}
          </button>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:text-white hover:bg-gray-800 transition-colors text-sm ${collapsed ? 'justify-center' : ''}`}
          >
            <Menu size={16} />
            {!collapsed && 'Collapse'}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 overflow-auto">
        {children}
      </main>
    </div>
  )
}
