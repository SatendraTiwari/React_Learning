import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import {AuthLayout} from './component/index.js'

import Protected from './component/AuthLayout.jsx'
import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";
import Login from './pages/Login.jsx'

import Post from "./pages/Post";

import AllPosts from './pages/AllPost.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App /> ,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <Login/>
            ),
        },
        {
            path: "/signup",
            element: (
                <Signup />
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AllPosts/>
            ),
        },
        {
            path: "/add-post",
            element: (  
                    <AddPost />
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)