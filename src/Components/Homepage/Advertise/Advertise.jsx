import {Grid, GridItem, Heading, Button } from '@chakra-ui/react'
import Component from './Component';


const Advertise = () => {
   return (
      <div style={{border:"1px solid black", marginTop:"50px"}}>
      <Grid templateColumns='990px 540px' gap={0} bg='#f3f0e9'>

         <div style={{borderRight:"1px solid black"}}>
      <GridItem w='100%' h='600'> 
      <Grid templateColumns='330px 330px 330px' gap={0}>
  <GridItem w='100%' h='600' > 
  <Component number="1" heading="THE BIGGEST SELECTION" paragraph="Shop over 12,000 brands and stores in one place.

Find exactly what you want with powerful search and personal recommendations."/>
  </GridItem>
  <GridItem w='100%' h='600' >
  <Component number="2" heading="THE HOTTEST PRODUCTS" paragraph="See what’s new and what’s trending.

Hit the heart to receive alerts on the latest drops from your favourite brands."/>
   </GridItem>
  <GridItem w='100%' h='600' >
  <Component number="3" heading="THE BEST PRICES" paragraph="Compare prices and shipping options across thousands of stores.

Lyst members are notified when an item goes on sale."/>
   </GridItem>
  
</Grid></GridItem>
</div>

      <GridItem w='100%' h='600' bg='#9CFF2E'>
      <Grid templateColumns='340px 200px' gap={1}>
  <GridItem w='100%' h='600' textAlign='left' p='10'>
   <Heading  mt='40' size='2xl'>SIGN UP FOR SMARTER SHOPPING</Heading>
   <Button bg='black' size='lg' mt='5' borderRadius="none" color="white" width="150px" height='40px'> Join -> </Button>
  </GridItem>
  <GridItem w='100%' h='600' />
</Grid> </GridItem>
     
    </Grid>
    </div>
   )
}

export default Advertise;