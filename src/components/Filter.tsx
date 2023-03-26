import { useState, Dispatch, SetStateAction } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Portal from "./Portal";

// Define the default props value.
const defaultFilterProps = {
    defaultFilter: "All categories",
};

// Define props of Filter component.
type FilterProps = {
    defaultFilter: string;
    filters: string[];
    setFilter: Dispatch<SetStateAction<string>>;
} & typeof defaultFilterProps;

// Render component.
const Filter = ({ defaultFilter, filters, setFilter }: FilterProps) => {
    // Define state of filter text.
    const [filterText, setFilterText] = useState<string>(defaultFilter);

    // Define state opening and disclosing filter options.
    const [openFilters, setOpenFilters] = useState<boolean>(false);

    // Handle filter option selected by user.
    const handleFilter = (value: string) => {

        // Update state of filter option selected by user.
        setFilter(value);

        // Update the state of filter text selected by user.
        setFilterText(value);

        // Disclose filter options at the end by default.
        setOpenFilters(false);
    };

    // Reset filter options back to default (all categories).
    const resetFilter = () => {
        // Update state of filter option selected by user to default.
        setFilter("");

        // Set the current active filter state to default.
        setFilterText(defaultFilter);

        // Disclose filter options at the end by default.
        setOpenFilters(false);
    };

    return (
        <div className="relative w-[200px]">
            <div className="flex flex-row items-center justify-end w-full">
                <button
                    className="dark-mode-btn flex flex-row items-center gap-2"
                    onClick={() => setOpenFilters(prev => !prev)}
                >
                    <p>{filterText}</p>
                    <AiFillCaretDown size={10} />
                </button>
            </div>
            <div
                id="category_filter_options"
                className="absolute w-full z-10"
            >
                {openFilters && (
                    <Portal wrapperId="category_filter_options">
                        <div className="p-5 w-full bg-white rounded-md shadow-lugar">
                            <ul className="flex flex-col gap-2">
                                {filters.map((filter, index) => (
                                    <li
                                        key={index}
                                        className="cursor-pointer hover:underline"
                                        onClick={() => handleFilter(filter)}
                                    >
                                        {filter}
                                    </li>
                                ))}
                                <li
                                    className="cursor-pointer hover:underline"
                                    onClick={resetFilter}
                                >
                                    {defaultFilter}
                                </li>
                            </ul>
                        </div>
                    </Portal>
                )}
            </div>
        </div>
    );
};
Filter.defaultProps = defaultFilterProps;

export default Filter;