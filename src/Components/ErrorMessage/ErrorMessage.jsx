import cat from "../CatError.png"
import css from "./ErrorMessage.module.css"

const ErrorMessage = () => {
  return (<div className={css.wrap}>    
    <p className={css.text}>Woooops... Something went wrong. Please reload the page</p>
    <img className={css.imge} src={cat} alt="cat" /></div>

  )
}

export default ErrorMessage
