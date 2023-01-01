import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Signin = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={15}
          padding={3}
          borderRadius={5}
          boxShadow={"0 5px 20px #2e7c67"}
          sx={{
            ":hover": {
              boxShadow: "0 10px 20px #1e5245",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Sign In
          </Typography>
          <TextField
            label="Email"
            color="secondary"
            type={"email"}
            variant="outlined"
            placeholder="Email"
            margin="normal"
          />
          <TextField
            label="Password"
            color="secondary"
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <Button sx={{ marginTop: 3 }} variant="contained" color="secondary">
            Sign In
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signin;
