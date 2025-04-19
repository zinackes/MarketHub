// components/ProductForm.jsx
import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import SecondaryButton from "@/Components/SecondaryButton.jsx";

const ProductForm = ({ product, onSubmit, onCancel, errors, processing, mode, OPTIONS }) => {
    const { data, setData, post, put, reset, clearErrors } = useForm({
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || '',
        stock_quantity: product?.stock_quantity || '',
        category_id: product?.category_id || '',
    });

    useEffect(() => {
        // Clear errors and reset form on mode change (e.g., switching from edit to create)
        return () => {
            clearErrors();
            reset();
        };
    }, [mode, reset, clearErrors]);

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div>
                <InputLabel htmlFor="name">Nom du produit</InputLabel>
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                />
                <InputError message={errors.name} />
            </div>

            <div>
                <InputLabel htmlFor="description">Description</InputLabel>
                <TextInput
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    required
                />
                <InputError message={errors.description} />
            </div>

            <div>
                <InputLabel htmlFor="price">Prix</InputLabel>
                <TextInput
                    id="price"
                    name="price"
                    type="number"
                    value={data.price}
                    onChange={handleChange}
                    required
                />
                <InputError message={errors.price} />
            </div>

            <div>
                <InputLabel htmlFor="stock_quantity">Quantité en stock</InputLabel>
                <TextInput
                    id="stock_quantity"
                    name="stock_quantity"
                    type="number"
                    value={data.stock_quantity}
                    onChange={handleChange}
                    required
                />
                <InputError message={errors.stock_quantity} />
            </div>

            <div>
                <InputLabel htmlFor="category_id">Catégorie</InputLabel>
                <SelectInput
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
