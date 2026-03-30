export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      state_officers: {
        Row: {
          id: string
          office_key: string
          office_title: string
          officer_name: string
          school: string | null
          region: string | null
          email: string | null
          photo_url: string | null
          bio: string | null
          display_order: number
          year: string
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['state_officers']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['state_officers']['Insert']>
      }
      board_members: {
        Row: {
          id: string
          name: string
          title: string
          email: string | null
          photo_url: string | null
          type: string
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['board_members']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['board_members']['Insert']>
      }
      events: {
        Row: {
          id: string
          event_key: string
          title: string
          type: string
          date_start: string | null
          date_end: string | null
          location: string | null
          description: string | null
          registration_link: string | null
          is_active: boolean
          year: string
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['events']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['events']['Insert']>
      }
      documents: {
        Row: {
          id: string
          name: string
          description: string | null
          file_url: string
          category: string
          display_order: number
          is_visible: boolean
          is_external: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['documents']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['documents']['Insert']>
      }
      newsletters: {
        Row: {
          id: string
          title: string
          issue_date: string
          drive_link: string
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['newsletters']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['newsletters']['Insert']>
      }
      scholarships: {
        Row: {
          id: string
          name: string
          description: string | null
          amount: string | null
          deadline: string | null
          link: string | null
          eligibility: string | null
          is_active: boolean
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['scholarships']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['scholarships']['Insert']>
      }
      sponsors: {
        Row: {
          id: string
          name: string
          logo_url: string | null
          website: string | null
          tier: string
          is_active: boolean
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['sponsors']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['sponsors']['Insert']>
      }
      theme_goals: {
        Row: {
          id: string
          year: string
          theme_name: string
          description: string | null
          goals: Json
          pdf_link: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['theme_goals']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['theme_goals']['Insert']>
      }
      award_deadlines: {
        Row: {
          id: string
          award_key: string
          award_name: string
          description: string | null
          deadline: string | null
          link: string | null
          link_label: string | null
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['award_deadlines']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['award_deadlines']['Insert']>
      }
      site_settings: {
        Row: {
          id: string
          key: string
          value: string | null
          label: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['site_settings']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['site_settings']['Insert']>
      }
    }
  }
}

// Convenience row types
export type StateOfficer = Database['public']['Tables']['state_officers']['Row']
export type BoardMember = Database['public']['Tables']['board_members']['Row']
export type SiteEvent = Database['public']['Tables']['events']['Row']
export type Document = Database['public']['Tables']['documents']['Row']
export type Newsletter = Database['public']['Tables']['newsletters']['Row']
export type Scholarship = Database['public']['Tables']['scholarships']['Row']
export type Sponsor = Database['public']['Tables']['sponsors']['Row']
export type ThemeGoals = Database['public']['Tables']['theme_goals']['Row']
export type AwardDeadline = Database['public']['Tables']['award_deadlines']['Row']
export type SiteSetting = Database['public']['Tables']['site_settings']['Row']
