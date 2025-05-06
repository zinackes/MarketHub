import TransparentInput from "@/Components/TransparentInput.jsx";
import { useForm } from "@inertiajs/react";
import SeeMoreButton from "@/Components/SeeMore.jsx";
import SeeMore from "@/Components/SeeMore.jsx";
import { getElectronics, getClothings, getAccessories, toys, foodProducts, beautyProducts, homeFurniture } from "@/Variables/Product.jsx";
import { frenchToEnglishColors } from "@/Variables/Colors.jsx";
import { useState } from "react";

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

    const [color, setColor] = useState("");


    const getEnglishColor = (frenchColor) => {
        return frenchToEnglishColors[frenchColor.toLowerCase()] || frenchColor;
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
                    {isShowing ? (
                        <span  className="font-bold text-5xl">{product.name}</span>
                    ) : (
                        <TransparentInput
                            id="name"
                            name="name"
                            value={data?.name}
                            onChange={handleChange}
                            className="w-full"
                            type="textarea"
                            placeholder="Le titre de votre produit"
                            textType="title"
                        />
                    )}
                </h1>

                <div>
                    <h2 className="flex items-center">
                        {isShowing ? (
                            <span className="text-xl">{product.price} €</span>
                        ) : (
                            <>
                                <TransparentInput
                                    id="price"
                                    name="price"
                                    value={data.price}
                                    onChange={handleChange}
                                    className="h-full text-xl"
                                    type="number"
                                    placeholder="Prix du produit"
                                />
                                <span className="text-3xl">€</span>
                            </>
                        )}
                    </h2>
                </div>

                <div>
                    <h3 className="font-medium mr-4 flex gap-3">Couleur :</h3>
                    {isShowing ? (
                        <span className="text-gray-500">{product.color}</span>
                    ) : (
                        <>
                            <TransparentInput
                                id="color"
                                name="color"
                                value={data.color}
                                onChange={(e) => {
                                    handleChange(e);
                                    setColor(e.target.value);
                                }}
                                className="flex-1"
                                type="text"
                                placeholder="La couleur de votre produit"
                            />
                            {color && (
                                <div
                                    className="ml-2 p-4 max-w-6 border-2 rounded-md cursor-pointer"
                                    style={{ backgroundColor: getEnglishColor(color) }}
                                ></div>
                            )}
                        </>
                    )}
                </div>

                <SeeMore
                    className="flex flex-col gap-3"
                    maxHeight={200}
                >
                    <div className="flex">
                        <h3 className="font-medium w-1/6 mr-4">Marque</h3>
                        {isShowing ? (
                            <span className="text-gray-500"></span>
                        ) : (
                            <TransparentInput
                                id="brand"
                                name="brand"
                                value={data.brand}
                                onChange={handleChange}
                                className="w-full"
                                type="text"
                                placeholder="La marque de votre produit"
                            />
                        )}
                    </div>

                    <div className="flex">
                        <h3 className="font-medium w-1/6 mr-4">Quantité en stock</h3>
                        {isShowing ? (
                            <span className="text-gray-500"></span>
                        ) : (
                            <TransparentInput
                                id="stock_quantity"
                                name="stock_quantity"
                                value={data.stock_quantity}
                                onChange={handleChange}
                                className="w-full"
                                type="number"
                                placeholder="Le nombre de stock du produit"
                            />
                        )}
                    </div>

                    {category_id === "0" && getClothings.map(({ id, label, name, placeholder }) => (
                        <div key={id} className="flex">
                            <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                            {isShowing ? (
                                <span className="text-gray-500"></span>
                            ) : (
                                <TransparentInput
                                    id={name}
                                    name={name}
                                    value={data[name]}
                                    onChange={handleChange}
                                    className="w-full"
                                    type="text"
                                    placeholder={placeholder}
                                />
                            )}
                        </div>
                    ))}

                    {category_id === "1" && getElectronics.map(({ id, label, name, placeholder }, index) => (

                        <div key={id} className="flex">
                            <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                            {isShowing ? (
                                <span className="text-gray-500">{productDetails}</span>
                            ) : (
                                <TransparentInput
                                    id={name}
                                    name={name}
                                    value={data[name]}
                                    onChange={handleChange}
                                    className="w-full"
                                    type="text"
                                    placeholder={placeholder}
                                />
                            )}
                        </div>
                    ))}

                    {category_id === "2" && getAccessories.map(({ id, label, name, placeholder }) => (
                        <div key={id} className="flex">
                            <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                            {isShowing ? (
                                <span className="text-gray-500"></span>
                            ) : (
                                <TransparentInput
                                    id={name}
                                    name={name}
                                    value={data[name]}
                                    onChange={handleChange}
                                    className="w-full"
                                    type="text"
                                    placeholder={placeholder}
                                />
                            )}
                        </div>
                    ))}

                    {/* Similar for other categories */}
                    {category_id === "3" && homeFurniture.map(({ id, label, name, placeholder }) => (
                        <div key={id} className="flex">
                            <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                            {isShowing ? (
                                <span className="text-gray-500"></span>
                            ) : (
                                <TransparentInput
                                    id={name}
                                    name={name}
                                    value={data[name]}
                                    onChange={handleChange}
                                    className="w-full"
                                    type="text"
                                    placeholder={placeholder}
                                />
                            )}
                        </div>
                    ))}

                    {/* Add similar sections for other categories as needed */}

                    <SeeMore.Button>
                        Voir plus
                    </SeeMore.Button>
                </SeeMore>

                <div className="flex flex-1 flex-col">
                    <h2 className="uppercase font-bold mb-5">
                        à propos de l'article
                    </h2>
                    {isShowing ? (
                        <span className="text-gray-500"></span>
                    ) : (
                        <TransparentInput
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            className="h-full"
                            type="textarea"
                            placeholder="La description de votre produit"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

