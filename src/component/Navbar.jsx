import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state)=>state.cart)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <h1>Krupal.</h1>
        <div style={{width:"300px",display:"flex",justifyContent:"space-evenly"}}>
            <Link className='navLink' style={{fontWeight:"bolder"}}  to={"/"}>Home</Link>
            <Link   className='navLink' style={{marginRight:"17px",fontWeight:"bolder"}} to={"/cart"}>Cart</Link>
            <span style={{fontWeight:"bolder"}}>items:{items.length}</span>
        </div>
    </div>
  )
}

export default Navbar