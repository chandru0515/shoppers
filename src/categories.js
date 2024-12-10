import {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import UseFetch_comp from "./usefetch";


export default function Categories() {
    const [data] = UseFetch_comp("https://fakestoreapi.com/products/categories");

    
    return(
        
        <div className="categories">
            {data ? (
                <div className="cate1">
                    {data.map((item) => (
                         <a href={item}><h1>{item}</h1></a>
                    ))}
                    </div>
                ) : (
                    <p>Loading data...</p>
                )}
        </div>
    )

}
        // const[data,setdata]=useState(null)
        // useEffect(()=>{
        // fetch('https://fakestoreapi.com/products/categories')
        //     .then(response=>response.json())
        //     .then((result)=>setdata(result))
        //     .catch((error)=>console.error('error fetching data:',error));
        // },[]);



