import { Grid, GridItem, Heading } from '@chakra-ui/react'
import Component from "./Component";



const Categories = () => {
    return (
        <div style={{borderBottom:"1px solid black", width:"100%"}}>
            <Grid templateColumns='repeat(6, 1fr)' gap={1}>
  <GridItem w='100%' h='600' >
  <Grid templateColumns='15% 85%' gap={0}>
  <GridItem w='100%' h='600'>
    <Heading lineHeight='27px' ml='2' mt='120px'>WOMENS CLOTHING</Heading>
  </GridItem>
  <GridItem w='100%' h='600' textAlign='left' ml='3' mt='60px'>
   <Component title="Jackets"/>
   <Component title="Pants, Slacks and Chinos"/>
   <Component title="Jeans"/>
   <Component title="Skirts"/>
   <Component title="Jumpsuits and rompers"/>
   <Component title="Nightwear and sleepwear"/>
   <Component title="Suits"/>
   <Component title="Beachwear and swimwear"/>
   <Component title="outfits"/>
   <Component title="+More"/>
  </GridItem>
</Grid>
  </GridItem>

  <GridItem w='100%' h='600' >
  <Grid templateColumns='15% 85%' gap={0} ml='-30px'>
  <GridItem w='100%' h='600'>
    <Heading lineHeight='27px' ml='2' mt='170px'>MENS CLOTHING</Heading>
  </GridItem>
  <GridItem w='100%' h='600' textAlign='left' ml='3' mt='100px'>
   <Component title="Jackets"/>
   <Component title="Underwear"/>
   <Component title="Shirts"/>
   <Component title="T-Shirts"/>
   <Component title="Pants, Slacks and Chinos"/>
   <Component title="Jeans"/>
   <Component title="Nightwear and sleepwear"/>
   <Component title="Suits"/>
   <Component title="+More"/>
  </GridItem>
</Grid>
  </GridItem>

  <GridItem w='100%' h='600' >
  <Grid templateColumns='15% 85%' gap={0} ml='-30px'>
  <GridItem w='100%' h='600'>
    <Heading lineHeight='27px' ml='2' mt='200px'>WOMENS SHOES</Heading>
  </GridItem>
  <GridItem w='100%' h='600' textAlign='left' ml='3' mt='325px'>
   <Component title="Heels"/>
   <Component title="Flats and flat shoes"/>
   <Component title="Boots"/>
   <Component title="Sneakers"/>
  </GridItem>
</Grid>
  </GridItem>

  <GridItem w='100%' h='600'>
  <Grid templateColumns='15% 85%' gap={0} ml='-40px'>
  <GridItem w='100%' h='600'>
    <Heading lineHeight='27px' ml='2' mt='250px'>MENS SHOES</Heading>
  </GridItem>
  <GridItem w='100%' h='600' textAlign='left' ml='6' mt='255px'>
   <Component title="Sandals, slides and flip flops"/>
   <Component title="Slip-on shoes"/>
   <Component title="Lace-ups"/>
   <Component title="Sneakers"/>
   <Component title="Boots"/>
  </GridItem>
</Grid>
  </GridItem>

  <GridItem w='100%' h='600' >
  <Grid templateColumns='10% 85%' gap={0}>
  <GridItem w='100%' h='600'>
    <Heading lineHeight='27px' ml='7' mt='35px'>WOMENS ACCESSORIES</Heading>
  </GridItem>
  <GridItem w='100%' h='600' textAlign='left' ml='10' mt='57px'>
   <Component title="Wallets and cardholders"/>
   <Component title="Belts"/>
   <Component title="Headbands, hair clips and hair"/>
   <Component title="accessories"/>
   <Component title="Umbrellas"/>
   <Component title="Phone cases"/>
   <Component title="Watches"/>
   <Component title="Gloves"/>
   <Component title="Sunglasses"/>
   <Component title="+More"/>
  </GridItem>
</Grid>
  </GridItem>
  <GridItem w='100%' h='600' >
  <Grid templateColumns='10% 85%' gap={0} ml='-70px'>
  <GridItem w='100%' h='600'>
    <Heading lineHeight='27px' ml='2' mt='90px'>MENS ACCESSORIES</Heading>
  </GridItem>
  <GridItem w='100%' h='600' textAlign='left' ml='5' mt='100px'>
   <Component title="Ties"/>
   <Component title="Cufflinks"/>
   <Component title="Wallets and cardholders"/>
   <Component title="Belts"/>
   <Component title="Watches"/>
   <Component title="Gloves"/>
   <Component title="Sunglasses"/>
   <Component title="Face masks"/>
   <Component title="+More"/>
  </GridItem>
</Grid>
  </GridItem>
</Grid>
        </div>
    )
}

export default Categories;