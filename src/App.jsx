import './App.css';
import Flight from './components/Flight'
import Details from './components/Details'
import Loading from './views/Loading'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useFetch from './customHooks/useFetch'

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


function App() {
  const [url, setUrl] = useState('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=12')
  const [data, loading, error] = useFetch(url)
  const [details, setDetails] = useState({})
  const classes = useStyles();
  
  // const [flightNews, setFlightNews] = useState([])
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   setLoading(true)
  //   fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=12')
  //     .then(res => res.json())
  //     .then(data => 
  //       setFlightNews(data)
  //     )
  //     .finally(setLoading(false))
  // }, [])
  const getDetails = (id) => {
    fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/${id}`)
      .then(res => res.json())
      .then(data => {
        setDetails(data)
      })
    
  }
  return (
    <>
      <Container maxWidth="xl">
        <br/>
          <h1>Space Flight News</h1>
        <br/>
        <div>
        {/* <Details details={this.state.newsDetails}></Details>  */}
          
          <Details details={details}></Details>
        </div>
        <br/>
        {
          loading ? <Loading></Loading>:
          <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={6}>
                {data.map((news) => (
                <Flight news={news} key={news.id} getDetails={getDetails} />
                ))}
              </Grid>
            </Grid>
          </div>
        }
      </Container>
    </>
  )
}

export default App



// import './App.css';
// import Flight from './components/Flight'
// import Details from './components/Details'
// import React from 'react'


// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       flightNews: [],
//       detailsId: null,
//       newsDetails: {}
//     }
//   }
//   setId = (id) => {
//     // console.log(id,"dari set id");
//     this.setState({ 
//       detailsId: id
//     })
//   }
//   componentDidMount() {
//     // console.log(this.detailsId, 'dari mounted');
//     fetch('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=12')
//       .then(res => res.json())
//       .then(data => 
//         this.setState({flightNews:data})
//       )
//     fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/60004b1770fbb1001cbfe171`) //60004b1770fbb1001cbfe171 //${this.detailsId}
//       .then(res => res.json())
//       .then(data => 
//         this.setState({newsDetails:data})
//         // console.log(this.newsDetails);
//       )
//   }
  
//   render() {
//     // console.log(this.flightNews, 'news');
//     return (
//     <div className="container">
//       <br/>
//       <h1>Flight News</h1>
//       <br/>
//       <div>
//       {/* <Details details={this.state.newsDetails}></Details>  */}
//         {
//         this.state.newsDetails ? <Details details={this.state.newsDetails}></Details> : <h1>loading News</h1>
//         }
//       </div>
//     <br/>
//     <div className="App">
//       <div className="container">
//         <div className="row">
//           {this.state.flightNews.map((news) => (
//           <Flight news={news} key={news.id} getDetails={(id) => this.setId(id)}/>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
//   }

  
// }

// export default App;
