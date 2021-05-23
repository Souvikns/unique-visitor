import { supabase } from '../lib/supabase';
const Index = ({ uniqueVisitors, totalHits, error }) => {
    if (error) {
        return <h1>Error</h1>
    }
    return <>
        <h2>{"Unique Visitors: "} {uniqueVisitors}</h2>
        <h2>{"Total Visits: "} {totalHits}</h2>
        <img src={`https://img.shields.io/badge/unique%20visitors-${uniqueVisitors}-green`} alt="" />
    </>
}

export default Index;

Index.getInitialProps = async ({ req, res }: any) => {
    let { data, error } = await supabase.from('visitors').select('*')
    let totalHit = 0;
    data.forEach(d => {
        totalHit = totalHit + d.count;
    })
    return {
        uniqueVisitors: data.length,
        totalHits: totalHit,
        error
    }
}