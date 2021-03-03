// import './App.css';
// import Flight from './components/Flight'
// import Details from './components/Details'
// import Loading from './views/Loading'
// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// // import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import useFetch from './customHooks/useFetch'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(1),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));


// function App() {
//   const [url, setUrl] = useState('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=12')
//   const [data, loading, error] = useFetch(url)
//   const [details, setDetails] = useState({})
//   const classes = useStyles();

//   const getDetails = (id) => {
//     fetch(`https://test.spaceflightnewsapi.net/api/v2/articles/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         setDetails(data)
//       })
    
//   }
//   return (
//     <>
//       <Container maxWidth="xl">
//         <br/>
//           <h1>Space Flight News</h1>
//         <br/>
//         <div>
//           <Details details={details}></Details>
//         </div>
//         <br/>
//         {
//           loading ? <Loading></Loading>:
//           <div className={classes.root}>
//             <Grid container spacing={1}>
//                 <Grid container item xs={12} spacing={6}>
//                 {data.map((news) => (
//                 <Flight news={news} key={news.id} getDetails={getDetails} />
//                 ))}
//               </Grid>
//             </Grid>
//           </div>
//         }
//       </Container>
//     </>
//   )
// }

// export default App



import React from "react"
import Home from './views/Home'
import Details from './views/Details'
import './App.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Space Flight News
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink style={{textDecoration: "none", color: "#242424"}} to="/">Home</NavLink></MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/news/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
