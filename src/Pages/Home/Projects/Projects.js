import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { Grid, Container, Typography } from "@mui/material";
import './Projects.css'


const Projects = () => {

  const [allProject, setAllProject] = useState([]);
  useEffect( () => {
    fetch('https://mahmod-hasan.github.io/jsonapi/projectInfo.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setAllProject(data)
    })
  }, []);

  
  return (
       <Container className="my-5">
         <Typography variant='h3' my={2} color="indianred" align="center">MY PROJECTS</Typography>
         {
           allProject.map(project => <Project
           key={project._id}
           project={project}
           ></Project>)
         }
       </Container>
  );
};

// seconds function start

function Project (props) {
  const {_id, image, title, li1, li2, li3 } = props.project;



  return (
    <>   
   
        <Grid container spacing={2}>
             <Grid item xs={12} md={6}
             data-aos="fade-up"
             data-aos-easing="linear"
             data-aos-duration="2000"
             >
                <img
                width="100%"
                height="400px"
                src={image} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
               <Typography style={{fontWeight : 600, textTransform : 'uppercase'}} variant='h4' color="indigo">{title}</Typography>
               <ul>

                  <li className="list">
                     {li1}
                  </li>
                  <li className="list">
                     {li2}
                  </li>
                  <li className="list">
                     {li3}
                  </li>
    
               </ul>
            </Grid>
            <Link className='link' to={`/project/${_id}`}><button className="btn-regular my-3">Project Details</button></Link>
        </Grid>
    
  </>
  )
}

export default Projects;


