import { Color } from "~/components/color";

export const getBentoStyle = (isMobile: boolean) => ({
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
});
