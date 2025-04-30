import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
export default forwardRef(function TransparentInput(
    { InputType = 'text', className = '', type, isFocused = false, ...props },
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
        <input
            {...props}
            type={InputType}
            className={[
                'bg-transparent border-none focus:!outline-none focus:ring-transparent' +
                className
            ].filter(Boolean).join(' ')}
            ref={localRef}
        />
    );
});
