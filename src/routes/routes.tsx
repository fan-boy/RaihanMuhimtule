import React, { useState } from "react";

import { Router, Route, Switch, useHistory, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

//custom imports
import Home from "../Pages/home";
import WorkDesc from "../Pages/WorkDesc";
import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, IconButton, SimpleGrid, Spacer, useColorMode, useColorModeValue, useDisclosure, VStack } from "@chakra-ui/react";
import About from "../Pages/about";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/layout";
import { ColorModeSwitcher } from "../ColorModeSwitcher";


const customHistory = createBrowserHistory();

// Routes For Navigation
const AppRoutes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();
  
  
  return (
    <Router history={customHistory}>
      <Switch>
        <Route path = "/" render = {props => (
                <Box fontSize="xl" padding="5">




                <Flex>
                  <Box py="4">
                    <Text as="b" fontSize="3xl" justifySelf="flex-start">Raihan Muhimtule</Text>
                  </Box>
                  <Spacer />
                  <Box display={{ base: 'none', md: 'block' }}  py="4" >
                   
                    <Button m="2" onClick={()=>customHistory.push("/")} colorScheme="teal" variant="ghost">
                      Work
                    </Button>
                    <Button m="2" colorScheme="teal" onClick={()=>customHistory.push("/about")} variant="ghost">
                      Contact
                    </Button>
                    <ColorModeSwitcher />
                   
                  </Box>
                  <Box display={{ base: 'block', md: 'none' }}  p="4">
                  <IconButton icon={<HamburgerIcon/>} ref={btnRef} onClick={onOpen}/>
                 
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    
                    <DrawerBody>
                     <VStack spacing={4}
                align="stretch" marginTop="24" >
                    <Button m="2" onClick={()=>{customHistory.push("/");
                    onClose();
                  }} colorScheme="teal" variant="ghost">
                      Work
                    </Button>
                    <Button m="2" colorScheme="teal" onClick={()=>{customHistory.push("/about")
                    onClose();
                  }} variant="ghost">
                      Contact
                    </Button>
                    </VStack>
                    </DrawerBody>
                
                    
                  </DrawerContent>
                </Drawer>
                  </Box>
                </Flex>
                
                
                </Box>
        )}></Route>

      </Switch>
      
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component = {About}></Route>
          <Route path = "/work/:id" component = {WorkDesc}></Route>

        </Switch>  
          
    </Router>
  );
};

export default AppRoutes;
