import React from "react";
import logo from "../../../images/mahmod.png";
import { Button, CardMedia, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DownloadingIcon from "@mui/icons-material/Downloading";

const Banner = () => {
  const theme = useTheme();
  const styles = makeStyles({
    changeDirection: {
      [theme.breakpoints.down("sm")]: {
        display: "flex !important",
        flexDirection: "column-reverse !important",
      },
    },

    higlight: {
      color: "#66ff99",
      fontSize: "24px",
      textTransform: "uppercase",
    },
  });
  const { changeDirection, higlight } = styles();

  return (
    <Container style={{ backgroundColor: "rgb(0, 19, 26)", padding: "50px" }}>

      <Grid container spacing={2} className={changeDirection} alignItems="center" align="center">



        <Grid item xs={12} md={6} data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
          <Typography color="white">
            Hi My name is <span className={higlight}>Mahmod</span> I am a react js{" "}
            <span className={higlight}>Developer</span>. I can create a single page application easily with
            the help of <span className={higlight}>React Js</span>
          </Typography>

          <Stack display="block" direction="row" spacing={2}>
            <Button className="btn-regular" download="mahmodResume.pdf" href="mahmodResume.pdf">
              DOWNLOAD RESUME&nbsp; <DownloadingIcon />
            </Button>
          </Stack>
        </Grid>

       
       

        <Grid item xs={12} md={6}>
          <CardMedia
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            component="img"
            image={logo}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
