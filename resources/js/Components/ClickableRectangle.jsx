export default function ClickableRectangle({ className = '', children, ...props }) {



    return (
        <button
            className={`flex flex-col px-4 py-3 gap-2 cursor-pointer hover:border-gray-400/80 transition-all duration-300
                             text-left border rounded-lg border-gray-400/40 clickable-rectangle  ${className}`}
            onClick={props.onClick}
            {...props}
        >
            <div className="flex gap-2 items-center font-bold">
                {props.imgLink && <img className="max-w-5" src={props.imgLink} alt=""/>}
                {children}
            </div>
            <p className="font-light text-xs font-archivo max-w-90 text-gray-900/60">{props.description}</p>
        </button>
    );
}
