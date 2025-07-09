import { Box, useMediaQuery } from "@mui/material";
import Header from "./header";

type LayoutComponentProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutComponentProps) {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box
      width={"100%"}
      maxWidth={"1440px"}
      margin={"0 auto"}
      height={isMobile ? "auto" : "100vh"}
      padding={isMobile ? "10px" : "20px"}
      box-sizing="border-box"
    >
      <Header />

      {children}
    </Box>
  );
}
