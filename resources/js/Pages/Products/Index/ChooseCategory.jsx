import { useForm, router } from '@inertiajs/react'
import GuestLayout from '@/Layouts/GuestLayout.jsx'
import SelectInput from '@/Components/SelectInput.jsx'
import { useEffect } from 'react';
import PrimaryButton from '@/Components/PrimaryButton.jsx'

export default function ChooseCategory({categories}) {

    useEffect(() => {
        console.log(categories);
    }, [categories]);

    const { data, setData, post, processing, errors } = useForm({
        category_id: '',
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const slug = categories[data.category_id-1].slug;
        const url = route('product.create');
        router.visit(`${url}/?category=${slug}`);
    };

    return (
        <GuestLayout>
            <form
                onSubmit={handleSubmit}
                className=" flex items-center justify-center flex-col gap-10"
            >
                <h1 className="text-5xl text-center uppercase font-bold px-10">
                    Veuillez choisir la catégorie correspondante à votre produit
                </h1>

                <SelectInput
                    className="w-full max-w-md"
                    id="category_id"
                    name="category_id"
                    value={data.category_id}
                    onChange={handleChange}
                    options={categories}
                    required={true}
                />

                {errors.category_id && (
                    <div className="text-red-500">{errors.category_id}</div>
                )}

                <PrimaryButton disabled={processing}>
                    Continuer
                </PrimaryButton>
            </form>
        </GuestLayout>
    );
}
