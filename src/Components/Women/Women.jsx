import { Box } from '@chakra-ui/react'
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer/Footer";
import Clothing from "./Clothing";
import Ads from "./Ads";
import Body from "./Body";



const Women = () => {
    return (
        <Box>
            <Navbar />
            <Clothing />
            <Ads />
            <Body />
            <Footer />
        </Box>
    )
}

export default Women;