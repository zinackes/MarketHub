import {useState} from "react";
import {useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Modal from "@/Components/Modal.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import DashboardNavLink from "@/Components/DashboardNavLink.jsx";
import SelectInput from "@/Components/SelectInput.jsx";

export default function CreateProductFormButton({className='', children, defaultValues,  ...props}){

    const [confirmingProfuctCreation, setconfirmingProfuctCreation] = useState(false);


    const OPTIONS = [
        {
            value: 1,
            label: 'Vêtements',
        },
        {
            value: 2,
            label: "Électronique"
        },
        {
            value: 3,
            label: "Accessoires"
        },
        {
            value: 4,
            label: "Maison & Meubles"
        },
        {
            value: 5,
            label: "Jouets"
        },
        {
            value: 6,
            label: "Beauté & Soins"
        },
        {
            value: 7,
            label: "Alimentation"
        }
    ]

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        name:'',
        description: '',
        price:'',
        stock_quantity: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('product.update'), {
            onFinish: () => {
                reset();
                closeModal();
            },
        });
    };


    const confirmProductCreation = () => {
        setconfirmingProfuctCreation(true);
    };
    const closeModal = () => {
        setconfirmingProfuctCreation(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className} ${props.isNavLink === true ? 'w-full' : ''}`}>

            {props.isNavLink === true ? (
                <DashboardNavLink
                    icon={props.navLinksIcon}
                    onClick={confirmProductCreation}
                    isButton={true}
                >
                    {children}
                </DashboardNavLink>
            ) : (
                <PrimaryButton
                    className={props.primaryButtonClassName}
                    onClick={confirmProductCreation}
                >
                    {children}
                </PrimaryButton>
            )}


            <Modal show={confirmingProfuctCreation} onClose={closeModal}>
                <form className="p-6" onSubmit={submit}>
                    <h2 className="text-2xl font-bold text-center text-gray-900">
                        Ajout de votre produit
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Remplissez les informations ci-dessous pour présenter votre produit à vos clients.
                        Un bon titre, une belle description et un prix juste feront toute la différence !
                    </p>

                    <div className="mt-5">

                        <InputLabel htmlFor="name" value="Nom"/>

                        <TextInput
                            id="name"
                            name="name"
                            className="mt-1 block w-full"
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            placeholder="Nom du produit"
                        />


                        <InputError message={errors.name} className="mt-2"/>

                    </div>


                    <div className="mt-5">

                        <InputLabel htmlFor="description" value="Description"/>

                        <TextInput
                            id="description"
                            name="description"
                            className="mt-1 block w-full"
                            autoComplete="description"
                            type="textarea"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                            placeholder="Description du produit"
                        />


                        <InputError message={errors.description} className="mt-2"/>

                    </div>

                    <div className="mt-5">

                        <InputLabel value="Catégorie"/>

                        <SelectInput
                            options={OPTIONS}
                            name="category_id"
                            value={data.category_id}
                            onChange={(e) => setData('category_id', e.target.value)}
                            required
                        />
                    </div>

                    <div className="mt-5">

                        <InputLabel htmlFor="price" value="Prix"/>

                        <TextInput
                            id="price"
                            name="price"
                            className="mt-1 block w-full"
                            autoComplete="price"
                            type="number"
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            required
                            placeholder="Le prix du produit (à l'unité)"
                        />


                        <InputError message={errors.price} className="mt-2"/>

                    </div>

                    <div className="mt-5">

                        <InputLabel htmlFor="stock_quantity" value="Stock"/>

                        <TextInput
                            id="stock_quantity"
                            name="stock_quantity"
                            className="mt-1 block w-full"
                            autoComplete="stock_quantity"
                            type="number"
                            value={data.stock_quantity}
                            onChange={(e) => setData('stock_quantity', e.target.value)}
                            required
                            placeholder="Nombre de produit disponible"
                        />


                        <InputError message={errors.stock_quantity} className="mt-2"/>

                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Annuler
                        </SecondaryButton>

                        <PrimaryButton className="ms-3" disabled={processing}>
                            Ajouter le produit
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </section>
    )
}
