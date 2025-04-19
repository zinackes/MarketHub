import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SideBarLayout from "@/Layouts/SideBarLayout.jsx";
import DashboardNavLink from "@/Components/DashboardNavLink.jsx";
import Card from "@/Components/Card.jsx";
import {BoxIcon, ScanBarcode, Package} from "lucide-react";
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
                        <div className="flex min-h-screen w-full">
                            <div className="w-64 bg-white border-r">
                                <SideBarLayout>
                                    <DashboardNavLinks/>
                                </SideBarLayout>
                            </div>

                            <div className="flex-1 p-6 bg-gray-50">
                                <div className="grid grid-cols-4 gap-4">
                                    <Card
                                        icon={<BoxIcon color="#fff" size={15}/>}
                                        className="col-span-1"
                                        number={soldProducts.length}
                                        bgImgColor="bg-orange-500"
                                        maxIconSize={5}
                                        title="Vente totale"
                                    />
                                    <Card
                                        icon={<ScanBarcode color="#fff" size={15}/>}
                                        className="col-span-1"
                                        maxIconSize={5}
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
                        <Card
                            icon={<Package color="#fff"/>}
                            className="!rounded-xl"
                            pageLink="/"
                            maxIconSize={7}
                            bgImgColor="bg-orange-500"
                            cardSize="w-4/12"
                            number="Mes commandes"
                            title="Retrouvez ici l’historique de vos achats, le suivi de vos livraisons et les détails de chaque commande."
                        >
                        </Card>
                    </div>
                )}


                    </AuthenticatedLayout>
                    </>

                    );
                }
