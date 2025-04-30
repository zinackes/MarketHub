import TransparentInput from "@/Components/TransparentInput.jsx";
import {useForm} from "@inertiajs/react";


export default function ProductPageLayout({category_id, className, isShowing, product, productDetails, ...props}) {

    const productForm =         {
        name: product?.name || '',
        slug: product?.slug || '',
        description: product?.description || '',
        price: product?.price || '',
        stock_quantity: product?.stock_quantity || '',
        category_id: product?.category_id || '',
    }

    const productDetailForm = [
        {
            size: productDetails?.size || '',
            material: productDetails?.material || '',
            gender: productDetails?.gender || '',
            season: productDetails?.season || '',
            type: productDetails?.type || '',
        },
        {
            model: productDetails?.model || '',
            condition: productDetails?.condition || '',
            warranty: productDetails?.warranty || '',
            capacity: productDetails?.capacity || '',
            device_type: productDetails?.device_type || '',
        },
        {
            type: productDetails?.type || '',
            material: productDetails?.material || '',
        },
        {
            type: productDetails?.type || '',
            material: productDetails?.material || '',
            dimensions: productDetails?.dimensions || '',
            condition: productDetails?.condition || '',
        },
        {
            age_recommendation: productDetails?.age_recommendation || '',
            toy_type: productDetails?.toy_type || '',
            material: productDetails?.material || '',
            dimensions: productDetails?.dimensions || '',
            gender: productDetails?.gender || '',
        },
        {
            product_type: productDetails?.product_type || '',
            volume: productDetails?.volume || '',
            main_ingredients: productDetails?.main_ingredients || '',
            target: productDetails?.target || '',
        },
        {
            food_type: productDetails?.food_type || '',
            weight_volume: productDetails?.weight_volume || '',
            expiration_date: productDetails?.expiration_date || '',
            is_organic: productDetails?.is_organic || '',
            allergens: productDetails?.allergens || '',
        }
    ]

    const formData = {
        ...productForm,
        ...(productDetailForm[category_id] || {}),
    };

    console.log(formData);

    const { data, setData, post, processing, errors, reset } = useForm(formData);

    return (
        <div className="flex flex-1 items-start justify-evenly">
            <div>
                <img src="/assets/box.png" alt="Image" className="w-100"/>
            </div>
            <h1 className="w-1/4">
                {isShowing ? (
                    <span>bla</span>
                ) : (
                    <TransparentInput
                        placeholder="Le titre de votre produit"
                        type="title"
                    >

                    </TransparentInput>
                )}
            </h1>
        </div>
    )
}
