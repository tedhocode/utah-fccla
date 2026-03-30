'use client'

import { useState, useEffect } from 'react'
import {
  getDocuments, upsertDocument, deleteDocument,
  getSponsors, upsertSponsor, deleteSponsor,
  getAwardDeadlines, upsertAwardDeadline
} from '@/actions/admin/content'
import { Plus } from 'lucide-react'

type Document = {
  id: string
  name: string
  description?: string
  file_url: string
  category: string
  is_visible?: boolean
  is_external?: boolean
  display_order?: number
}

type Sponsor = {
  id: string
  name: string
  logo_url?: string
  website?: string
  tier: string
  is_active?: boolean
  display_order?: number
}

type AwardDeadline = {
  id: string
  award_key: string
  award_name: string
  description?: string
  deadline?: string
  link?: string
  link_label?: string
  display_order?: number
}

const DOCUMENT_CATEGORIES = [
  'general',
  'star_events',
  'culinary',
  'competition',
  'adviser'
]

export default function AdminResourcesPage() {
  const [activeTab, setActiveTab] = useState<'downloads' | 'sponsors' | 'awards'>('downloads')
  const [documents, setDocuments] = useState<Document[]>([])
  const [sponsors, setSponsors] = useState<Sponsor[]>([])
  const [awards, setAwards] = useState<AwardDeadline[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [addingNew, setAddingNew] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoading(true)
      const [docsData, sponsorsData, awardsData] = await Promise.all([
        getDocuments(),
        getSponsors(),
        getAwardDeadlines()
      ])
      setDocuments(docsData)
      setSponsors(sponsorsData)
      setAwards(awardsData)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div className="p-8 text-white">Loading...</div>

  return (
    <div className="p-8 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white font-outfit">Resources</h1>
        <p className="text-gray-400 mt-1">Manage downloads, sponsors, and award deadlines</p>
      </div>

      {error && <div className="bg-red-900/30 border border-red-700 text-red-200 px-4 py-3 rounded-lg mb-6">{error}</div>}

      {/* Tab Switcher */}
      <div className="flex gap-1 bg-gray-900 border border-gray-800 rounded-xl p-1 mb-6 w-fit">
        {['downloads', 'sponsors', 'awards'].map(tab => (
          <button key={tab}
            onClick={() => {
              setActiveTab(tab as typeof activeTab)
              setEditingId(null)
              setAddingNew(false)
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab ? 'bg-fccla-red text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab === 'downloads' && 'Downloads'}
            {tab === 'sponsors' && 'Sponsors'}
            {tab === 'awards' && 'Award Deadlines'}
          </button>
        ))}
      </div>

      {activeTab === 'downloads' && (
        <DownloadsSection
          documents={documents}
          editingId={editingId}
          setEditingId={setEditingId}
          addingNew={addingNew}
          setAddingNew={setAddingNew}
          onRefresh={loadData}
        />
      )}

      {activeTab === 'sponsors' && (
        <SponsorsSection
          sponsors={sponsors}
          editingId={editingId}
          setEditingId={setEditingId}
          addingNew={addingNew}
          setAddingNew={setAddingNew}
          onRefresh={loadData}
        />
      )}

      {activeTab === 'awards' && (
        <AwardsSection
          awards={awards}
          editingId={editingId}
          setEditingId={setEditingId}
          addingNew={addingNew}
          setAddingNew={setAddingNew}
          onRefresh={loadData}
        />
      )}
    </div>
  )
}

function DownloadsSection({ documents, editingId, setEditingId, addingNew, setAddingNew, onRefresh }: any) {
  const [formData, setFormData] = useState<Partial<Document>>({})
  const [saving, setSaving] = useState(false)
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  const filtered = categoryFilter === 'all'
    ? documents
    : documents.filter((doc: Document) => doc.category === categoryFilter)

  const handleSave = async () => {
    if (!formData.name || !formData.file_url) {
      alert('Name and file URL are required')
      return
    }
    try {
      setSaving(true)
      await upsertDocument({
        id: editingId || undefined,
        name: formData.name,
        description: formData.description,
        file_url: formData.file_url,
        category: formData.category || 'general',
        is_visible: formData.is_visible,
        is_external: formData.is_external,
        display_order: formData.display_order
      })
      setEditingId(null)
      setAddingNew(false)
      setFormData({})
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this document?')) return
    try {
      await deleteDocument(id)
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete')
    }
  }

  return (
    <div>
      <div className="mb-4">
        <label className="text-sm text-gray-400 block mb-2">Filter by Category</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        >
          <option value="all">All Categories</option>
          {DOCUMENT_CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6">
        <table className="w-full">
          <thead className="border-b border-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Category</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Visible</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">External</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-gray-500">
                  No documents yet.
                </td>
              </tr>
            ) : (
              filtered.map((doc: any) => (
                <tr key={doc.id} className={editingId === doc.id ? 'bg-gray-800' : ''}>
                  <td className="px-4 py-3 text-sm text-gray-300">{doc.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{doc.category}</td>
                  <td className="px-4 py-3 text-sm">
                    {doc.is_visible ? (
                      <span className="text-xs px-2 py-1 bg-green-900/30 text-green-300 rounded">Visible</span>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-gray-700/30 text-gray-400 rounded">Hidden</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {doc.is_external ? (
                      <span className="text-xs px-2 py-1 bg-blue-900/30 text-blue-300 rounded">External</span>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-gray-700/30 text-gray-400 rounded">Local</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {editingId !== doc.id && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setFormData(doc)
                            setEditingId(doc.id)
                          }}
                          className="text-fccla-red hover:text-red-400 text-sm"
                        >
                          Edit
                        </button>
                        <button onClick={() => handleDelete(doc.id)} className="text-red-400 hover:text-red-300 text-sm">
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {editingId && (
        <DocumentEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={() => setEditingId(null)}
          saving={saving}
        />
      )}

      {addingNew && (
        <DocumentEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={() => {
            setAddingNew(false)
            setFormData({})
          }}
          saving={saving}
        />
      )}

      {!addingNew && !editingId && (
        <button
          onClick={() => {
            setAddingNew(true)
            setFormData({ category: 'general', is_visible: true })
          }}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={16} /> Add Download
        </button>
      )}
    </div>
  )
}

function DocumentEditForm({ formData, setFormData, onSave, onCancel, saving }: any) {
  return (
    <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {formData.id ? 'Edit Document' : 'Add Download'}
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Document Name"
          value={formData.name || ''}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <select
          value={formData.category || 'general'}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        >
          {DOCUMENT_CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <textarea
        placeholder="Description"
        value={formData.description || ''}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4 h-20"
      />
      <input
        type="url"
        placeholder="File URL"
        value={formData.file_url || ''}
        onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4"
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <label className="flex items-center gap-2 text-gray-300">
          <input
            type="checkbox"
            checked={formData.is_visible || false}
            onChange={(e) => setFormData({ ...formData, is_visible: e.target.checked })}
            className="rounded"
          />
          Visible
        </label>
        <label className="flex items-center gap-2 text-gray-300">
          <input
            type="checkbox"
            checked={formData.is_external || false}
            onChange={(e) => setFormData({ ...formData, is_external: e.target.checked })}
            className="rounded"
          />
          External Link
        </label>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onSave}
          disabled={saving}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

function SponsorsSection({ sponsors, editingId, setEditingId, addingNew, setAddingNew, onRefresh }: any) {
  const [formData, setFormData] = useState<Partial<Sponsor>>({})
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!formData.name || !formData.tier) {
      alert('Name and tier are required')
      return
    }
    try {
      setSaving(true)
      await upsertSponsor({
        id: editingId || undefined,
        name: formData.name,
        logo_url: formData.logo_url,
        website: formData.website,
        tier: formData.tier,
        is_active: formData.is_active,
        display_order: formData.display_order
      })
      setEditingId(null)
      setAddingNew(false)
      setFormData({})
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this sponsor?')) return
    try {
      await upsertSponsor({} as any)
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete')
    }
  }

  const getTierBadgeColor = (tier: string) => {
    switch (tier) {
      case 'gold': return 'bg-yellow-900/30 text-yellow-300'
      case 'silver': return 'bg-gray-700/30 text-gray-300'
      case 'bronze': return 'bg-orange-900/30 text-orange-300'
      case 'partner': return 'bg-blue-900/30 text-blue-300'
      default: return 'bg-gray-700/30 text-gray-300'
    }
  }

  return (
    <div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6">
        <table className="w-full">
          <thead className="border-b border-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Tier</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Website</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Active</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {sponsors.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-gray-500">
                  No sponsors yet.
                </td>
              </tr>
            ) : (
              sponsors.map((sponsor: any) => (
                <tr key={sponsor.id} className={editingId === sponsor.id ? 'bg-gray-800' : ''}>
                  <td className="px-4 py-3 text-sm text-gray-300">{sponsor.name}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`text-xs px-2 py-1 rounded ${getTierBadgeColor(sponsor.tier)}`}>
                      {sponsor.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {sponsor.website ? (
                      <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="text-fccla-red hover:text-red-400 underline">
                        Link
                      </a>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {sponsor.is_active ? (
                      <span className="text-xs px-2 py-1 bg-green-900/30 text-green-300 rounded">Active</span>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-gray-700/30 text-gray-400 rounded">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {editingId !== sponsor.id && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setFormData(sponsor)
                            setEditingId(sponsor.id)
                          }}
                          className="text-fccla-red hover:text-red-400 text-sm"
                        >
                          Edit
                        </button>
                        <button onClick={() => handleDelete(sponsor.id)} className="text-red-400 hover:text-red-300 text-sm">
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {editingId && (
        <SponsorEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={() => setEditingId(null)}
          saving={saving}
        />
      )}

      {addingNew && (
        <SponsorEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={() => {
            setAddingNew(false)
            setFormData({})
          }}
          saving={saving}
        />
      )}

      {!addingNew && !editingId && (
        <button
          onClick={() => {
            setAddingNew(true)
            setFormData({ tier: 'partner', is_active: true })
          }}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={16} /> Add Sponsor
        </button>
      )}
    </div>
  )
}

function SponsorEditForm({ formData, setFormData, onSave, onCancel, saving }: any) {
  return (
    <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {formData.id ? 'Edit Sponsor' : 'Add Sponsor'}
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Sponsor Name"
          value={formData.name || ''}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <select
          value={formData.tier || 'partner'}
          onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        >
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="bronze">Bronze</option>
          <option value="partner">Partner</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="url"
          placeholder="Logo URL"
          value={formData.logo_url || ''}
          onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <input
          type="url"
          placeholder="Website"
          value={formData.website || ''}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
      </div>
      <label className="flex items-center gap-2 text-gray-300 mb-4">
        <input
          type="checkbox"
          checked={formData.is_active || false}
          onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
          className="rounded"
        />
        Active
      </label>
      <div className="flex gap-2">
        <button
          onClick={onSave}
          disabled={saving}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

function AwardsSection({ awards, editingId, setEditingId, addingNew, setAddingNew, onRefresh }: any) {
  const [formData, setFormData] = useState<Partial<AwardDeadline>>({})
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!formData.award_key || !formData.award_name) {
      alert('Award key and name are required')
      return
    }
    try {
      setSaving(true)
      await upsertAwardDeadline({
        id: editingId || undefined,
        award_key: formData.award_key,
        award_name: formData.award_name,
        description: formData.description,
        deadline: formData.deadline,
        link: formData.link,
        link_label: formData.link_label,
        display_order: formData.display_order
      })
      setEditingId(null)
      setAddingNew(false)
      setFormData({})
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6">
        <table className="w-full">
          <thead className="border-b border-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Award Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Deadline</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Link</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {awards.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-12 text-center text-gray-500">
                  No award deadlines yet.
                </td>
              </tr>
            ) : (
              awards.map((award: any) => (
                <tr key={award.id} className={editingId === award.id ? 'bg-gray-800' : ''}>
                  <td className="px-4 py-3 text-sm text-gray-300">{award.award_name}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {award.deadline ? new Date(award.deadline).toLocaleDateString() : '-'}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {award.link ? (
                      <a href={award.link} target="_blank" rel="noopener noreferrer" className="text-fccla-red hover:text-red-400 underline">
                        {award.link_label || 'Link'}
                      </a>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {editingId !== award.id && (
                      <button
                        onClick={() => {
                          setFormData(award)
                          setEditingId(award.id)
                        }}
                        className="text-fccla-red hover:text-red-400 text-sm"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {editingId && (
        <AwardEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={() => setEditingId(null)}
          saving={saving}
          isEditing={true}
        />
      )}

      {addingNew && (
        <AwardEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={() => {
            setAddingNew(false)
            setFormData({})
          }}
          saving={saving}
          isEditing={false}
        />
      )}

      {!addingNew && !editingId && (
        <button
          onClick={() => {
            setAddingNew(true)
            setFormData({})
          }}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={16} /> Add Award Deadline
        </button>
      )}
    </div>
  )
}

function AwardEditForm({ formData, setFormData, onSave, onCancel, saving, isEditing }: any) {
  return (
    <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {isEditing ? 'Edit Award Deadline' : 'Add Award Deadline'}
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {!isEditing && (
          <input
            type="text"
            placeholder="Award Key (e.g., ms_award)"
            value={formData.award_key || ''}
            onChange={(e) => setFormData({ ...formData, award_key: e.target.value })}
            className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
          />
        )}
        <input
          type="text"
          placeholder="Award Name"
          value={formData.award_name || ''}
          onChange={(e) => setFormData({ ...formData, award_name: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
      </div>
      <textarea
        placeholder="Description"
        value={formData.description || ''}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4 h-20"
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="date"
          placeholder="Deadline"
          value={formData.deadline || ''}
          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <input
          type="url"
          placeholder="Link URL"
          value={formData.link || ''}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
      </div>
      <input
        type="text"
        placeholder="Link Label (e.g., Apply Now)"
        value={formData.link_label || ''}
        onChange={(e) => setFormData({ ...formData, link_label: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4"
      />
      <div className="flex gap-2">
        <button
          onClick={onSave}
          disabled={saving}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save'}
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
