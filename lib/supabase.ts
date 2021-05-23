import { createClient } from '@supabase/supabase-js';




export const supabase = createClient(process.env.supabaseUrl, process.env
    .anonPublicKey);

