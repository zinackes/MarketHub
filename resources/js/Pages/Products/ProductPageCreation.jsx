import GuestLayout from "@/Layouts/GuestLayout.jsx";
import ProductPageLayout from "@/Layouts/ProductPageLayout.jsx";
import { getProductForm, getProductDetailForm } from "@/Variables/Product.jsx";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { useEffect, useState } from "react";

export default function ProductPageCreation({ slug, category_id, product, productDetails }) {

    const [productForm, setProductForm] = useState({});
    const [productDetailForm, setProductDetailForm] = useState({});

    const [formData, setFormData] = useState({});

    const { data, setData, post, processing, errors, reset } = useForm(formData);

    useEffect(() => {
        const form = getProductForm(product);
        const detailForm = getProductDetailForm(productDetails);
        setProductForm(form);
        setProductDetailForm(detailForm);

        const combinedFormData = {
            ...form,
            ...(detailForm[category_id] || {}),
        };

        setFormData(combinedFormData);
    }, [product, productDetails, category_id]);

    useEffect(() => {
        setData('category_id', category_id);
    }, [category_id]);

    const submit = (e) => {
        e.preventDefault();
        post(route(`product.${slug}.store`));
    };

    return (
        <GuestLayout className="!items-start">
            <form className="w-full flex flex-col" onSubmit={submit}>
                <ProductPageLayout
                    category_id={category_id}
                    data={data}
                    setData={setData}
                    processing={processing}
                    errors={errors}
                    product={product}
                    productDetails={productDetails}
                />
                <div className="flex justify-center mt-4">
                    <PrimaryButton disabled={processing} type="submit">
                        Créer le produit
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
