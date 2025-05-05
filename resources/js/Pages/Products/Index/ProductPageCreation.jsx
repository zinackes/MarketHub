import GuestLayout from "@/Layouts/GuestLayout.jsx";
import ProductPageLayout from "@/Layouts/ProductPageLayout.jsx";
import { getProductForm, getProductDetailForm } from "@/Variables/Product.jsx";
import {useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";


export default function ProductPageCreation({slug, category_id, product, productDetails}) {


    const productForm = getProductForm(product);
    const productDetailForm = getProductDetailForm(productDetails);

    const formData = {
        ...productForm,
        ...(productDetailForm[category_id] || {}),
    };


    const { data, setData, post, processing, errors, reset } = useForm(formData);

    const submit = (e) => {
        e.preventDefault();

        post(route(`product.${slug}.store`));
    }

    return (
        <GuestLayout className="!items-start">

            <form className="w-full flex flex-col" onSubmit={submit}>
                <ProductPageLayout
                    category_id={category_id}
                    data={data}
                    setData={setData}
                    processing={processing}
                    errors={errors}
                />

                <div className="flex justify-center mt-4">
                    <PrimaryButton disabled={processing} type="submit">
                        Créer le produit
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    )
}
