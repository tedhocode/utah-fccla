import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

const MAX_SIZE_MB = 5
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif', 'image/avif']

export async function POST(request: NextRequest) {
  // Check admin session
  const session = request.cookies.get('admin_session')?.value
  if (!session || session !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: 'File must be an image (JPG, PNG, WebP, GIF)' }, { status: 400 })
    }

    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      return NextResponse.json({ error: `File must be under ${MAX_SIZE_MB}MB` }, { status: 400 })
    }

    // Sanitize filename — strip special chars, keep extension
    const ext = path.extname(file.name).toLowerCase() || '.jpg'
    const baseName = path.basename(file.name, ext)
      .replace(/[^a-zA-Z0-9_-]/g, '-')
      .replace(/-+/g, '-')
      .toLowerCase()
      .slice(0, 60)
    const timestamp = Date.now()
    const filename = `${baseName}-${timestamp}${ext}`

    // Ensure directory exists
    const dir = path.join(process.cwd(), 'public', 'officer-photos')
    await mkdir(dir, { recursive: true })

    // Write file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile(path.join(dir, filename), buffer)

    return NextResponse.json({ url: `/officer-photos/${filename}`, filename })
  } catch (err) {
    console.error('Upload error:', err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
