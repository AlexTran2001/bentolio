import { Box, Typography, Link } from "@mui/material"
import { Color } from "./color"

export default function Header() {
    return (
        <Box width={"100%"} height="100px" bgcolor={Color.lightBlue} borderRadius={"20px"} padding={"0 25px"} boxSizing='border-box' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h1" fontStyle='oblique' sx={{ fontSize: '24px', fontWeight: 'light', color: Color.black }}>
                Trần Việt Anh
            </Typography>
            <Box sx={{ display: 'flex', gap: '50px' }}>
                <Link href="/projects">Các dự án</Link>
                <Link href="/about-me">Về tôi</Link>
                <Link href="/contact">Liên hệ</Link>
            </Box>
        </Box>
    )
}