import Image from 'next/image'

const PLACEHOLDER = '/officer-photos/beach-1774315295827.jpeg'

const boardMembers = [
  { name: 'Mary Lynn',               title: 'Board President · Region 2 Adviser',                          org: 'Jordan High School' },
  { name: 'Monique Nielsen',         title: 'Board Secretary · Region 1 Adviser',                          org: 'Weber High School' },
  { name: 'Candace Wilson',          title: 'Past Board President · Region 3 Adviser',                     org: 'Westlake High School' },
  { name: 'Aubrey Turnbow Frandsen', title: 'State Adviser',                                               org: '' },
  { name: 'Lola Evans',              title: 'State FCS Specialist',                                        org: '' },
  { name: 'Kathryn Spencer',         title: 'Region 5 Adviser',                                            org: 'Canyon View High School' },
  { name: 'Kelsey Chappell',         title: 'Region 4 Adviser',                                            org: 'Springville High School' },
  { name: 'Kylee Bangerter',         title: 'State Executive Council President',                           org: 'Dixie High School' },
  { name: 'Michelle Clouse',         title: 'Post-Secondary FCS Educator & Professional Org Representative', org: 'Utah State University' },
  { name: 'Lenora Reid',             title: 'Alumni & Associates Representative',                          org: 'Pleasant Grove Jr High' },
  { name: 'Katie Johnson',           title: 'Business Representative',                                     org: 'Bank of Utah' },
  { name: 'Becky Sagers',            title: 'Administrative Representative',                               org: '' },
]

const staffMembers = [
  { name: 'Troy Chilcott',    title: 'Webmaster & Technology Specialist', org: 'Salem Hills High School' },
  { name: 'Maggie Hartman',   title: 'Communications Manager',            org: '' },
  { name: 'Christine Heslop', title: 'State Officer Assistant',           org: '' },
  { name: 'Brendan Abbott',   title: 'Finance Administrator',             org: '' },
  { name: 'Daphne Stockdale', title: 'STAR Event Coordinator',            org: '' },
]

function PersonCard({ name, title, org }: { name: string; title: string; org: string }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 flex flex-col">
      <div className="relative h-56 bg-gray-100 flex-shrink-0">
        <Image
          src={PLACEHOLDER}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-outfit text-lg font-bold text-fccla-navy leading-tight mb-1">{name}</h3>
        <p className="text-fccla-red font-semibold text-sm mb-1">{title}</p>
        {org && <p className="text-gray-500 text-sm">{org}</p>}
      </div>
    </div>
  )
}

export default function BoardStaffPage() {
  return (
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {boardMembers.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {staffMembers.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
