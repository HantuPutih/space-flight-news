import React from 'react'
import { useSelector } from 'react-redux'
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
  const saved = useSelector(state => state.saved.saved)
  return (
    <div>
      <Container maxWidth="lg">
      <div className="middleText">
        <h1>Saved News</h1>
      </div>
        {
          saved.length !== 0 ?
          <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={6}>
                {saved.map((news) => (
                <Flight news={news} key={news.id} />
                ))}
              </Grid>
            </Grid>
          </div>
          : 
          <div className="middleText">
            <h2>saved is empty</h2>
          </div>
        }
      </Container>
    </div>
  )
}

export default Favorite
