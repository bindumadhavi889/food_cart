import image from '../assets/error.svg'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className='error'>
      <img src={image} alt='image' className='img'/>
      <h1>there was an error...</h1>
      <Link to='/' style={{color: 'orchid'}}>back to home</Link>
    </div>
  )
}
export default Error
