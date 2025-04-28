import { Link } from '@inertiajs/react';

export default function GuestLayout({ auth, children }) {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar en haut */}
            <nav className="w-full bg-white shadow-md py-4 fixed top-0 left-0 z-10">
                <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 flex justify-center">
                    <Link
                        href="/"
                        className="text-2xl font-bold text-gray-800 hover:text-blue-600"
                    >
                        MarketHub
                    </Link>
                </div>
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link>
                    </>
                )}
            </nav>

            {/* Contenu centré */}
            <div className="flex justify-center items-center min-h-screen pt-20">
                <div className="w-full overflow-hidden bg-white px-6 py-5 shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
