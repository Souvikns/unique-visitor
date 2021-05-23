require('dotenv').config();

module.exports = {
    env: {
        supabaseUrl: process.env.SUPABASE_URL,
        anonPublicKey: process.env.ANON_PUBLIC_KEY
    }
}