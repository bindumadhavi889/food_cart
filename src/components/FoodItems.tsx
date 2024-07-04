
import FoodItem from "./FoodItem"

const FoodItems = ({foods}) => {
  const formattedFoods = foods.map((food)=>{
    const {idMeal,strMeal,strArea,strCategory,strMealThumb}=food
    return {
      id:idMeal,
      title:strMeal,
      category:strCategory,
      img:strMealThumb,
      area:strArea,
      price:Math.random()*100,
      amount: 1,
    }
  })
  return (
    <div className='foods'>
      {formattedFoods.map((food)=>{
        return (
          <FoodItem key={food.id} {...food}/>
        )
      })}
    </div>
  )
}
export default FoodItems