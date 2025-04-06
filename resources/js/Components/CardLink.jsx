import {Link} from "@inertiajs/react";

export default function CardLink({children, className}){

    return (
        <Link className="bg-white shadow-sm rounded-md px-7 py-6">
            {children}
        </Link>
    )
}
