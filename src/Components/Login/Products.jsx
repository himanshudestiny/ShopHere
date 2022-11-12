import { Box, Grid, GridItem, Text, Image, Heading } from '@chakra-ui/react'
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";


const getData = () => {
    return axios.get(`http://localhost:5000/list`)
}



const Products = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        getData().then((res) => setData(res.data));
    },[])


    console.log(data);
    return (
         <Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={0}>
<GridItem w='100%' h='300'>
<Image src='https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?s=612x612&w=0&k=20&c=b4MahNlk4LH6H1ksJApfnlQ5ZPM3KGhI5i_yqhGD9c4='/>
</GridItem>
<GridItem w='100%' h='300'>
    <Heading mt='20'>Men's fresh collection</Heading>
</GridItem>
<GridItem w='100%' h='300'>
    <Image src='https://img.freepik.com/free-photo/jeans_1203-8093.jpg?w=2000'/>
</GridItem>
<GridItem w='100%' h='300'>
<Heading mt='20'>Women's accoustic garments</Heading>
</GridItem>
<GridItem w='100%' h='300'>
    <Image src='https://www.pngplay.com/wp-content/uploads/2/Dress-Shirt-Background-PNG.png' />
</GridItem>
<GridItem w='100%' h='300'>
<Heading mt='20'>Kid's colorful selection</Heading>
</GridItem>
<GridItem w='100%' h='300'>
<Image src='https://www.freepnglogos.com/uploads/women-bag-png/download-women-bag-transparent-png-image-pngimg-5.png' />
</GridItem>
<GridItem w='100%' h='300'>
<Heading mt='20'>Fresh peices arrived daily</Heading>
</GridItem>
<GridItem w='100%' h='300'>
<Image src='https://freepngimg.com/thumb/dress/33183-2-floral-dress-transparent-image.png' />
</GridItem>
</Grid> 
         </Box>
    )
}

export default Products;



