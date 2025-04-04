import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SideBarLayout from "@/Layouts/SideBarLayout.jsx";
import DashboardNavLink from "@/Components/DashboardNavLink.jsx";
import Card from "@/Components/Card.jsx";
import {BoxIcon} from "lucide-react";
import { Head } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import CreateVendorForm from "@/Components/CreateVendorForm.jsx";
import { usePage } from '@inertiajs/react';

export default function Dashboard({products, vendor}, props) {
    const { flash } = usePage().props;

    let navLinks = [
        {
            id: 0,
            text: "Dashboard",
            icon: "fa-solid fa-house",
            link: "/",

        }
    ]

    console.log(vendor);

    return (

        <>

            {flash.success && (
                <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded mb-4">
                    ✅ {flash.success}
                </div>
            )}

            <AuthenticatedLayout
            >


                {vendor.length !== 0 && (
                    <>
                        <SideBarLayout className="max-w-48">
                            {navLinks.map(navlink =>
                                <DashboardNavLink
                                    key={navlink.id}
                                    icon={navlink.icon}>
                                    {navlink.text}
                                </DashboardNavLink>
                            )}
                        </SideBarLayout>

                        <div className="min-w-screen min-h-screen p-5">
                            <div className="flex flex-wrap">
                                <Card
                                    imgLink={<BoxIcon color="#fff" size={15} />}
                                    number={products.length}
                                    title="Vente totale"
                                />
                            </div>
                        </div>
                    </>
                )}

                {vendor.length === 0 && (
                    <div className="h-screen w-screen flex items-center justify-center flex-col gap-10">
                        <h1 className="text-6xl text-center uppercase font-bold">Il semblerait que vous <br/> n'ayez pas encore de boutique</h1>
                        <CreateVendorForm>

                        </CreateVendorForm>
                    </div>
                )}


            </AuthenticatedLayout>
        </>

    );
}
