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
      bgcolor={Color.white}
      borderRadius={isMobile ? "10px " : "20px"}
      padding={"0 25px"}
      boxSizing="border-box"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "transform 0.2s cubic-bezier(.34,1.56,.64,1)",
        animation: "fadeInDown 0.7s ease",
        "&:hover": {
          transform: "translateY(-8px)",
        },
        "@keyframes fadeInDown": {
          from: {
            opacity: 0,
            transform: "translate3d(0, -40px, 0)",
          },
          to: {
            opacity: 1,
            transform: "none",
          },
        },
      }}
    >
      <Link href="/">
        <Typography
          variant="h1"
          fontStyle="oblique"
          sx={{ fontSize: "24px", fontWeight: "light" }}
        >
          Trần Việt Anh
        </Typography>
      </Link>
      <Box sx={{ display: isMobile ? "none" : "flex", gap: "50px" }}>
        <Link href="/cac-du-an">Các dự án</Link>
        <Link href="/ve-toi">Về tôi</Link>
        <Link href="/lien-he">Liên hệ</Link>
      </Box>

      <MenuIcon
        onClick={() => setOpen(true)}
        sx={{ color: Color.black, display: isMobile ? "block" : "none" }}
      />
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100vh",
            bgcolor: Color.white,
            borderRadius: 0,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"40px"}
          alignItems={"center"}
          mt={10}
        >
          <Link href="/cac-du-an" textAlign={"center"}>
            Các dự án
          </Link>

          <Divider sx={{ width: "90%" }} />
          <Link href="/ve-toi" textAlign={"center"}>
            Về tôi
          </Link>
          <Divider sx={{ width: "90%" }} />
          <Link href="/lien-he" textAlign={"center"}>
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
