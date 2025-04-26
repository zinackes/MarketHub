import { useState } from 'react';

export default function Success({flash}) {
    const [visible, setVisible] = useState(!!flash.success);

    if (!visible) return null;

    return (
        <div
            className="flex items-center justify-between gap-2 rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-green-700 shadow-sm mb-4">
            <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span className="font-medium">{flash.success}</span>
            </div>
            <button onClick={() => setVisible(false)} className="text-green-500 hover:text-green-700">
                ✖
            </button>
        </div>
    )

}
