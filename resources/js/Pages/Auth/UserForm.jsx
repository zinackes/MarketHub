import GuestLayout from "@/Layouts/GuestLayout.jsx";
import {Link, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import ClickableRectangle from "@/Components/ClickableRectangle.jsx";

export default function UserForm({setStep, ...props}){

    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name:'',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        address: '',
        city: '',
        area: '',
        country: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (

            <form onSubmit={submit}>

                <div>

                    <div className="flex justify-around items-center">
                        <div>

                            <InputLabel htmlFor="last_name" value="Nom"/>

                            <TextInput
                                id="last_name"
                                name="last_name"
                                value={data.last_name}
                                className="mt-1 block w-full"
                                autoComplete="last_name"
                                isFocused={true}
                                onChange={(e) => setData('last_name', e.target.value)}
                                required
                                placeholder="Votre nom"
                            />

                            <InputError message={errors.last_name} className="mt-2"/>
                        </div>


                        <div>

                            <InputLabel htmlFor="first_name" value="Prénom"/>

                            <TextInput
                                id="first_name"
                                name="first_name"
                                value={data.first_name}
                                className="mt-1 block w-full"
                                autoComplete="first_name"
                                onChange={(e) => setData('first_name', e.target.value)}
                                required
                                placeholder="Votre prénom"
                            />

                            <InputError message={errors.first_name} className="mt-2"/>
                        </div>

                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="phone" value="Numéro de téléphone"/>

                        <TextInput
                            id="phone"
                            type="tel"
                            name="phone"
                            value={data.phone}
                            className="mt-1 block w-full"
                            autoComplete="phone"
                            onChange={(e) => setData('phone', e.target.value)}
                            required
                            placeholder="Votre numéro de téléphone"
                        />

                        <InputError message={errors.phone} className="mt-2"/>
                    </div>

                    <div className="flex justify-around items-center mt-4">
                        <div>
                            <InputLabel htmlFor="country" value="Pays"/>

                            <TextInput
                                id="country"
                                type="text"
                                name="country"
                                value={data.country}
                                className="mt-1 block w-full"
                                autoComplete="country"
                                onChange={(e) => setData('country', e.target.value)}
                                required
                                placeholder="Votre pays"
                            />

                            <InputError message={errors.country} className="mt-2"/>
                        </div>
                        <div>
                            <InputLabel htmlFor="area" value="Région"/>

                            <TextInput
                                id="area"
                                type="text"
                                name="area"
                                value={data.area}
                                className="mt-1 block w-full"
                                autoComplete="area"
                                onChange={(e) => setData('area', e.target.value)}
                                required
                                placeholder="Votre région"
                            />

                            <InputError message={errors.area} className="mt-2"/>
                        </div>
                    </div>

                    <div className="flex justify-around items-center mt-4">
                        <div>
                            <InputLabel htmlFor="city" value="Ville"/>

                            <TextInput
                                id="city"
                                type="text"
                                name="city"
                                value={data.city}
                                className="mt-1 block w-full"
                                autoComplete="city"
                                onChange={(e) => setData('city', e.target.value)}
                                required
                                placeholder="Votre ville"
                            />

                            <InputError message={errors.city} className="mt-2"/>
                        </div>
                        <div>
                            <InputLabel htmlFor="address" value="Adresse"/>

                            <TextInput
                                id="address"
                                type="text"
                                name="address"
                                value={data.address}
                                className="mt-1 block w-full"
                                autoComplete="address"
                                onChange={(e) => setData('address', e.target.value)}
                                required
                                placeholder="Votre adresse"
                            />

                            <InputError message={errors.address} className="mt-2"/>
                        </div>
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Adresse mail"/>

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            placeholder="Votre adresse mail"
                        />

                        <InputError message={errors.email} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Mot de passe"/>

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            placeholder="Votre mot de passe"
                        />

                        <InputError message={errors.password} className="mt-2"/>
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirmer mot de passe"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                            placeholder="Confirmer votre mot de passe"
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-5 flex flex-col items-center justify-end">

                            <span className="rounded-md text-sm flex gap-1">
                                Déjà un compte?
                                <Link
                                    href={route('login')}
                                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Se connecter
                                </Link>
                            </span>

                        <div className="flex items-center justify-end w-full my-4">
                            <SecondaryButton className="ms-4"
                                             onClick={() => {
                                                 setStep(1);
                                             }}>
                                Retour
                            </SecondaryButton>

                            <PrimaryButton className="ms-4" disabled={processing}>
                                S'inscrire
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </form>
    )
}
