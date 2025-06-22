import { Box } from "@mui/material"
import { Color } from "./color"
import Header from "./header"
export default function Layout() {
    return (
        <Box width={"100%"} height="100vh" padding='20px' box-sizing='border-box' sx={{ backgroundColor: Color.white }}>
            <Header />
        </Box>
    )
}