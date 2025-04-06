import { usePage } from '@inertiajs/react';
import { LayoutGrid, Package, PlusSquare, ShoppingCart, PackageCheck, PackageX, BarChart, Users, Settings, MessageCircleMore } from 'lucide-react';
import DashboardNavLink from "@/Components/DashboardNavLink.jsx";
import CreateProductFormButton from "@/Components/CreateProductFormButton.jsx";

export default function DashboardNavLinks() {
    const { url } = usePage();

    console.log("url " + url);

    const navLinks = [
        {
            id: 1,
            text: "Tableau de bord",
            icon: <LayoutGrid size={20} />,
            link: route('dashboard'),
            fakeLink: '/dashboard',
        },
        {
            id: 2,
            text: "Mes Produits",
            icon: <Package size={20} />,
            link: route('dashboard.products'),
            fakeLink: '/dashboard/products',
        },
        {
            id: 3,
            text: "Ajouter un Produit",
            icon: <PlusSquare size={20} />,
            link: "/dashboard/products/create"
        },
        {
            id: 4,
            text: "Commandes",
            icon: <ShoppingCart size={20} />,
            link: "/dashboard/orders"
        },
        {
            id: 5,
            text: "Commandes livrées",
            icon: <PackageCheck size={20} />,
            link: "/dashboard/orders/delivered"
        },
        {
            id: 6,
            text: "Commandes annulées",
            icon: <PackageX size={20} />,
            link: "/dashboard/orders/cancelled"
        },
        {
            id: 7,
            text: "Clients",
            icon: <Users size={20} />,
            link: "/dashboard/customers"
        },
        {
            id: 8,
            text: "Statistiques",
            icon: <BarChart size={20} />,
            link: "/dashboard/statistics"
        },
        {
            id: 9,
            text: "Paramètres",
            icon: <Settings size={20} />,
            link: "/dashboard/settings"
        }
    ];

    return (
        <>
            {navLinks.map(navlink => (
                navlink.id === 3 ? (
                    <CreateProductFormButton key={navlink.id} isNavLink={true} navLinksIcon={navlink.icon}>
                        Ajouter un produit
                    </CreateProductFormButton>
                ) : (
                    <DashboardNavLink
                        key={navlink.id}
                        icon={navlink.icon}
                        link={navlink.link}
                        isActive={url === navlink.link}
                    >
                        {navlink.text}
                    </DashboardNavLink>
                )
            ))}
        </>

    );
}
