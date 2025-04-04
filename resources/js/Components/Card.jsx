
export default function Card({children, className, ...props}){
    return (
        <div className="border p-3">
            <div className="flex gap-3">
                {props.imgLink && <img className="max-w-5" src={props.imgLink} alt=""/>}
            </div>

        </div>
    )
}
