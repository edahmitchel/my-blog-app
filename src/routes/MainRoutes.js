import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import MainBlogPage from '../pages/MainBlogPage'
import MainPage from '../pages/MainPage'
import NotificationsPage from '../pages/NotificationsPage'
import Posts from '../pages/Posts'
import NewPost from '../pages/NewPost.jsx'
const MainRoutes = () => {
  return (
    <>
    <BrowserRouter>

    <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='home' element={<MainBlogPage/>}>
          <Route path='main' element={<MainPage/>}/>
          <Route path='posts' element={<Posts/>}/>
          <Route path='notifications' element={<NotificationsPage/>}/>
          <Route path='new' element={<NewPost/>}/>
        </Route>
        {/* <Route path='/' element={<LandingPage/>}/> */}

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default MainRoutes