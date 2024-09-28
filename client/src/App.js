import React from 'react'
import {Route, Routes} from "react-router-dom";
import Header from './Components/Header.js';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Register from './Pages/Registr.js';
import AddBlog from './Pages/AddBlog.js';
import AddCategory from './Pages/AddCategory.js';
import SingleBlog from './Pages/SingleBlog.js';
import PrivateRoute from './Services/ProtectedRoutes.js';

 const App = () => {
  return ( <>
  <Header />  {/* To render header above all pages */}
  <Routes>  {/* All routes inside this */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Protected Routes */}
    <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
    </Route>
  </Routes>
    </>
  )
}

export default App;
