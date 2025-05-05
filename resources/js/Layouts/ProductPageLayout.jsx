import TransparentInput from "@/Components/TransparentInput.jsx";
import EditableTransparentInputField from "@/Components/EditableTransparentInputField.jsx";
import { useForm } from "@inertiajs/react";
import SeeMoreButton from "@/Components/SeeMore.jsx";
import SeeMore from "@/Components/SeeMore.jsx";
import { electronics, clothings, accesories, toys, foodProducts, beautyProducts, homeFurniture } from "@/Variables/Product.jsx";
import { frenchToEnglishColors } from "@/Variables/Colors.jsx";
import {useState} from "react";


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
                    <EditableTransparentInputField
                        condition={isShowing}
                        name="name"
                        value={data.name}
                        handleChange={handleChange}
                        type="textarea"
                        textType="title"
                        placeholder="Le titre de votre produit"
                        inputClassName="w-full"
                        required
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
                            placeholder="Prix du produit"
                            inputClassName="h-full text-xl"
                            required
                        />
                        <span className="text-3xl">€</span>
                    </h2>
                </div>

                <div>
                    <h3 className="font-medium mr-4 flex gap-3">Couleur :
                        <EditableTransparentInputField
                            condition={isShowing}
                            name="color"
                            value={data.color}
                            handleChange={(e) => {
                                handleChange(e);
                                setColor(e.target.value);
                            }}
                            type="text"
                            textType="gray"
                            placeholder="La couleur de votre produit"
                            inputClassName="flex-1"
                        />

                    </h3>

                    {color && (
                        <div className=" ml-2 p-4 max-w-6 border-2 rounded-md cursor-pointer" style={{backgroundColor: getEnglishColor(color)}}></div>
                    )
                    }
                </div>

                <SeeMore
                    className="flex flex-col gap-3"
                    maxHeight={200}
                >
                    <div className="flex">
                        <h3 className="font-medium w-1/6 mr-4">Marque</h3>
                        <EditableTransparentInputField
                            condition={isShowing}
                            name="brand"
                            value={data.brand}
                            handleChange={handleChange}
                            type="text"
                            textType="gray"
                            placeholder="La marque de votre produit"
                            inputClassName="w-full"
                        />
                    </div>

                    <div className="flex">
                        <h3 className="font-medium w-1/6 mr-4">Quantité en stock</h3>
                        <EditableTransparentInputField
                            condition={isShowing}
                            name="stock_quantity"
                            value={data.stock_quantity}
                            handleChange={handleChange}
                            type="number"
                            textType="gray"
                            placeholder="Le nombre de stock du produit"
                            inputClassName="w-full"
                            required
                        />
                    </div>


                    {category_id === "0" && (
                        clothings.map(({ id, label, name, placeholder }) => (
                            <div key={id} className="flex">
                                <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                                <EditableTransparentInputField
                                    condition={isShowing}
                                    name={name}
                                    value={data[name]}
                                    handleChange={handleChange}
                                    type="text"
                                    textType="gray"
                                    placeholder={placeholder}
                                    inputClassName="w-full"
                                />
                            </div>
                        ))
                    )}

                    {category_id === "1" && (
                        electronics.map(({ id, label, name, placeholder }) => (
                            <div key={id} className="flex">
                                <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                                <EditableTransparentInputField
                                    condition={isShowing}
                                    name={name}
                                    value={data[name]}
                                    handleChange={handleChange}
                                    type="text"
                                    textType="gray"
                                    placeholder={placeholder}
                                    inputClassName="w-full"
                                />
                            </div>
                        ))
                    )}

                    {category_id === "2" && (
                        accesories.map(({ id, label, name, placeholder }) => (
                            <div key={id} className="flex">
                                <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                                <EditableTransparentInputField
                                    condition={isShowing}
                                    name={name}
                                    value={data[name]}
                                    handleChange={handleChange}
                                    type="text"
                                    textType="gray"
                                    placeholder={placeholder}
                                    inputClassName="w-full"
                                />
                            </div>
                        ))
                    )}

                    {category_id === "3" && (
                        homeFurniture.map(({ id, label, name, placeholder }) => (
                            <div key={id} className="flex">
                                <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                                <EditableTransparentInputField
                                    condition={isShowing}
                                    name={name}
                                    value={data[name]}
                                    handleChange={handleChange}
                                    type="text"
                                    textType="gray"
                                    placeholder={placeholder}
                                    inputClassName="w-full"
                                />
                            </div>
                        ))
                    )}

                    {category_id === "4" && (
                        toys.map(({ id, label, name, placeholder }) => (
                            <div key={id} className="flex">
                                <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                                <EditableTransparentInputField
                                    condition={isShowing}
                                    name={name}
                                    value={data[name]}
                                    handleChange={handleChange}
                                    type="text"
                                    textType="gray"
                                    placeholder={placeholder}
                                    inputClassName="w-full"
                                />
                            </div>
                        ))
                    )}

                    {category_id === "5" && (
                        beautyProducts.map(({ id, label, name, placeholder }) => (
                            <div key={id} className="flex">
                                <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                                <EditableTransparentInputField
                                    condition={isShowing}
                                    name={name}
                                    value={data[name]}
                                    handleChange={handleChange}
                                    type="text"
                                    textType="gray"
                                    placeholder={placeholder}
                                    inputClassName="w-full"
                                />
                            </div>
                        ))
                    )}

                    {category_id === "6" && (
                        foodProducts.map(({ id, label, name, placeholder }) => (
                            <div key={id} className="flex">
                                <h3 className="font-medium w-1/6 mr-4">{label}</h3>
                                {id === 3 ? (
                                    <input
                                        type="checkbox"
                                        name={name}
                                        checked={data[name] || false}
                                        onChange={(e) => handleChange({ target: { name, value: e.target.checked } })}
                                    />
                                ) : (
                                    <EditableTransparentInputField
                                        condition={isShowing}
                                        name={name}
                                        value={data[name]}
                                        handleChange={handleChange}
                                        type="text"
                                        textType="gray"
                                        placeholder={placeholder}
                                        inputClassName="w-full"
                                    />
                                )}
                            </div>
                        ))
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
                        placeholder="La description de votre produit"
                        inputClassName="h-full"
                        required
                    />
                </div>
            </div>
        </div>
    );
}
