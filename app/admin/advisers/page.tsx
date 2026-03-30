'use client'

import { useState, useEffect } from 'react'
import { getDocuments, upsertDocument, deleteDocument } from '@/actions/admin/content'
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

export default function AdminAdvisersPage() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [addingNew, setAddingNew] = useState(false)
  const [formData, setFormData] = useState<Partial<Document>>({})
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadDocuments()
  }, [])

  async function loadDocuments() {
    try {
      setLoading(true)
      const data = await getDocuments()
      // Filter to adviser documents only
      const filtered = data.filter((doc: Document) => doc.category === 'adviser')
      setDocuments(filtered)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load documents')
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (doc: Document) => {
    setFormData(doc)
    setEditingId(doc.id)
  }

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
        category: 'adviser',
        is_visible: formData.is_visible,
        is_external: formData.is_external,
        display_order: formData.display_order
      })
      setEditingId(null)
      setAddingNew(false)
      setFormData({})
      await loadDocuments()
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
      await loadDocuments()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete')
    }
  }

  if (loading) return <div className="p-8 text-white">Loading...</div>

  return (
    <div className="p-8 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white font-outfit">For Advisers</h1>
        <p className="text-gray-400 mt-1">These documents appear on the Forms & Documents page for advisers.</p>
      </div>

      {error && <div className="bg-red-900/30 border border-red-700 text-red-200 px-4 py-3 rounded-lg mb-6">{error}</div>}

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-6">
        <table className="w-full">
          <thead className="border-b border-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Name</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">File URL</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Visible</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">External</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {documents.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-12 text-center text-gray-500">
                  No adviser documents yet.
                </td>
              </tr>
            ) : (
              documents.map(doc => (
                <tr key={doc.id} className={editingId === doc.id ? 'bg-gray-800' : ''}>
                  <td className="px-4 py-3 text-sm text-gray-300">{doc.name}</td>
                  <td className="px-4 py-3 text-sm">
                    <a href={doc.file_url} target="_blank" rel="noopener noreferrer" className="text-fccla-red hover:text-red-400 underline truncate block max-w-xs">
                      {doc.file_url.substring(0, 40)}...
                    </a>
                  </td>
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
                        <button onClick={() => handleEdit(doc)} className="text-fccla-red hover:text-red-400 text-sm">
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
          isEditing={true}
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
          isEditing={false}
        />
      )}

      {!addingNew && !editingId && (
        <button
          onClick={() => {
            setAddingNew(true)
            setFormData({ is_visible: true })
          }}
          className="bg-fccla-red text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={16} /> Add Adviser Document
        </button>
      )}
    </div>
  )
}

function DocumentEditForm({ formData, setFormData, onSave, onCancel, saving, isEditing }: any) {
  return (
    <div className="bg-gray-900 border-2 border-fccla-red/30 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">
        {isEditing ? 'Edit Document' : 'Add Adviser Document'}
      </h3>
      <input
        type="text"
        placeholder="Document Name"
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
          {saving ? 'Saving...' : 'Save Document'}
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
