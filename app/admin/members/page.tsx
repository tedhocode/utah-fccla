'use client'

import { useState, useEffect } from 'react'
import {
  getNewsletters, upsertNewsletter, deleteNewsletter,
  getScholarships, upsertScholarship, deleteScholarship
} from '@/actions/admin/content'
import { Plus } from 'lucide-react'

type Newsletter = {
  id: string
  title: string
  issue_date: string
  drive_link: string
  is_featured?: boolean
}

type Scholarship = {
  id: string
  name: string
  description?: string
  amount?: string
  deadline?: string
  link?: string
  eligibility?: string
  is_active?: boolean
  display_order?: number
}

export default function AdminMembersPage() {
  const [activeTab, setActiveTab] = useState<'newsletters' | 'scholarships'>('newsletters')
  const [newsletters, setNewsletters] = useState<Newsletter[]>([])
  const [scholarships, setScholarships] = useState<Scholarship[]>([])
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
      const [nlData, schData] = await Promise.all([
        getNewsletters(),
        getScholarships()
      ])
      setNewsletters(nlData)
      setScholarships(schData)
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
        <h1 className="text-3xl font-bold text-white font-outfit">For Members</h1>
        <p className="text-gray-400 mt-1">Manage newsletters and scholarships</p>
      </div>

      {error && <div className="bg-red-900/30 border border-red-700 text-red-200 px-4 py-3 rounded-lg mb-6">{error}</div>}

      {/* Tab Switcher */}
      <div className="flex gap-1 bg-gray-900 border border-gray-800 rounded-xl p-1 mb-6 w-fit">
        {['newsletters', 'scholarships'].map(tab => (
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
            {tab === 'newsletters' && 'Newsletters'}
            {tab === 'scholarships' && 'Scholarships'}
          </button>
        ))}
      </div>

      {activeTab === 'newsletters' && (
        <NewslettersSection
          newsletters={newsletters}
          editingId={editingId}
          setEditingId={setEditingId}
          addingNew={addingNew}
          setAddingNew={setAddingNew}
          onRefresh={loadData}
        />
      )}

      {activeTab === 'scholarships' && (
        <ScholarshipsSection
          scholarships={scholarships}
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

function NewslettersSection({ newsletters, editingId, setEditingId, addingNew, setAddingNew, onRefresh }: any) {
  const [formData, setFormData] = useState<Partial<Newsletter>>({})
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!formData.title || !formData.issue_date || !formData.drive_link) {
      alert('Title, issue date, and Google Drive link are required')
      return
    }
    try {
      setSaving(true)
      await upsertNewsletter({
        id: editingId || undefined,
        title: formData.title,
        issue_date: formData.issue_date,
        drive_link: formData.drive_link,
        is_featured: formData.is_featured
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
    if (!confirm('Delete this newsletter?')) return
    try {
      await deleteNewsletter(id)
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete')
    }
  }

  return (
    <div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6">
        <table className="w-full">
          <thead className="border-b border-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Title</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Issue Date</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Drive Link</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Featured</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {newsletters.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-gray-500">
                  No newsletters yet.
                </td>
              </tr>
            ) : (
              newsletters.map((nl: any) => (
                <tr key={nl.id} className={editingId === nl.id ? 'bg-gray-800' : ''}>
                  <td className="px-4 py-3 text-sm text-gray-300">{nl.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{new Date(nl.issue_date).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-sm">
                    <a href={nl.drive_link} target="_blank" rel="noopener noreferrer" className="text-fccla-red hover:text-red-400 underline">
                      View
                    </a>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {nl.is_featured ? (
                      <span className="text-xs px-2 py-1 bg-yellow-900/30 text-yellow-300 rounded">Featured</span>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-gray-700/30 text-gray-400 rounded">Standard</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {editingId !== nl.id && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setFormData(nl)
                            setEditingId(nl.id)
                          }}
                          className="text-fccla-red hover:text-red-400 text-sm"
                        >
                          Edit
                        </button>
                        <button onClick={() => handleDelete(nl.id)} className="text-red-400 hover:text-red-300 text-sm">
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
        <NewsletterEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={() => setEditingId(null)}
          saving={saving}
        />
      )}

      {addingNew && (
        <NewsletterEditForm
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
            setFormData({ is_featured: false })
          }}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={16} /> Add Newsletter
        </button>
      )}
    </div>
  )
}

function NewsletterEditForm({ formData, setFormData, onSave, onCancel, saving }: any) {
  return (
    <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {formData.id ? 'Edit Newsletter' : 'Add Newsletter'}
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title || ''}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <input
          type="date"
          placeholder="Issue Date"
          value={formData.issue_date || ''}
          onChange={(e) => setFormData({ ...formData, issue_date: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
      </div>
      <input
        type="url"
        placeholder="Google Drive Link"
        value={formData.drive_link || ''}
        onChange={(e) => setFormData({ ...formData, drive_link: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4"
      />
      <label className="flex items-center gap-2 text-gray-300 mb-4">
        <input
          type="checkbox"
          checked={formData.is_featured || false}
          onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
          className="rounded"
        />
        Feature this newsletter
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

function ScholarshipsSection({ scholarships, editingId, setEditingId, addingNew, setAddingNew, onRefresh }: any) {
  const [formData, setFormData] = useState<Partial<Scholarship>>({})
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!formData.name) {
      alert('Scholarship name is required')
      return
    }
    try {
      setSaving(true)
      await upsertScholarship({
        id: editingId || undefined,
        name: formData.name,
        description: formData.description,
        amount: formData.amount,
        deadline: formData.deadline,
        link: formData.link,
        eligibility: formData.eligibility,
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
    if (!confirm('Delete this scholarship?')) return
    try {
      await deleteScholarship(id)
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete')
    }
  }

  return (
    <div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6">
        <table className="w-full">
          <thead className="border-b border-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Deadline</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Active</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {scholarships.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-gray-500">
                  No scholarships yet.
                </td>
              </tr>
            ) : (
              scholarships.map((sch: any) => (
                <tr key={sch.id} className={editingId === sch.id ? 'bg-gray-800' : ''}>
                  <td className="px-4 py-3 text-sm text-gray-300">{sch.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{sch.amount || '-'}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {sch.deadline ? new Date(sch.deadline).toLocaleDateString() : '-'}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {sch.is_active ? (
                      <span className="text-xs px-2 py-1 bg-green-900/30 text-green-300 rounded">Active</span>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-gray-700/30 text-gray-400 rounded">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {editingId !== sch.id && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setFormData(sch)
                            setEditingId(sch.id)
                          }}
                          className="text-fccla-red hover:text-red-400 text-sm"
                        >
                          Edit
                        </button>
                        <button onClick={() => handleDelete(sch.id)} className="text-red-400 hover:text-red-300 text-sm">
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
        <ScholarshipEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={() => setEditingId(null)}
          saving={saving}
        />
      )}

      {addingNew && (
        <ScholarshipEditForm
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
            setFormData({ is_active: true })
          }}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={16} /> Add Scholarship
        </button>
      )}
    </div>
  )
}

function ScholarshipEditForm({ formData, setFormData, onSave, onCancel, saving }: any) {
  return (
    <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {formData.id ? 'Edit Scholarship' : 'Add Scholarship'}
      </h3>
      <input
        type="text"
        placeholder="Scholarship Name"
        value={formData.name || ''}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4"
      />
      <textarea
        placeholder="Description"
        value={formData.description || ''}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4 h-20"
      />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Amount (e.g., $500)"
          value={formData.amount || ''}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <input
          type="date"
          placeholder="Deadline"
          value={formData.deadline || ''}
          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
      </div>
      <input
        type="url"
        placeholder="Link"
        value={formData.link || ''}
        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4"
      />
      <textarea
        placeholder="Eligibility Requirements"
        value={formData.eligibility || ''}
        onChange={(e) => setFormData({ ...formData, eligibility: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4 h-20"
      />
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
