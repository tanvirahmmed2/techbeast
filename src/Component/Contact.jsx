import React, { useEffect, useState } from 'react'
import UsePageTitle from './UsePageTitle'
import axios from "axios"

const Contact = () => {
    UsePageTitle("Contact")
    const [user, setUser] = useState([])
    useEffect(() => {
         const getallUser= async ()=>{
           const response= await axios.get("http://localhost:3000/user")
           setUser(response.data)
           console.log(user);
           
         }

    }, [])

    return (
        <div>




        </div>
    )
}

export default Contact
