
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 400,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    // cardaction nanti akan link ke details, sementara ke news originalnya dulu
    //href={props.news.url}
    <Grid item xs={3}>
      <Card className={classes.root}  >
        <CardActionArea style={{ height: '400px' }} onClick={() => console.log(props.news.id)}>
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
            {/* <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
}


// import React from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button';

// function Flight(props) {
//   // const [news,setNews] = props
//   return (
//     <React.Fragment>
//       {
//         props.news && 
//         <div className="col">
//           <Card style={{ width: '18rem', minheight: '27rem'}} key={props.news.id}>
//             <Card.Img variant="top" src={props.news.imageUrl}/>
//             <Card.Body>
//               <Card.Title>{props.news.title}</Card.Title>
//               <Card.Text>
//                 date: {props.news.updatedAt.split('T')[0]}
//               </Card.Text>
//               <Button variant="primary" onClick={() => this.getDetails(props.news.id)}>news Details</Button>
//             </Card.Body>
//           </Card>
//         </div>
//       }
//     </React.Fragment>
//   )
// }

// export default Flight

// import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button';

// export default class News extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // detailId: this.props.id
//     }
//   }
//   getDetails = (id) => {
//     // console.log(id)
//     this.props.getDetails(id)
//   }
//   render() {
//     // console.log(this.props.news);
//     let { news } = this.props
//       return (
//         this.props.news && 
//         <div className="col">
//           <Card style={{ width: '18rem', minheight: '27rem'}} key={news.id}>
//             <Card.Img variant="top" src={news.imageUrl}/>
//             <Card.Body>
//               <Card.Title>{news.title}</Card.Title>
//               <Card.Text>
//                 date: {news.updatedAt.split('T')[0]}
//               </Card.Text>
//               <Button variant="primary" onClick={() => this.getDetails(news.id)}>news Details</Button>
//             </Card.Body>
//           </Card>
//         </div>
//       )
//   }
// }
