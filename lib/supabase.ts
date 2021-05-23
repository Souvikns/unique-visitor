import { createClient } from '@supabase/supabase-js';

console.log(process.env.supabaseUrl)

export const supabase = createClient(process.env.supabaseUrl, process.env.anonPublicKey);


