import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove ,add } from '../Redux/Cartslice';


const Cart = () => {
    const dispatch =useDispatch();
    const cartitems = useSelector((state)=>state.cart)
    const handleremove =(id)=>{
        dispatch(remove(id))
    }
    const addItem = (item) => {
        dispatch(add(item));
      };
  return (
    <div>
        <h3>Cart Page</h3>
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
            <button className='btnn' onClick={()=>handleremove(item.id)}>Remove</button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Cart