import { Box, Divider, Link, Typography, useMediaQuery } from "@mui/material";
import { Color } from "~/components/color";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import logo from "~/assets/logo.gif";
import face from "~/assets/face.png";
import gif2 from "~/assets/gif2.gif";
import cafe from "~/assets/cafee.gif";
import ContactModal from "~/components/modalContact";
import React from "react";
export function Homepage() {
  const [open, setOpenContactModal] = React.useState(false);
  const handleOpenContactModal = () => setOpenContactModal(true);
  const handleCloseContactModal = () => setOpenContactModal(false);

  const isMobile = useMediaQuery("(max-width: 900px)");
  const bento = {
    borderRadius: isMobile ? "10px" : "20px",
    bgcolor: Color.white,
    boxSizing: "border-box",
    padding: "20px 20px",
    animation: "fadeInUp 1s ease",
    cursor: "pointer",
    "@keyframes fadeInUp": {
      from: {
        opacity: 0,
        transform: "translate3d(0, 40px, 0)",
      },
      to: {
        opacity: 1,
        transform: "none",
      },
    },
    transition: "transform 0.2s cubic-bezier(.34,1.56,.64,1)",
    "&:hover": {
      transform: "translateY(-8px)",
    },
  };

  return (
    <>
      <Box
        width="100%"
        height={isMobile ? "auto" : "calc(100vh - 160px)"}
        mt={"20px"}
        display={"flex"}
        gap={"20px"}
        flexDirection={isMobile ? "column" : "row"}
      >
        <Box
          width={isMobile ? "100%" : "calc(70% - 10px)"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Box
            width={"100%"}
            height={isMobile ? "auto" : "calc(55% - 10px)"}
            display={"flex"}
            flexDirection={isMobile ? "column" : "row"}
            gap={"20px"}
          >
            <Box
              width={isMobile ? "100%" : "calc(60% - 10px)"}
              height={isMobile ? "auto" : "100%"}
              sx={bento}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              minHeight={"320px"}
            >
              <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
                <img src={face} alt="logo" width="160px" />
              </Box>
              <Typography
                variant={"body1"}
                fontSize={isMobile ? "24px" : "40px"}
                color={Color.black}
                width={"85%"}
                lineHeight={"1.3"}
                fontWeight={"600"}
              >
                một Business Analyst với{" "}
                <Typography
                  component="span"
                  fontWeight={"100"}
                  fontStyle={"oblique"}
                  fontSize={isMobile ? "24px" : "40px"}
                >
                  niềm đam mê
                </Typography>{" "}
                công nghệ và viết blog
              </Typography>
            </Box>
            <Box
              width={isMobile ? "100%" : "calc(40% - 10px)"}
              height={isMobile ? "540px" : "100%"}
              sx={{
                ...bento,
                backgroundImage: `url(${logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Box>
          <Box
            width={"100%"}
            height={isMobile ? "auto" : "calc(45% - 10px)"}
            display={"flex"}
            flexDirection={isMobile ? "column" : "row"}
            gap={"20px"}
          >
            <Box
              width={isMobile ? "100%" : "calc(50% - 10px)"}
              height={"100%"}
              sx={bento}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              minHeight={"320px"}
            >
              <img
                src={gif2}
                height={"120px"}
                width={"120px"}
                loading="lazy"
              ></img>
              <Typography
                variant="body1"
                fontSize={"20px"}
                color={Color.black}
                width={isMobile ? "100%" : "75%"}
              >
                Tôi là một Business Analyst với kinh nghiệm trong việc phân tích
                yêu cầu và phát triển giải pháp công nghệ. Tôi đam mê công nghệ
                và thích chia sẻ kiến thức qua viết blog.
              </Typography>
            </Box>
            <Box
              width={isMobile ? "auto" : "calc(50% - 10px)"}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              minHeight={"320px"}
              sx={{
                ...bento,
                "&:hover .rotate-icon": {
                  transform: "rotate(360deg)",
                  transition: "transform 0.5s",
                },
              }}
              onClick={handleOpenContactModal}
            >
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                color={Color.black}
              >
                <Typography fontSize={"15px"}>Đặt câu hỏi cho tôi</Typography>

                <ArrowOutwardIcon className="rotate-icon" />
              </Box>
              <Typography
                variant="body1"
                fontSize={isMobile ? "40px" : "55px"}
                color={Color.black}
              >
                Liên hệ với tôi
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          width={isMobile ? "100%" : "calc(30% - 10px)"}
          height={"100%"}
          display={"flex"}
          gap="20px"
          flexDirection={"column"}
        >
          <Box
            width={"100%"}
            height={"calc(100% - 120px)"}
            sx={bento}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              color={Color.black}
            >
              <Typography variant="body1" fontSize={"25px"}>
                mình thích viết
              </Typography>

              <ArrowOutwardIcon />
            </Box>
            <img
              src={cafe}
              alt="cafe"
              width="100%"
              style={{ borderRadius: "20px" }}
            />

            <Divider />
            <Typography variant="body1" fontSize={"25px"} color={Color.black}>
              về ngành Business Analyst
            </Typography>
          </Box>
          <Box
            width={"100%"}
            height={"100px"}
            sx={bento}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Link
              href="https://github.com/AlexTran2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/tranvietanh2011/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.threads.com/@goodmorning.2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              Threads
            </Link>
          </Box>
        </Box>
      </Box>

      <ContactModal open={open} handleClose={handleCloseContactModal} />
    </>
  );
}
