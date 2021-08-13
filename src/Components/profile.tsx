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
        <SimpleGrid p="4" columns={[1, null, 2]} spacing={5}>
            <Center h="2xl">
                <VStack>
                    <Text as="b" fontSize="3xl" justifySelf="flex-center">{props.profile.name}</Text>
                    <Text as="b" fontSize="2xl" justifySelf="flex-start">{props.profile.bio}</Text>

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
                    {props.profile.email &&
                        <a href={`mailto:${props.profile.email}`}>
                            <Button leftIcon={<HiOutlineMail />} variant="solid">
                                Contact me
                            </Button>
                        </a>
                    }
                    
                </VStack>
            </Center>
            <Center h="2xl">
                <Image src={props.profile.image} h="2xl" alt={""} />
            </Center>
        </SimpleGrid>

    );

}

export default Profile;