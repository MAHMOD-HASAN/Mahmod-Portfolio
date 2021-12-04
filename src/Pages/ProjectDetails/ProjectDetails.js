import React, {useState, useEffect} from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router';

const ProjectDetails = (props) => {
    const {projectId} = useParams();

    const [allProject, setAllProject] = useState([]);
    const [project, setProject] = useState({});
  useEffect( () => {
    fetch('https://mahmod-hasan.github.io/jsonapi/projectInfo.json')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setAllProject(data)
    })
  }, []);

  useEffect( () => {
      const find = allProject.find(project => project._id === projectId );
      setProject(find);
  }, [allProject])
    return (
        <Container className='mt-5'>
            <Grid container spacing={2}>
             <Grid item xs={12} md={6}>
                <img
                width="100%"
                height="400px"
                src={project?.image} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography style={{fontWeight : 600, textTransform : 'uppercase'}} variant='h4' color="indigo">{project?.title}</Typography>
            <Typography variant="body2">Details Information</Typography>
               <ul>
                  <li className="list">
                     {project?.li1}
                  </li>
                  <li className="list">
                     {project?.li2}
                  </li>
                  <li className="list">
                     {project?.li3}
                  </li>
                  <li className="list">
                     {project?.li4}
                  </li>
                  <li className="list">
                     {project?.li5}
                  </li>
                  <li className="list">
                     {project?.technology}
                  </li>
               </ul>
            </Grid>
        </Grid>
        </Container>
    );
};

export default ProjectDetails;