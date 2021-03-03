import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import useFetch from '../customHooks/useFetch'
import Loading from '../views/Loading'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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

function Details() {
  const classes = useStyles();
  // console.log(props,'========================');
  // const [details, setDetails] = useState({})
  // const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const [data, loading] = useFetch(`https://test.spaceflightnewsapi.net/api/v2/articles/${id}`)

  // useEffect(() => { 
  //   fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setDetails(data)
  //     })
  // })

  return (
    <React.Fragment>
      {/* <p>
        {JSON.stringify(data)}
      </p> */}
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CardMedia 
          className={`${classes.paper} ${classes.Media}`}
            component="img"
            alt={data.title}
            height="500"
            image={data.imageUrl}
            title={data.title}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{data.title}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{data.summary}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}> published At: {Date(data.publishedAt)}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{data.newsSite}</Paper>
        </Grid>
      </Grid>
    </div>
      {
        // loading ? <Loading></Loading>: <iframe src={data.url} height="720 " width="1280" title="Iframe Example"></iframe> 

      }
      
    </React.Fragment>
  )
}

export default Details
