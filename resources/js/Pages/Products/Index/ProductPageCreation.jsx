import GuestLayout from "@/Layouts/GuestLayout.jsx";
import ProductPageLayout from "@/Layouts/ProductPageLayout.jsx";
import { getProductForm, getProductDetailForm } from "@/Variables/Product.jsx";
import {useForm} from "@inertiajs/react";


export default function ProductPageCreation({category_id, product, productDetails}) {


    const productForm = getProductForm(product);
    const productDetailForm = getProductDetailForm(productDetails);

    const formData = {
        ...productForm,
        ...(productDetailForm[category_id] || {}),
    };


    const { data, setData, post, processing, errors, reset } = useForm(formData);

    const submit = (e) => {
        e.preventDefault();


    }

    return (
        <GuestLayout className="!items-start">

            <ProductPageLayout
                category_id={category_id}
                data={data}
                setData={setData}
                processing={processing}
                errors={errors}
                onSubmit={submit}
            />
        </GuestLayout>
    )
}
