import React from 'react'
import Lottie from "react-lottie";
import {Link} from "react-router-dom";
import {makeStyles,useTheme} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Hidden from "@material-ui/core/Hidden"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import backArrow from "../assets/backArrow.svg"
import forwardArrow from "../assets/forwardArrow.svg"
import IntegrationAnimation from "../animations/integrationAnimation/data.json"
import Swiss from "../assets/swissKnife.svg"
import access from "../assets/extendAccess.svg"
import engagement from "../assets/increaseEngagement.svg"
import CallToAction from "./ui/CalltoAction"
const useStyles=makeStyles(theme=>({
    heading:{
        maxWidth:"40em"
    },
    arrowContainer:{
        marginBottom:"0.5em"
    },
    mainContainer:{
       paddingLeft:"5em",
       paddingRight:'5em',
       paddingTop:"2em",
       paddingBottom:"10em",
       [theme.breakpoints.down("sm")]:{
           paggingLeft:"1.5em",
           paddingRight:"1.5em"
       }
    },
}))

export default function MobileApps(props){
    const classes=useStyles()
    const theme=useTheme()
    const matchesMd=useMediaQuery(theme.breakpoints.down("md"))
    const matchesXS=useMediaQuery(theme.breakpoints.down("xs"))
    const defaultOptions={
        loop: true,
        autoplay: true, 
        animationData: IntegrationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <Grid container direction="column">
 <Grid item container direction="row" justify={matchesMd?"center":undefined} className={classes.mainContainer}>
            <Hidden mdDown>
           <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3.5em"}}>
             <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/customsoftware" onClick={()=>props.setSelectedIndex(1)}>
                 <img src={backArrow}  alt="back to Services page"/>
             </IconButton>
          </Grid>
          </Hidden>
         <Grid item container direction="column" className={classes.heading}>
            <Grid item>
            <Typography align={matchesMd?"center":undefined} paragraph variant="h2">IOS/Android App development</Typography>
            </Grid>
          <Grid item>
     <Typography align={matchesMd?"center":undefined}  variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto officia animi magni rerum iure! Fugit nobis ullam sapiente earum accusamus? Qui voluptates id nobis dolorem soluta eum corrupti suscipit cumque, temporibus, enim quibusdam at quasi quaerat unde recusandae dolorum veritatis numquam maxime. Explicabo, magni eius sunt illum ipsa ducimus!</Typography>
       <Typography align={matchesMd?"center":undefined} variant="body1">Conveince Connection</Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
        <Grid style={{ marginLeft: "auto"}} className={classes.arrowContainer} item>
      <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/websites" onClick={()=>props.setSelectedIndex(2)}>
          {/* <img src= alt=""/> */}
          <img src={forwardArrow} alt='website development app'/>
      </IconButton>
        </Grid>
        </Hidden>
        </Grid>
        <Grid style={{marginBottom:"5em",marginTop:'5em'}}  item container direction={matchesMd?"column":"row"}  className={classes.mainContainer}>
<Grid item container direction="column" md>
    <Typography variant="h4" gutterBottom>Integration</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sequi temporibus unde asperiores, voluptatem, odio cum cupiditate vero corrupti error voluptate. Expedita nisi magni repudiandae, impedit illum iste obcaecati tempore?</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nisi tempora incidunt eveniet at maxime! Doloribus molestias vel pariatur ipsa enim saepe eligendi sit accusantium, dolor molestiae repudiandae? Quae, neque.</Typography>
</Grid>
<Grid item md>
<Lottie style={{maxWidth:"20em"}} options={defaultOptions}/>
</Grid>
<Grid item container direction="column" md>
    <Typography variant="h4" gutterBottom>Simultaneous Platform Support</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sequi temporibus unde asperiores, voluptatem, odio cum cupiditate vero corrupti error voluptate. Expedita nisi magni repudiandae, impedit illum iste obcaecati tempore?</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nisi tempora incidunt eveniet at maxime! Doloribus molestias vel pariatur ipsa enim saepe eligendi sit accusantium, dolor molestiae repudiandae? Quae, neque.</Typography>
</Grid>
        </Grid>
       
        <Grid item container direction={matchesMd?"column":"row"} className={classes.mainContainer}>
<Grid item container direction="column" md alignItems="center">
   <Grid item>
   <Typography align="center" variant="h4" gutterBottom>Extend functionality</Typography>
   </Grid>
   <Grid item>
 <img src={Swiss} alt="swiss knife"/>
   </Grid>
</Grid>
<Grid item container direction="column" md alignItems="center" >
   <Grid item>
   <Typography align="center" variant="h4" gutterBottom>Extend access</Typography>
   </Grid>
   <Grid item>
 <img src={access} alt="swiss knife" style={{maxWidth:"25em"}}/>
   </Grid>
</Grid>
<Grid item container direction="column" md alignItems="center" >
   <Grid item>
   <Typography align="center" variant="h4" gutterBottom>Increase engagement</Typography>
   </Grid>
   <Grid item>
 <img src={engagement} alt="swiss knife"/>
   </Grid>
</Grid>
</Grid>
    <Grid item>
<CallToAction setValue={props.setValue} />
    </Grid>   
        </Grid>
    )
}





{/* <Grid item>
<Typography variant="h4" gutterBottom>Extend functionality</Typography>
</Grid>
<Grid item>
<img src={swiss} alt="swiss army/>
</Grid> */}