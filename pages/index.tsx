import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { label } from '../lib/svg';
import Axios from 'axios';
import Appbar from '../components/appbar';
import Table from '../components/table';
import Badge from '../components/badge';


const Index = ({ uniqueVisitors, totalHits, error }) => {
    const userName = process.env.githubUserName;

    const [avatar, setAvatar] = useState('');

    const fetchGithubAvatar = async () => {
        try {
            let res = await Axios({ url: `https://api.github.com/users/${userName}`, method: "GET" });
            setAvatar(res.data.avatar_url);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchGithubAvatar();
    }, [])

    let hostName: string | undefined;
    if (typeof window !== "undefined") {
        hostName = window.location.href;
    }
    if (error) {
        return <h1>Error</h1>
    }
    return <div className="lg:mx-52 md:mx-36 sm: mx-16">
        <Appbar avatar={avatar} userName={userName} />

        <Table uniqueVisitors={uniqueVisitors} totalVisits={totalHits} />

        <Badge hostName={hostName} uniqueVisitor={uniqueVisitors} totalVisitor={totalHits} />

    </div>


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