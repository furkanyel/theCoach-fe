import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";


const Signup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          marginTop={10}
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
            Sign Up
          </Typography>
          <TextField
            label="Name"
            margin="normal"
            color="secondary"
            type={"text"}
            variant="outlined"
            placeholder="Name"
          />
          <TextField
            label="Last Name"
            margin="normal"
            color="secondary"
            type={"text"}
            variant="outlined"
            placeholder="Last Name"
          />
          <TextField
            label="Email"
            margin="normal"
            color="secondary"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />
          <TextField
            label="Password"
            margin="normal"
            color="secondary"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <TextField
            label="Jersey Number"
            margin="normal"
            color="secondary"
            type={"number"}
            variant="outlined"
            placeholder="Jersey Number"
          />
          <Button sx={{ marginTop: 3 }} variant="contained" color="secondary">
            Sign Up
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
