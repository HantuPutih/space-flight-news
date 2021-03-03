import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { useParams } from 'react-router-dom'
// import useFetch from '../customHooks/useFetch'
import CardMedia from '@material-ui/core/CardMedia'
import Loading from '../views/Loading'
import Container from '@material-ui/core/Container'
import {changeData} from '../store/actions'
import { useSelector, useDispatch } from 'react-redux'




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: 'auto',
      // margin: theme.spacing(0 auto),
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
  const data = useSelector(state => state.data)
  const classes = useStyles();
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/${id}`)
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
      .finally(
        // setTimeout(() => {
          setLoading(false)
        // }, 1000)
      )
  }, [])

  return (
    <>
      <h1>News details </h1>
        <div className={classes.root}>
          <Paper elevation={3}>
            <br/>
            <br/>
            <br/>
            {
              loading ? <Loading></Loading> :
              <React.Fragment>
              <CardMedia 
              className={`${classes.paper} ${classes.Media}`}
                component="img"
                alt={data.title}
                height="500"
                image={data.imageUrl}
                title={data.title}
              />
              <Container maxWidth="md">
                <h2>
                  {data.title}
                </h2>
                <p>
                  {data.summary}
                </p>  
                  {
                    data.publishedAt ?
                    <pre>
                      published At: {data.publishedAt.split('T')[0]}
                    </pre> : null
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