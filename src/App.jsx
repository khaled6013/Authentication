import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './components/firbase/firebase'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './pages/Home'

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

let router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    } />
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