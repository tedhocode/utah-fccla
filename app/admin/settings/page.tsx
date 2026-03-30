'use client'

import { useState, useEffect } from 'react'
import { getSiteSettings, updateSiteSetting } from '@/actions/admin/content'

type Setting = {
  key: string
  value: string
  label?: string
}

const SETTING_LABELS: Record<string, string> = {
  contact_email: 'Contact Email',
  paypal_link: 'PayPal Donation Link',
  facebook_url: 'Facebook URL',
  instagram_url: 'Instagram URL',
  twitter_url: 'Twitter URL',
  current_year: 'Current Year'
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Setting[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [dirty, setDirty] = useState<Set<string>>(new Set())
  const [formData, setFormData] = useState<Record<string, string>>({})

  useEffect(() => {
    loadSettings()
  }, [])

  async function loadSettings() {
    try {
      setLoading(true)
      const data = await getSiteSettings()
      setSettings(data)
      const initialFormData: Record<string, string> = {}
      data.forEach((setting: Setting) => {
        initialFormData[setting.key] = setting.value
      })
      setFormData(initialFormData)
      setDirty(new Set())
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load settings')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }))
    const newDirty = new Set(dirty)
    newDirty.add(key)
    setDirty(newDirty)
  }

  const handleSaveAll = async () => {
    if (dirty.size === 0) {
      alert('No changes to save')
      return
    }

    try {
      setSaving(true)
      const promises: Promise<void>[] = []
      dirty.forEach(key => {
        promises.push(updateSiteSetting(key, formData[key]))
      })
      await Promise.all(promises)
      setDirty(new Set())
      await loadSettings()
      alert('Settings saved successfully')
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-8 text-white">Loading...</div>

  return (
    <div className="p-8 text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white font-outfit">Settings</h1>
        <p className="text-gray-400 mt-1">Manage site-wide configuration and contact information</p>
      </div>

      {error && <div className="bg-red-900/30 border border-red-700 text-red-200 px-4 py-3 rounded-lg mb-6">{error}</div>}

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden mb-8">
        <div className="divide-y divide-gray-800">
          {settings.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              No settings found.
            </div>
          ) : (
            settings.map(setting => (
              <div key={setting.key} className="px-6 py-4 hover:bg-gray-800/50 transition-colors">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {SETTING_LABELS[setting.key] || setting.key}
                </label>
                <input
                  type={setting.key.includes('email') ? 'email' : setting.key.includes('url') ? 'url' : 'text'}
                  value={formData[setting.key] || ''}
                  onChange={(e) => handleChange(setting.key, e.target.value)}
                  className={`w-full bg-gray-800 border rounded-xl px-4 py-2.5 focus:outline-none transition-colors ${
                    dirty.has(setting.key)
                      ? 'border-fccla-red focus:border-fccla-red'
                      : 'border-gray-700 focus:border-fccla-red'
                  } text-white`}
                />
                {dirty.has(setting.key) && (
                  <p className="text-fccla-red text-xs mt-1">Modified</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleSaveAll}
          disabled={saving || dirty.size === 0}
          className="bg-fccla-red text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {saving ? 'Saving...' : dirty.size > 0 ? `Save All Settings (${dirty.size} changed)` : 'All Saved'}
        </button>
        {dirty.size > 0 && (
          <button
            onClick={async () => {
              await loadSettings()
              alert('Changes discarded')
            }}
            className="bg-gray-800 text-gray-300 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Discard Changes
          </button>
        )}
      </div>

      <div className="mt-8 p-4 bg-blue-900/30 border border-blue-800 rounded-xl text-blue-200 text-sm">
        <p className="font-semibold mb-2">About Settings:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Contact Email: Used on the contact form and public pages</li>
          <li>PayPal Link: Donation button link on the donate page</li>
          <li>Social Media URLs: Links in the footer and social icons</li>
          <li>Current Year: Used for awards and competitions context</li>
        </ul>
      </div>
    </div>
  )
}
