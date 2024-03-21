 import React from "react"
 import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom" 

import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import AddJobPage from "./pages/AddJobPage"
import PageNotFound from "./pages/PageNotFound"

 const App = () => {

   const router = createBrowserRouter(
                      createRoutesFromElements(
                        <Route path='/' element={<MainLayout />} >
                          <Route index element={<HomePage />}></Route>
                          <Route path="/jobs" element={<JobsPage />}></Route>
                          <Route path="/jobs" element={<AddJobPage />}></Route>
                          <Route path="*" element={<PageNotFound/>}></Route>
                        </Route>
                      )

   )

   return (
 
     <RouterProvider  router={router} /> 
  
   )
 }
 
 export default App