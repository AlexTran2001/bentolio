import { Box } from "@mui/material";
import { Color } from "./color";
import Header from "./header";

type LayoutComponentProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutComponentProps) {
  return (
    <Box
      width={"100%"}
      maxWidth={"1440px"}
      margin={"0 auto"}
      height="100vh"
      padding="20px"
      box-sizing="border-box"
      sx={{ backgroundColor: Color.white }}
    >
      <Header />

      {children}
    </Box>
  );
}
