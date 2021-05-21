import React, { useContext } from "react";
import cont from "./createCont";
 


function Cart() {
    const { cart , setCart} = useContext(cont);
    console.log(cart)
     if(!cart.length){
                return (
            <div  className="notf">The Cart is Empty</div>
            
)

            }
    return (
        <>
           
            <div>
                {cart.map((el) => {
            
                    return (
                        <div key={el.id} >
                            <span>{el.name}</span>
                            <img src={el.image} alt="img" />
                            <button className="btn"
                                onClick={() => {
                                 setCart(cart.filter((elem) => {
                                   return elem.id !== el.id
                               }))
                            }
                               
                            }
                            >Remove</button>
                        </div>
                                                
                     )
             })} 
                            
                          
            </div>
            <div>
                <button className="btn" >Proceed to Checkout</button>
            
            
            </div>
            </>

    )
}

export default Cart;
