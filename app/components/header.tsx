import {
  Box,
  Typography,
  Link,
  useMediaQuery,
  Drawer,
  IconButton,
  Divider,
} from "@mui/material";
import { Color } from "./color";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import cafe from "../assets/cafee.gif";
export default function Header() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [open, setOpen] = useState(false);

  return (
    <Box
      width={"100%"}
      height="100px"
      bgcolor={Color.black}
      borderRadius={isMobile ? "10px " : "20px"}
      padding={"0 25px"}
      boxSizing="border-box"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h1"
        fontStyle="oblique"
        sx={{ fontSize: "24px", fontWeight: "light", color: Color.gray100 }}
      >
        Trần Việt Anh
      </Typography>
      <Box sx={{ display: isMobile ? "none" : "flex", gap: "50px" }}>
        <Link href="/projects" color={Color.gray100}>
          Các dự án
        </Link>
        <Link href="/about-me" color={Color.gray100}>
          Về tôi
        </Link>
        <Link href="/contact" color={Color.gray100}>
          Liên hệ
        </Link>
      </Box>

      <Box sx={{ display: isMobile ? "flex" : "none" }}>
        <MenuIcon sx={{ color: Color.gray100, fontSize: "30px" }} />
      </Box>

      <Box
        sx={{
          display: isMobile ? "flex" : "none",
          position: "absolute",
          right: 30,
        }}
      >
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon sx={{ color: Color.gray100, fontSize: "30px" }} />
        </IconButton>
      </Box>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100vh",
            bgcolor: Color.gray100,
            borderRadius: 0,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon sx={{ color: Color.black, fontSize: "30px" }} />
          </IconButton>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"40px"}
          alignItems={"center"}
          mt={10}
        >
          <Link href="/projects" color={Color.black} textAlign={"center"}>
            Các dự án
          </Link>

          <Divider sx={{ width: "90%" }} />
          <Link href="/about-me" color={Color.black} textAlign={"center"}>
            Về tôi
          </Link>
          <Divider sx={{ width: "90%" }} />
          <Link href="/contact" color={Color.black} textAlign={"center"}>
            Liên hệ
          </Link>
          <img
            src={cafe}
            alt="cafe"
            style={{
              width: "90%",
              height: "auto",
              borderRadius: "4px",
            }}
          />
        </Box>
      </Drawer>
    </Box>
  );
}
