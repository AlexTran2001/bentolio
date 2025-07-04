import { Box, Divider, Link, Typography, useMediaQuery } from "@mui/material";
import { Color } from "~/components/color";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import logo from "~/assets/logo.gif";
import face from "~/assets/face.png";
import gif2 from "~/assets/gif2.gif";
import cafe from "~/assets/cafee.gif";
export function Homepage() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const bento = {
    borderRadius: isMobile ? "10px" : "20px",
    bgcolor: Color.white,
    boxSizing: "border-box",
    padding: "20px 20px",
    animation: "fadeInUp 1s ease",
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
                cursor: "pointer",
                transition: "box-shadow 0.3s",
                "&:hover .rotate-icon": {
                  transform: "rotate(360deg)",
                  transition: "transform 0.5s",
                },
              }}
            >
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Typography fontSize={"15px"} color={Color.black}>
                  Đặt câu hỏi cho tôi
                </Typography>

                <ArrowOutwardIcon
                  sx={{ color: Color.black }}
                  className="rotate-icon"
                />
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
            >
              <Typography variant="body1" fontSize={"25px"} color={Color.black}>
                Học BA
              </Typography>

              <ArrowOutwardIcon />
            </Box>
            <img
              src={cafe}
              alt="cafe"
              width="100%"
              style={{ borderRadius: "20px" }}
            />
            <Typography variant="body1" fontSize={"25px"} color={Color.black}>
              Học Tarot
            </Typography>

            <Divider />
            <Typography variant="body1" fontSize={"25px"} color={Color.black}>
              Học Automation test
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
            <Link>Github</Link>
            <Link>LinkedIn</Link>
            <Link>CV</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
