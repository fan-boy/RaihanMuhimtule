import { Box, Center,Grid, Hide, useDisclosure, VStack ,HStack, Image} from "@chakra-ui/react";
import React, { createRef } from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { Button, ButtonGroup, SimpleGrid,Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,IconButton } from "@chakra-ui/react"
import BrandCard from "../Components/BrandCard";

import { HamburgerIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { main, ResponseModel, Work, workItem,otherWork } from "../DataModels/baseModels";
import Profile from "../Components/profile";
import { useRef } from "react";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  let history = useHistory();
  const [loading,setLoading] = useState(false);
  const [workData,setWorkData] = useState<workItem[]>()
  const [renderWork,setRenderWork] = useState<JSX.Element[]>();
  const [otherWork,setOtherWork] = useState<otherWork[]>();
  const [otherWorkRenderer,setOtherWorkRenderer] = useState<JSX.Element[]>();
  const [profile,setProfileData] = useState<main>()
  const ProfileRef = useRef();
  const onClickBrandCard = (workItem:workItem,id:string) =>{
    let brandState = {
      item:workItem
    }
    history.push(`/work/${id}`,brandState);
  }

  useEffect(() => {
    fetch("https://portfolio-161ec-default-rtdb.firebaseio.com/.json").then((response) => {

      if(response && response.body){
        
        response.json().then((body) => {
          let res:ResponseModel = body;
          setWorkData(res.work);
          setProfileData(res.main);
          setOtherWork(res.otherWork);
        })

      }
    })
  },[])

  useEffect(()=>{
    let array:JSX.Element[] = [];
    if(otherWork){
      otherWork.forEach(p => {
        array.push(<Image src={p.imageUrl} w={["md",null,"lg"]} alt={p.title} />)
      })
    }
    setOtherWorkRenderer(array)

  },[otherWork])

  useEffect(() => {
    let workItems:JSX.Element[] = [];
    if(workData  && workData.length>0){
      workData.forEach((p,index) => {
        workItems.push(
          <BrandCard imageUrl={p.imageSrc} hoverText={p.name} item={p} onClick={onClickBrandCard} />
        )
      })
    } 
    setRenderWork(workItems);

  },[workData])

  return (
    <Box fontSize="xl" padding="5">

      <SimpleGrid columns={[1, null, 2]} spacing={[1,null,5]}>
        { renderWork}
        
      </SimpleGrid>

     
        {otherWork && otherWork.length > 0 &&
        
           <VStack>
             <Center>
        <Text as="b" fontSize="3xl" justifySelf="flex-center">Also Worked with</Text>
        </Center>
        <HStack overflow="scroll" spacing="3">
          {otherWorkRenderer}
        
        </HStack>
        
        </VStack>
      }
      
    
    </Box>
  );
}

export default Home;