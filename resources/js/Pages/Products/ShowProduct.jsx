import GuestLayout from "@/Layouts/GuestLayout.jsx";
import ProductPageLayout from "@/Layouts/ProductPageLayout.jsx";
import { getProductForm, getProductDetailForm } from "@/Variables/Product.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useEffect, useState} from "react";

export default function ShowProduct({product, productDetails, category_id}) {

    const [productData, setProductData] = useState({});
    const [productDetailData, setProductDetailData] = useState({});

    useEffect(() => {
        setProductData(getProductForm(product));
        setProductDetailData(getProductDetailForm(productDetails));
    }, [])

    useEffect(() => {
    }, [productDetailData])

    return (
        <GuestLayout className="!items-start">

                <ProductPageLayout
                    category_id={category_id.toString()}
                    product={productData}
                    productDetails={productDetailData[category_id]}
                    isShowing={true}
                />
        </GuestLayout>
    )
}
