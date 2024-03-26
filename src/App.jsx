 import React from "react"
 import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom" 

import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import AddJobPage from "./pages/AddJobPage"
import PageNotFound from "./pages/PageNotFound"
import JobPage, {jobLoader} from "./pages/JobPage"

 const App = () => {


   const addJobHandle = async (newJob) => {
      const res = await fetch(`/api/jobs`,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'},
        body: JSON.stringify(newJob)

      })
      return;
   }

   const deleteJobHandle = async (jobId) => {
    const res = await fetch(`/api/jobs/${jobId}`, {
      method: 'DELETE'
    })
    return;

   }

   const router = createBrowserRouter(
                      createRoutesFromElements(
                        <Route path='/' element={<MainLayout />} >
                          <Route index element={<HomePage />}/>
                          <Route path="/jobs" element={<JobsPage />} />
                          <Route path="/add-job" element={<AddJobPage addJob={addJobHandle} />} />
                          <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJobHandle} />} loader={jobLoader}  />
                          <Route path="*" element={<PageNotFound/>} />
                        </Route>
                      )

   )

   return (
 
     <RouterProvider  router={router} /> 
  
   )
 }
 
 export default App