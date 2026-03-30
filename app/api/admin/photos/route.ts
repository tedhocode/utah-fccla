import { NextRequest, NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import path from 'path'

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']

export async function GET(request: NextRequest) {
  // Check admin session
  const session = request.cookies.get('admin_session')?.value
  if (!session || session !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const dir = path.join(process.cwd(), 'public', 'officer-photos')
    const files = await readdir(dir)
    const images = files.filter(f =>
      IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase())
    )
    return NextResponse.json({ photos: images.map(f => `/officer-photos/${f}`) })
  } catch {
    // Directory may be empty or not exist yet
    return NextResponse.json({ photos: [] })
  }
}
