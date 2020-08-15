import React from 'react'
import Lottie from "react-lottie"
import {makeStyles,useTheme} from "@material-ui/core/styles"
import animationData from "../animations/landinganimation/data"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import ButtonArrow from "../components/ui/ButtonArrow"
import Typography from "@material-ui/core/Typography"
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg"
import  useMediaQuery from '@material-ui/core/useMediaQuery'
import mobileAppsIcon from "../assets/mobileIcon.svg"
import WebsitesIcon from "../assets/websiteIcon.svg"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import revolutionBackground from "../assets/repeatingBackground.svg"
import infoBackground  from "../assets/infoBackground.svg"
import CallToAction from "./ui/CalltoAction"
const useStyles=makeStyles(theme=>({
 mainContainer:{
     "marginTop":"5em",
     [theme.breakpoints.down("md")]:{
         "marginTop":"3em"
     },
     [theme.breakpoints.down("xs")]:{
        "marginTop":"1.5em"
    }
 },   
animation:{
    maxWidth:"50em",
    minWidth:"21em",
    marginTop:"2em",
    marginLeft:"10%"
},
estimateButton:{
    ...theme.typography.estimate,
    backgroundColor:theme.palette.common.orange,
    borderRadius:50,
    height:45,
    width:145,
    marginRight:40,
    "&:hover":{
        backgroundColor:theme.palette.secondary.light
    }
},
buttonContainer:{
    marginTop:"1em"
},
learnButtonHero:{
 ...theme.typography.learnButton,
    fontSize:"0.9rem",
    height:45,
    width:145
},
learnButton:{
...theme.typography.learnButton,
fontSize:"0.7rem",
height:35,
padding:5,
[theme.breakpoints.down("sm")]:{
    marginBottom:"2em"
}
},
heroTextContainer:{
    minWidth:"21.5em",
    marginLeft:"1.5rem"
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
    marginTop:"12em",
    [theme.breakpoints.down("sm")]:{
        padding:25
    }
},
revolutionBackground:{
    backgroundImage:`url(${revolutionBackground})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"100%",
    width:"100%"
},
revolutionCard:{
    position:"absolute",
    boxShadow:theme.shadows[10],
    borderRadius:15,
    padding:"10em",
    [theme.breakpoints.down("sm")]:{
        padding:"8em 0 0"
    }
},
infoBackground:{
    backgroundImage:`url(${infoBackground})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"100%",
    width:"100%"
}
}))

export default function LandingPage(){
    const classes=useStyles();
    const theme=useTheme()
    const matchesSm=useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXs=useMediaQuery(theme.breakpoints.down("xs"))
    const defaultOptions={
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      return <Grid className={classes.mainContainer} container direction="column">
          <Grid item> {/* hero block */}
              <Grid container direction="row" alignItems="center" justify="flex-end" >
                  <Grid sm item className={classes.heroTextContainer} > 
                      <Typography variant="h2" >
                          Bringing West Coast Technology <br/> to the midwest
                      </Typography>
                      <Grid container className={classes.buttonContainer} justify="center">
                          <Grid item>
                              <Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
                          </Grid>
                          <Grid item >
                              <Button className={classes.learnButtonHero} variant="outlined"> <span style={{marginRight:10}}>Learn More</span>
                              <ButtonArrow width={15} fill={theme.palette.common.blue} height={15}/></Button>
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid className={classes.animation} sm item>
                  
                  <Lottie  options={defaultOptions} height={"100%"} width={"100%"}/>
                  </Grid>
              </Grid>
          </Grid>
  
{/* services */}
   <Grid item>
    <Grid justify={matchesSm?"center":undefined} className={classes.serviceContainer} container direction="row">
        <Grid item style={{marginLeft:matchesSm?0:"5em",textAlign:matchesSm?"center":undefined}}>
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
<Grid item> {/*Ios */}
    <Grid justify={matchesSm?"center":"flex-end"} className={classes.serviceContainer} container direction="row">
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
    <Grid item> {/* website block */}
    <Grid justify={matchesSm?"center":undefined} className={classes.serviceContainer} container direction="row">
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

<Grid item>
    <Grid style={{height:"100em",marginTop:"12em"}} container alignItems="center" justify="center">
    <Card className={classes.revolutionCard}>
        <CardContent>
        <Grid container style={{textAlign:"center"}} direction="column">
            <Grid item gutterBottom>
                <Typography variant="h3">
                    Revolution
                </Typography>
            </Grid>
            <Grid item >
                <Typography variant="subtitle1">
              Visionary insights coupled with cutting-edge technology is a recepie for revolution
                </Typography>
                <Button className={classes.learnButtonHero} variant="outlined"> <span style={{marginRight:10}}>Learn More</span>
                              <ButtonArrow width={15} fill={theme.palette.common.blue} height={15}/></Button>
            </Grid>
        </Grid>
        </CardContent>
    </Card>
    <div className={classes.revolutionBackground}/>
    </Grid>
</Grid>

 <Grid item>
    {/* information block */}
    <Grid container style={{height:"80em"}} alignItems="center">
      <Grid  item container style={{position:"absolute"}} direction={matchesSm?"column":"row"} textAlign={matchesXs?"center":"inherit"}>
      <Grid sm  item style={{marginLeft:"5em"}}>
      <Grid direction="column" container>
      <Typography style={{color:"white"}} variant="h2">About Us</Typography>
      <Typography variant="subtitle2">Let's get personal.</Typography>
      <Grid item>
      <Button style={{color:"white",borderColor:"white"}} className={classes.learnButton} variant="outlined">
      <span style={{marginRight:10}}>Learn More</span>
      <ButtonArrow width={10} height={10} fill="white"/>
      </Button>
      </Grid>
      </Grid>
     </Grid>
     <Grid sm item style={{marginRight:"5em"}}>
     <Grid direction="column" container>
     <Typography style={{color:"white"}} variant="h2">Contact Us</Typography>
     <Typography variant="subtitle2">Say hello!</Typography>
     <Grid item>
     <Button style={{color:"white",borderColor:"white"}} className={classes.learnButton} variant="outlined">
            <span style={{marginRight:10}}>Learn More</span>
            <ButtonArrow width={10} height={10} fill="white"/>
            </Button>
            </Grid>
      </Grid>
     </Grid>
     </Grid> 
     <div className={classes.infoBackground} />
    </Grid>
<Grid item>
    {/* call to action */}
    <CallToAction/>
</Grid>
</Grid>
      </Grid> 
}