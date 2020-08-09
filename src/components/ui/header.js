import React,{useState,useEffect} from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import {makeStyles} from "@material-ui/styles"
import logo from "../../assets/logo.svg"
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Button from '@material-ui/core/Button'
import {Link} from "react-router-dom"
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
const useStyles=makeStyles(theme=>({
    appbar:{
        zIndex:theme.zIndex.modal+1
    },
    toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom:"1em",
        [theme.breakpoints.down("md")]:{
            marginBottom:"2em"
        },
        [theme.breakpoints.down("xs")]:{
            height:"1em"
        }
       
    },
    tabContainer:{
        marginLeft:'auto'
    },
    logo:{
height:"6em",
[theme.breakpoints.down("md")]:{
    height:"5em"
},
[theme.breakpoints.down("xs")]:{
    height:"5em"
}
    },
    logoContainer:{
padding:0,
"&:hover":{
    backgroundColor:"transparent"
}
    },
    tab:{
fontFamily:"Raleway",
textTransform:"none",
fontWeight:700,
fontSize:"1rem",
minWidth:10,
marginLeft:"25px"
    },
    button:{
        borderRadius:"50px",
        marginLeft:"50px",
        marginRight:"25px",
        fontFamily:"Pacifico",
        fontSize:"1rem",
        textTransform:'none',
        // height:"45px",
        color:"white",
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        }
    },
menu:{
    backgroundColor:theme.palette.common.blue,
    color:"white"
}   ,
menuItem:{
    ...theme.typography.tab,
    "opacity":0.7,
    "&:hover":{
        "opacity":1
    },
    "borderRadisu":0

},
drawerIconContainer:{
    marginLeft:'auto',
"&:hover":{
    backgroundColor:"transparent"
}
},
drawerIcon:{
    height:"50px",
    width:"50px"
},
drawer:{
    backgroundColor:theme.palette.common.blue,
    width:"40%"
},
drawerItem:{
    ...theme.typography.tab,
    color:"white",
    opacity:0.7,
    
},
drawerEstimate:{
   backgroundColor:theme.palette.common.orange 
},
drawerItemSelected:{
    opacity:1
}
}))
export default function Header({value,setvalue,selectedIndex,setSelectedIndex}){
const classes=useStyles()
const theme=useTheme();
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
const matches=useMediaQuery(theme.breakpoints.down('md'))

const [anchorEl,setAnchorEl]=useState(null)
const [openMenu,setOpenMenu]=useState(false)

const [openDrawer,setOpenDrawer]=useState(false)
const handleClick=(e)=>{
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
}
const handleClose=(e)=>{
    setAnchorEl(null)
    setOpenMenu(false)
}
 useEffect(()=>{
     if(window.location.pathname=="/"&& value!==0){
         setvalue(0)
     }
    else if(window.location.pathname=="/services"&& value!==1){
        setvalue(1)
    }
   else if(window.location.pathname=="/revolution"&& value!==2){
        setvalue(2)
    }
   else if(window.location.pathname=="/about"&& value!==3){
        setvalue(3)
    }
   else if(window.location.pathname=="/contact"&& value!==4){
        setvalue(4)
    }
 },[value])   
const handleMenuItemClick=(e,i)=>{
    setAnchorEl(null);
    setOpenMenu(false)
    setSelectedIndex(i)
}

const handleChange=(e,newValue)=>{
    setvalue(newValue)
}
const menuOptions=[{name:"Services",link:"/services"},{name:"Custom Software",link:"/customsoftware"},{name:"Mobile App Development",link:"/mobileapps"},{name:"Website Development",link:"/websites"}]
const tabs=(
    <>
 <Tabs  value={value} onChange={handleChange} className={classes.tabContainer}>
            <Tab className={classes.tab} component={Link} to="/" label="Home"/>
            <Tab onMouseOver={e=>handleClick(e)} aria-haspopup={anchorEl?true:undefined} aria-owns={anchorEl?"simple-menu":undefined} className={classes.tab} component={Link} to="/services" label="Services"/>
            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
            <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
            <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us"/>

        </Tabs>
        <Button component={Link} to="/estimate" variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
        <Menu style={{zIndex:1302}} elevation={0} classes={{paper:classes.menu}} MenuListProps={{onMouseLeave:handleClose}} id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
       
   {menuOptions.map((option,i)=>(
   <MenuItem  key={option} selected={i===selectedIndex&&value==1} component={Link} to={option.link} classes={{root:classes.menuItem}} onClick={(e)=>{handleMenuItemClick(e,i);setvalue(1);handleClose()}} >{option.name}</MenuItem>
   ))}
        </Menu>
    </>
)
const drawer=(
    <>
    <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={()=>setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)} classes={{paper:classes.drawer}} >
        <div className={classes.toolbarMargin} />
      <ListItem selected={value==0} onClick={()=>{setOpenDrawer(false);setvalue(0)}} divider button component={Link} to="/">
     <ListItemText className={classes.drawerItem} disableTypography>Home</ListItemText>
      </ListItem>  
      <ListItem selected={value==1}  onClick={()=>{setOpenDrawer(false);setvalue(1)}} divider button component={Link} to="/services">
     <ListItemText className={classes.drawerItem}   disableTypography>Services</ListItemText>
      </ListItem> 
      <ListItem selected={value==2} onClick={()=>{setOpenDrawer(false);setvalue(2)}} divider button component={Link} to="/revolution">
     <ListItemText className={classes.drawerItem} disableTypography>The Revolution</ListItemText>
      </ListItem> 
      <ListItem selected={value==3} onClick={()=>{setOpenDrawer(false);setvalue(3)}} divider button component={Link} to="/about">
     <ListItemText className={classes.drawerItem}  disableTypography>About</ListItemText>
      </ListItem>    
      <ListItem selected={value==4} onClick={()=>{setOpenDrawer(false);setvalue(4)}} divider button component={Link} to="/contact">
     <ListItemText className={classes.drawerItem} disableTypography>Contact Us</ListItemText>
      </ListItem>  
      <ListItem selected={value==5} className={[classes.drawerEstimate]} onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/estimate">
     <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
      </ListItem>  
    </SwipeableDrawer>
    <IconButton className={[classes.drawerIconContainer]} onClick={()=>setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon}/>
    </IconButton>
    </>
)
return(
    <>
    <AppBar className={classes.appbar} variant="dense"  position="fixed" color="primary">
   <Toolbar disableGutters>
       <Button disableRipple onClick={()=>{setvalue(0)}} className={classes.logoContainer} component={Link} to="/">
    <img  className={classes.logo}src={logo} alt="company logo"/></Button>
   {matches?drawer:tabs}
        </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin}/>
   </>
)
}