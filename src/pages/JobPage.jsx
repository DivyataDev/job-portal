import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const JobPage = () => {
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const fetchJob = async () => {
        try{
           
            const data = await fetch(`/api/jobs/${id}`);
            const result = await data.json();
            console.log(result);
            setJob(result);
        }catch(error){
            console.log("Error message",error)
          }finally {
            setLoading(false)
          }
    
        }
    
        fetchJob()


    },[])
   

  return loading ? (<Spinner />) : 
    (<>
    <h1>{job.title} </h1>
    <p>{job.location}</p>
    
    
    
    </>) 
}

export default JobPage