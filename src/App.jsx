import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './pages/Home'


let router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home></Home>} />
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
