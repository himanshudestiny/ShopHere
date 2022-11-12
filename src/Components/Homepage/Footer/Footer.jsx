import { Box, Grid, GridItem, Stack, HStack, VStack, StackDivider, Heading, Text  } from '@chakra-ui/react'
import { StarIcon, PhoneIcon,EmailIcon } from '@chakra-ui/icons'


const Footer = () => {
    return (
         <Box bg='#f3f0e9'>
<Grid templateColumns='repeat(2, 1fr)' gap={1}>
  <GridItem w='100%' h='550'>
    <div style={{display:"flex"}}>
        <StarIcon boxSize='2rem' ml='40' mt='20' color='green'/>
        <Heading size='lg' ml='2' mt='20' color='black'> Trustpilot</Heading>
    </div>
    <div style={{display:"flex"}}>
        <img src='https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg' style={{height:"40px",marginTop:"10px", marginLeft:"160px"}}/>
    </div>
    <div style={{display:"flex"}}>
        <Text ml='40' mt='2'>TrustScore </Text>
        <Heading size='' ml='2' mt='2'>4.4</Heading>
    </div>
    <div style={{display:"flex"}}>
    <Heading size='' ml='40'>2,917</Heading>
        <Text ml='2'>reviews </Text>
    </div>
    <div style={{display:"flex"}}>
     <PhoneIcon ml='40' mt='2' boxSize='2rem'/>
     <EmailIcon ml='4' boxSize='3rem' />
    </div>
    <div style={{display:"flex"}}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8gIo7Vh2-gNKQ1K69O9BRHrjfEJDkNS0J1S9S_xY&s' style={{height:"40px",marginTop:"10px", marginLeft:"160px"}}/>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSASssmeQG9XOmLFawbqhdoT07HCPjNILgtKg&usqp=CAU' style={{height:"40px", marginTop:"10px", marginLeft:"10px"}}/>
    </div>
    <div  style={{display:"flex"}}>
    <Text mt='5' ml='40'>Learn about the Lyst app for iPhone, iPad and Android.</Text>
    </div>
    <div  style={{display:"flex"}}>
    <Text mt='5' ml='40'>@2022 Lyst</Text>
    </div>
  </GridItem>
  <GridItem w='100%' h='550'>
  <Grid templateColumns='300px 400px' gap={6}>
  <GridItem w='100%' h='550' >
    <Heading size='lg' textAlign='left' mt='20'>INTERNATIONAL</Heading>
    <Text textAlign='left'>Lyst - AU</Text>
    <Text textAlign='left'>Lyst - CA</Text>
    <Text textAlign='left'>Lyst- UK</Text>
    <Text textAlign='left'>Lyst - Osterreich</Text>
    <Text textAlign='left'>Lyst - Schweiz</Text>
    <Text textAlign='left'>Lyst - Deustchland</Text>
    <Text textAlign='left'>Lyst - Espana</Text>
    <Text textAlign='left'>Lyst - France</Text>
    <Text textAlign='left'>Lyst - Italia</Text>
    <Text textAlign='left'>Lyst - 日本</Text>
    <Text textAlign='left'>Lyst - België</Text>
    <Text textAlign='left'>Lyst - Nederland</Text>
  </GridItem>
  <GridItem w='100%' h='550'>
  <Heading size='lg' textAlign='left' mt='20'>HELP AND INFO</Heading>
    <Text textAlign='left'>Help Center</Text>
    <Text textAlign='left'>About us</Text>
    <Text textAlign='left'>Shipping policy</Text>
    <Text textAlign='left'>Returns policy</Text>
    <Text textAlign='left'>Payments</Text>
    <Text textAlign='left'>Refund Policy</Text>
    <Text textAlign='left'>Developers</Text>
    <Text textAlign='left'>Careers</Text>
    <Text textAlign='left'>Contact</Text>
    <Text textAlign='left'>Terms & Conditions</Text>
    <Text textAlign='left'>Privacy & cookie policy</Text>
    <Text textAlign='left'>Intellectual property</Text>
    <Text textAlign='left'>Categories</Text>
    <Text textAlign='left'>Become a partner</Text>
    <Text textAlign='left'>Lyst Insights</Text>
    <Text textAlign='left'>Lyst News</Text>
  </GridItem>
</Grid>
  </GridItem>
</Grid>
         </Box>
    )
}

export default Footer;