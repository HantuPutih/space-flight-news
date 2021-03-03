// import { useParams } from 'react-router-dom'
// import React from 'react'
// import useFetch from '../customHooks/useFetch'
// import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import CardMedia from '@material-ui/core/CardMedia'


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   Card: {
//     width: 300,
//     margin: 'auto'
//   },
//   Media: {
//     height: '90%',
//     width: '90%',
//     margin: '0 auto',
//     borderRadius: '5',
//   }
// }));

// function Details() {
//   const classes = useStyles();
//   const { id } = useParams()
//   const [data, loading] = useFetch(`https://test.spaceflightnewsapi.net/api/v2/articles/${id}`)
//   return (
//     <React.Fragment>
//       {/* <p>
//         {JSON.stringify(data)}
//       </p> */}
//       <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <CardMedia 
//           className={`${classes.paper} ${classes.Media}`}
//             component="img"
//             alt={data.title}
//             height="500"
//             image={data.imageUrl}
//             title={data.title}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>{data.title}</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>{data.summary}</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}> published At: {Date(data.publishedAt)}</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>{data.newsSite}</Paper>
//         </Grid>
//       </Grid>
//     </div>
//       {
//         // loading ? <Loading></Loading>: <iframe src={data.url} height="720 " width="1280" title="Iframe Example"></iframe> 

//       }
      
//     </React.Fragment>
//   )
// }

// export default Details

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom'
import useFetch from '../customHooks/useFetch'
import CardMedia from '@material-ui/core/CardMedia'
import Loading from '../views/Loading'
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: 'auto',
      // margin: theme.spacing(0 auto),
      width: theme.spacing(135),
      minHeight: '100%',
    },
  },
  Card: {
    width: 300,
    margin: 'auto'
  },
  Media: {
    height: '90%',
    width: '90%',
    margin: '0 auto',
    borderRadius: '5',
  }
}));

export default function Details() {
  const classes = useStyles();
  const { id } = useParams()
  const [data, loading] = useFetch(`https://test.spaceflightnewsapi.net/api/v2/articles/${id}`)

  return (
    <>
      <h1>News details </h1>
        <div className={classes.root}>
          <Paper elevation={3}>
            <br/>
            {
              loading ? <Loading></Loading> :
              <React.Fragment>
              <CardMedia 
              className={`${classes.paper} ${classes.Media}`}
                component="img"
                alt={data.title}
                height="500"
                image={data.imageUrl}
                title={data.title}
              />
              <Container maxWidth="md">
                <h2>
                  {data.title}
                </h2>
                <p>
                  {data.summary}
                </p>  
                <pre>
                  published At: {data.publishedAt}
                </pre>
              </Container>
              
            </React.Fragment>
            } 
            <br/>
          </Paper>
          <div className="divider-card">
          </div>
        </div>
    </>
  );
}