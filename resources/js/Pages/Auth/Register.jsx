import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import ClickableRectangle from "@/Components/ClickableRectangle.jsx";
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import {useEffect, useRef, useState} from "react";
import SecondaryButton from "@/Components/SecondaryButton.jsx";

export default function Register() {

    const [step, setStep] = useState(1);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
    const [selectedRole, setSelectedRole] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        role:'',
        first_name: '',
        last_name:'',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };


    const ClickableRectangleClick = (e, role) => {
        setSelectedRole(role);

        setData("role", role);

        setIsNextButtonDisabled(false);

    }

    const updateStep = (step) => {
        Object.keys(errors).forEach((key) => errors[key] = "");
        setStep(step);
    }




    return (
        <GuestLayout>

            <div className="flex flex-col">
                <h1 className="text-center text-5xl mb-4 !font-black">Inscrivez-vous et rejoignez l'aventure ! 🚀</h1>

                <form onSubmit={submit}>

                    {step === 1 && (
                        <div className="flex flex-col gap-3">

                            <TextInput
                                id="role"
                                name="role"
                                value={data.role}
                                className="sr-only"
                                autoComplete="role"
                                required
                            />

                            <ClickableRectangle
                                onClick={(e) =>  {
                                    ClickableRectangleClick(e, 'vendor');
                                }
                                }
                                description="Mettez en ligne vos produits, trouvez des acheteurs et développez votre activité facilement
                        grâce à notre plateforme."
                                imgLink="/assets/box.png"
                                id="vendor"
                                className={selectedRole === "vendor" ? "!border-blue-500 !bg-blue-500/10" : ""}>
                                Vendeur
                            </ClickableRectangle>

                            <ClickableRectangle
                                onClick={(e) =>  {
                                    ClickableRectangleClick(e, 'customer');
                                }
                                }
                                description="Parcourez une large sélection de produits et achetez en toute simplicité
                         et sécurité. Profitez des meilleures offres."
                                imgLink="/assets/shopping-cart.png"
                                id="customer"
                                className={selectedRole === "customer" ? "!border-blue-500 !bg-blue-500/10" : ""}>
                                Client
                            </ClickableRectangle>

                            <PrimaryButton
                                onClick={() => {
                                    updateStep(2)
                                }} className="justify-center"
                                disabled={isNextButtonDisabled}
                            >Continuer</PrimaryButton>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
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
                                                         updateStep(1)
                                                     }}>
                                        Retour
                                    </SecondaryButton>

                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        S'inscrire
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </GuestLayout>
    );
}
