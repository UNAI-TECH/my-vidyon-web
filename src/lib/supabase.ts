// src/lib/supabase.ts
// Supabase client configuration

import { createClient } from '@supabase/supabase-js'

// These values are SAFE to expose in frontend code
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

// Create Supabase client with anon key (public, safe to use in frontend)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Contact form submission function
export async function submitContactForm(data: {
    name: string
    email: string
    phone?: string
    institution?: string
    message: string
}) {
    try {
        // Call the Edge Function
        const { data: responseData, error } = await supabase.functions.invoke('send-contact-email', {
            body: data
        })

        if (error) {
            throw error
        }

        return {
            success: true,
            message: responseData.message || 'Message sent successfully!'
        }
    } catch (error: any) {
        console.error('Contact form error:', error)
        return {
            success: false,
            error: error.message || 'Failed to send message. Please try again.'
        }
    }
}
