export default function ClickableRectangle({ className = '', children, ...props }) {

    return (
        <button
            className={`border flex flex-col  ${className}`}
            onClick={props.onClick}
            {...props}
        >
            {children}
            <span>
                {props.description}
            </span>
        </button>
    );
}
