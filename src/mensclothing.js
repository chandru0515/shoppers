import {useState,useEffect} from "react";
// import {Link} from "react-router-dom"
import UseFetch_comp from "./usefetch";



export default function Men() {
    const [data] = UseFetch_comp("https://fakestoreapi.com/products/category/men's clothing");

    
        // const[data,setdata]=useState(null)
        // useEffect(()=>{
        // fetch("https://fakestoreapi.com/products/category/men's clothing")
        //     .then(response=>response.json())
        //     .then((result)=>setdata(result))
        //     .catch((error)=>console.error('error fetching data:',error));
        // },[]);

        return(
            <div className="men">
                {data ? (
                    <div className="m">
                        {data.map((item) => (
                             <span className="men1">
                                <img src={item.image}></img>
                                <h4><b>{item.title}</b></h4>
                                <p>{item.description}</p>
                                <h5>${item.price}</h5>
                             </span>
                        ))}
                        </div>
                    ) : (
                        <p>Loading data...</p>
                    )}
            </div>
        )
}