import {
    AspectRatio, Box, Stack, useDisclosure, VStack, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    propNames,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { VimeoDataModel, workItem } from "../DataModels/baseModels";
import { Heading } from "@chakra-ui/react"
import { Flex, Spacer, Text } from "@chakra-ui/layout";
import {
    Button, ButtonGroup, SimpleGrid, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, IconButton
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import Vimeo from '@u-wave/react-vimeo';
import {BiArrowBack} from 'react-icons/bi';



interface WorkState {
    item: workItem
}

const WorkDesc = () => {
    let location = useLocation();
    const [data, setData] = useState<workItem>();
    const [projects, setProjects] = useState<JSX.Element[]>();
    useEffect(() => {
        if (!state?.item) {
            fetch("https://portfolio-161ec-default-rtdb.firebaseio.com/work.json").then((response) => {

                if (response && response.body) {
                    let workName = location.pathname.replace("/work/", "");
                    response.json().then((body) => {
                        let res: workItem[] = body;
                        let work = res.filter(p => p.name === workName)
                        setData(work[0]);
                    })

                }
            })
        }
        else {
            setData(state.item);
        }
    }, [])

    const { state } = useLocation<WorkState>();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();
    let history = useHistory();
    const [loading, setLoading] = useState(false);
    const [workData, setWorkData] = useState<workItem[]>()
    const [renderWork, setRenderWork] = useState<JSX.Element[]>();


    useEffect(() => {
        let projectTemp: JSX.Element[] = [];
        if (data)
            data.projects.forEach(project => {
                fetch(`https://vimeo.com/api/oembed.json?url=${project.videoUrl}`).then(response => {
                    console.log(response);
                    response.json().then((res) => {
                        let resp: VimeoDataModel = res;
                        console.log(resp.html);
                    })
                })
                projectTemp.push(
                    <VStack>
                        <Text as="b" fontSize="2xl" justifySelf="flex-start">{project.title}</Text>

                        <Vimeo width="640" height="360" video={project.videoUrl} />

                    </VStack>
                )
            })
        setProjects(projectTemp);
    }, [data])

    return (
        <Box fontSize="xl" px="5">
        <Flex>
  <Box py="4">
    <Text as="b" fontSize="3xl" justifySelf="flex-start">Raihan Muhimtule</Text>
  </Box>
  <Spacer />
  
</Flex>




            <Button leftIcon={<BiArrowBack />} onClick = {() => history.push("/")} colorScheme="teal" variant="solid">
    Go Back
            </Button>
            
            <VStack spacing="10">

                {projects}

            </VStack>

        </Box>

    )
}
export default WorkDesc