import {BoxIcon, ChevronsRight} from "lucide-react";
import {Link} from "@inertiajs/react";

export default function Card({children, className, imgLink, title, number, icon, bgImgColor, maxIconSize,
                                 cardSize, pageLink,  ...props}){
    return (
        <div className={`border p-4 px-5 rounded-md bg-white shadow-sm ${cardSize} ${className}`}>
            <div className="flex gap-2">
                {imgLink || icon && (
                    <div className={`mt-1 p-1 max-h-${maxIconSize} max-w-${maxIconSize} rounded-md flex items-center ${bgImgColor}`}>{imgLink} {icon} </div>
                )}
                <div className="flex items-start flex-col">
                    <p className="font-rubik font-bold text-2xl">{number}</p>
                    <p className="text-xs">{title}</p>
                    {pageLink && (
                        <Link
                            className="relative group flex gap-2 items-center mt-10 text-xs ml-auto text-gray-700 overflow-hidden"
                        >
                            <span className="relative z-10 transition-colors duration-300 py-1 pl-3 group-hover:text-white">
                                Voir vos commandes
                            </span>
                            <ChevronsRight size={15} color="#374151" className="relative z-10 duration-300 group-hover:stroke-white mr-2"/>

                            <span className={`absolute left-0 top-0 h-full w-0 rounded-lg ${bgImgColor} transition-all duration-300 group-hover:w-full z-0`} />
                        </Link>

                    )}
                </div>
            </div>

        </div>
    )
}
