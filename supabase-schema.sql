-- ============================================================
-- Utah FCCLA — Supabase Database Schema
-- Run this entire file in Supabase → SQL Editor → New query
-- ============================================================

-- State Officers (keyed by office role)
CREATE TABLE IF NOT EXISTS state_officers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  office_key TEXT UNIQUE NOT NULL,
  office_title TEXT NOT NULL,
  officer_name TEXT NOT NULL DEFAULT 'TBD',
  school TEXT,
  region TEXT,
  photo_url TEXT,
  bio TEXT,
  display_order INT DEFAULT 0,
  year TEXT NOT NULL DEFAULT '2025-2026',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Board Members & Staff
CREATE TABLE IF NOT EXISTS board_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  email TEXT,
  photo_url TEXT,
  type TEXT NOT NULL DEFAULT 'board', -- 'board' or 'staff'
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Events
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_key TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  type TEXT NOT NULL, -- 'fall', 'state', 'region', 'nationals'
  date_start DATE,
  date_end DATE,
  location TEXT,
  description TEXT,
  registration_link TEXT,
  is_active BOOLEAN DEFAULT true,
  year TEXT DEFAULT '2025-2026',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Documents & Downloads
CREATE TABLE IF NOT EXISTS documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  category TEXT NOT NULL, -- 'star_events', 'culinary', 'conference', 'adviser', 'general'
  display_order INT DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  is_external BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletters
CREATE TABLE IF NOT EXISTS newsletters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  issue_date DATE NOT NULL,
  drive_link TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Scholarships
CREATE TABLE IF NOT EXISTS scholarships (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  amount TEXT,
  deadline DATE,
  link TEXT,
  eligibility TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sponsors
CREATE TABLE IF NOT EXISTS sponsors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT,
  website TEXT,
  tier TEXT NOT NULL DEFAULT 'partner', -- 'gold', 'silver', 'bronze', 'partner'
  is_active BOOLEAN DEFAULT true,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Theme & Goals (one active row per year)
CREATE TABLE IF NOT EXISTS theme_goals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  year TEXT UNIQUE NOT NULL,
  theme_name TEXT NOT NULL,
  description TEXT,
  goals JSONB DEFAULT '[]',
  pdf_link TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Award Deadlines
CREATE TABLE IF NOT EXISTS award_deadlines (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  award_key TEXT UNIQUE NOT NULL,
  award_name TEXT NOT NULL,
  description TEXT,
  deadline DATE,
  link TEXT,
  link_label TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Site Settings (key/value store)
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  label TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- Auto-update updated_at trigger
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_state_officers_updated_at BEFORE UPDATE ON state_officers FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_board_members_updated_at BEFORE UPDATE ON board_members FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_documents_updated_at BEFORE UPDATE ON documents FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_newsletters_updated_at BEFORE UPDATE ON newsletters FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_scholarships_updated_at BEFORE UPDATE ON scholarships FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_sponsors_updated_at BEFORE UPDATE ON sponsors FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_theme_goals_updated_at BEFORE UPDATE ON theme_goals FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_award_deadlines_updated_at BEFORE UPDATE ON award_deadlines FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- Row Level Security — allow public reads, block public writes
-- ============================================================
ALTER TABLE state_officers ENABLE ROW LEVEL SECURITY;
ALTER TABLE board_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletters ENABLE ROW LEVEL SECURITY;
ALTER TABLE scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE theme_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE award_deadlines ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public can read everything
CREATE POLICY "public_read_officers" ON state_officers FOR SELECT USING (true);
CREATE POLICY "public_read_board" ON board_members FOR SELECT USING (true);
CREATE POLICY "public_read_events" ON events FOR SELECT USING (true);
CREATE POLICY "public_read_documents" ON documents FOR SELECT USING (is_visible = true);
CREATE POLICY "public_read_newsletters" ON newsletters FOR SELECT USING (true);
CREATE POLICY "public_read_scholarships" ON scholarships FOR SELECT USING (is_active = true);
CREATE POLICY "public_read_sponsors" ON sponsors FOR SELECT USING (is_active = true);
CREATE POLICY "public_read_theme" ON theme_goals FOR SELECT USING (true);
CREATE POLICY "public_read_awards" ON award_deadlines FOR SELECT USING (true);
CREATE POLICY "public_read_settings" ON site_settings FOR SELECT USING (true);

-- ============================================================
-- Seed Data
-- ============================================================

-- Site Settings
INSERT INTO site_settings (key, value, label) VALUES
  ('contact_email', 'utahfccla@gmail.com', 'Contact Email'),
  ('paypal_link', 'https://www.paypal.com/donate?token=em3UjBbdOqWidmubfb38IJ2bfIuMJGFA_WqI0CcbNQMhlW-fEmkr6awhxrAUv7OzgY9Rx-PYgHnvg9CG', 'PayPal Donate Link'),
  ('facebook_url', '', 'Facebook URL'),
  ('instagram_url', '', 'Instagram URL'),
  ('twitter_url', '', 'Twitter/X URL'),
  ('current_year', '2025-2026', 'Current Program Year')
ON CONFLICT (key) DO NOTHING;

-- State Officers
INSERT INTO state_officers (office_key, office_title, officer_name, school, display_order, year) VALUES
  ('president', 'President', 'TBD', '', 1, '2025-2026'),
  ('vp_development', 'VP of Development', 'TBD', '', 2, '2025-2026'),
  ('vp_competition', 'VP of Competition', 'TBD', '', 3, '2025-2026'),
  ('vp_finance', 'VP of Finance', 'TBD', '', 4, '2025-2026'),
  ('vp_programs', 'VP of Programs', 'TBD', '', 5, '2025-2026'),
  ('secretary', 'Secretary', 'TBD', '', 6, '2025-2026'),
  ('reporter', 'Reporter', 'TBD', '', 7, '2025-2026'),
  ('parliamentarian', 'Parliamentarian', 'TBD', '', 8, '2025-2026')
ON CONFLICT (office_key) DO NOTHING;

-- Events
INSERT INTO events (event_key, title, type, year) VALUES
  ('fall_leadership', 'Fall Leadership Conference', 'fall', '2025-2026'),
  ('state_conference', 'State Leadership Conference', 'state', '2025-2026'),
  ('nationals', 'National Leadership Conference', 'nationals', '2025-2026')
ON CONFLICT (event_key) DO NOTHING;

-- Active Theme
INSERT INTO theme_goals (year, theme_name, description, goals, pdf_link, is_active) VALUES
  ('2025-2026', 'ConneCTEd',
   'ConneCTEd celebrates the vital link between FCCLA and Career & Technical Education. This theme challenges chapters to deepen their roots in CTE — connecting students to real-world careers, to each other, and to the communities they serve through the lens of family and consumer sciences.',
   '[
     {"number": "01", "title": "Strengthen Chapter Membership", "description": "Grow chapter membership by at least 5% compared to last year. Focus on recruiting freshmen and under-represented student groups."},
     {"number": "02", "title": "Expand Community Impact", "description": "Complete at least one FCCLA-driven community service project that addresses a local family and consumer science issue."},
     {"number": "03", "title": "Develop Student Leaders", "description": "Send at least one member to a leadership conference outside your school — whether regional, state, or national."},
     {"number": "04", "title": "Compete at the State Level", "description": "Enter at least one STAR Event or Utah state competition at State Leadership Conference."},
     {"number": "05", "title": "Connect with Your Community", "description": "Establish or strengthen a partnership with a local business, nonprofit, or community organization."}
   ]'::jsonb,
   'https://drive.google.com/file/d/1H5t8cvsjz-bv7fPRYk-OCgc4IMN2BBPg/view?usp=sharing',
   true)
ON CONFLICT (year) DO NOTHING;

-- Award Deadlines
INSERT INTO award_deadlines (award_key, award_name, description, deadline, link, link_label, display_order) VALUES
  ('four_star_chapter', '4-Star Chapter Award', 'Utah''s premier chapter recognition. Evaluated on membership growth, programming, competition, community service, and adviser involvement.', '2026-03-02', 'https://drive.google.com/file/d/1HMXKmHYJOVrwluN8Bkj4o2hBOB3ioXPZ/view?usp=sharing', 'View Application', 1),
  ('state_goals', 'State Goals Application', 'Chapters that complete Utah FCCLA''s state goals earn recognition at State Leadership Conference.', '2026-03-02', '/about/theme-goals', 'View This Year''s Goals', 2),
  ('adviser_member_awards', 'Adviser & Member Awards', 'Nominate outstanding advisers, members, and officers. Includes Adviser of the Year, Member of the Year, and Officer of the Year.', '2026-03-02', '/about/contact', 'Submit a Nomination', 3),
  ('national_awards', 'National Awards (via Portal)', 'National Award of Excellence and National Programs recognition submitted through FCCLA National Portal.', '2026-03-01', 'https://fcclainc.org/engage/recognition', 'National Recognition Hub', 4)
ON CONFLICT (award_key) DO NOTHING;
