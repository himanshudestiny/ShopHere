import { Box, Heading, Text } from '@chakra-ui/react'



const TopBrands = ({title}) => {
    return (
        <Box>
            <Text fontSize='xs' fontWeight='600' textAlign='left'>{title}</Text>
        </Box>
    )
}

export default TopBrands;