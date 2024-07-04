import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { clearCart } from "../features/CartSlice"

const CartItems = () => {
  const {cartItems,amount,total} = useSelector((store)=>store.cart)
  const dispatch = useDispatch()
  if(amount<1){
    return (
      <section style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h2 style={{color:'lightcoral'}}>your cart</h2>
        <h2 style={{color:'lightcoral'}}>is empty</h2>
      </section>
    )
  }
  return (
    <div style={{width:'40rem',marginLeft:'16rem'}}>
      <div style={{margin:'2rem'}}>
        {cartItems.map((item)=>{
          return (
            <CartItem key={item.id} {...item}/>
          )
        })}
      </div>
      <hr style={{width:'45rem'}}/>
      <footer style={{marginTop:'1rem'}}>
        <div style={{display:'flex',gap:'12rem',justifyContent:'center'}}>
          <h2>total</h2>
          <button style={{backgroundColor:'red',border:'none',padding:'0.5rem',color:'whitesmoke'}} onClick={()=>{
            dispatch(clearCart())
          }}>clear cart</button>
          <p style={{fontSize:'1.2rem'}}>${total.toFixed(2)}</p>
        </div>
      </footer>
    </div>
  )
}
export default CartItems