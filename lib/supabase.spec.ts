require('dotenv').config();
import { supabaseClientForTest } from './supabase';

describe('supabase client', () => {
    it("should exist", () => {
        expect(supabaseClientForTest(
            process.env.SUPABASE_URL,
            process.env.ANON_PUBLIC_KEY)
        ).toBeTruthy();
    })
})
