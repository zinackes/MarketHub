import { Ellipsis } from 'lucide-react';
import { Link } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import ProductManager from "@/Components/ProductManager.jsx";

export default function Table({ titles, bigTitle,  content }) {
    if (!Array.isArray(content) || content.length === 0) {
        return (
            <div className="mt-6 w-full max-w-full overflow-visible rounded-lg shadow-sm bg-white">
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        {titles.map((title) => (
                            <th
                                key={title.id}
                                scope="col"
                                className="px-6 py-4 text-left font-semibold border-b border-gray-200 whitespace-nowrap"
                            >
                                {title.text}
                            </th>
                        ))}
                        <th className="px-6 py-4 text-left font-semibold border-b border-gray-200">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    <tr>
                        <td colSpan={titles.length + 1} className="text-center py-4">
                            Aucun produit en vente.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="grid rounded-lg">
            <div className="bg-white py-5 px-6 rounded-t-xl border flex">
                <h2 className="!font-bold text-xl">{bigTitle}</h2>

                <ProductManager mode="create">
                    <ProductManager.Link className="!ml-auto !w-auto rounded-lg">Ajouter un produit</ProductManager.Link>
                </ProductManager>
            </div>
            <div className=" w-full max-w-full overflow-visible bg-white rounded-b-xl border-b border-l border-r">
                <table className="w-full table-auto border-collapse">
                    <thead className="text-gray-500 bg-gray-50">
                    <tr>
                        {titles.map((title, index) => {
                            const isEmpty = title.text === '';
                            const isLast = index === titles.length - 1;

                            return (
                                <th
                                    key={title.id}
                                    scope="col"
                                    className={`px-5 py-3 text-left font-semibold border-b border-gray-200 whitespace-nowrap
                                    ${isEmpty ? '!w-[20px]' : ''} ${!isLast ? 'border-r' : ''}`}
                                >
                                    {title.text}
                                </th>
                            );
                        })}
                    </tr>

                    </thead>
                    <tbody className="bg-transparent overflow-visible">
                    {content.map((product, index) => {

                        const isLast = index === content.length - 1;

                        return (
                        <tr key={product.id} className={`overflow-visible ${!isLast ? 'border-b' : ''}`}>
                            <th scope="row" className="px-5 py-3 text-left border-r">{product.name}</th>
                            <td className="px-5 py-3 text-left border-r">{product.price}</td>
                            <td className="px-5 py-3 text-left border-r">{product.stock_quantity}</td>
                            <td className="px-5 py-3 relative ml-auto">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md cursor-pointer">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent px-2 py-2 text-sm leading-4 text-gray-500 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none"
                                            >
                                                <Ellipsis className="h-5 w-5"/>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <ProductManager mode="edit" product={product}>
                                            <ProductManager.Link>Modifier</ProductManager.Link>
                                        </ProductManager>

                                        <ProductManager mode="delete" product={product}>
                                            <ProductManager.Link
                                                className="text-red-600">Supprimer</ProductManager.Link>
                                        </ProductManager>
                                    </Dropdown.Content>
                                </Dropdown>
                            </td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
