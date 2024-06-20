import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux';
import './App.css'
import authService from './AppWrite/auth'
import {login,logout} from './store/authSlice'
import { Header, Footer } from './component';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .catch((error) =>
    {
      console.log(error)
    })
    .finally(() => setLoading(false))
  },[])
  return !loading ? (
    <div  className=' min-h-screen flex flex-weap content-between bg-gray-300'>
      <div className='w-full block '>
        <Header />
        <main>
           TODO:{/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

