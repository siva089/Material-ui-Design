import React from 'react'
import {Link} from "react-router-dom";
import {makeStyles,useTheme} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ButtonArrow from "./ui/ButtonArrow"
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg"
import mobileAppsIcon from "../assets/mobileIcon.svg"
import WebsitesIcon from "../assets/websiteIcon.svg"
const useStyles=makeStyles(theme=>({
    learnButton:{
        ...theme.typography.learnButton,
        fontSize:"0.7rem",
        height:35,
        padding:5,
        [theme.breakpoints.down("sm")]:{
            marginBottom:"2em"
        }
        },
    specialText:{
        fontFamily:'Pacifico',
        color:theme.palette.common.orange
    },
    subtitle:{
        marginBottom:"1em"
    },
    icon:{
        marginLeft:"2em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:0
        }
    },
    serviceContainer:{
        marginTop:"5em",
        [theme.breakpoints.down("sm")]:{
            padding:25
        }
    }
}))

export default function Services(props){
    const classes=useStyles()
    const theme=useTheme()
    const matchesSm=useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Grid container direction="column">
          <Grid align={matchesSm?"center":""} style={{marginLeft:matchesSm?0:"5em",marginTop:matchesSm?"1em":"2em"}} item>
             <Typography variant="h2">Services</Typography> 
              </Grid>  
             <Grid item style={{marginRight:matchesSm?"":"5em"}}>
    <Grid  justify={matchesSm?"center":"flex-end"} className={classes.serviceContainer} container direction="row">
        <Grid item style={{textAlign:matchesSm?"center":undefined}}>
            <Typography variant="h4">
           Custom Software Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
            Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
                Complete digital solutions, From investigation to {" "}
                 <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button className={classes.learnButton} variant="outlined">
            <span style={{marginRight:10}}>Learn More</span>
            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
            </Button>
          
        </Grid>
        <Grid item>
            <img className={classes.icon} alt="custom software icon" src={CustomSoftwareIcon}/>
        </Grid>
    </Grid>
</Grid>
<Grid style={{marginLeft:matchesSm?"":"5em"}} item> {/*Ios */}
    <Grid justify={matchesSm?"center":"flex-start"} className={classes.serviceContainer} container direction="row">
        <Grid item style={{textAlign:matchesSm?"center":undefined}}>
            <Typography variant="h4">
           Ios/Android App Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
          Extend Functionality. Extend Access. Increase Engagement
            </Typography>
            <Typography variant="subtitle1">
               Integrate your web experience or create a standalone app {matchesSm?null:<br/>} with either mobile platform.
                 {/* <span className={classes.specialText}>celebration</span> */}
            </Typography>
            <Button className={classes.learnButton} variant="outlined">
            <span style={{marginRight:10}}>Learn More</span>
            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
            </Button>
          
        </Grid>
        <Grid item style={{marginRight:matchesSm?0:"5em"}}>
            <img className={classes.icon} alt="Mobile Apps Icon" src={mobileAppsIcon}/>
        </Grid>
    </Grid>
    <Grid style={{marginRight:matchesSm?"":"5em",marginBottom:"5em"}} item> {/* website block */}
    <Grid justify={matchesSm?"center":"flex-end"} className={classes.serviceContainer} container direction="row">
        <Grid item style={{marginLeft:matchesSm?0:"5em",textAlign:matchesSm?"center":undefined}}>
            <Typography variant="h4">
          Website Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
           Read More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
Optimize for search engines and build for speed.
            </Typography>
            <Button className={classes.learnButton} variant="outlined">
            <span style={{marginRight:10}}>Learn More</span>
            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
            </Button>
          
        </Grid>
        <Grid item>
            <img className={classes.icon} alt="website icon" src={WebsitesIcon}/>
        </Grid>
    </Grid>
</Grid>
</Grid>
        </Grid>
    )
}