
interface Props {
    uniqueVisitors?: string,
    totalVisits?: string
}

const Table = (props: Props) => {

    return <div className="my-5">
        <table className=" border border-collapse text-left">
            <thead>
                <tr>
                    <th className="border px-4 text-3xl py-4">Visitors</th>
                    <th className="border px-4 text-3xl py-4">Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 text-xl">Unique Visitors</td>
                    <td className="border px-4 text-xl">{props.uniqueVisitors}</td>
                </tr>
                <tr>
                    <td className="border px-4 text-xl">Total visits</td>
                    <td className="border px-4 text-xl">{props.totalVisits}</td>
                </tr>
            </tbody>
        </table>
    </div>
};


export default Table;