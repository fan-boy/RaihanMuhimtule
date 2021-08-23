import { SimpleGrid, VStack, Image, Box, Center, HStack, IconButton, Icon, Button } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { main } from "../DataModels/baseModels";
import { Flex, Spacer, Text } from "@chakra-ui/layout";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaVimeoV } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
interface ProfileProps {
    profile: main
}

const Profile = (props: ProfileProps) => {

    const goTo = (location: string) => {
        let link;
        debugger;
        switch (location) {
            case "LinkedIn":
                link = props.profile?.social?.find(p => p?.className === "linkedin");
                if (link)
                    window.open(link.url);
                break;
            case "instagram":
                link = props.profile?.social?.find(p => p?.className === "instagram");
                if (link)
                    window.open(link.url);
                break;
            case "vimeo":
                link = props.profile?.social?.find(p => p?.className === "vimeo");
                if (link)
                    window.open(link.url);
                break;
        }
    }

    return (
        <Flex p="4" justify="center" spacing={5} direction={['column','column','row']}>
            <Center h="2xl" w={['100%','100%','50%']} >
                <VStack>
                    <Text as="b" fontSize="3xl" justifySelf="flex-center">{props.profile.name}</Text>
                    <Text as="b" align='center' fontSize="2xl" justifySelf="flex-start">{props.profile.bio}</Text>

                    <Spacer />
                    <Spacer />
                    {props.profile.description &&
                        <Text fontSize="xl" align="center" justifySelf="flex-center">{props.profile.description}</Text>
                    }
                    <HStack spacing="3">
                        <IconButton
                            aria-label="Linked In"
                            onClick={() => goTo("LinkedIn")}
                            icon={<Icon as={FaLinkedinIn} />}
                        />
                        <IconButton
                            aria-label="Instagram"
                            onClick={() => goTo("instagram")}
                            icon={<Icon as={FaInstagram} />}
                        />
                        <IconButton
                            aria-label="Vimeo"
                            onClick={() => goTo("vimeo")}
                            icon={<Icon as={FaVimeoV} />}
                        />
                    </HStack>
                    {props.profile.resumedownload &&
                        <a href={props.profile.resumedownload}>
                            <Button leftIcon={<FiDownload />} variant="solid">
                                Download Resume
                            </Button>
                        </a>

                    }
                    {(props.profile.email || props.profile.phone )&& 
                    <Text as='b' fontSize='2xl'>Contact Me</Text>
                    }
                    {props.profile.email &&
                        <a href={`mailto:${props.profile.email}`}>
                            <Text> {props.profile.email}</Text>
                        </a>
                    }
                    {props.profile.phone &&
                        <a href={`tel:${props.profile.phone}`}>
                            <Text>{props.profile.phone}</Text>
                        </a>
                    }
                    
                </VStack>
            </Center>
            {props.profile.image && props.profile.image.length >0 &&
            <Center h="2xl" w={['100%','100%','50%']}>
                <Image src={props.profile.image} h={['xl','2xl','2xl']} alt={""} />
            </Center>
            }
        </Flex>

    );

}

export default Profile;