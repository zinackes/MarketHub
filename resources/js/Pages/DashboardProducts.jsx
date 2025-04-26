import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import SideBarLayout from "@/Layouts/SideBarLayout.jsx";
import DashboardNavLinks from "@/Components/DashboardNavLinks.jsx";
import {BoxIcon} from "lucide-react";
import Table from "@/Components/Table.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import CreateProduct from "@/Components/ProductManager.jsx";
import {usePage} from "@inertiajs/react";
import ProductManager from "@/Components/ProductManager.jsx";
import Success from "@/flash/success.jsx";

let TableTitles = [
    {
        id: 0,
        text: "Produits"
    },
    {
        id: 1,
        text: "Prix"
    },
    {
        id: 2,
        text: "Quantité en stock"
    },
    {
        id: 3,
        text: '',
    }
]

export default function DashboardProducts({products}){

    const { flash } = usePage().props;

    return(

        <>

            {flash.success && (
                <Success flash={flash} />
            )}


            <AuthenticatedLayout>

                <>
                    <div className="flex min-h-screen w-screen">
                        <div className="w-64 bg-white border-r">
                            <SideBarLayout>
                                <DashboardNavLinks/>
                            </SideBarLayout>
                        </div>

                        <div className="flex-1 p-6 bg-gray-50">
                            <Table
                                titles={TableTitles}
                                bigTitle={"Vos produits"}
                                content={products}
                            >
                            </Table>
                        </div>
                    </div>

                </>
            </AuthenticatedLayout>

        </>
    )
}
