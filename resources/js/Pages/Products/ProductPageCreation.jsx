import GuestLayout from "@/Layouts/GuestLayout.jsx";
import ProductPageLayout from "@/Layouts/ProductPageLayout.jsx";
import {getProductData, getProductDetailData} from "@/Variables/Product.jsx";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { useEffect, useState } from "react";

export default function ProductPageCreation({ slug, category_id, product, productDetails }) {

    const [productForm, setproductForm] = useState([]);
    const [productDetailForm, setProductDetailForm] = useState([]);

    const [formData, setFormData] = useState({});

    const { data, setData, post, processing, errors, reset } = useForm(formData);

    // fetch data from Product.jsx
    useEffect(() => {
        const form = getProductData(product);
        const detailForm = getProductDetailData(productDetails, category_id);

        setproductForm(form);
        setProductDetailForm(detailForm);

        const combinedFormData = {
            ...form,
            ...(detailForm || {}),
        };

        setFormData(combinedFormData);
    }, [product, productDetails, category_id]);


    // Update catgeory id in data
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
                    product={productForm}
                    productDetails={productDetailForm}
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
