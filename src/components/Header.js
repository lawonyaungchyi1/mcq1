import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          height: "12vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 10px #ef476f",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            color: "#ef476f",
          }}
        >
          Zoology MCQs
        </Typography>
        <Typography
          sx={{
            fontWeight: "bolder",
            textAlign: "center",
            color: "#0b090a",
          }}
        >
          Created By - Nyan Lin Tun(Zo Zo)
        </Typography>
      </Box>
    </>
  );
};

export default Header;
