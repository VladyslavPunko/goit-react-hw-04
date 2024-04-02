
import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import { fetchPhotosByInput } from './photos-api'
import ImageGallery from './ImageGallery/ImageGallery'
import Loader from './Loader/Loader'

function App() {

  const [inputSearch, setInputSearch] = useState("")
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => { 
    if (!inputSearch) return;
    async function fetchPhotos() { 

      try{ 
        setLoading(true);
        const {results} = await fetchPhotosByInput(inputSearch);
        setPhotos((prevPhotos) => [...prevPhotos, ...results]);
}
      catch(error) {console.log(error)}
      finally { setLoading(false);}
      
    }
    fetchPhotos()
  },[inputSearch])


  const onSubmit = (inputSearch) =>{
  setInputSearch(inputSearch);
  setPhotos([]);
}
  

  return (<>
    <SearchBar onSubmit={onSubmit} />
    {loading && <Loader/>}
    <ImageGallery photos={photos} />
  
  
  </>)
}

export default App