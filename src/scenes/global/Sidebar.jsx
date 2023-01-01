import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SportsFootballOutlinedIcon from '@mui/icons-material/SportsFootballOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';




const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem>
            {(
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                to="/"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  theCoach
                </Typography>
              </Box>
            )}
          </MenuItem>

          {(
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center" margin="10px 0 0 10px">
                <img
                  alt="profile-user"
                  width= "140px"
                  height= "120px"
                  src={`../../assets/sakarya.png`}
                  style={{ cursor: "pointer", borderRadius: "50%"}}
                  to="/"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "5px 0 0 0px" }}
                >
                  theCoach
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Sakarya Tatankaları
                </Typography>
              </Box>
            </Box>
          )}
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "50px 0 5px 30px" }}
            >
              Home
            </Typography>
            <Box>
                <Item 
                title="Home"
                to="/"
                icon={<HomeOutlinedIcon  />}
                selected={selected}
                setSelected={setSelected}
                />
            </Box>
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "10px 0 5px 30px" }}
            >
              Matches
            </Typography>
            <Box>
                <Item 
                title="Matches"
                to="/matches"
                icon={<SportsFootballOutlinedIcon  />}
                selected={selected}
                setSelected={setSelected}
                />
            <Typography
              variant="h5"
              color={colors.grey[300]}
              sx={{ m: "180px 0 5px 30px" }}
            >
              Login & Sign up
            </Typography>
            <Item
              title="Sign In"
              to="/signin"
              icon={<LoginOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sign up"
              to="/signup"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />


          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;