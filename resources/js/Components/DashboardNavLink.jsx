import { Link } from '@inertiajs/react';

export default function DashboardNavLink({ children, className = '', icon, link, isActive, ...props }) {
    return (
        <Link
            href={link}
            {...props}
            className={`rounded flex p-3 w-full cursor-pointer items-center justify-start gap-3 hover:bg-gray-200 duration-300
            ${isActive ? 'bg-gray-200/80' : ''} ${className}`}
        >
            {icon}
            <span>{children}</span>
        </Link>
    );
}
