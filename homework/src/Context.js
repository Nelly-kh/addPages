import { useState, useEffect } from "react";
import cont  from "./createCont"
import Products from "./Products";

function Context(props) {
    // const Context = createContext()

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const getData = () => {
        fetch("product_list.json").then((res) => res.json())
            .then((r) => setData(r))
    }
    
    useEffect(() => {
        getData()
    }, [])
    if (data && data.length > 0 && data !== undefined) {
        return (
            <cont.Provider value={{ data, cart, setCart }}>
                  {props.children}
                 {/* <Products products={data}/>  */}
            </cont.Provider>

        )
    } return <div class="notf">No Items yet</div>;
}
export default Context;
