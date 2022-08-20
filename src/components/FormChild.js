import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";

const FormChild = ({ item, index }) => {
  const [click, setClick] = useState(false);
  return (
    <div>
      {" "}
      <Box
        sx={{
          backgroundColor: click ? "#61a5c2" : "transparent",
          color: click ? "white" : "#0d1b2a",
          borderBottom: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
        onClick={() => setClick(!click)}
      >
        <Typography>
          {index === 0
            ? "(a)"
            : index === 1
            ? "(b)"
            : index === 2
            ? "(c)"
            : index === 3
            ? "(d)"
            : "(e)"}
          {item}
        </Typography>
      </Box>
    </div>
  );
};

export default FormChild;
