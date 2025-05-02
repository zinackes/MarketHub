import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
export default forwardRef(function TransparentInput(
    { textType, className = '', type="text", isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <>
            {type === "textarea" ? (
                <textarea
                    {...props}
                    className={[
                        'bg-transparent border-none !p-0 focus:!outline-none focus:ring-transparent resize-none overflow-hidden w-full',
                        className,
                        textType === "title" && 'font-bold text-5xl'
                    ].filter(Boolean).join(' ')}
                    ref={localRef}
                />
            ) : (
                <input
                    {...props}
                    type={type}
                    className={[
                        'bg-transparent border-none !p-0 focus:!outline-none focus:ring-transparent',
                        className,
                        textType === "title" && 'font-bold text-5xl'
                    ].filter(Boolean).join(' ')}
                    ref={localRef}
                />
            )}
        </>

    );
});
