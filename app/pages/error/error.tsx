import { Box } from "@mui/material";
import ErrorImage from "~/assets/error.gif";
export default function ErrorPage() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgcolor="#000000"
      margin={0}
      padding={0}
    >
      <img
        src={ErrorImage}
        alt="Error"
        style={{
          width: "80%",
          height: "80%",
          maxWidth: "600px",
          maxHeight: "600px",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
