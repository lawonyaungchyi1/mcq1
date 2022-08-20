import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Box } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "./Header";
import Form from "./Form";

const FixedContainer = () => {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ height: "100vh" }}>
          <Header />
          <Form />
        </Box>
      </Container>
    </>
  );
};

export default FixedContainer;
