import GuestLayout from "@/Layouts/GuestLayout.jsx";
import ProductPageLayout from "@/Layouts/ProductPageLayout.jsx";
import {getProductData, getProductDetailData} from "@/Variables/Product.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useEffect, useState} from "react";

export default function ShowProduct({product, productDetails, category_id}) {

    const [productData, setProductData] = useState([]);
    const [productDetailData, setProductDetailData] = useState([]);


    useEffect(() => {
        setProductData(getProductData(product));
        setProductDetailData(getProductDetailData(productDetails, category_id));
    }, [])


    return (
        <GuestLayout className="!items-start">

                <ProductPageLayout
                    category_id={category_id.toString()}
                    product={productData}
                    productDetails={productDetailData}
                    isShowing={true}
                />
        </GuestLayout>
    )
}
