'use client'

import { useState, useEffect } from 'react'
import { getOfficers, updateOfficer, addOfficer, deleteOfficer } from '@/actions/admin/officers'
import { getBoardMembers, upsertBoardMember, deleteBoardMember, getThemeGoals, upsertThemeGoals } from '@/actions/admin/content'
import { Trash2, Plus, X } from 'lucide-react'
import PhotoPicker from '@/components/admin/PhotoPicker'

type Officer = {
  id: string
  office_key: string
  office_title: string
  officer_name: string
  school?: string
  region?: string
  email?: string
  photo_url?: string
  bio?: string
  year?: string
  display_order?: number
}

type BoardMember = {
  id: string
  name: string
  title: string
  email?: string
  photo_url?: string
  type: string
  display_order?: number
}

type ThemeGoal = {
  id: string
  year: string
  theme_name: string
  description?: string
  goals?: Array<{ number: string; title: string; description: string }>
  pdf_link?: string
  is_active?: boolean
}

export default function AdminAboutPage() {
  const [activeTab, setActiveTab] = useState<'officers' | 'board' | 'theme'>('officers')
  const [officers, setOfficers] = useState<Officer[]>([])
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([])
  const [themeGoals, setThemeGoals] = useState<ThemeGoal[]>([])
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
      const [officersData, boardData, themeData] = await Promise.all([
        getOfficers(),
        getBoardMembers(),
        getThemeGoals()
      ])
      setOfficers(officersData)
      setBoardMembers(boardData)
      setThemeGoals(themeData)
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
        <h1 className="text-3xl font-bold text-white font-outfit">About</h1>
        <p className="text-gray-400 mt-1">Manage state officers, board members, and annual theme & goals</p>
      </div>

      {error && <div className="bg-red-900/30 border border-red-700 text-red-200 px-4 py-3 rounded-lg mb-6">{error}</div>}

      {/* Tab Switcher */}
      <div className="flex gap-1 bg-gray-900 border border-gray-800 rounded-xl p-1 mb-6 w-fit">
        {['officers', 'board', 'theme'].map(tab => (
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
            {tab === 'officers' && 'State Officers'}
            {tab === 'board' && 'Board & Staff'}
            {tab === 'theme' && 'Theme & Goals'}
          </button>
        ))}
      </div>

      {/* State Officers Tab */}
      {activeTab === 'officers' && (
        <StateOfficersSection
          officers={officers}
          editingId={editingId}
          setEditingId={setEditingId}
          addingNew={addingNew}
          setAddingNew={setAddingNew}
          onRefresh={loadData}
        />
      )}

      {/* Board & Staff Tab */}
      {activeTab === 'board' && (
        <BoardMembersSection
          members={boardMembers}
          editingId={editingId}
          setEditingId={setEditingId}
          addingNew={addingNew}
          setAddingNew={setAddingNew}
          onRefresh={loadData}
        />
      )}

      {/* Theme & Goals Tab */}
      {activeTab === 'theme' && (
        <ThemeGoalsSection
          themes={themeGoals}
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

function StateOfficersSection({ officers, editingId, setEditingId, addingNew, setAddingNew, onRefresh }: any) {
  const [formData, setFormData] = useState<Partial<Officer>>({})
  const [saving, setSaving] = useState(false)

  const handleEdit = (officer: Officer) => {
    setFormData(officer)
    setEditingId(officer.id)
  }

  const handleSave = async () => {
    if (!formData.id) return
    try {
      setSaving(true)
      const updates: Record<string, any> = {}
      if (formData.officer_name) updates.officer_name = formData.officer_name
      if (formData.school) updates.school = formData.school
      if (formData.region) updates.region = formData.region
      if (formData.email !== undefined) updates.email = formData.email
      if (formData.photo_url) updates.photo_url = formData.photo_url
      if (formData.bio !== undefined) updates.bio = formData.bio
      if (formData.year) updates.year = formData.year
      await updateOfficer(formData.id, updates)
      setEditingId(null)
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const handleAddNew = async () => {
    if (!formData.office_key || !formData.office_title || !formData.officer_name) {
      alert('Office key, title, and name are required')
      return
    }
    try {
      setSaving(true)
      await addOfficer({
        office_key: formData.office_key,
        office_title: formData.office_title,
        officer_name: formData.officer_name,
        school: formData.school,
        region: formData.region,
        email: formData.email,
        photo_url: formData.photo_url,
        bio: formData.bio,
        year: formData.year || new Date().getFullYear().toString()
      })
      setAddingNew(false)
      setFormData({})
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to add officer')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this officer?')) return
    try {
      await deleteOfficer(id)
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete')
    }
  }

  return (
    <div>
      <div className="mb-4 p-3 bg-blue-900/30 border border-blue-800 rounded-lg text-blue-200 text-sm">
        Office keys are permanent identifiers. Use snake_case like <code>vp_development</code>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6">
        <table className="w-full">
          <thead className="border-b border-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Photo</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Office Title</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Officer Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">School</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Region</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Year</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {officers.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-12 text-center text-gray-500">
                  No officers yet. Add one above.
                </td>
              </tr>
            ) : (
              officers.map((officer: any) => (
                <OfficerRow
                  key={officer.id}
                  officer={officer}
                  isEditing={editingId === officer.id}
                  formData={formData}
                  setFormData={setFormData}
                  onEdit={() => handleEdit(officer)}
                  onSave={handleSave}
                  onCancel={() => setEditingId(null)}
                  onDelete={() => handleDelete(officer.id)}
                  saving={saving}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {addingNew && (
        <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Add New Officer</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Office Key (e.g., president)"
              value={formData.office_key || ''}
              onChange={(e) => setFormData({ ...formData, office_key: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <input
              type="text"
              placeholder="Office Title (e.g., President)"
              value={formData.office_title || ''}
              onChange={(e) => setFormData({ ...formData, office_title: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <input
              type="text"
              placeholder="Officer Name"
              value={formData.officer_name || ''}
              onChange={(e) => setFormData({ ...formData, officer_name: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <input
              type="text"
              placeholder="School"
              value={formData.school || ''}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <input
              type="text"
              placeholder="Region"
              value={formData.region || ''}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <input
              type="email"
              placeholder="Email (e.g., president@utahfccla.org)"
              value={formData.email || ''}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <input
              type="text"
              placeholder="Year"
              value={formData.year || ''}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
          </div>
          <div className="mb-4">
            <PhotoPicker
              value={formData.photo_url || ''}
              onChange={(url) => setFormData({ ...formData, photo_url: url })}
              label="Photo"
            />
          </div>
          <textarea
            placeholder="Bio"
            value={formData.bio || ''}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4 h-24"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAddNew}
              disabled={saving}
              className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 disabled:opacity-50"
            >
              {saving ? 'Adding...' : 'Add Officer'}
            </button>
            <button
              onClick={() => {
                setAddingNew(false)
                setFormData({})
              }}
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!addingNew && (
        <button
          onClick={() => {
            setAddingNew(true)
            setFormData({})
          }}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={16} /> Add New Officer
        </button>
      )}
    </div>
  )
}

function OfficerRow({ officer, isEditing, formData, setFormData, onEdit, onSave, onCancel, onDelete, saving }: any) {
  return (
    <>
      <tr className={isEditing ? 'bg-gray-800' : ''}>
        <td className="px-4 py-3">
          <div className="w-9 h-9 rounded-lg overflow-hidden bg-gray-700 border border-gray-600 flex items-center justify-center">
            {officer.photo_url
              ? <img src={officer.photo_url} alt="" className="w-full h-full object-cover" />
              : <span className="text-gray-500 text-xs">—</span>
            }
          </div>
        </td>
        <td className="px-4 py-3 text-sm text-gray-300">{officer.office_title}</td>
        <td className="px-4 py-3 text-sm text-gray-300">{officer.officer_name}</td>
        <td className="px-4 py-3 text-sm text-gray-400">{officer.school || '-'}</td>
        <td className="px-4 py-3 text-sm text-gray-400">{officer.region || '-'}</td>
        <td className="px-4 py-3 text-sm text-gray-400">{officer.year || '-'}</td>
        <td className="px-4 py-3 text-sm">
          {!isEditing && (
            <div className="flex gap-2">
              <button onClick={onEdit} className="text-fccla-red hover:text-red-400 text-sm">Edit</button>
              <button onClick={onDelete} className="text-red-400 hover:text-red-300 text-sm">Delete</button>
            </div>
          )}
        </td>
      </tr>
      {isEditing && (
        <tr className="bg-gray-800">
          <td colSpan={7} className="px-4 py-4">
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="text-gray-400 text-xs block mb-1">Officer Name</label>
                <input
                  type="text"
                  value={formData.officer_name || ''}
                  onChange={(e) => setFormData({ ...formData, officer_name: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-fccla-red text-sm"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs block mb-1">School</label>
                <input
                  type="text"
                  value={formData.school || ''}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-fccla-red text-sm"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs block mb-1">Region</label>
                <input
                  type="text"
                  value={formData.region || ''}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-fccla-red text-sm"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs block mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email || ''}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-fccla-red text-sm"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs block mb-1">Year</label>
                <input
                  type="text"
                  value={formData.year || ''}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-fccla-red text-sm"
                />
              </div>
            </div>
            <div className="mb-3">
              <PhotoPicker
                value={formData.photo_url || ''}
                onChange={(url) => setFormData({ ...formData, photo_url: url })}
                label="Photo"
              />
            </div>
            <div className="mb-3">
              <label className="text-gray-400 text-xs block mb-1">Bio</label>
              <textarea
                value={formData.bio || ''}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-fccla-red text-sm h-20"
              />
            </div>
            <div className="flex gap-2">
              <button onClick={onSave} disabled={saving} className="bg-fccla-red text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-red-700 disabled:opacity-50">
                {saving ? 'Saving...' : 'Save'}
              </button>
              <button onClick={onCancel} className="bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

function BoardMembersSection({ members, editingId, setEditingId, addingNew, setAddingNew, onRefresh }: any) {
  const [formData, setFormData] = useState<Partial<BoardMember>>({})
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!formData.name || !formData.title || !formData.type) {
      alert('Name, title, and type are required')
      return
    }
    try {
      setSaving(true)
      await upsertBoardMember({
        id: editingId || undefined,
        name: formData.name,
        title: formData.title,
        email: formData.email,
        photo_url: formData.photo_url,
        type: formData.type,
        display_order: formData.display_order
      })
      setEditingId(null)
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const handleAddNew = async () => {
    await handleSave()
    setFormData({})
    setAddingNew(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this member?')) return
    try {
      await deleteBoardMember(id)
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
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Title</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Type</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Email</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {members.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-gray-500">
                  No board members yet.
                </td>
              </tr>
            ) : (
              members.map((member: BoardMember) => (
                <tr key={member.id} className={editingId === member.id ? 'bg-gray-800' : ''}>
                  <td className="px-4 py-3 text-sm text-gray-300">{member.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-400">{member.title}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`text-xs px-2 py-1 rounded ${
                      member.type === 'board' ? 'bg-blue-900/30 text-blue-300' : 'bg-purple-900/30 text-purple-300'
                    }`}>
                      {member.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{member.email || '-'}</td>
                  <td className="px-4 py-3 text-sm">
                    {editingId !== member.id && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setFormData(member)
                            setEditingId(member.id)
                          }}
                          className="text-fccla-red hover:text-red-400 text-sm"
                        >
                          Edit
                        </button>
                        <button onClick={() => handleDelete(member.id)} className="text-red-400 hover:text-red-300 text-sm">
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
        <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Edit Board Member</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <input
              type="text"
              placeholder="Title"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email || ''}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <select
              value={formData.type || ''}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            >
              <option value="">Select Type</option>
              <option value="board">Board</option>
              <option value="staff">Staff</option>
            </select>
          </div>
          <div className="mb-4">
            <PhotoPicker
              value={formData.photo_url || ''}
              onChange={(url) => setFormData({ ...formData, photo_url: url })}
              label="Photo"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={() => setEditingId(null)}
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {addingNew && (
        <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Add New Board Member</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <input
              type="text"
              placeholder="Title"
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email || ''}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            />
            <select
              value={formData.type || ''}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
            >
              <option value="">Select Type</option>
              <option value="board">Board</option>
              <option value="staff">Staff</option>
            </select>
          </div>
          <div className="mb-4">
            <PhotoPicker
              value={formData.photo_url || ''}
              onChange={(url) => setFormData({ ...formData, photo_url: url })}
              label="Photo"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleAddNew}
              disabled={saving}
              className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 disabled:opacity-50"
            >
              {saving ? 'Adding...' : 'Add Member'}
            </button>
            <button
              onClick={() => {
                setAddingNew(false)
                setFormData({})
              }}
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!addingNew && !editingId && (
        <button
          onClick={() => {
            setAddingNew(true)
            setFormData({})
          }}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={16} /> Add New Member
        </button>
      )}
    </div>
  )
}

function ThemeGoalsSection({ themes, editingId, setEditingId, addingNew, setAddingNew, onRefresh }: any) {
  const [formData, setFormData] = useState<Partial<ThemeGoal>>({})
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!formData.year || !formData.theme_name) {
      alert('Year and theme name are required')
      return
    }
    try {
      setSaving(true)
      await upsertThemeGoals({
        id: editingId || undefined,
        year: formData.year,
        theme_name: formData.theme_name,
        description: formData.description,
        goals: formData.goals,
        pdf_link: formData.pdf_link,
        is_active: formData.is_active
      })
      setEditingId(null)
      await onRefresh()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const handleAddNew = async () => {
    await handleSave()
    setFormData({})
    setAddingNew(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this theme?')) return
    try {
      await upsertThemeGoals({ id, year: '', theme_name: '' })
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
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Year</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Theme</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Active</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {themes.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-12 text-center text-gray-500">
                  No themes yet.
                </td>
              </tr>
            ) : (
              themes.map((theme: ThemeGoal) => (
                <tr key={theme.id} className={editingId === theme.id ? 'bg-gray-800' : ''}>
                  <td className="px-4 py-3 text-sm text-gray-300">{theme.year}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{theme.theme_name}</td>
                  <td className="px-4 py-3 text-sm">
                    {theme.is_active ? (
                      <span className="text-xs px-2 py-1 bg-green-900/30 text-green-300 rounded">Active</span>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-gray-700/30 text-gray-400 rounded">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {editingId !== theme.id && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setFormData(theme)
                            setEditingId(theme.id)
                          }}
                          className="text-fccla-red hover:text-red-400 text-sm"
                        >
                          Edit
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
        <ThemeEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={() => setEditingId(null)}
          saving={saving}
        />
      )}

      {addingNew && (
        <ThemeEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleAddNew}
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
            setFormData({ goals: [] })
          }}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={16} /> Add New Theme
        </button>
      )}
    </div>
  )
}

function ThemeEditForm({ formData, setFormData, onSave, onCancel, saving }: any) {
  const goals = formData.goals || []

  const addGoal = () => {
    const newGoals = [...goals, { number: (goals.length + 1).toString(), title: '', description: '' }]
    setFormData({ ...formData, goals: newGoals })
  }

  const updateGoal = (idx: number, field: string, value: string) => {
    const newGoals = [...goals]
    newGoals[idx] = { ...newGoals[idx], [field]: value }
    setFormData({ ...formData, goals: newGoals })
  }

  const removeGoal = (idx: number) => {
    setFormData({ ...formData, goals: goals.filter((_: any, i: number) => i !== idx) })
  }

  return (
    <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {formData.id ? 'Edit Theme & Goals' : 'Add New Theme & Goals'}
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Year (e.g., 2024)"
          value={formData.year || ''}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <input
          type="text"
          placeholder="Theme Name"
          value={formData.theme_name || ''}
          onChange={(e) => setFormData({ ...formData, theme_name: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
      </div>
      <textarea
        placeholder="Description"
        value={formData.description || ''}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4 h-20"
      />
      <input
        type="url"
        placeholder="PDF Link"
        value={formData.pdf_link || ''}
        onChange={(e) => setFormData({ ...formData, pdf_link: e.target.value })}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red mb-4"
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

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-300 mb-3">Goals</h4>
        {goals.map((goal: any, idx: number) => (
          <div key={idx} className="mb-4 p-3 bg-gray-800 rounded-lg">
            <div className="grid grid-cols-3 gap-2 mb-2">
              <input
                type="text"
                placeholder="Goal #"
                value={goal.number}
                onChange={(e) => updateGoal(idx, 'number', e.target.value)}
                className="bg-gray-700 border border-gray-600 text-white rounded px-2 py-1 text-sm"
              />
              <input
                type="text"
                placeholder="Title"
                value={goal.title}
                onChange={(e) => updateGoal(idx, 'title', e.target.value)}
                className="col-span-2 bg-gray-700 border border-gray-600 text-white rounded px-2 py-1 text-sm"
              />
            </div>
            <textarea
              placeholder="Description"
              value={goal.description}
              onChange={(e) => updateGoal(idx, 'description', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 text-white rounded px-2 py-1 text-sm h-16 mb-2"
            />
            <button
              onClick={() => removeGoal(idx)}
              className="text-red-400 hover:text-red-300 text-xs"
            >
              Remove Goal
            </button>
          </div>
        ))}
        <button
          onClick={addGoal}
          className="text-fccla-red hover:text-red-400 text-sm font-semibold"
        >
          + Add Goal
        </button>
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
