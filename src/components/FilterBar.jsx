import { useEffect, useState } from "react"

export default function FilterBar({filterProducts, changeFilterType}) { 
    const [filter, setFilter] = useState('title');
    const [searchFilter, setSearchFilter] = useState(); 
    useEffect(() => {
        filterProducts(searchFilter);
    }, [searchFilter])

    useEffect(() => {
        changeFilterType(filter);
        setSearchFilter('');
    }, [filter])
    return ( 
        <div className="w-full flex justify-center items-center gap-4 bg-gray-100 h-[90px] text-sm md:text-lg"> 
            <select name="filter" id="filter" className="bg-white p-2 w-1/5 rounded-sm text-blue-500 outline-1 outline-gray-300" 
            onChange={(e) => setFilter(e.target.value)}>
                <option value="title">Search By Title</option>
                <option value="category">Search By Category</option>
            </select>
            { 
                filter === 'title' ? 
                <input type="search" placeholder="Search by title" className="bg-white p-2 w-1/5 rounded-sm outline-1 outline-gray-300 filter"
                onChange={(e) => setSearchFilter(e.target.value)} value={searchFilter}/>
                : 
                <input type="search" placeholder="Search by category" className="bg-white p-2 w-1/5 rounded-sm outline-1 outline-gray-300 filter"
                onChange={(e) => setSearchFilter(e.target.value)} value={searchFilter}/>
            }
        </div>
    )
}