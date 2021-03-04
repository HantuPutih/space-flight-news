
import Flight from '../components/Flight'
import Loading from './Loading'
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { useSelector, useDispatch } from 'react-redux'
import {fetchFlight} from '../store/actions'

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


  const dispatch = useDispatch()
  const { flight, flightLoading, search } = useSelector(state => state.flight)
  let data = search.length !== 0 ? search : flight
  useEffect(() => {
    dispatch(fetchFlight())
  }, [dispatch])
  

  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl">
      <div className="middleText">
        <h1>Space Flight News </h1>
      </div>
        <br/>
        {
          !flightLoading ? 
          <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={6}>
                {data.map((news) => (
                <Flight news={news} key={news.id} />
                ))}
              </Grid>
            </Grid>
          </div> 
          : <Loading />
        }
      </Container>
    </>
  )
}

export default Home

