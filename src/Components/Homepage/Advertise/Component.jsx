import { Box, Heading, Text } from '@chakra-ui/react'



const Component = ({number, heading, paragraph}) => {
   return (
    
    <Box  pl='20' pr='10'>
      <Heading mt='120' size='4xl' textAlign="left">{number}</Heading>
      <Heading mt='2' size='lg' textAlign="left">{heading}</Heading>
      <Text mt='2' textAlign="left">{paragraph}</Text>
    </Box>
    
   )
}

export default Component;