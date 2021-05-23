import { createClient } from '@supabase/supabase-js';




export const getSupabaseClient = () => createClient(process.env.supabaseUrl, process.env
    .anonPublicKey);

export const supabaseClientForTest = (url: string, key: string) => createClient(url, key);


