import React,{useState,useCallback} from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage=()=>{
    const [value,setValue]=useState()
    const navigate=useNavigate()
    const handleJoin=useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])
    return (
        <div>
            <input type='text' value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder='Enter your room Code' />
            <button onClick={handleJoin}>Join</button>
        </div>
    )
}
 
export default HomePage;