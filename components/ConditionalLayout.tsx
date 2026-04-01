'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'
import Footer from './Footer'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith('/admin')

  return (
    <>
      {!isAdmin && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-center text-xs py-1.5 px-4 fixed top-0 left-0 right-0 z-50">
          <span className="font-semibold">Disclaimer:</span> This website is still being updated. Some information may not be current and some sections are not yet complete.
        </div>
      )}
      {!isAdmin && <Navigation />}
      {children}
      {!isAdmin && <Footer />}
    </>
  )
}
