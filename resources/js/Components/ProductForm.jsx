// components/ProductForm.jsx
import React from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';

const ProductForm = ({ data, setData, onSubmit, errors, processing, mode, OPTIONS, className }) => {

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <form onSubmit={onSubmit} className={`w-full flex flex-col items-center gap-3 ${className}`}>
            <div className="w-full">
                <InputLabel htmlFor="name">Nom du produit</InputLabel>
                <TextInput
                    className="w-full text-sm"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Le nom du produit..."
                    required
                />
                <InputError message={errors.name} />
            </div>

            <div className="w-full">
                <InputLabel htmlFor="description">Description</InputLabel>
                <TextInput
                    className="w-full px-3 text-sm border py-2"
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    placeholder="La description du produit..."
                    required
                />
                <InputError message={errors.description} />
            </div>

            <div className="w-full">
                <InputLabel htmlFor="price">Prix</InputLabel>
                <TextInput
                    className="w-full text-sm"
                    id="price"
                    name="price"
                    type="number"
                    value={data.price}
                    onChange={handleChange}
                    placeholder="Le prix du produit..."
                    required
                />
                <InputError message={errors.price} />
            </div>

            <div className="w-full">
                <InputLabel htmlFor="stock_quantity">Quantité en stock</InputLabel>
                <TextInput
                    className="w-full text-sm"
                    id="stock_quantity"
                    name="stock_quantity"
                    type="number"
                    value={data.stock_quantity}
                    onChange={handleChange}
                    placeholder="La quantité en stock..."
                    required
                />
                <InputError message={errors.stock_quantity} />
            </div>

            <div className="w-full">
                <InputLabel htmlFor="category_id">Catégorie</InputLabel>
                <SelectInput
                    className="w-full text-sm"
                    id="category_id"
                    name="category_id"
                    value={data.category_id}
                    onChange={handleChange}
                    options={OPTIONS}
                />
                <InputError message={errors.category_id} />
            </div>

            <div className="mt-4 flex justify-end gap-2">
                <PrimaryButton type="submit" disabled={processing}>
                    {mode === 'create' ? 'Ajouter' : 'Mettre à jour'}
                </PrimaryButton>
            </div>
        </form>
    );
};

export default ProductForm;
