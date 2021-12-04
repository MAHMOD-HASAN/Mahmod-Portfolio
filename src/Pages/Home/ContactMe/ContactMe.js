import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import bg from '../../../images/bgcontact.jpeg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';


const ContactMe = () => {
    const styles = makeStyles({
       inputTextArea : {
           width : '80%',
           backgroundColor : '#f2f2f2',
           marginBottom : '15px',
           border : 'none',
           padding : '10px',
           borderRadius : '3px',
           fontWeight : '400',
       },
       container : {
          backgroundImage : `url(${bg})`,
          backgroundRepeat : 'no-repeat',
          backgroundAttachment : 'fixed',
          backgroundSize : '100% 100%',
          padding : '50px', 
          color : 'white',
          margin : '50px',
       }
    })
    const { inputTextArea, container } = styles();
    return (
        <Container className={container} >
            <Typography align='center' mb={4} variant='h3'>Contact Me</Typography>
            <Grid container spacing={2} alignItems='center'>

                <Grid align='center' item xs={12} md={6} style={{fontSize : 25}}>
                    
                   <LocationOnIcon /> Dhaka, Bangladesh<br/>
                   <MailOutlineIcon /> mahmod.hasan013@gmail.com<br/>
                   <LocalPhoneIcon /> +01315343453
                </Grid>


                <Grid align='center' item xs={12} md={6}>
                <form action="https://formsubmit.co/mahmod.hasan013@gmail.com" method="POST">
                  <input className={inputTextArea} type="text" placeholder='Your Name' name='name'/>
                  <input className={inputTextArea} type="email" placeholder='Your Email' name='gmail'/>
                  <input className={inputTextArea} type="tel" placeholder='Your Phone' name='phone'/>
                  <textarea className={inputTextArea} placeholder='message here...' name="message" id="" rows="3"></textarea><br/>
                  <Button type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
                </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactMe;