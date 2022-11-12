import { Box, Container, SimpleGrid, Grid, GridItem } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import axios from "axios";


const getData = () => {
    return axios.get(`http://localhost:5000/products`)

}


const Products = () => {

const [ products, setProducts ] = useState([]);

useEffect(() => {
    getData().then((res) => setProducts(res.data))
    .catch((err) => console.log("err is ", err))
    .finally(() => console.log("call completed"));
},[])

console.log(products);
    return (
       <Box style={{marginTop:"220px",display:"grid", gridTemplateColumns:"repeat(4,1fr)"}}>
         {products.map((product) => (
            <div key={product.id} style={{border:"1px solid black", display:"flex", height:"300px", width:"400px"}}>
                <div  style={{height:"100%", width:"30%"}}><h1 style={{height:"100%", width:"100%"}}>{product.title}</h1></div>
                <div style={{height:"100%", width:"70%"}}><img src={product.image} alt="product" style={{height:"100%"}}/></div>
                
                
            </div>
         ))}
       </Box>
    )
}

export default Products;



// bottom: -11px;
// font-weight: 400;
// left: 100%;
// line-height: 1;
// padding: 5px;
// position: absolute;
// text-transform: uppercase;
// transform: rotate(-90deg);
// transform-origin: bottom left;
// width: 300px;