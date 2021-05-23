import { createClient } from '@supabase/supabase-js';




export const supabase = createClient(process.env.supabaseUrl, process.env
    .anonPublicKey);


export const Visits = async () => {
    let { data, error } = await supabase.from('visitors').select('*')
    let totalHit = 0;
    data.forEach(d => {
        totalHit = totalHit + d.count;
    })

    return {
        uniqueHits: data.length,
        totalHits: totalHit,
        error
    }
}