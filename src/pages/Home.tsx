import Navbar from "../components/Navbar"
import {Outlet, useNavigation} from 'react-router-dom'
const Home = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <main>
      <Navbar/>
      <section className='page'>
        {isPageLoading?(
          <div className='loading'></div>
        ):<Outlet/>}
      </section>
    </main>
  )
}
export default Home