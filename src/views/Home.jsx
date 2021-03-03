
import Flight from '../components/Flight'
import Loading from '../views/Loading'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import useFetch from '../customHooks/useFetch'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


function Home() {
  const [url] = useState('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=12')
  //tampilin blog dan reposrt juga sekalian biar rame
  const [data, loading] = useFetch(url)
  // const [details, setDetails] = useState({})
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl">
        {/* <br/>
          <h1>Space Flight News</h1>
        <br/> */}
        <div>
          {/* <Details details={details}></Details> */}
        </div>
        <br/>
        {
          loading ? <Loading></Loading>:
          <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={6}>
                {data.map((news) => (
                <Flight news={news} key={news.id} />
                ))}
              </Grid>
            </Grid>
          </div>
        }
      </Container>
    </>
  )
}

export default Home