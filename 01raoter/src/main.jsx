import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Router, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home,About,Contact,User,Github} from './component/Index/Index.js'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />}/>
      <Route 
      
      path='github' element={<Github/>}/>
      
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
