import React, { useEffect, useState } from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'


const JobListings = ({isHome = false}) => { 

  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //const jobListings = isHome? jobs.slice(0,3) : jobs
  const apiUrl = isHome ? "http://localhost:8000/jobs?_limit=3" : "http://localhost:8000/jobs"

  useEffect(() => {
    const fetchJobs = async () => { 
      try{
        const data = await fetch(apiUrl);
        const result = await data.json();
        setJobs(result)
      }catch(error){
        console.log("Error message",error)
      }finally {
        setIsLoading(false)
      }
       


    }
    fetchJobs()

  },[])


  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome? 'Recent Jobs' : 'Browse Jobs'} 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
                { jobs.map( job => (
                    <JobListing key={job.id} job={ job }/>
                ))}  
      </div>
    </div>
  </section>
  )
}

export default JobListings