import React,{useState,useEffect} from 'react'
import { Link,Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from "./Header"

const myprofile = () =>{
    const {username, uid} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5000/indcompprofile/`)
    })
}
return(
    <div>

    </div>
)