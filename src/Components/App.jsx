
import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import { fetchPhotosByInput } from './photos-api'
import ImageGallery from './ImageGallery/ImageGallery'
import Loader from './Loader/Loader'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'

function App() {

  const [inputSearch, setInputSearch] = useState("")
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(false)
  const [showBtn, setShowBtn] = useState(false);


  useEffect(() => { 
    if (!inputSearch) return;
    async function fetchPhotos() { 

      try{ 
        setLoading(true);
        const {total_pages, results} = await fetchPhotosByInput(inputSearch, page);
        setPhotos((prevPhotos) => [...prevPhotos, ...results]);
        setShowBtn(total_pages > page);
}
      catch(error) {setError(true)}

      finally { setLoading(false);}
      
    }
    fetchPhotos()
  },[inputSearch, page])


  const onSubmit = (inputSearch) =>{
  setInputSearch(inputSearch);
  setPhotos([]);
}

const onClickButton = () => {
  setPage((prevPage) => prevPage + 1);
 
};
  

  return (<>
    <SearchBar onSubmit={onSubmit} />
    {loading && <Loader/>}
    {error && <ErrorMessage/>}
    <ImageGallery photos={photos} />
    {showBtn && <LoadMoreBtn onClickButton={onClickButton} />}
  
  
  </>)
}

export default App
