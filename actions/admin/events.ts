'use server'

import { createAdminClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getEvents() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('date_start', { ascending: true })
  if (error) throw error
  return data
}

export async function updateEvent(id: string, updates: {
  title?: string
  type?: string
  date_start?: string | null
  date_end?: string | null
  location?: string | null
  description?: string | null
  registration_link?: string | null
  is_active?: boolean
  year?: string
}) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('events').update(updates).eq('id', id)
  if (error) throw error
  revalidatePath('/events/fall-leadership')
  revalidatePath('/events/state-conference')
  revalidatePath('/events/nationals')
  revalidatePath('/events/region-conferences')
  revalidatePath('/events/calendar')
  revalidatePath('/admin/events')
}

export async function addEvent(data: {
  event_key: string
  title: string
  type: string
  date_start?: string
  date_end?: string
  location?: string
  description?: string
  registration_link?: string
  year?: string
}) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('events').insert(data)
  if (error) throw error
  revalidatePath('/events/calendar')
  revalidatePath('/admin/events')
}

export async function deleteEvent(id: string) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('events').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/events/calendar')
  revalidatePath('/admin/events')
}
