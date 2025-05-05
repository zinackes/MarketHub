import TransparentInput from "@/Components/TransparentInput.jsx";


export default function EditableTransparentInputField({condition, children, value, name, handleChange, type, textType, placeholder, inputClassName, className}) {

    return condition ? (
                <span className={className}>{children}</span>
            ) : (
                <TransparentInput
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={inputClassName}
                    type={type}
                    placeholder={placeholder}
                    textType={textType}
                    required
                >

                </TransparentInput>
            )
}
