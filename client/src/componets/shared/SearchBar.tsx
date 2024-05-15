import { SearchIcon } from "../icons/SearchIcon";


export type SearchBarProps = {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchQuery(e.target.value)
    } 

    return(
        <div className="relative">
            <div className="flex items-center absolute inset-y-0 left-2 text-xl"><SearchIcon/></div>
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 py-2 px-10 rounded-lg outline-none focus:border-gray-500 block" placeholder="Search Document..." value={searchQuery} onChange={handleChange} />
        </div>
    )
}