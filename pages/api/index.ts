import { NextApiRequest, NextApiResponse } from 'next';
import { supabase, Visits } from '../../lib/supabase';
import { getClientIp } from '@supercharge/request-ip';
import _ from 'lodash';
import { label } from '../../lib/svg';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let IP = getClientIp(req);
    let { data, error } = await supabase.from("visitors").select('*')
    if (!_.find(data, d => d.ip === IP)) {
        await supabase.from("visitors").insert([{ ip: IP }]);
    } else {
        await supabase.from("visitors").update({ count: data[0].count + 1 }).match({ ip: IP });
    }
    res.setHeader("content-type", "image/svg+xml");
    let { uniqueHits, totalHits } = await Visits();
    res.end(label(uniqueHits, totalHits));
}