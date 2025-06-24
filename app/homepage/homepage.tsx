import { Box, Link, Typography } from "@mui/material";
import { Color } from "~/components/color";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import imglogo from "~/assets/logo.jpg";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import TerminalIcon from "@mui/icons-material/Terminal";
export function Homepage() {
  const bento = {
    borderRadius: "20px",
    bgcolor: Color.lightBlue,
    boxSizing: "border-box",
    padding: "40px 20px",
  };
  return (
    <>
      <Box
        width="100%"
        height="calc(100vh - 160px)"
        mt={"20px"}
        display={"flex"}
        gap={"20px"}
      >
        <Box
          width={"calc(70% - 10px)"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <Box
            width={"100%"}
            height={"calc(55% - 10px)"}
            display={"flex"}
            gap={"20px"}
          >
            <Box
              width={"calc(60% - 10px)"}
              height={"100%"}
              sx={bento}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Box width={"100%"} display={"flex"} justifyContent={"flex-end"}>
                <TerminalIcon
                  sx={{ fontSize: "40px", color: Color.heavyBlue }}
                />
              </Box>
              <Typography
                variant="body1"
                fontSize={"40px"}
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
                  fontSize={"40px"}
                >
                  niềm đam mê
                </Typography>{" "}
                công nghệ và viết blog
              </Typography>
            </Box>
            <Box
              width={"calc(40% - 10px)"}
              height={"100%"}
              sx={{
                ...bento,
                backgroundImage: `url(${imglogo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
          </Box>
          <Box
            width={"100%"}
            height={"calc(45% - 10px)"}
            display={"flex"}
            gap={"20px"}
          >
            <Box
              width={"calc(50% - 10px)"}
              height={"100%"}
              sx={bento}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <AssignmentIndIcon
                sx={{ fontSize: "40px", color: Color.heavyBlue }}
              />
              <Typography
                variant="body1"
                fontSize={"20px"}
                color={Color.black}
                width={"75%"}
              >
                Tôi là một Business Analyst với kinh nghiệm trong việc phân tích
                yêu cầu và phát triển giải pháp công nghệ. Tôi đam mê công nghệ
                và thích chia sẻ kiến thức qua viết blog.
              </Typography>
            </Box>
            <Box
              width={"calc(50% - 10px)"}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              sx={{
                ...bento,
                bgcolor: `${Color.heavyBlue} !important`,
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

                <ArrowOutwardIcon sx={{ color: Color.black }} />
              </Box>
              <Typography variant="body1" fontSize={"55px"} color={Color.black}>
                Liên hệ với tôi
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          width={"calc(30% - 10px)"}
          height={"100%"}
          display={"flex"}
          gap="20px"
          flexDirection={"column"}
        >
          <Box width={"100%"} height={"calc(100% - 120px)"} sx={bento}></Box>
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
