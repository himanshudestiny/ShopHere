import Component from "./Component";

import { Grid, GridItem, Heading } from '@chakra-ui/react';


const Wanted = () => {
    return (
        <div style={{borderBottom:"1px solid"}}>
            <Grid templateColumns='30px 1100px 300px' gap={6}>
  <GridItem w='100%' h='300'>
    <Heading size='lg' lineHeight='25px' mt='5' ml='5'>MOST WANTED</Heading> 
    </GridItem>
  <GridItem w='100%' h='300' >
  <Grid templateColumns='repeat(5, 1fr)' gap={6}  mt='10'>
  <Component text= ' TORY BURCH MILLER SANDALS ' />
  <Component text= ' NIKE INDY LUXE BRAS ' />
  <Component text= ' BALENCIAGA CROC ' />
  <Component text= ' TUXEUDO DRESSES ' />
  <Component text= ' LIGHT BLUE PUMPS ' />
  <Component text= ' MENS WIDE LEG SWEATPANTS ' />
  <Component text= ' MENS FLARE JEANS ' />
  <Component text= ' ADIDAS TERREX SHOES ' />
  <Component text= ' NIKE STEFAN JANOSKI MAX SNEAKERS ' />
  <Component text= ' PLAIN PANTS ' />
</Grid>
  </GridItem>
  <GridItem w='100%' h='300' />
  
</Grid>
        </div>
    )
}

export default Wanted;

{/* <GridItem w='100%' h='100' textAlign="left">
<Heading size='md' ml='6' mt='4'>NIKE INDY LUXE <br /> BRAS </Heading>
</GridItem>
<GridItem w='100%' h='100' textAlign="left">
<Heading size='md' ml='6' mt='4'>BALENCIAGA <br /> CROC </Heading>
</GridItem>
<GridItem w='100%' h='100' textAlign="left">
<Heading size='md' ml='6' mt='4'>TUXEUDO <br /> DRESSES </Heading>
</GridItem>
<GridItem w='100%' h='100'  textAlign="left">
<Heading size='md' ml='6' mt='4'>LIGHT BLUE <br /> PUMPS</Heading>
</GridItem>
<GridItem w='100%' h='100'  textAlign="left">
<Heading size='md' ml='6' mt='4'>MENS WIDE <br /> LEG<br /> SWEATPANTS</Heading>
</GridItem>
<GridItem w='100%' h='100'  textAlign="left">
<Heading size='md' ml='6' mt='4'>MEN'S FLARE <br /> JEANS</Heading>
</GridItem>
<GridItem w='100%' h='100'  textAlign="left">
<Heading size='md' ml='6' mt='4'>ADIDAS TERREX <br /> SHOES </Heading>
</GridItem>
<GridItem w='100%' h='100'  textAlign="left">
<Heading size='md' ml='6' mt='4'>NIKE STEFAN <br /> JANOSKI MAX <br /> SNEAKERS</Heading>
</GridItem>
<GridItem w='100%' h='100'  textAlign="left">
<Heading size='md' ml='6' mt='4'>PLAID <br />PANTS </Heading>
</GridItem> */}