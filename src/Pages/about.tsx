import { Box, Drawer, DrawerContent, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Profile from "../Components/profile";
import { main } from "../DataModels/baseModels";

const About = () =>{
    const [profileData,setProfileData] = useState<main>();

    useEffect(() => {
        fetch("https://portfolio-161ec-default-rtdb.firebaseio.com/main.json").then((response) => {

            if(response && response.body){
              
              response.json().then((body) => {
                let res:main = body;
    
                setProfileData(res);
              })
      
            }
          })
    },[])

    return(
        <>
  
        {profileData &&
        <Profile profile = {profileData} />
        }
        </>
    )
}

export default About;