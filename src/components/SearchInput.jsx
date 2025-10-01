import {Search} from "lucide-react";
import {useState, useEffect} from "react";
import {Input} from "@/components/ui/input.jsx";

export default function SearchInput({onSearch, delay = 500, placeholder = '', className = "", noIcon = false}) {
    const [query, setQuery] = useState("");
    const [timer, setTimer] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        // clear previous timer
        if (timer) clearTimeout(timer);

        // set new debounce timer
        const newTimer = setTimeout(() => {
            onSearch(value);
        }, delay);

        setTimer(newTimer);
    };

    // cleanup timer when component unmounts
    useEffect(() => {
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [timer]);

    return (
        <>
            {!noIcon && <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20}/>}
            <Input
                value={query}
                onChange={handleChange}
                type="text"
                placeholder={placeholder}
                className={`pl-10 pr-4 py-2 w-50 border-1 border-light rounded-xl h-[32px] focus-visible:ring-0 bg-white ${className}`}
            />
        </>
    );
}
