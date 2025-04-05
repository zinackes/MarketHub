import DangerButton from "@/Components/DangerButton.jsx";
import Modal from "@/Components/Modal.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useState} from "react";
import {useForm} from "@inertiajs/react";

export default function CreateVendorForm({ className = '' }){


    const [confirmingVendorCreation, setconfirmingVendorCreation] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        shop_name:'',
        shop_description: '',
        phone:'',
        address: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('vendor.store'), {
            onFinish: () => reset(),
        });
    };


    const confirmVendorCreation = () => {
        setconfirmingVendorCreation(true);
    };
    const closeModal = () => {
        setconfirmingVendorCreation(false);

        clearErrors();
        reset();
    };
    return (
        <section className={`space-y-6 ${className}`}>

            <PrimaryButton onClick={confirmVendorCreation}>
                Créer ma boutique
            </PrimaryButton>

            <Modal show={confirmingVendorCreation} onClose={closeModal}>
                <form className="p-6" onSubmit={submit}>
                    <h2 className="text-2xl font-bold text-center text-gray-900">
                        Création de votre boutique
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Commencez à vendre en quelques clics. Renseignez les informations ci-dessous pour configurer votre boutique et la rendre accessible à vos futurs clients.
                    </p>

                    <div className="mt-5">

                        <InputLabel htmlFor="shop_name" value="Nom de la boutique"/>

                        <TextInput
                            id="shop_name"
                            name="shop_name"
                            className="mt-1 block w-full"
                            autoComplete="shop_name"
                            value={data.shop_name}
                            onChange={(e) => setData('shop_name', e.target.value)}
                            required
                            placeholder="Nom de la boutique"
                        />


                        <InputError message={errors.shop_name} className="mt-2"/>

                    </div>


                    <div className="mt-5">

                        <InputLabel htmlFor="shop_description" value="Description"/>

                        <TextInput
                            id="shop_description"
                            name="shop_description"
                            className="mt-1 block w-full"
                            autoComplete="shop_description"
                            type="textarea"
                            value={data.shop_description}
                            onChange={(e) => setData('shop_description', e.target.value)}
                            required
                            placeholder="Description de la boutique"
                        />


                        <InputError message={errors.shop_description} className="mt-2"/>

                    </div>

                    <div className="mt-5">

                        <InputLabel htmlFor="phone" value="Numéro de téléphone"/>

                        <TextInput
                            id="phone"
                            name="phone"
                            className="mt-1 block w-full"
                            autoComplete="phone"
                            type="tel"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            required
                            placeholder="Votre numéro de téléphone"
                        />


                        <InputError message={errors.phone} className="mt-2"/>

                    </div>

                    <div className="mt-5">

                        <InputLabel htmlFor="address" value="Adresse"/>

                        <TextInput
                            id="address"
                            name="address"
                            className="mt-1 block w-full"
                            autoComplete="address"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            required
                            placeholder="Votre adresse"
                        />


                        <InputError message={errors.address} className="mt-2"/>

                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Annuler
                        </SecondaryButton>

                        <PrimaryButton className="ms-3" disabled={processing}>
                            Créer la boutique
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </section>
    )
}
