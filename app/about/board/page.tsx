import Image from 'next/image'
import { createAdminClient } from '@/lib/supabase/server'
import PageTransition from '@/components/PageTransition'

const PLACEHOLDER = '/officer-photos/beach-1774315295827.jpeg'

type Member = {
  id: string
  name: string
  title: string
  org?: string
  email?: string
  photo_url?: string
  type: string
  display_order?: number
}

async function getMembers(): Promise<{ board: Member[]; staff: Member[] }> {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('board_members')
      .select('*')
      .order('display_order', { ascending: true })
    if (error) throw error
    const all: Member[] = data ?? []
    return {
      board: all.filter(m => m.type === 'board'),
      staff: all.filter(m => m.type === 'staff'),
    }
  } catch {
    return { board: [], staff: [] }
  }
}

function PersonCard({ member }: { member: Member }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 flex flex-col">
      <div className="relative h-56 bg-gray-100 flex-shrink-0">
        <Image
          src={member.photo_url || PLACEHOLDER}
          alt={member.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-5 flex-1">
        <h3 className="font-outfit text-lg font-bold text-fccla-navy leading-tight mb-1">{member.name}</h3>
        <p className="text-fccla-red font-semibold text-sm mb-1">{member.title}</p>
        {member.org && <p className="text-gray-500 text-sm mb-1">{member.org}</p>}
        {member.email && (
          <a href={`mailto:${member.email}`} className="text-gray-400 text-xs hover:text-fccla-red transition-colors">
            {member.email}
          </a>
        )}
      </div>
    </div>
  )
}

export default async function BoardStaffPage() {
  const { board, staff } = await getMembers()

  return (
    <PageTransition>
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-fccla-navy to-slate-700 text-white mt-20 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-outfit text-5xl md:text-6xl font-extrabold mb-4">Board &amp; Staff</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Meet the dedicated adults who support and guide Utah FCCLA statewide.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-outfit text-4xl font-extrabold text-fccla-navy mb-2">Board of Directors</h2>
            <p className="text-gray-600 max-w-2xl">
              The Utah FCCLA State Board of Directors oversees the activities of the organization, made up of advisers, educators, and community representatives.
            </p>
          </div>
          {board.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {board.map(m => <PersonCard key={m.id} member={m} />)}
            </div>
          ) : (
            <p className="text-gray-400 italic">No board members added yet.</p>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200" />
      </div>

      {/* State Staff */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-outfit text-4xl font-extrabold text-fccla-navy mb-2">State Staff</h2>
            <p className="text-gray-600 max-w-2xl">
              Our state staff keep Utah FCCLA running day-to-day — from events and communications to technology and finances.
            </p>
          </div>
          {staff.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {staff.map(m => <PersonCard key={m.id} member={m} />)}
            </div>
          ) : (
            <p className="text-gray-400 italic">No staff members added yet.</p>
          )}
        </div>
      </section>
    </main>
    </PageTransition>
  )
}
