import TransparentInput from "@/Components/TransparentInput.jsx";
import {useForm} from "@inertiajs/react";


export default function ProductPageLayout({category_id, className, isShowing, data, setData, processing, onSubmit, errors, product, productDetails, ...props}) {

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <div className="flex flex-1 items-stretch justify-evenly">
            <div className="w-1/3">
                <img src="/assets/box.png" alt="Image" className="w-full h-auto max-h-96 object-contain"/>
            </div>
            <div className="flex flex-col w-1/2 gap-7">
                <h1 className="w-full border-b border-gray-300">
                    {isShowing ? (
                        <span>bla</span>
                    ) : (
                        <TransparentInput
                            id="name"
                            name="name"
                            value={data.name}
                            placeholder="Le titre de votre produit"
                            onChange={handleChange}
                            type="textarea"
                            textType="title"
                            required
                        >

                        </TransparentInput>
                    )}
                </h1>
                <div>
                    <h2 className="flex items-center">
                        {isShowing ? (
                            <span className="text-2xl">saasa</span>
                        ) : (
                            <TransparentInput
                                id="price"
                                name="price"
                                value={data.price}
                                onChange={handleChange}
                                className="h-full"
                                type="number"
                                placeholder="Prix du produit (en €)"
                                textType="price"
                                required
                            >

                            </TransparentInput>
                        )}
                        <span className="text-3xl">€</span>
                    </h2>
                </div>
                <div className="flex flex-1 flex-col">
                    <h2 className="uppercase font-bold mb-5">Description</h2>
                    {isShowing ? (
                        <p></p>
                    ) : (
                        <TransparentInput
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            className="h-full"
                            type="textarea"
                            placeholder="La description de votre produit"
                            textType="description"
                            required
                        >

                        </TransparentInput>
                    )}
                </div>
            </div>
        </div>
    )
}
