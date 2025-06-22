import { Box } from "@mui/material";
import ErrorImage from "../assets/404.jpg"
export default function ErrorPage() {
    return (
        <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
            <img src={ErrorImage} alt="Error" style={{ width: "80%", height: "80%", maxWidth: "400px", maxHeight: "400px", objectFit: "cover" }} />

        </Box>
    );
}