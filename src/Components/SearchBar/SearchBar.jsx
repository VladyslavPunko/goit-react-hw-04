import { BsSearch } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';

import css from "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => {

const handleOnSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputSearch = form.elements.search.value;
    if (inputSearch.trim() === "") {
        toast.error("Please enter search term!");
        return
    }
              
    onSubmit(inputSearch); 
  }
    



  return (<header className={css.headerSearch}>
  <form className={css.fomrSearch} onSubmit={handleOnSubmit}> 
    <input className={css.inputSearch} 
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="search"
    />
          <button type="submit" className={css.btn}><BsSearch /></button>
          <Toaster
  position="top-right"
  reverseOrder={false}
/>
  </form>
</header>)
}

export default SearchBar
