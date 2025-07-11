import {
  Box,
  useMediaQuery,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";
import { Color } from "~/components/color";
import { getBentoStyle } from "../../components/bento";
import logo from "~/assets/logo.webp";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GestureIcon from "@mui/icons-material/Gesture";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const bento = getBentoStyle(isMobile);

  const form = useRef<HTMLFormElement>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarError, setSnackbarError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "20112001",
        "template_qmw3v1u",
        form.current,
        "lpZKxV990IC2RfGNk"
      )
      .then(
        (result) => {
          setSnackbarMessage("Gửi email thành công!");
          setSnackbarError(false);
          setOpenSnackbar(true);
          form.current?.reset();
        },
        (error) => {
          setSnackbarMessage("Gửi email thất bại. Thử lại sau.");
          setSnackbarError(true);
          setOpenSnackbar(true);
          console.error("Email send error:", error);
        }
      );
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/yourprofile",
      icon: <InstagramIcon />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/yourprofile",
      icon: <GestureIcon />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yourprofile",
      icon: <LinkedInIcon />,
    },
    {
      name: "GitHub",
      url: "",
      icon: <GitHubIcon />,
    },
  ];

  const socialLinkButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: Color.white,
    borderRadius: "10px",
    color: Color.black,
    border: `1px solid ${Color.black}`,
    width: "56px",
    height: "56px",
    "&:hover": {
      bgcolor: Color.black,
      color: Color.white,
      transform: "scale(1.01)",
    },
  };

  return (
    <Box
      width={"100%"}
      height={isMobile ? "auto" : "calc(100vh - 160px)"}
      display={"flex"}
      flexDirection={isMobile ? "column" : "row"}
      gap="20px"
      mt={"20px"}
    >
      <Box
        width={isMobile ? "100%" : "calc(50% - 10px)"}
        height={isMobile ? "auto" : "100%"}
        sx={bento}
      >
        <Typography variant="h5">Liên hệ với tôi qua email</Typography>

        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          display={"flex"}
          flexDirection="column"
          gap="20px"
          mt="40px"
        >
          <TextField label="Tên của bạn" name="name" required />
          <TextField label="Email của bạn" name="email" type="email" required />
          <TextField
            label="Liên hệ với tôi"
            name="message"
            multiline
            rows={3}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: Color.black,
              height: "56px",
            }}
          >
            Gửi Email cho tôi
          </Button>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            onClose={() => setOpenSnackbar(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={() => setOpenSnackbar(false)}
              severity={snackbarError ? "error" : "success"}
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>

        <Divider sx={{ my: "20px" }} />

        <Typography variant="h5" mb={"40px"}>
          Liên hệ với tôi qua các mạng xã hội
        </Typography>

        <Box display="flex" gap="20px" flexWrap="wrap">
          {socialLinks.map((link) => (
            <Box sx={socialLinkButton}>{link.icon}</Box>
          ))}
        </Box>
      </Box>

      <Box
        width={isMobile ? "100%" : "calc(50% - 10px)"}
        height={isMobile ? "540px" : "100%"}
        sx={{
          ...bento,
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
}
