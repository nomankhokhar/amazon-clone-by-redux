import { useEffect } from 'react';
import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { setuser } from './redux/actions';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Checkout from './pages/Checkout/Checkout';


function App() {
  // If user login and refresh the app user will stay login in app
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser))
      }
      else {
        dispatch(setuser(null))
      }
    })
  }, [dispatch]);


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/checkout" element={<Checkout />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
