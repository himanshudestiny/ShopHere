import React, { useState, useEffect } from 'react';
import { Image, Box, Divider } from '@chakra-ui/react'



const first = "https://cdna.lystit.com/cms/blackfriday_XL_2800_1050_23a75a1eaf.gif";
const second = "https://cdna.lystit.com/cms/DESKTOP_XL_292112190c.png";
const third = "https://cdna.lystit.com/cms/ENG_header_XL_9f9e2af236_615828663f.jpg";
const fourth = "https://cdna.lystit.com/cms/DESKTOP_XL_292112190c.png";

const App = () => {
    const [ selectedImage, setSelectedImage ] = useState(0);
    const  allImages = [first, second, third, fourth];

    useEffect(() => {
       setInterval(() => {
        setSelectedImage(prevImage => prevImage <3 ?  prevImage+1 : 0 )
       },4000)
    },[])
    //  console.log(selectedImage);
    return (
    <div>
<Box boxSize='md' w="200">
 <img src={allImages[selectedImage]} alt="" />
</Box>
</div>

    )
}
export default App;



// jjnjvnjnsdvs
// jsdvbjsbvk
// vfishjvik





















/* <Box>
<HeroSlider
            slidingAnimation = "left_to_right"
            orientation = "horizontal"
            initialSlide ={1}
            onBeforeChange = {(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
            onChange = {nextSlide => console.log("onChange", nextSlide)}
            onAfterChange = {nextSlide => console.log("onAfterChange", nextSlide)}
            style = {{
                backgroundColor : "rgba(0,0,0,0.33)"
            }}
            settings = {{
                slidingDuration : 250,
                slidingDelay : 100,
                shouldAutoplay : true,
                shouldDisplayButtons : true,
                autoplayDuration: 5000,
                height: "100vh"
            }}
            >
    <Slide 
    background = {{
        backgroundImage : first,
        backgroundAttachment : "fixed"
    }}
    />
    <Slide 
    background = {{
        backgroundImage : second,
        backgroundAttachment : "fixed"
    }}
    />
    <Slide 
    background = {{
        backgroundImage : third,
        backgroundAttachment : "fixed"
    }}
    />
     <Slide 
    background = {{
        backgroundImage : fourth,
        backgroundAttachment : "fixed"
    }}
    />
</HeroSlider>
</Box>
     */