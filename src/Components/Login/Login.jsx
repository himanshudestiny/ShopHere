import React, { useState } from "react";
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Navbar from "../Homepage/Navbar";
import Footer from '../Homepage/Footer/Footer';
import Button from "./Button";
import Products from "./Products";
import { useMediaQuery } from '@chakra-ui/react'
import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../Context/AuthContext";




const Login = () => {


const { isAuth, toggleAuth, loginDetails } = useContext(AuthContext);
const [ login, setLogin ] = useState("");
     const handleChange = (e) => {
          const { value } = e.target;
          setLogin(value);
     }

const handleClick = () => {
    if(login!=="")
    {
        toggleAuth();
    }
}

console.log(login);
    return (
        <Box>
            <Navbar />
            <Box>
                <div style={{border:"1px solid", height:"900px"}}>
                <Grid templateColumns='200px 400px 810px' gap={1}>
                <GridItem w='100%' h='1000' />
                <GridItem w='100%' h='1000' >
                    <p style={{fontSize:"35px", textAlign:"left", marginTop:"120px", fontFamily:"serif", fontWeight:"500"}}>The only fashion site you need</p>
                    <p style={{fontSize:"18px", textAlign:"left",marginTop:"20px", fontFamily:"serif", fontWeight:"500"}}>Email</p>
                    <input style={{textAlign:"left", backgroundColor:"none", border:"none", borderBottom:"1px solid", width:"100%", height:"40px", marginTop:"10px"}} type="text" placeholder="Enter your email address to login or register" value={login} onChange={handleChange} />
                    <button style={{width:"100%", height:"50px", backgroundColor:"black", color:"white", marginTop:"20px"}} onClick={handleClick}>Continue</button>
                    <p style={{marginTop:"20px"}}>OR</p>
                   <Button logo="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" title="Continue with Google"/>
                   <Button logo="https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593485994.jpg" title="Continue with Apple"/>
                   <Button logo="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" title="Continue with Facebook"/>
                   <p style={{textAlign:"left", fontSize:"12px", fontWeight:"600", marginTop:"10px"}}>By creating an account, you consent to Lyst’s Terms & Conditions. 
                    To learn more about how Lyst uses and protects your personal data, please read Lyst’s Privacy Policy.</p>
                </GridItem>
                <GridItem w='100%' h='900' ml='50'>
                    <Products />
                </GridItem>
                </Grid>
                </div>
            </Box>
            <Footer />
        </Box>
    )
}

export default Login;