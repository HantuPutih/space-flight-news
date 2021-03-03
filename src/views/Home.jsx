
import Flight from '../components/Flight'
// import Loading from '../views/Loading'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { useSelector, useDispatch } from 'react-redux'
import {changeData} from '../store/actions'

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
  const data = useSelector(state => state.data)
  // const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    // setLoading(true)
    fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=12')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then(data => 
        dispatch(changeData(data))
      )
      .catch(error => {
        console.log(error, 'dari useFetch error');
      })
      // .finally(
      //   // setTimeout(() => {
      //     setLoading(false)
      //   // }, 1000)
      // )
  }, [])
  

  const classes = useStyles();
  console.log(data)
  return (
    <>
      <Container maxWidth="xl">
        <h1>Space Flight news </h1>
        <br/>
        {
          data.length !== 0 ? <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={6}>
                {data.map((news) => (
                <Flight news={news} key={news.id} />
                ))}
              </Grid>
            </Grid>
          </div> : null
          // <Loading />
          
        }
      </Container>
    </>
  )
}

export default Home