import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from './Navbar'
import Users from './Users'
import UserCreate from "./UserCreate"
import Post from "./Post"
import PostCreate from "./PostCreate"
import Signin from "./Signin"
import Profile from "/Profile"


export default function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Signin />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/post' element={<Post />} />
          <Route path='/post/create'  element={<PostCreate />} />
          <Route path='/users' element={<Users />} />
          <Route path='users/create' element={<UserCreate />} />
        </Routes>
      </div>
  );
}