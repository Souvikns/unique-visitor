import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { Visits } from '../lib/supabase';
import Axios from 'axios';
import Appbar from '../components/appbar';
import Table from '../components/table';
import Badge from '../components/badge';


const Index = ({ uniqueVisitors, totalHits, error }) => {
    const userName = process.env.REACT_APP_GITHUB_USER_NAME;

    const [avatar, setAvatar] = useState('');

    const fetchGithubAvatar = async () => {
        try {
            console.log("userName", userName)
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

export const getStaticProps: GetStaticProps = async (context) => {
    let { totalHits, uniqueHits, error } = await Visits()
    return {
        props: {
            uniqueVisitors: uniqueHits,
            totalHits: totalHits,
            error
        }
    }
}