export default function Table({ titles, content }) {

    if (!Array.isArray(content) || content.length === 0) {
        return (
            <div className="mt-6 w-full max-w-full overflow-x-auto rounded-lg shadow-sm bg-white">
                <table className="min-w-full table-auto border-collapse">
                    <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        {titles.map(title => (
                            <th
                                key={title.id}
                                scope="col"
                                className="px-6 py-4 text-left font-semibold border-b border-gray-200 whitespace-nowrap"
                            >
                                {title.text}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                    <tr>
                        <td colSpan={titles.length} className="text-center py-4">
                            Aucune donnée disponible.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="mt-6 w-full max-w-full overflow-x-auto rounded-lg">
            <table className="w-full table-auto border-collapse rounded-lg">
                <thead className="bg-gray-200 text-gray-700">
                <tr>
                    {titles.map(title => (
                        <th
                            key={title.id}
                            scope="col"
                            className="px-6 py-4 text-left font-semibold border-b border-gray-200 whitespace-nowrap uppercase
                           "
                        >
                            {title.text}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-transparent">
                {content.map((product) => (
                    <tr key={product.id} className="border-b border-gray-300">
                        <th scope="row" className="px-6 py-4 text-left">{product.name}</th>
                        <td className="px-6 py-4">{product.price}</td>
                        <td className="px-6 py-4">{product.stock_quantity}</td>
                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    );
}
