import './App.css'
import './bootstrap.css'
import './bootstrap.bundle.min.js'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Home, About, PageServices, Contact} from './pages.jsx'
import Projects from './Projects.jsx'

const loaderRoot = () =>{
  return (
<div className=' loading'>
    <div className="spinner-border text-warning" role="status">
</div>
     </div>
  )
}
const router= createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/projects',
    loader: loaderRoot,
    element: <Projects></Projects>
  },
  {
    path: 'about-our',
    element: <About></About>
  },
  {
    path: '/services',
    element: <PageServices></PageServices>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
        <RouterProvider router={router}></RouterProvider>
  </>,
)
