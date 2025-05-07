import TransparentInput from "@/Components/TransparentInput.jsx";
import { useForm } from "@inertiajs/react";
import SeeMoreButton from "@/Components/SeeMore.jsx";
import SeeMore from "@/Components/SeeMore.jsx";
import { getElectronics, getClothings, getAccessories, getToys, getFoods, getBeautyCares, getHomeFurnitures } from "@/Variables/Product.jsx";
import { frenchToEnglishColors } from "@/Variables/Colors.jsx";
import {useEffect, useState} from "react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

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
    const handleChange = (e) => setData(e.target.name, e.target.value);
    const [color, setColor] = useState("");

    useEffect(() => {
        setColor(product.color);
    }, [product]);

    const handleAddToCart = () => {

    }

    const handleCheckout = () => {

    }

    const getEnglishColor = (frenchColor) =>
        frenchToEnglishColors[frenchColor?.toLowerCase()] || frenchColor;

    return (
        <div className="flex flex-1 items-stretch justify-evenly">
            {/* Image */}
            <div className="w-full md:w-1/3">
                <img
                    src="/assets/box.png"
                    alt="Produit"
                    className="w-full h-auto rounded-xl shadow-md object-contain"
                />
            </div>

            {/* Détails */}
            <div className="flex flex-col w-1/2 gap-7">
                {/* Titre */}
                <h1 className="text-4xl font-bold border-b pb-3 border-gray-200">
                    {isShowing ? (
                        <span>{product.name}</span>
                    ) : (
                        <TransparentInput
                            id="name"
                            name="name"
                            value={data?.name}
                            onChange={handleChange}
                            className="w-full text-3xl font-bold"
                            type="textarea"
                            placeholder="Titre du produit"
                            textType="title"
                        />
                    )}
                </h1>

                {/* Prix */}
                <div className="text-2xl font-semibold text-green-600 flex items-center">
                    {isShowing ? (
                        <span>{product.price} €</span>
                    ) : (
                        <>
                            <TransparentInput
                                id="price"
                                name="price"
                                value={data.price}
                                onChange={handleChange}
                                className="w-1/2 text-xl"
                                type="number"
                                placeholder="Prix"
                            />
                            <span className="ml-2">€</span>
                        </>
                    )}
                </div>

                {/* Couleur */}
                <div className="flex items-center gap-4">
                    <h3 className="font-bold text-gray-700">Couleur :</h3>
                    {isShowing ? (
                        <span className="text-gray-600">{product.color}</span>
                    ) : (
                        <TransparentInput
                            id="color"
                            name="color"
                            value={data.color}
                            onChange={(e) => {
                                handleChange(e);
                                setColor(e.target.value);
                            }}
                            className="w-1/2"
                            type="text"
                            placeholder="Couleur"
                        />
                    )}
                    {color && (
                        <div
                            className="w-6 h-6 rounded border shadow"
                            style={{ backgroundColor: getEnglishColor(color) }}
                        />
                    )}
                </div>

                {/* Informations supplémentaires */}
                <div className="space-y-4 border-t pt-4 border-gray-200">
                    <div className="flex gap-4">
                        <span className="w-40 font-bold text-gray-700">Marque</span>
                        {isShowing ? (
                            <span className="text-gray-600">{product.brand}</span>
                        ) : (
                            <TransparentInput
                                id="brand"
                                name="brand"
                                value={data.brand}
                                onChange={handleChange}
                                className="w-full"
                                type="text"
                                placeholder="Marque"
                            />
                        )}
                    </div>

                    <div className="flex gap-4">
                        <span className="w-40 font-bold text-gray-700">Stock</span>
                        {isShowing ? (
                            <span className="text-gray-600">{product.stock_quantity}</span>
                        ) : (
                            <TransparentInput
                                id="stock_quantity"
                                name="stock_quantity"
                                value={data.stock_quantity}
                                onChange={handleChange}
                                className="w-full"
                                type="number"
                                placeholder="Quantité"
                            />
                        )}
                    </div>

                    {/* Détails dynamiques */}
                    {Array.isArray(productDetails) &&
                        productDetails.map(({ id, label, name, placeholder, value }) =>
                            value !== "" ? (
                                <div key={id} className="flex gap-4">
                                    <span className="w-40 font-bold text-gray-700">{label}</span>
                                    {isShowing ? (
                                        <span className="text-gray-600">{value}</span>
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
                            ) : null
                        )}
                </div>

                {/* Description */}
                <div className="border-t pt-6 border-gray-200">
                    <h2 className="uppercase text-sm font-black text-gray-800 mb-2">
                        À propos de l'article
                    </h2>
                    {isShowing ? (
                        <p className="text-gray-600">{product.description}</p>
                    ) : (
                        <TransparentInput
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            className="w-full"
                            type="textarea"
                            placeholder="Description"
                        />
                    )}
                </div>

                {/* Ajouter au panier */}
                {isShowing && (
                    <div className="flex justify-evenly">
                        <PrimaryButton className="bg-yellow-400 hover:bg-yellow-500 text-black
                        w-2/5 rounded-md justify-center py-3 shadow-md transform transition-all duration-300 hover:scale-105">
                            Ajouter au panier
                        </PrimaryButton>

                        <PrimaryButton className="bg-orange-500 w-2/5 hover:bg-orange-600
                        text-white shadow-md justify-center transform transition-all duration-300 hover:scale-105 rounded-md">
                            Payer
                        </PrimaryButton>
                    </div>
                )}
            </div>
        </div>
    );
}


