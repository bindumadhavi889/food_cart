import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <p>
        Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Food Cart.Your Door To Deliciousness — Enjoy Pizza Starting At ₹149 Delivered To Your Doorstep From Your Favourite Restaurants. Have Your Favourite Delicacy Starting At ₹149 Delivered Safely To Your Doorstep. COD Available. Widest delivery options. Hassle-free ordering. Online payment options.
        Welcome to Food Cart; your one-stop shop for online food ordering, groceries, dining, pickup and delivery! Here's why India LOVES the 
        <span> Food Cart </span> app: - Order food, ...
        </p>
        <button className='btn'>
          <Link to='/'>Back to Home</Link>
        </button>
    </div>
  )
}
export default About