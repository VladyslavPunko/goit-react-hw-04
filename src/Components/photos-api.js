import axios from 'axios';

export async function fetchPhotosByInput(inputSearch) {
    const ACCESS = 'oyaKjse9erYpC8_merX5E1mvW6IUZrjoER6jMTgJ_Rs';
    const url = `https://api.unsplash.com/search/photos?query=${inputSearch}&client_id=${ACCESS}`;
    const respons = await axios.get(url);
    const photos = respons.data;
    return photos;

 }