import { Box, Button, Modal, Typography, useMediaQuery } from "@mui/material";
import logo from "~/assets/logo.webp";
import CloseIcon from "@mui/icons-material/Close";
interface ContactModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function ContactModal({ open, handleClose }: ContactModalProps) {
  const isMobile = useMediaQuery("(max-width: 900px)");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : "750px",
    bgcolor: "background.paper",
    borderRadius: "20px",
    p: 4,
    border: 0,
    boxShadow: 24,
    animation: "fadeInUp 0.5s ease",
    "@keyframes fadeInUp": {
      from: {
        opacity: 0,
        transform: "translate(-50%, -50%)",
      },
      to: {
        opacity: 1,
        transform: "translate(-50%, -50%)",
      },
    },
  };

  const buttonStyle = {
    width: "100%",
    height: "50px",
    borderRadius: "10px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      transform: "translateY(-4px)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
      transition: "all 0.2s cubic-bezier(.34,1.56,.64,1)",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s cubic-bezier(.34,1.56,.64,1)",
  };

  const Links = [
    { name: "Facebook", url: "https://www.facebook.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Email", url: "mailto:" },
    { name: "Threads", url: "https://www.threads.net" },
  ];

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography id="transition-modal-title" variant="h3">
            Liên hệ với tôi
          </Typography>
          <Button
            onClick={handleClose}
            aria-label="Đóng"
            sx={{
              "&:hover svg": {
                transform: "rotate(360deg)",
                transition: "transform 0.5s",
              },
            }}
          >
            <CloseIcon
              sx={{
                color: "black",
                fontSize: "30px",
                transition: "transform 0.5s",
              }}
            />
          </Button>
        </Box>
        <Box
          id="transition-modal-description"
          sx={{ mt: 2 }}
          display={"flex"}
          flexDirection={isMobile ? "column" : "row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Box
            width={isMobile ? "100%" : "45%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={"20px"}
          >
            {Links.map((link) => (
              <Button
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={buttonStyle}
              >
                {link.name}
              </Button>
            ))}
          </Box>
          <img
            src={logo}
            alt="Contact"
            style={{
              width: "50%",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Modal>
  );
}
