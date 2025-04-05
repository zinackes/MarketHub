import {BoxIcon} from "lucide-react";

export default function Card({children, className, ...props}){
    return (
        <div className="border p-4 px-5 rounded-md bg-white shadow-sm w-2/12">
            <div className="flex gap-2">
                {props.imgLink && (
                    <div className={`mt-1 p-1 max-h-5 max-w-5 rounded-md flex items-center ${props.bgImgColor}`}>{props.imgLink}</div>
                )}
                <div className="flex items-start flex-col">
                    <p className="font-rubik font-bold text-2xl w-full">{props.number}</p>
                    <p className="text-xs">{props.title}</p>
                </div>
            </div>

        </div>
    )
}
