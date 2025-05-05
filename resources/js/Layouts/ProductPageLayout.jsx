import TransparentInput from "@/Components/TransparentInput.jsx";
import EditableTransparentInputField from "@/Components/EditableTransparentInputField.jsx";
import { useForm } from "@inertiajs/react";
import SeeMoreButton from "@/Components/SeeMore.jsx";
import SeeMore from "@/Components/SeeMore.jsx";


export default function ProductPageLayout({
                                              category_id,
                                              className,
                                              isShowing,
                                              data,
                                              setData,
                                              processing,
                                              onSubmit,
                                              errors,
                                              product,
                                              productDetails,
                                              ...props
                                          }) {


    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };


    return (
        <div className="flex flex-1 items-stretch justify-evenly">
            <div className="w-1/3">
                <img
                    src="/assets/box.png"
                    alt="Image"
                    className="w-full h-auto max-h-96 object-contain"
                />
            </div>
            <div className="flex flex-col w-1/2 gap-7">
                <h1 className="w-full border-b border-gray-300">
                    <EditableTransparentInputField
                        condition={isShowing}
                        name="name"
                        value={data.name}
                        handleChange={handleChange}
                        type="textarea"
                        textType="title"
                        placeholder="Le titre de votre produit"
                        inputClassName="w-full"
                    />
                </h1>

                <div>
                    <h2 className="flex items-center">
                        <EditableTransparentInputField
                            condition={isShowing}
                            name="price"
                            value={data.price}
                            handleChange={handleChange}
                            type="number"
                            textType="price"
                            placeholder="Prix du produit"
                            inputClassName="h-full text-xl"
                        />
                        <span className="text-3xl">€</span>
                    </h2>
                </div>

                <SeeMore
                    className="flex flex-col gap-3"
                    maxHeight={40}
                >
                    <div className="flex">
                        <h3 className="font-medium w-1/6 mr-4">Marque</h3>
                        <EditableTransparentInputField
                            condition={isShowing}
                            name="brand"
                            value={data.brand}
                            handleChange={handleChange}
                            type="text"
                            textType="brand"
                            placeholder="La marque de votre produit"
                            inputClassName="w-full"
                        />
                    </div>

                    {category_id === "1" && (
                        <div className="flex">
                            <h3 className="font-medium w-1/6 mr-4">Marque</h3>
                            <EditableTransparentInputField
                                condition={isShowing}
                                name="brand"
                                value={data.brand}
                                handleChange={handleChange}
                                type="text"
                                textType="brand"
                                placeholder="La marque de votre produit"
                                inputClassName="w-full"
                            />
                        </div>
                    )}
                    <SeeMore.Button>
                        Voir plus
                    </SeeMore.Button>
                </SeeMore>

                <div className="flex flex-1 flex-col">
                    <h2 className="uppercase font-bold mb-5">
                        à propos de l'article
                    </h2>
                    <EditableTransparentInputField
                        condition={isShowing}
                        name="description"
                        value={data.description}
                        handleChange={handleChange}
                        type="textarea"
                        textType="description"
                        placeholder="La description de votre produit"
                        inputClassName="h-full"
                    />
                </div>
            </div>
        </div>
    );
}
