import { Box, Grid, GridItem } from '@chakra-ui/react'



const WomenOne = ({image, title, details, price, additional}) => {
    return (
         <div style={{ display:"grid", textAlign:"left", border:"1px solid #EEEEEE"}}>
            <img src={image} alt="title" />
            <h2 style={{fontSize:"20px", fontWeight:"bold"}}>{title}</h2>
            <p style={{fontSize:"16px", fontWeight:"600"}}>{details}</p>
            <h3 style={{fontSize:"20px", fontWeight:"bolder", color:"red"}}>{price}</h3>
            <p style={{fontSize:"14px", fontWeight:"400"}}>{additional}</p>
         </div>
    )
}


export default WomenOne;