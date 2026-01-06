-- SQL Migration: Create contact_submissions table
-- Run this in Supabase SQL Editor

-- Create table for storing contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  institution TEXT,
  message TEXT NOT NULL,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  email_sent BOOLEAN DEFAULT FALSE,
  email_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy: Only authenticated users (admins) can read submissions
CREATE POLICY "Admins can view all submissions" ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create policy: Service role can insert (used by Edge Function)
CREATE POLICY "Service role can insert submissions" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Grant permissions
GRANT ALL ON contact_submissions TO service_role;
GRANT SELECT ON contact_submissions TO authenticated;

-- Add comment
COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from the website';
