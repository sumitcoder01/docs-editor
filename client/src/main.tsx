import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/authContext.tsx'
import { ToastContainer, Zoom } from 'react-toastify'
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Protected } from './componets/shared/Protected.tsx'
import {lazy, Suspense } from 'react'
import { Loader } from './componets/loaders/Loader.tsx'

/* eslint-disable react-refresh/only-export-components */
const Login = lazy(() => import('./pages/Login.tsx'));
const Register =lazy(() => import('./pages/Register.tsx'));
const Home = lazy(() => import('./pages/Home.tsx'));
const Docs = lazy(() => import('./pages/Docs.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));



const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="/" element={<Protected isLogin = {true} navigateUrl={"/"} />}>
          <Route path="login" index element={<Suspense fallback={<Loader/>}><Login /></Suspense>} />
          <Route path="register" element={<Suspense fallback={<Loader/>}><Register /></Suspense>} />
        </Route>
        <Route path="/" element={<Protected  navigateUrl={"/login"} isLogin={false} />}>
          <Route path="/" index element={<Suspense fallback={<Loader/>}><Home /></Suspense>} />
          <Route path="document/:id" element={<Suspense fallback={<Loader/>}><Docs /></Suspense>} />
        </Route>
        <Route path='*' element={<Suspense fallback={<Loader/>}><NotFound /></Suspense>} />
      </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <AuthProvider>
        <RouterProvider router={router} />
        </AuthProvider>
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Zoom}
        />
    </>
)
