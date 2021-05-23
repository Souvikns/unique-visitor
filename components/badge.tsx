import { label } from '../lib/svg';
interface Props {
    hostName?: string,
    uniqueVisitor?: number,
    totalVisitor?: number
}

const Badge = (props: Props) => {

    return <div className="my-5">
        <div>
            <h1 className="text-2xl font-bold font-mono text-blue-800">Copy Badge tag to start counting hits</h1>

            <div className="py-5">
                <h1>markdown</h1>
                <h1 className="px-2 py-4 bg-blue-100 font-mono font-bold">{`![Visitors](${props.hostName}api)`}</h1>
            </div>

            <div className="py-5">
                <h1>html</h1>
                <h1 className="px-2 py-4 bg-blue-100 font-mono font-bold">{`<img src="${props.hostName}api" alt="Visitors" />`}</h1>
            </div>
        </div>

        <h1 className="text-2xl font-mono font-bold text-blue-800 py-2">Label</h1>
        <div dangerouslySetInnerHTML={{ __html: label(props.uniqueVisitor, props.totalVisitor) }} />

    </div>
};


export default Badge;