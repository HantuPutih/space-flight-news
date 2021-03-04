
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'
import { useSelector, useDispatch } from 'react-redux'
import {addSave} from '../store/actions'
import Swal from 'sweetalert2'
import CardActions from '@material-ui/core/CardActions'
import {
  useLocation
} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 400,
  },
});

export default function ImgMediaCard(props) {
  let location = useLocation();
  // console.log(location.pathname)
  const dispatch = useDispatch()
  let history = useHistory()
  const classes = useStyles()
  const saved = useSelector(state => state.saved.saved)
  const getDetails = () => {
    history.push(`/news/${props.news.id}`)
  }
  const onSave = () => {
    let flag = false
    for (let i = 0; i < saved.length; i++) {
      if (saved[i].id === props.news.id) {
        flag = true
        console.log('duplicate saved')
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Item already in Saved News!',
        })
      } 
    }
    if (!flag) {
      dispatch(addSave(props.news))
      Swal.fire('Added to Saved News')
      // history.push('/saved')
    }
    
  }
  return (
    <Grid item xs={3}>
      <Card className={classes.root}  >
        <CardActionArea style={{ height: '400px' }} onClick={getDetails}>
          <CardMedia
            component="img"
            alt={props.news.title}
            height="140"
            image={props.news.imageUrl}
            title={props.news.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.news.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {
            location.pathname === '/' ? 
            <Button size="large" color="primary" onClick={onSave}>
              Save News
            </Button> : null
          }
        </CardActions>
        
        
      </Card>
    </Grid>
  );
}
