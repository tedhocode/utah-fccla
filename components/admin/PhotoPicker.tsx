'use client'

import { useState, useEffect, useRef } from 'react'
import { Image as ImageIcon, Upload, X, Check, RefreshCw, User } from 'lucide-react'

interface PhotoPickerProps {
  value: string
  onChange: (url: string) => void
  label?: string
}

export default function PhotoPicker({ value, onChange, label = 'Photo' }: PhotoPickerProps) {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<'library' | 'upload' | 'url'>('library')
  const [photos, setPhotos] = useState<string[]>([])
  const [loadingPhotos, setLoadingPhotos] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [urlInput, setUrlInput] = useState(value || '')
  const [dragOver, setDragOver] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  // Load library when panel opens
  useEffect(() => {
    if (open && tab === 'library') loadPhotos()
  }, [open, tab])

  async function loadPhotos() {
    setLoadingPhotos(true)
    try {
      const res = await fetch('/api/admin/photos')
      const data = await res.json()
      setPhotos(data.photos || [])
    } catch {
      setPhotos([])
    } finally {
      setLoadingPhotos(false)
    }
  }

  async function handleUpload(file: File) {
    if (!file) return
    setUploading(true)
    setUploadError('')
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/admin/photos/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Upload failed')
      onChange(data.url)
      setOpen(false)
      // Refresh library in background
      loadPhotos()
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) handleUpload(file)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleUpload(file)
  }

  function handleSelectFromLibrary(url: string) {
    onChange(url)
    setOpen(false)
  }

  function handleUrlApply() {
    onChange(urlInput)
    setOpen(false)
  }

  // Filename display helper
  function shortName(url: string) {
    return url.split('/').pop()?.split('-').slice(0, -1).join('-') || url
  }

  return (
    <div>
      <label className="text-gray-400 text-xs block mb-1">{label}</label>

      {/* Current value preview + button */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-lg bg-gray-700 border border-gray-600 flex items-center justify-center overflow-hidden flex-shrink-0">
          {value ? (
            <img src={value} alt="Officer" className="w-full h-full object-cover" />
          ) : (
            <User size={20} className="text-gray-500" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-400 truncate">{value || 'No photo selected'}</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex-shrink-0 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
        >
          <ImageIcon size={13} />
          {open ? 'Close' : 'Choose Photo'}
        </button>
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="flex-shrink-0 text-gray-500 hover:text-red-400 transition-colors"
            title="Remove photo"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Picker Panel */}
      {open && (
        <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden mb-3">

          {/* Tabs */}
          <div className="flex border-b border-gray-800">
            {(['library', 'upload', 'url'] as const).map(t => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-4 py-2.5 text-xs font-semibold capitalize transition-colors ${
                  tab === t
                    ? 'text-white border-b-2 border-fccla-red bg-gray-800'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {t === 'library' ? '📁 Library' : t === 'upload' ? '⬆ Upload' : '🔗 URL'}
              </button>
            ))}
          </div>

          {/* Library Tab */}
          {tab === 'library' && (
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-gray-400">
                  {photos.length} photo{photos.length !== 1 ? 's' : ''} in library
                </p>
                <button
                  type="button"
                  onClick={loadPhotos}
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                  title="Refresh"
                >
                  <RefreshCw size={13} className={loadingPhotos ? 'animate-spin' : ''} />
                </button>
              </div>

              {loadingPhotos ? (
                <p className="text-gray-500 text-xs py-4 text-center">Loading...</p>
              ) : photos.length === 0 ? (
                <div className="text-center py-8">
                  <ImageIcon size={32} className="text-gray-700 mx-auto mb-2" />
                  <p className="text-gray-500 text-xs mb-3">No photos in library yet.</p>
                  <button
                    type="button"
                    onClick={() => setTab('upload')}
                    className="text-fccla-red text-xs hover:underline"
                  >
                    Upload the first one →
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2 max-h-56 overflow-y-auto pr-1">
                  {photos.map(url => (
                    <button
                      key={url}
                      type="button"
                      onClick={() => handleSelectFromLibrary(url)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all group ${
                        value === url
                          ? 'border-fccla-red'
                          : 'border-gray-700 hover:border-gray-500'
                      }`}
                      title={shortName(url)}
                    >
                      <img src={url} alt="" className="w-full h-full object-cover" />
                      {value === url && (
                        <div className="absolute inset-0 bg-fccla-red/20 flex items-center justify-center">
                          <Check size={16} className="text-white" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Upload Tab */}
          {tab === 'upload' && (
            <div className="p-4">
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => !uploading && fileRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                  dragOver
                    ? 'border-fccla-red bg-fccla-red/5'
                    : 'border-gray-700 hover:border-gray-600'
                } ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Upload size={28} className="text-gray-500 mx-auto mb-2" />
                {uploading ? (
                  <p className="text-gray-400 text-sm">Uploading...</p>
                ) : (
                  <>
                    <p className="text-gray-300 text-sm font-medium mb-1">
                      Drop an image here or click to browse
                    </p>
                    <p className="text-gray-500 text-xs">JPG, PNG, WebP — max 5MB</p>
                  </>
                )}
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
              {uploadError && (
                <p className="mt-2 text-red-400 text-xs">{uploadError}</p>
              )}
            </div>
          )}

          {/* URL Tab */}
          {tab === 'url' && (
            <div className="p-4">
              <p className="text-gray-500 text-xs mb-3">Paste any external image URL</p>
              <input
                type="url"
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
                placeholder="https://example.com/photo.jpg"
                className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-fccla-red mb-3"
              />
              {urlInput && (
                <div className="mb-3">
                  <img
                    src={urlInput}
                    alt="Preview"
                    className="w-16 h-16 rounded-lg object-cover border border-gray-700"
                    onError={e => (e.currentTarget.style.display = 'none')}
                  />
                </div>
              )}
              <button
                type="button"
                onClick={handleUrlApply}
                disabled={!urlInput}
                className="bg-fccla-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 disabled:opacity-40"
              >
                Use This URL
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
