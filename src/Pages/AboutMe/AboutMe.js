import React from 'react';
import {Container, Grid, Typography} from "@mui/material";

const AboutMe = () => {
    return (
        <Container className='my-5'>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                     <img src='https://i.ibb.co/C0hMDz4/mahmod.jpg'
                     width= "100%" alt="" />
                </Grid>

                <Grid item xs={12} md={6} align='center'>
                    <Typography variant="h3" align="center" color="red">Hi I'm Mahmod</Typography>
                    <Typography variant="h6">I live at Chittagong in Bangladesh. I am a front end web developer. I love HTML5, CSS3 & JavaScript Scripting language.</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutMe;