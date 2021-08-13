import { Box,Center,Image ,Spinner,Text,VStack} from "@chakra-ui/react";
import React from "react";
import { workItem } from "../DataModels/baseModels";

interface BrandCardProps{
    imageUrl:string,
    hoverText:string,
    item:workItem
    onClick:(workItem:workItem,id:string) => void
}

const BrandCard = (props:BrandCardProps) =>{

    return(
<Box borderRadius="sm" as="a" css={{position:"relative"}} h={["md",null,"lg"]} boxShadow="base" overflow="hidden" onClick={()=>props.onClick(props.item,props.hoverText)} >
    
<Image src={props.imageUrl} alt={props.hoverText} fallback={<Spinner />}  />
<Center h="full" w="full"  css={{position:"absolute",top:"0",left:"0",backgroundColor:"gray",opacity:"0" }} _hover={{opacity:"80%"}}>
<VStack>
<Text as="b" fontSize = "4xl" >{props.item.header}</Text>
<Text as="b" fontSize = "3xl">Click for more details.</Text>
</VStack>
</Center>
</Box>
    );


}

export default BrandCard;