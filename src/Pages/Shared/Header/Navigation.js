import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Link } from  "react-router-dom";
import { Drawer, List, ListItem, ListItemText, useTheme, Box } from "@mui/material";

const Navigation = () => {
  const [state, setState] = React.useState(false);
  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <Link style={{ textDecoration: "none" }} to="/home">
              Home
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link style={{ textDecoration: "none" }} to="/project">
              Projects
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link style={{ textDecoration: "none" }} to="/about">
              About Me
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      textDecoration: "none",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
  });
  const { navItem, navIcon, navItemContainer, navLogo } = useStyle();
  return (
    <Box sx={{ flexGrow: 1, pb : 5 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            onClick={() => setState(true)}
            className={navIcon}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mahmod Hasan
          </Typography>
          <Box className={navItemContainer}>
            <Link className={navItem} to="/home">
              <Button variant="contained">Home</Button>
            </Link>
            <Link className={navItem} to="/project">
              <Button variant="contained">Project</Button>
            </Link>
            <Link className={navItem} to="/about">
              <Button variant="contained">About Me</Button>
            </Link>
            <Link className={navItem} to="/contact">
              <Button variant="contained">Contact</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={state} onClose={() => setState(false)}>
        {list}
      </Drawer>
    </Box>
  );
};

export default Navigation;