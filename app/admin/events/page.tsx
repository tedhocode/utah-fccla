'use client'

import { useState, useEffect } from 'react'
import { getEvents, updateEvent, addEvent, deleteEvent } from '@/actions/admin/events'
import { Plus } from 'lucide-react'

type Event = {
  id: string
  event_key: string
  title: string
  type: string
  date_start?: string
  date_end?: string
  location?: string
  description?: string
  registration_link?: string
  is_active?: boolean
  year?: string
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [addingNew, setAddingNew] = useState(false)
  const [formData, setFormData] = useState<Partial<Event>>({})
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadEvents()
  }, [])

  async function loadEvents() {
    try {
      setLoading(true)
      const data = await getEvents()
      setEvents(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load events')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (event: Event) => {
    setFormData(event)
    setEditingId(event.id)
  }

  const handleSave = async () => {
    if (!formData.title) {
      alert('Title is required')
      return
    }
    try {
      setSaving(true)
      if (editingId) {
        await updateEvent(editingId, {
          title: formData.title,
          type: formData.type,
          date_start: formData.date_start,
          date_end: formData.date_end,
          location: formData.location,
          description: formData.description,
          registration_link: formData.registration_link,
          is_active: formData.is_active,
          year: formData.year
        })
        setEditingId(null)
      } else {
        await addEvent({
          event_key: formData.title?.toLowerCase().replace(/\s+/g, '_') || '',
          title: formData.title,
          type: formData.type || 'fall',
          date_start: formData.date_start,
          date_end: formData.date_end,
          location: formData.location,
          description: formData.description,
          registration_link: formData.registration_link,
          year: formData.year
        })
        setAddingNew(false)
      }
      setFormData({})
      await loadEvents()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this event?')) return
    try {
      await deleteEvent(id)
      await loadEvents()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete')
    }
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'fall': return 'bg-orange-900/30 text-orange-300'
      case 'state': return 'bg-blue-900/30 text-blue-300'
      case 'region': return 'bg-green-900/30 text-green-300'
      case 'nationals': return 'bg-purple-900/30 text-purple-300'
      default: return 'bg-gray-700/30 text-gray-300'
    }
  }

  if (loading) return <div className="p-8 text-white">Loading...</div>

  return (
    <div className="p-8 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white font-outfit">Events</h1>
        <p className="text-gray-400 mt-1">Manage all FCCLA events and competitions</p>
      </div>

      {error && <div className="bg-red-900/30 border border-red-700 text-red-200 px-4 py-3 rounded-lg mb-6">{error}</div>}

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6">
        <table className="w-full">
          <thead className="border-b border-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Title</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Type</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Dates</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Location</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Registration</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Active</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {events.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-12 text-center text-gray-500">
                  No events yet.
                </td>
              </tr>
            ) : (
              events.map(event => (
                <tr key={event.id} className={editingId === event.id ? 'bg-gray-800' : ''}>
                  <td className="px-4 py-3 text-sm text-gray-300">{event.title}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`text-xs px-2 py-1 rounded ${getTypeBadgeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">
                    {event.date_start ? new Date(event.date_start).toLocaleDateString() : '-'}
                    {event.date_end && ` to ${new Date(event.date_end).toLocaleDateString()}`}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-400">{event.location || '-'}</td>
                  <td className="px-4 py-3 text-sm">
                    {event.registration_link ? (
                      <a href={event.registration_link} target="_blank" rel="noopener noreferrer" className="text-fccla-red hover:text-red-400 underline">
                        Link
                      </a>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {event.is_active ? (
                      <span className="text-xs px-2 py-1 bg-green-900/30 text-green-300 rounded">Active</span>
                    ) : (
                      <span className="text-xs px-2 py-1 bg-gray-700/30 text-gray-400 rounded">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {editingId !== event.id && (
                      <div className="flex gap-2">
                        <button onClick={() => handleEdit(event)} className="text-fccla-red hover:text-red-400 text-sm">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(event.id)} className="text-red-400 hover:text-red-300 text-sm">
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
        <EventEditForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onCancel={() => setEditingId(null)}
          saving={saving}
          isEditing={true}
        />
      )}

      {addingNew && (
        <EventEditForm
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
            setFormData({ type: 'fall', is_active: true })
          }}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={16} /> Add New Event
        </button>
      )}
    </div>
  )
}

function EventEditForm({ formData, setFormData, onSave, onCancel, saving, isEditing }: any) {
  return (
    <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {isEditing ? 'Edit Event' : 'Add New Event'}
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Event Title"
          value={formData.title || ''}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <select
          value={formData.type || 'fall'}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        >
          <option value="fall">Fall Leadership</option>
          <option value="state">State Conference</option>
          <option value="region">Region Conferences</option>
          <option value="nationals">Nationals</option>
        </select>
        <input
          type="date"
          placeholder="Start Date"
          value={formData.date_start || ''}
          onChange={(e) => setFormData({ ...formData, date_start: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <input
          type="date"
          placeholder="End Date"
          value={formData.date_end || ''}
          onChange={(e) => setFormData({ ...formData, date_end: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Location"
          value={formData.location || ''}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <input
          type="url"
          placeholder="Registration Link"
          value={formData.registration_link || ''}
          onChange={(e) => setFormData({ ...formData, registration_link: e.target.value })}
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
          type="text"
          placeholder="Year (optional)"
          value={formData.year || ''}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          className="bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-fccla-red"
        />
        <label className="flex items-center gap-2 text-gray-300">
          <input
            type="checkbox"
            checked={formData.is_active || false}
            onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
            className="rounded"
          />
          Active
        </label>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onSave}
          disabled={saving}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Event'}
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
