import { Box, IconButton } from '@chakra-ui/react'
import { Stack, HStack, VStack, StackDivider, Button, ButtonGroup, Flex, Spacer, Grid, GridItem, Image, Input } from '@chakra-ui/react'
import SHOP from "./SHOP.png"
import { Search2Icon, SearchIcon } from '@chakra-ui/icons'
import { Navigate, Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../Context/AuthContext";


const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  console.log(isAuth);
    return (
        <Box>
         <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={0}
  align='stretch'
>
  <Box h='50px' mt="2" border="0px">
  <HStack spacing='0' ml="1160">
  <Box w='100px' h='40px'  p="2">
    In-US$
  </Box>
  <Box w='100px' h='40px' ml="-2" p="2" >
    Help
  </Box>
  <Box w='150px' h='40px' p="2">
   <Link to='/login'> <Button colorScheme='black' bg="black" mt="-2" borderRadius='none'>sign up or log in</Button></Link>
  </Box>
</HStack>
  </Box>
  <Box h='60px'  border="0px">
  <HStack spacing='0'>
  <Box w='200px' h='40px'>
  <Image src={SHOP} alt='logo' mt="-74px" />
  </Box>
  <Link to='/women'> <Box w='120px' h='40px' p="2"> 
   WOMEN
  </Box>
  </Link>
  <Box w='120px' h='40px' p="2">
    MEN
  </Box>
  <Box w='1070px' h='40px'>
  <Input placeholder=' SEARCH(E.G. "VALENTINO DRESSES")' focusBorderColor = "black"    />
  </Box>
</HStack>
  </Box>
</VStack>  
        </Box>
    )
}

export default Navbar;