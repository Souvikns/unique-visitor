
interface Props {
    avatar?: string,
    userName?: string
}

const Appbar = (props: Props) => {
    return <div className="my-5">
        <div className="flex">
            <div className="flex-initial">
                <img className="w-20" src={props.avatar} alt="" />
            </div>

            <div className="flex-initial py-7">
                <a href={`http://github.com/${props.userName}`} target="_blank" rel="noopener noreferrer">
                    <h1 className="font-mono text-2xl antialiased text-blue-800">{props.userName}</h1>
                </a>
            </div>

        </div>
    </div>
}

export default Appbar;