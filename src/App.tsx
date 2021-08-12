import * as React from "react"
import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react"
import AppRoutes from "./routes/routes"


const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}
// 3. extend the theme
const theme = extendTheme({ config })
export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRoutes />
  </ChakraProvider>
)
