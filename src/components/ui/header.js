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
const useStyles=makeStyles(theme=>({
    toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom:"1em",
       
    },
    tabContainer:{
        marginLeft:'auto'
    },
    logo:{
height:"5em"
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
        color:"white"
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

}

}))
export default function Header(props){
    const classes=useStyles()
const [value, setvalue] = useState(0)
const [anchorEl,setAnchorEl]=useState(null)
const [open,setOpen]=useState(false)
const [selectedIndex,setSelectedIndex]=useState(0)
const handleClick=(e)=>{
    setAnchorEl(e.currentTarget)
    setOpen(true)
}
const handleClose=(e)=>{
    setAnchorEl(null)
    setOpen(false)
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
    setOpen(false)
    setSelectedIndex(i)
}

const handleChange=(e,value)=>{
    setvalue(value)
}
const menuOptions=[{name:"Services",link:"/services"},{name:"Custom Software",link:"/customsoftware"},{name:"Mobile App Development",link:"/mobileapps"},{name:"Website Development",link:"/websites"}]

return(
    <>
    <AppBar variant="dense"  position="fixed" color="primary">
   <Toolbar disableGutters>
       <Button disableRipple onClick={()=>{setvalue(0)}} className={classes.logoContainer} component={Link} to="/">
    <img  className={classes.logo}src={logo} alt="company logo"/></Button>
    <Tabs  value={value} onChange={handleChange} className={classes.tabContainer}>
            <Tab className={classes.tab} component={Link} to="/" label="Home"/>
            <Tab onMouseOver={e=>handleClick(e)} aria-haspopup={anchorEl?true:undefined} aria-owns={anchorEl?"simple-menu":undefined} className={classes.tab} component={Link} to="/services" label="Services"/>
            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
            <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
            <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us"/>

        </Tabs>
        <Button component={Link} to="/estimate" variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
        <Menu elevation={0} classes={{paper:classes.menu}} MenuListProps={{onMouseLeave:handleClose}} id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
       
   {menuOptions.map((option,i)=>(
   <MenuItem key={option} selected={i===selectedIndex&&value==1} component={Link} to={option.link} classes={{root:classes.menuItem}} onClick={(e)=>{handleMenuItemClick(e,i);setvalue(1);handleClose()}} >{option.name}</MenuItem>
   ))}
        </Menu>
        </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin}/>
   </>
)
}