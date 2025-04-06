import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SideBarLayout from "@/Layouts/SideBarLayout.jsx";
import DashboardNavLink from "@/Components/DashboardNavLink.jsx";
import Card from "@/Components/Card.jsx";
import {BoxIcon, ScanBarcode} from "lucide-react";
import {
    Package,
    PlusSquare,
    ShoppingCart,
    PackageCheck,
    PackageX,
    BarChart,
    Users,
    Settings,
    Store,
    MessageCircleMore
} from "lucide-react";
import { Head } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import DashboardNavLinks from "@/Components/DashboardNavLinks.jsx";
import CreateVendorForm from "@/Components/CreateVendorForm.jsx";
import { usePage } from '@inertiajs/react';
import CardLink from "@/Components/CardLink.jsx";

export default function Dashboard({products, vendor, soldProducts, userRole}, props) {
    const { flash } = usePage().props;


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
                        <div className="flex min-h-screen">
                            <div className="w-64 bg-white border-r">
                                <SideBarLayout>
                                    <DashboardNavLinks/>
                                </SideBarLayout>
                            </div>

                            <div className="flex-1 w-screen p-6 bg-gray-50">
                                <div className="flex flex-wrap gap-4">
                                    <Card
                                        imgLink={<BoxIcon color="#fff" size={15}/>}
                                        number={soldProducts.length}
                                        bgImgColor="bg-orange-500"
                                        title="Vente totale"
                                    />
                                    <Card
                                        imgLink={<ScanBarcode color="#fff" size={15}/>}
                                        number={products.length}
                                        bgImgColor="bg-red-500"
                                        title="Produits en stock"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {vendor.length === 0 && userRole === "vendor" && (
                    <div className="h-screen w-screen flex items-center justify-center flex-col gap-10">
                        <h1 className="text-6xl text-center uppercase font-bold">Il semblerait que vous <br/> n'ayez
                            pas encore de boutique</h1>
                        <CreateVendorForm>

                        </CreateVendorForm>
                        </div>
                    )}


                {userRole === "customer" && (
                    <div className="flex w-screen h-screen items-center justify-center">
                        <CardLink>
                            Mes commandes
                        </CardLink>
                    </div>
                )}


                    </AuthenticatedLayout>
                    </>

                    );
                }
