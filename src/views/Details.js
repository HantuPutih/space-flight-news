import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { useParams } from 'react-router-dom'
import CardMedia from '@material-ui/core/CardMedia'
import Loading from './Loading'
import Container from '@material-ui/core/Container'
import {fetchDetail} from '../store/actions'
import { useSelector, useDispatch } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: 'auto',
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
  const dispatch = useDispatch()
  const classes = useStyles();
  const { detail, detailLoading } = useSelector(state => state.flight)
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(fetchDetail(id))
  }, [dispatch, id])

  return (
    <>
    <div className="middleText">
      <h1>News details </h1>
    </div>
        <div className={classes.root}>
          <Paper elevation={3}>
            <br/>
            <br/>
            <br/>
            {
              detailLoading ? <Loading></Loading> :
              <React.Fragment>
                <CardMedia 
                className={`${classes.paper} ${classes.Media}`}
                  component="img"
                  alt={detail.title}
                  height="500"
                  image={detail.imageUrl}
                  title={detail.title}
                />
              <Container maxWidth="md">
                <h2>
                  {detail.title}
                </h2>
                <p>
                  {detail.summary}
                </p>  
                  {
                    detail.publishedAt ?
                    <pre>
                      published At: {detail.publishedAt.split('T')[0]}
                    </pre> : null
                  }
                  {
                    detail.newsSite ? 
                    <React.Fragment>
                      <pre>
                        News Site: <a href={detail.url} rel="noreferrer" target="_blank">{detail.newsSite}</a> 
                      </pre>
                    </React.Fragment> : null
                  }
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

