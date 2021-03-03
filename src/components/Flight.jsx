
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useHistory } from "react-router-dom"



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 400,
  },
});

export default function ImgMediaCard(props) {
  let history = useHistory();
  const classes = useStyles();
  // const [id, setId] = props.details(null)
  const getDetails = () => {
    history.push(`/details/${props.news.id}`)
  }
  return (
    // cardaction nanti akan link ke details, sementara ke news originalnya dulu
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
      </Card>
    </Grid>
  );
}
