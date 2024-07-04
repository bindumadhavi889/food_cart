import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { decrease, increase, remove } from '../features/CartSlice'

const CartItem = ({id,title,img,price,amount}) => {
  const dispatch = useDispatch()
  return (
    <div className='cart'>
      <div>
        <img src={img} alt={title} className='cart-img'/>
      </div>
      <div>
        <h3>{title}</h3>
        <h4>${price}</h4>
        <button style={{border:'none',padding:'0.5rem',color:'gray',backgroundColor:'skyblue'}} onClick={()=>{
          dispatch(remove(id))
        }}>remove</button>
      </div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <button style={{background:'transparent',border:'none'}} onClick={()=>dispatch(increase(id))}>
         <AiFillCaretUp />
        </button><p>{amount}</p>
        <button style={{background:'transparent',border:'none'}} onClick={()=>{
          if(amount<2){
            dispatch(remove(id))
            return
          }
          dispatch(decrease(id))
        }}>
         <AiFillCaretDown/>
        </button>
        
      </div>
    </div>
  )
}
export default CartItem