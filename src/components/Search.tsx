import { Form } from "react-router-dom"

const Search = ({text}) => {
  return (
    <Form className='form'>
      <input type="search" name='search' defaultValue={text} className='input'/>
      <button type='submit' className='btn'>submit</button>
    </Form>
  )
}
export default Search