import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

const BUCKET = 'photos'

export async function GET(request: NextRequest) {
  const session = request.cookies.get('admin_session')?.value
  if (!session || session !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .list('', { limit: 200, sortBy: { column: 'created_at', order: 'desc' } })

    if (error) throw error

    const photos = (data ?? [])
      .filter(f => !f.name.startsWith('.'))
      .map(f => supabase.storage.from(BUCKET).getPublicUrl(f.name).data.publicUrl)

    return NextResponse.json({ photos })
  } catch (err) {
    console.error('Photos list error:', err)
    return NextResponse.json({ photos: [] })
  }
}
