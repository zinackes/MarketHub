import { ChevronDown, ChevronUp } from 'lucide-react';
import {createContext, useContext, useEffect, useRef, useState} from "react";


const SeeMoreContext = createContext();

const SeeMore = ({children, className, maxHeight}) => {

    const [open, setOpen] = useState(false);

    const infoRef = useRef(null);
    const [shouldTruncate, setShouldTruncate] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (infoRef.current) {
            const { offsetWidth, offsetHeight } = infoRef.current;
            setDimensions({ width: offsetWidth, height: offsetHeight });

        }
    }, []);

    useEffect(() => {
        if (infoRef.current) {
            setShouldTruncate(maxHeight >= dimensions.height);
        }
    }, [children, maxHeight]);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <SeeMoreContext.Provider value={{ open, handleClick, shouldTruncate }}>
            <div
                className={`relative overflow-hidden transition-all duration-300 ease-in-out ${className}`}
                ref={infoRef}
                style={{
                    maxHeight: !open ? `${maxHeight}px` : `${infoRef.current?.scrollHeight}px`
                }}
            >
                {children}
            </div>
        </SeeMoreContext.Provider>
    )
}

const Button = ({ children }) => {

    const {handleClick, open, shouldTruncate} = useContext(SeeMoreContext);

    if (shouldTruncate) return null;

    return (
        <button
            className="flex items-center absolute bottom-0 w-full justify-center z-10"
            onClick={handleClick}
            type='button'
        >
            {open ? (
                <ChevronUp />

            ) : (
                <>
                    <ChevronDown />
                    <div className="absolute -top-6 left-0 w-full h-12 bg-gradient-to-t from-gray-100 via-gray-100/70 to-transparent pointer-events-none z-[-1]" />
                </>
                )}
            {children}
        </button>
    )
}

SeeMore.Button = Button;

export default SeeMore;
