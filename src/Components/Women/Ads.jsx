import { Box, Grid, GridItem,Image, Text } from '@chakra-ui/react'

const Ads = () => {
    return (
        <Box>
            <Grid templateColumns='250px 970px' gap={0} ml='40' mt='20px' textAlign='left'>
  <GridItem w='100%' h='250'  border='1px solid #EEEEEE'>
   <Image src='https://cdna.lystit.com/245/138/tr/photos/mulberry/ae0a59cd/mulberry-Acrylic-Green-Micro-Alexa.jpeg' ml='10px'/>
   <Text ml='10px'>Mulberry | Women's Micro Alexa Inbuilt Acrylic High Shine Goat...</Text>
   <Text ml='10px'>$565.00</Text>
   <Text ml='10px'>Mulberry</Text>
  </GridItem >
  <GridItem w='100%' h='250' border='1px solid black'>
    <Image src='https://cdna.lystit.com/static/n/static-img/brand-ads/mulberry-a0fe3e67-0b7a-464e-a3b3-71ea87fdd065.o.jpg'/>
  </GridItem>
  
</Grid>
        </Box>
    )
}

export default Ads;