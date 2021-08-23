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
  
  
  return (
    <Router history={customHistory}>
      
      
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component = {About}></Route>
          <Route path = "/work/:id" component = {WorkDesc}></Route>

        </Switch>  
          
    </Router>
  );
};

export default AppRoutes;
