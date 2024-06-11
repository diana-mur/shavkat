import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'
import './index.css'
import ErrorPage from './error-page.jsx';
import Services from './Page2/Services.jsx';
import Galery from './Page3/Galery.jsx';
import PostIvent from './Page4/PostIvent.jsx';
import Admin from './pages/Admin.jsx';
import Page1 from './Page1/Page1';
import Login from './pages/Login.jsx';
import Reg from './pages/Reg.jsx';
import Profile from './pages/Profile.jsx';
import AdminEvent from './pages/AdminEvent.jsx';
import AdminGallery from './pages/AdminGalery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/galery",
    element: <Galery />,
  },
  {
    path: "/post",
    element: <PostIvent />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Reg />,
  },
  {
    path: "*",
    element: <Navigate to={'/'} />,
  },

]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/galery",
    element: <Galery />,
  },
  {
    path: "/post",
    element: <PostIvent />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: <Navigate to={'/'} />,
  },

])

const adminRouter = createBrowserRouter([
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/adminEvent',
    element: <AdminEvent />
  },
  {
    path: '/adminGallery',
    element: <AdminGallery />
  },
  {
    path: "*",
    element: <Navigate to={'/admin'} />,
  },

])

function App() {
  const token = useSelector(state => state.auth.token)
  let jwt
  token ? jwt = jwtDecode(token) : null

  return (
    token ?
      jwt?.roleId == 'ADMIN' ? <RouterProvider router={adminRouter} /> :
        <RouterProvider router={userRouter} /> :
      <RouterProvider router={router} />
  )
}

export default App
