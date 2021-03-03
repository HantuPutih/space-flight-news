import React from "react"
import Details from './views/Details'
import Favorite from './views/Saved'
import Home from './views/Home'
import './App.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {setPage} from './store/actions'
import { useSelector, useDispatch } from 'react-redux'

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
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSaved = (page) => {
    dispatch(setPage(page))
  }

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
        <MenuItem onClick={handleClose}><NavLink onClick={() => onSaved('home')} style={{textDecoration: "none", color: "#242424"}} to="/">Home</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink onClick={() => onSaved('flight')} style={{textDecoration: "none", color: "#242424"}} to="/saved">Saved News</NavLink></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/news/:id">
            <Details />
          </Route>
          <Route exact path="/saved">
            <Favorite />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
