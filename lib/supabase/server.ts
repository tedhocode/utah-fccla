import { createServerClient } from '@supabase/ssr'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import type { Database } from './types'

// For Server Components and Server Actions (uses anon key + cookie session)
export async function createClient() {
  const { cookies } = await import('next/headers')
  const cookieStore = await cookies()

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Server Component — can be ignored
          }
        },
      },
    }
  )
}

// For admin Server Actions (uses service_role key — bypasses RLS, no type strictness needed)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createAdminClient(): any {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  )
}
