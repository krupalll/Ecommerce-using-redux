import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove ,add } from '../Redux/Cartslice'
import {Link} from "react-router-dom"


const Cart = () => {
    const state = useSelector((state) => state.cart);

      const EmptyCart = () => {
        return (
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h4 className="p-3 display-5">Your Cart is Empty</h4>
                <Link to="/" className="btnn navLink" style={{color:"white",marginLeft:"0px"}}>
                     Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        );
      };

      const ShowCart = () => {
        
        const dispatch =useDispatch();
        const cartitems = useSelector((state)=>state.cart);
    
        const handleremove =(id)=>{
            dispatch(remove(id))
        }
    
        const addItem = (item) => {
            dispatch(add(item));
          };
        
        return (
            <>
        
        <div className='cartWrapper'>
            {cartitems.map((item,index)=>(
                <div className='cartCard' key={index}>
                <img src={item.image} alt="img"/>
                <h5>{item.title}</h5>
                <h5>{item.qty * item.price}&nbsp;({item.qty}&nbsp;&nbsp;items)</h5>
                <div
                                    
                                    style={{ maxWidth: "300px",display:"flex",marginBottom:"4",margin:"20px",gap:"15px"}}
                                  >
                                    <button
                                    
                                      className="btnn"
                                      onClick={() => {
                                        handleremove(item);
                                      }}
                                    >
                                      <i className="fas fa-minus">-</i>
                                    </button>
    
                                    <p className="mx-5">{item.qty}</p>
    
                                    <button
                                      className="btnn"
                                      onClick={() => {
                                        addItem(item);
                                      }}
                                    >
                                      <i className="fas fa-plus">+</i>
                                    </button>
                                  </div>
                <button className='btnn' onClick={() => handleremove(item)}>Remove</button>
                </div>
            ))}
        </div>
      </>
 )
}

  return (
    <>
   <div className=" my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
    </>
  )
  }





export default Cart