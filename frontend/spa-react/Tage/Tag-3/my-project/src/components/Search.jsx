import { useState } from "react"

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        event.preventDefault();
        console.log(searchTerm);
    };

  return (
    <form action="">
        <label htmlFor="search">Search </label>
        <input id="search" type="text" placeholder="Search..." onChange={handleSearch} />
        <p>{searchTerm}</p>
        <button type="submit">Search</button>
    </form>
  )
}

export default Search