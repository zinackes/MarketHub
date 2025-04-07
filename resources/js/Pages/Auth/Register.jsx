import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import ClickableRectangle from "@/Components/ClickableRectangle.jsx";
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import {useEffect, useRef, useState} from "react";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import VendorRegister from "@/Pages/Auth/VendorForm.jsx";
import VendorForm from "@/Pages/Auth/VendorForm.jsx";
import UserForm from "@/Pages/Auth/UserForm.jsx";

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
        console.log(role);

        setIsNextButtonDisabled(false);

    }

    const updateStep = (step) => {
        Object.keys(errors).forEach((key) => errors[key] = "");
        setStep(step);
        console.log(step);
    }




    return (
        <GuestLayout>

            <h1 className="text-center text-5xl mb-4 !font-black">Inscrivez-vous et rejoignez l'aventure ! 🚀</h1>

                {step === 1 && (
                <div className="flex flex-col gap-3">

                    <ClickableRectangle
                        onClick={(e) =>  {
                            ClickableRectangleClick(e, 'Vendor');
                            }
                        }
                        description="Mettez en ligne vos produits, trouvez des acheteurs et développez votre activité facilement
                        grâce à notre plateforme."
                        imgLink="/assets/box.png"
                        id="vendor"
                        className={selectedRole === "Vendor" ? "!border-blue-500 !bg-blue-500/10" : ""}>
                        Vendeur
                    </ClickableRectangle>

                    <ClickableRectangle
                        onClick={(e) =>  {
                            ClickableRectangleClick(e, 'User');
                        }
                        }
                        description="Parcourez une large sélection de produits et achetez en toute simplicité
                         et sécurité. Profitez des meilleures offres."
                        imgLink="/assets/shopping-cart.png"
                        id="customer"
                        className={selectedRole === "User" ? "!border-blue-500 !bg-blue-500/10" : ""}>
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

                {step === 2 && selectedRole === "Vendor" && (
                    <VendorForm setStep={setStep} />
                )}
            {
                step === 2 && selectedRole === "User" && (
                    <UserForm setStep={setStep}/>
                )
            }
        </GuestLayout>
    );
}
