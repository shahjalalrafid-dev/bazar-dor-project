'use client'

import { SortOption } from "./product";

interface SortByProps {
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
}


const SortBy = ({sortBy, setSortBy} : SortByProps) => {

     


    return (
        <select value={sortBy} onChange={(e) => setSortBy (e.target.value as "default" | "mintomax" | "maxtomin")}  className="select select-ghost">

            <option value= "default"> ডিফল্ট</option>
            <option value= "mintomax">দাম: কম থেকে বেশি</option>
            <option value= "maxtomin">দাম: বেশি থেকে কম</option>

        </select>
    )
}

export default SortBy