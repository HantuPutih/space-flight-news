import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Flight from '../components/Flight'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'



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


function Favorite() {
  const classes = useStyles();
  const saved = useSelector(state => state.saved)
  // console.log(saved);
  return (
    <div>
      <Container maxWidth="xl">
        <h1>Saved News</h1>
        {/* <p>{JSON.stringify(saved)}</p> */}
        <div className={classes.root}>
          <Grid container spacing={1}>
              <Grid container item xs={12} spacing={6}>
              {saved.map((news) => (
              <Flight news={news} key={news.id} />
              ))}
            </Grid>
          </Grid>
        </div>
      </Container>
      
    </div>
  )
}

export default Favorite
