'use server'

import { createAdminClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

// ── Board Members ──────────────────────────────────────────

export async function getBoardMembers() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('board_members')
    .select('*')
    .order('type')
    .order('display_order')
  if (error) throw error
  return data
}

export async function upsertBoardMember(data: {
  id?: string
  name: string
  title: string
  org?: string
  email?: string
  photo_url?: string
  type: string
  display_order?: number
}) {
  const supabase = createAdminClient()
  const { error } = data.id
    ? await supabase.from('board_members').update(data as any).eq('id', data.id)
    : await supabase.from('board_members').insert(data as any)
  if (error) throw error
  revalidatePath('/about/board')
  revalidatePath('/admin/about')
}

export async function deleteBoardMember(id: string) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('board_members').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/about/board')
  revalidatePath('/admin/about')
}

// ── Theme & Goals ──────────────────────────────────────────

export async function getThemeGoals() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('theme_goals')
    .select('*')
    .order('year', { ascending: false })
  if (error) throw error
  return data
}

export async function upsertThemeGoals(data: {
  id?: string
  year: string
  theme_name: string
  description?: string
  goals?: { number: string; title: string; description: string }[]
  pdf_link?: string
  is_active?: boolean
}) {
  const supabase = createAdminClient()
  const payload = { ...data, goals: data.goals ?? [] }
  const { error } = data.id
    ? await supabase.from('theme_goals').update(payload as any).eq('id', data.id)
    : await supabase.from('theme_goals').insert(payload as any)
  if (error) throw error
  revalidatePath('/about/theme-goals')
  revalidatePath('/resources/awards')
  revalidatePath('/admin/about')
}

// ── Newsletters ────────────────────────────────────────────

export async function getNewsletters() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('newsletters')
    .select('*')
    .order('issue_date', { ascending: false })
  if (error) throw error
  return data
}

export async function upsertNewsletter(data: {
  id?: string
  title: string
  issue_date: string
  drive_link: string
  is_featured?: boolean
}) {
  const supabase = createAdminClient()
  const { error } = data.id
    ? await supabase.from('newsletters').update(data as any).eq('id', data.id)
    : await supabase.from('newsletters').insert(data as any)
  if (error) throw error
  revalidatePath('/members/newsletters')
  revalidatePath('/admin/members')
}

export async function deleteNewsletter(id: string) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('newsletters').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/members/newsletters')
  revalidatePath('/admin/members')
}

// ── Scholarships ───────────────────────────────────────────

export async function getScholarships() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('scholarships')
    .select('*')
    .order('display_order')
  if (error) throw error
  return data
}

export async function upsertScholarship(data: {
  id?: string
  name: string
  description?: string
  amount?: string
  deadline?: string
  link?: string
  eligibility?: string
  is_active?: boolean
  display_order?: number
}) {
  const supabase = createAdminClient()
  const { error } = data.id
    ? await supabase.from('scholarships').update(data as any).eq('id', data.id)
    : await supabase.from('scholarships').insert(data as any)
  if (error) throw error
  revalidatePath('/members/scholarships')
  revalidatePath('/admin/members')
}

export async function deleteScholarship(id: string) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('scholarships').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/members/scholarships')
  revalidatePath('/admin/members')
}

// ── Sponsors ───────────────────────────────────────────────

export async function getSponsors() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('sponsors')
    .select('*')
    .order('tier')
    .order('display_order')
  if (error) throw error
  return data
}

export async function upsertSponsor(data: {
  id?: string
  name: string
  logo_url?: string
  website?: string
  tier: string
  is_active?: boolean
  display_order?: number
}) {
  const supabase = createAdminClient()
  const { error } = data.id
    ? await supabase.from('sponsors').update(data as any).eq('id', data.id)
    : await supabase.from('sponsors').insert(data as any)
  if (error) throw error
  revalidatePath('/resources/sponsors')
  revalidatePath('/admin/resources')
}

export async function deleteSponsor(id: string) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('sponsors').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/resources/sponsors')
  revalidatePath('/admin/resources')
}

// ── Documents ──────────────────────────────────────────────

export async function getDocuments() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('documents')
    .select('*')
    .order('category')
    .order('display_order')
  if (error) throw error
  return data
}

export async function upsertDocument(data: {
  id?: string
  name: string
  description?: string
  file_url: string
  category: string
  is_visible?: boolean
  is_external?: boolean
  display_order?: number
}) {
  const supabase = createAdminClient()
  const { error } = data.id
    ? await supabase.from('documents').update(data as any).eq('id', data.id)
    : await supabase.from('documents').insert(data as any)
  if (error) throw error
  revalidatePath('/resources/downloads')
  revalidatePath('/admin/resources')
}

export async function deleteDocument(id: string) {
  const supabase = createAdminClient()
  const { error } = await supabase.from('documents').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/resources/downloads')
  revalidatePath('/admin/resources')
}

// ── Award Deadlines ────────────────────────────────────────

export async function getAwardDeadlines() {
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('award_deadlines')
    .select('*')
    .order('display_order')
  if (error) throw error
  return data
}

export async function upsertAwardDeadline(data: {
  id?: string
  award_key: string
  award_name: string
  description?: string
  deadline?: string
  link?: string
  link_label?: string
  display_order?: number
}) {
  const supabase = createAdminClient()
  const { error } = data.id
    ? await supabase.from('award_deadlines').update(data as any).eq('id', data.id)
    : await supabase.from('award_deadlines').insert(data as any)
  if (error) throw error
  revalidatePath('/resources/awards')
  revalidatePath('/admin/resources')
}

// ── Site Settings ──────────────────────────────────────────

export async function getSiteSettings() {
  const supabase = createAdminClient()
  const { data, error } = await supabase.from('site_settings').select('*').order('key')
  if (error) throw error
  return data
}

export async function updateSiteSetting(key: string, value: string) {
  const supabase = createAdminClient()
  const { error } = await supabase
    .from('site_settings')
    .update({ value } as any)
    .eq('key', key)
  if (error) throw error
  revalidatePath('/')
  revalidatePath('/admin/settings')
}
