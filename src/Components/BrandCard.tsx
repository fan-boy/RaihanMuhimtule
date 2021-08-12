import { Box,Image } from "@chakra-ui/react";
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
<Box borderRadius="sm"  h="lg" boxShadow="base" overflow="hidden" >
<Image src={props.imageUrl} alt={props.hoverText} onClick={()=>props.onClick(props.item,props.hoverText)} />
</Box>
    );


}

export default BrandCard;