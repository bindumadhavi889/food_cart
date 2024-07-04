import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Home,About,Cart,Error,Landing} from './pages'
import {loader as landingLoader} from './pages/Landing'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/CartSlice'
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000*60*5,
    }
  }
})
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        loader:landingLoader(queryClient),
        element:<Landing/>,
      },
      {
        path:'cart',
        element:<Cart/>
      }
    ]
  },
  {
    path:'about',
    element:<About/>
  },

])

const App = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((store) =>store.cart)
  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}
export default App