import {Link} from "@inertiajs/react";

export default function CardLink({children, description, icon, className}){

    return (
        <Link className="bg-white shadow-sm rounded-lg px-7 py-6 flex-col flex gap-3">
            <div className="flex gap-3 items-center">
                <div className="bg-orange-500 p-1 rounded-lg">
                    {icon}
                </div>
                <h3 className="font-bold text-xl">{children}</h3>
            </div>
            <span>
                {description}
            </span>

        </Link>
    )
}
