import { Box, Heading } from '@chakra-ui/react'
import {  ChevronDownIcon } from '@chakra-ui/icons'



const Filter = ({title}) => {
    return (
        <Box h='40px' borderTop='1px solid grey' display='flex'>
            <Box  w='80%'><Heading size='md' mt='14px' textAlign='left'>{title}</Heading></Box>
            <Box  w='20%'><  ChevronDownIcon boxSize='2em' mt='10px'/></Box>
        </Box>
    )
}

export default Filter;