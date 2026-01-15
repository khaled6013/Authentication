import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'


let router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Navbar />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<SignUp />} />
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
