import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-fccla-navy via-slate-800 to-fccla-navy flex items-center justify-center px-4 mt-20">
      <div className="text-center max-w-xl">

        {/* Big Icon */}
        <div className="relative mb-8 inline-block">
          <div className="w-40 h-40 rounded-full bg-white/10 flex items-center justify-center mx-auto">
            <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-7xl select-none">🔍</span>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -top-2 -right-2 bg-fccla-red text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
            404
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-outfit text-5xl font-extrabold text-white mb-4">
          Page Not Found
        </h1>

        {/* Friendly text */}
        <p className="text-white/75 text-lg leading-relaxed mb-3">
          Looks like this page is still under construction — or maybe it took a wrong turn on the way to nationals.
        </p>
        <p className="text-white/50 text-base mb-10">
          Don't worry, the rest of the site is ready to go!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-fccla-red text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            ← Go Home
          </Link>
          <Link
            href="/about/officers"
            className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
          >
            Meet the Officers
          </Link>
        </div>

        {/* Subtle FCCLA branding */}
        <p className="mt-16 text-white/30 text-sm">
          Utah FCCLA · Building Tomorrow's Leaders Today
        </p>
      </div>
    </main>
  )
}
