import { Box, useMediaQuery } from "@mui/material";
import { Color } from "~/components/color";
export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Box
      width={"100%"}
      display={"flex"}
      height={isMobile ? "auto" : "calc(100vh - 160px)"}
      flexDirection={"column"}
      gap="20px"
      mt={"20px"}
    >
      <Box
        width={"100%"}
        height={isMobile ? "auto" : "calc(50% - 10px)"}
        display={"flex"}
        gap="20px"
      >
        <Box
          width={isMobile ? "100%" : "calc(30% - 10px)"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap="20px"
          bgcolor={Color.white}
          borderRadius={"20px"}
        ></Box>

        <Box
          width={isMobile ? "100%" : "calc(70% - 10px)"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap="20px"
          bgcolor={Color.white}
          borderRadius={"20px"}
        ></Box>
      </Box>

      <Box
        width={"100%"}
        height={isMobile ? "auto" : "calc(50% - 10px)"}
        display={"flex"}
        gap="20px"
        bgcolor={Color.white}
        borderRadius={"20px"}
      ></Box>
    </Box>
  );
}
