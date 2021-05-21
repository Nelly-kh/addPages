import React, { useContext } from "react";
import cont from "./createCont";
import { Router, Link } from "react-router-dom";


function Products() {
    const {cart, data, setCart} = useContext(cont);
   console.log(cart, data)
        return (
        <>
            <div className="elems">
            
                {data && data.map((el) => {
                    return (
                        <div key={el.id} >
                            <span>{el.name}</span>
                         <Link to={`/Products/${el.id}`}>  <img src={el.image!== null?el.image: "https://robohash.org/consequaturvelitsint.png?size=150x149&set=set1"} alt="img" /></Link> 
                            <button className="btn" onClick={() => {
                                setCart([...cart, el])
                                                             } }>Add to Cart</button>
                        </div>
                        
                     )
             })}
            </div>
        </>
    )

}

export default Products;
