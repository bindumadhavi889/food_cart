import { useDispatch } from "react-redux"
import { addItem } from "../features/CartSlice"

const FoodItem = ({id,title,img,category,area,price,amount}) => {
  const cartProduct = {id,title,img,amount,price}
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(addItem({product:cartProduct}))
  }
  return (
    <div className='food'>
      <img src={img} className='img'/>
      <h2>{title}</h2>
      <h3>category : {category}</h3>
      <h3>{area}</h3>
      <h4 style={{marginBottom:'1rem'}}>price : ${price.toFixed(2)}</h4>
      <button className='btn' onClick={addToCart}>Add to Cart</button>
    </div>
  )
}
export default FoodItem