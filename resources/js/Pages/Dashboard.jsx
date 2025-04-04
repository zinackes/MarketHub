import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SideBarLayout from "@/Layouts/SideBarLayout.jsx";
import DashboardNavLink from "@/Components/DashboardNavLink.jsx";
import Card from "@/Components/Card.jsx";
import { Head } from '@inertiajs/react';

export default function Dashboard({products}) {

    let navLinks = [
        {
            id: 0,
            text: "Dashboard",
            icon: "fa-solid fa-house",
            link: "/",

        }
    ]

    return (
        <AuthenticatedLayout
        >

            <SideBarLayout className="max-w-48">
                {navLinks.map(navlink =>
                    <DashboardNavLink
                        key={navlink.id}
                        icon={navlink.icon}>
                        {navlink.text}
                    </DashboardNavLink>
                )}
            </SideBarLayout>

            <div className="min-w-screen min-h-screen">
                {products.map(product => (
                    <div key={product.id} className="mb-4 p-4 border rounded">
                        <h2 className="text-lg font-bold">{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Prix : {product.price} €</p>
                        <p>Stock : {product.stock_quantity}</p>
                    </div>
                ))}
            </div>

        </AuthenticatedLayout>
    );
}
