import { Box, Image, Text, Grid, GridItem } from '@chakra-ui/react'
import axios from "axios";
import { useState, useEffect} from "react";



const Product = ({id, image, title}) => {
    
    return (
        //  <Box border='1px solid black'>
        //   <Text>{title}</Text>
        //   <Image src={image}/>
        //  </Box>
        <Grid templateColumns='repeat(3, 1fr)' gap={0}>
         <GridItem w='100%'h='300' border='1px solid black' >
            <Text>{title}</Text>
         </GridItem>
         <GridItem w='100%'h='300' border='1px solid black' >
            <Text>{title}</Text>
         </GridItem>
         <GridItem w='100%'h='300' border='1px solid black' >
            <Text>{title}</Text>
         </GridItem>
         </Grid>
    )
}

export default Product;