import css from "./ImageCard.module.css"

const ImageCard = ({url, description,}) => {
  return (
    <div>
      <img className={css.gallery_image} src={url} alt={description} />
    </div>
  )
}

export default ImageCard
