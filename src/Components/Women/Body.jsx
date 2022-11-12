import { Box, Grid, GridItem, Stack, HStack, VStack, Text, Heading } from '@chakra-ui/react'
import { CloseIcon, ChevronDownIcon, TriangleDownIcon } from '@chakra-ui/icons'
import Filter from "./Filter";
import TopBrands from "./TopBrands";
import axios from "axios";
import { useState, useEffect } from "react";
import WomenOne from "./WomenOne";


const category = () => {
    return axios.get(`http://localhost:5000/categories`)
}

const topbrands = () => {
    return axios.get(`http://localhost:5000/topBrands`)
}

const topproducts = () => {
    return axios.get(`http://localhost:5000/topProducts`)
}

const relatedsearches = () => {
    return axios.get(`http://localhost:5000/relatedSearches`)
}

const womenproductsone = () => {
  return axios.get(`http://localhost:5000/womenProductsOne`)
}

const womenproductstwo = () => {
  return axios.get(`http://localhost:5000/womenProductsTwo`)
}

const womenproductsthree = () => {
  return axios.get(`http://localhost:5000/womenProductsThree`)
}



const Body = () => {
    const [ categories, setCategories ] = useState([]);
    const [ brands, setBrands ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ related, setRelated ] = useState([]);
    const [ womenone, setWomenone ] = useState([]);
    const [ womentwo, setWomentwo ] = useState([]);
    const [ womenthree, setWomenthree ] = useState([]);



    useEffect(() => {
        category().then((res) => setCategories(res.data));
        topbrands().then((res) => setBrands(res.data));
        topproducts().then((res) => setProducts(res.data));
        relatedsearches().then((res) => setRelated(res.data));
        womenproductsone().then((res) => setWomenone(res.data));
        womenproductstwo().then((res) => setWomentwo(res.data));
        womenproductsthree().then((res) => setWomenthree(res.data));
    },[])
    console.log(womenone);
    return (
        <Box>
            <Grid templateColumns='250px 938px' gap={8} ml='40' mt='4'>
  <GridItem w='100%' h='1000px' overflow='scroll' overflowWrap="revert-layer">
  <VStack
  spacing={4}
  align='stretch'
>
  <Box h='40px' display='flex'>
    <Text fontSize='2xl' fontWeight='600'>Filters</Text>
    <Text fontSize='lg' fontWeight='700' mt='8px' ml='90px'>Clear all</Text>
  </Box>
  <Box h='50px' bg='#EEEEEE' display='flex'>
    <Box border='1px solid black' height='60%' width='100px' mt='10px' ml='10px' display='flex' border='none' bg='white'>
        <Text fontSize='sm' textAlign='left' ml='10px' mt='3px' color='purple'>Women's</Text>
        <CloseIcon boxSize='0.5em' mt='12px' ml='20px' color='purple'/>
    </Box>
    <Box border='1px solid black' height='60%' width='100px' mt='10px' ml='10px' display='flex' border='none' bg='white'>
        <Text fontSize='sm' textAlign='left' ml='10px' mt='3px' color='purple'>Clothing</Text>
        <CloseIcon boxSize='0.5em' mt='12px' ml='20px' color='purple'/>
    </Box>
  </Box>
  {categories.map((item) => (
    <Filter key={item.id} title={item.text} />
  ))}
  <Box mt='100'>
    <Heading size='sm' mt='30px' textAlign='left'>Top brands for Clothing</Heading>
  </Box>
  {brands.map((brand) => (
    <TopBrands key={brand.id} title={brand.text}/>
  ))}
  <Box mt='100'>
    <Heading size='sm' mt='30px' textAlign='left'>Top products for Women's Clothing</Heading>
  </Box>
  {products.map((product) => (
    <TopBrands key={product.id} title={product.text}/>
  ))}
  <Box mt='100'>
    <Heading size='sm' mt='30px' textAlign='left'>Related searches</Heading>
  </Box>
  {related.map((item) => (
    <TopBrands key={item.id} title={item.text}/>
  ))}
  
  
</VStack>
  </GridItem>
  <GridItem w='100%' h='1000px' >
  <VStack
  spacing={4}
  align='stretch'
>
  <Box h='40px' display='flex'>
    <Box w='70%'>
    <Text fontSize='xl' fontWeight={600} textAlign='left'>953,332 products, 111 stores</Text>
    </Box>
    <Box w='30%' border='1px solid black' display='flex'>
    <Text fontSize='md' fontWeight='700' mt='4px' ml='20px'>Sort by recommended</Text>
    <TriangleDownIcon boxSize='0.6em' mt='12px' ml='60px' />
    </Box>
    
  </Box>
  <Box h='60px' bg='#EFF5E5' overflow='scroll'>
  </Box>
  <Box h='870' overflow='scroll' display='flex' gap={1}>
    <div>
    {womenone.map((item) => (
   <div key={item.id} style={{height:"400px"}} >
     <WomenOne image={item.image} title={item.title} details={item.details} price={item.price} additional={item.additional}/>
   </div>
    ))}
    </div>
    <div>
    {womentwo.map((item) => (
   <div key={item.id} style={{height:"400px"}} >
     <WomenOne image={item.image} title={item.title} details={item.details} price={item.price} additional={item.additional}/>
   </div>
    ))}
    </div>
    <div>
    {womenthree.map((item) => (
   <div key={item.id} style={{height:"400px"}}>
     <WomenOne image={item.image} title={item.title} details={item.details} price={item.price} additional={item.additional}/>
   </div>
    ))}
    </div>
  </Box>
</VStack>
  </GridItem>
  
</Grid>
        </Box>
    )
}

export default Body;