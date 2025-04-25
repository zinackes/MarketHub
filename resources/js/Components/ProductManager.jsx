// components/ProductManager.jsx
import React, { useState, cloneElement } from 'react';
import Modal from './Modal';
import ProductForm from './ProductForm';
import { useForm } from '@inertiajs/react';
import { X } from 'lucide-react';
import DashboardNavLink from "@/Components/DashboardNavLink.jsx";

const ProductManager = ({ mode = 'create', product = null, children = [] }) => {
    const [showModal, setShowModal] = useState(false);

    const isEdit = mode === 'edit';
    const isDelete = mode === 'delete';
    const isCreate = mode === 'create';

    const OPTIONS = [
        { value: 1, label: 'Vêtements' },
        { value: 2, label: 'Électronique' },
        { value: 3, label: 'Accessoires' },
        { value: 4, label: 'Maison & Meubles' },
        { value: 5, label: 'Jouets' },
        { value: 6, label: 'Beauté & Soins' },
        { value: 7, label: 'Alimentation' },
    ];

    const {
        data,
        setData,
        post,
        put,
        delete: destroy,
        processing,
        errors,
        reset,
        clearErrors
    } = useForm({
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || '',
        stock_quantity: product?.stock_quantity || '',
        category_id: product?.category_id || '',
    });

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        clearErrors();
        reset();
    };

    const submit = (e) => {
        e.preventDefault();

        if (isCreate) {
            post(route('product.store'), {
                onSuccess: closeModal,
            });
        } else if (isEdit) {
            put(route('product.update', product.id), {
                onSuccess: closeModal,
            });
        } else if (isDelete) {
            destroy(route('product.destroy', product.id), {
                onSuccess: closeModal,
            });
        }
    };

    return (
        <>
            {cloneElement(children, { onClick: openModal })}

            <Modal show={showModal} onClose={closeModal} >
                {isDelete ? (
                    <div className="p-6">
                        <h2 className="text-lg font-semibold">Supprimer le produit</h2>
                        <p className="my-4">Es-tu sûr de vouloir supprimer <strong>{product.name}</strong> ?</p>
                        <div className="flex justify-end gap-2">
                            <button onClick={closeModal} className="px-4 py-2 rounded bg-gray-200">Annuler</button>
                            <button
                                onClick={submit}
                                disabled={processing}
                                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                            >
                                Supprimer
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <div className="flex justify-between items-center w-full px-6 py-3 border-b ">
                            <h2 className="!font-medium text-lg">{isCreate ? 'Créer un produit' : 'Modifier le produit'}</h2>
                            <button className="px-1 py-1 border rounded-lg" onClick={closeModal}>
                                <X color="#99a1b7" />
                            </button>
                        </div>
                        <ProductForm
                            data={data}
                            setData={setData}
                            mode={mode}
                            OPTIONS={OPTIONS}
                            className="px-6 py-3"
                            onSubmit={submit}
                            errors={errors}
                            processing={processing}
                        />
                    </div>
                )}
            </Modal>
        </>
    );
};

ProductManager.Link = ({ children, className, ...props }) => (
    <button
        {...props}
        type="button"
        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 focus:outline-none ${className}`}
    >
        {children}
    </button>
);

ProductManager.NavLink = ({ children, icon, ...props }) => {
    return (
        <DashboardNavLink
            isButton={true}
            icon={icon}
            type="button"
            {...props}
        >
            Ajouter un produit
        </DashboardNavLink>
    );
};

export default ProductManager;
