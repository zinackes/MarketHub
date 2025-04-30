import GuestLayout from "@/Layouts/GuestLayout.jsx";
import ProductPageLayout from "@/Layouts/ProductPageLayout.jsx";


export default function ProductPageCreation({category_id}) {
    return (
        <GuestLayout className="!items-start">

            <ProductPageLayout category_id={category_id}/>
        </GuestLayout>
    )
}
