import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./Cart"
import NotFound from "./NotFound";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

const Navigation = () => {
    
    return (
           
               <Switch>
               <Route exact path="/" >
                    <Products /> 
                </Route>
                <Route path="/Cart" >
                     <Cart /> 
            </Route>
               <Route path="/Products" >
                      <Products />
            </Route>
            <Route path="/Products/:id" >
                      <SingleProduct />
                </Route>
                    <Route path="*" >     
                          <NotFound/>
                   </Route>
            </Switch>
         

    )
}

export default Navigation;