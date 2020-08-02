import React from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import {makeStyles} from "@material-ui/styles"
import logo from "../../assets/logo.svg"
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Button from '@material-ui/core/Button'
const useStyles=makeStyles(theme=>({
    toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom:"1em",
       
    },
    tabContainer:{
        marginLeft:'auto'
    },
    tab:{
fontFamily:"Raleway",
textTransform:"none",
fontWeight:700,
fontSize:"1rem",
minWidth:10,
marginLeft:"25px"
    },
   

}))
export default function Header(props){
const classes=useStyles()
return(
    <>
    <AppBar variant="dense"  position="fixed" color="primary">
   <Toolbar disableGutters>
    <img  className={classes.logo}src={logo} alt="company logo"/>
    <Tabs className={classes.tabContainer}>
            <Tab className={classes.tab} label="Home"/>
            <Tab className={classes.tab} label="Services"/>
            <Tab className={classes.tab} label="The Revolution"/>
            <Tab className={classes.tab} label="About Us"/>
            <Tab className={classes.tab} label="Contact Us"/>
        </Tabs>
        <Button variant="contained" color="secondary">Free Estimate</Button>
        </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin}/>
   </>
)
}