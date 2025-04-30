import GuestLayout from "@/Layouts/GuestLayout.jsx";
import ProductPageLayout from "@/Layouts/ProductPageLayout.jsx";


export default function ProductPageCreation({className}) {
    return (
        <GuestLayout className="!items-start">

            <ProductPageLayout/>
        </GuestLayout>
    )
}
