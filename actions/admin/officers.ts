'use server'

import { createAdminClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function getOfficers() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('state_officers')
    .select('*')
    .order('display_order')
  if (error) throw error
  return data
}

export async function updateOfficer(id: string, updates: {
  officer_name?: string
  school?: string
  region?: string
  email?: string
  photo_url?: string
  bio?: string
  office_title?: string
  display_order?: number
  year?: string
}) {
  const supabase = createAdminClient()
  const { error } = await supabase
    .from('state_officers')
    .update(updates as any)
    .eq('id', id)
  if (error) throw error
  revalidatePath('/about/officers')
  revalidatePath('/admin/about')
}

export async function addOfficer(data: {
  office_key: string
  office_title: string
  officer_name: string
  school?: string
  region?: string
  email?: string
  photo_url?: string
  bio?: string
  display_order?: number
  year: string
}) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('state_officers').insert(data as any)
  if (error) throw error
  revalidatePath('/about/officers')
  revalidatePath('/admin/about')
}

export async function deleteOfficer(id: string) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('state_officers').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/about/officers')
  revalidatePath('/admin/about')
}
