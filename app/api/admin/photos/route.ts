import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'
import { readdir } from 'fs/promises'
import path from 'path'

const BUCKET = 'photos'
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']

export async function GET(request: NextRequest) {
  const session = request.cookies.get('admin_session')?.value
  if (!session || session !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // 1. Load static officer photos committed to git
  let staticPhotos: string[] = []
  try {
    const dir = path.join(process.cwd(), 'public', 'officer-photos')
    const files = await readdir(dir)
    staticPhotos = files
      .filter(f => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
      .map(f => `/officer-photos/${f}`)
  } catch { /* directory missing — fine */ }

  // 2. Load photos uploaded to Supabase Storage
  let storagePhotos: string[] = []
  try {
    const supabase = createAdminClient()
    const { data } = await supabase.storage
      .from(BUCKET)
      .list('', { limit: 200, sortBy: { column: 'created_at', order: 'desc' } })

    storagePhotos = (data ?? [])
      .filter((f: any) => !f.name.startsWith('.'))
      .map((f: any) => supabase.storage.from(BUCKET).getPublicUrl(f.name).data.publicUrl)
  } catch { /* bucket not created yet — fine */ }

  // Storage photos first (newest uploads), then static fallbacks
  const photos = [...storagePhotos, ...staticPhotos]

  return NextResponse.json({ photos })
}
