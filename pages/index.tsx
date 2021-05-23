import { getSupabaseClient } from '../lib/supabase';
const Index = ({ data }) => {
    console.log(data);
    return <>
        <h1>Hello World</h1>
    </>
}

export default Index;

Index.getInitialProps = async ({ req, res }: any) => {
    let supabase = getSupabaseClient();
    let { data } = await supabase.from('visitors');

    return { data }
}