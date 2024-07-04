import Search from "../components/Search"
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
import { useLoaderData } from "react-router-dom"
import FoodItems from "../components/FoodItems"
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const searchQuery = (text) =>{
  return {
    queryKey:['search',text || 'all'],
    queryFn: async() => {
      const resp = await axios.get(`${url}${text}`)
      return resp.data.meals
    },
  }
}
export const loader =(queryClient)=> async({request}) => {
  const url = new URL(request.url);

  const text = url.searchParams.get('search') || 'all';
  await queryClient.ensureQueryData(searchQuery(text));
  return { text };
}
const Landing = () => {
  const {text} = useLoaderData()
  const {data:foods} = useQuery(searchQuery(text))
  return (
    <div>
      <Search text={text}/>
      <FoodItems foods={foods}/>
    </div>
  )
}
export default Landing