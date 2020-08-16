import React from 'react'
import {Link} from "react-router-dom";
import {makeStyles,useTheme} from "@material-ui/core/styles" 
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Hidden from "@material-ui/core/Hidden"
import backArrow from "../assets/backArrow.svg"
import forwardArrow from "../assets/forwardArrow.svg"
import Analytics from "../assets/analytics.svg"
import Seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg"
import ecommerce from "../assets/ecommerce.svg"
import CallToAction from "./ui/CalltoAction"
const useStyles=makeStyles(theme=>({ heading:{
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
paragraphContainer:{
    maxWidth:"30em"
}
}))

export default function  Websites(props){
    const classes=useStyles()
    const theme=useTheme()
    const matchesMd=useMediaQuery(theme.breakpoints.down("md"))
    const matchesXs=useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <Grid container direction="column" className={classes.mainContainer}>
<Grid item container direction="row" justify={matchesMd?"center":undefined}>
            <Hidden mdDown>
  
           <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3.5em"}}>
             <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/mobileapps" onClick={()=>props.setSelectedIndex(2)}>
                 <img src={backArrow} alt="back to Services page"/>
             </IconButton>
          </Grid>
          </Hidden>
         <Grid item container direction="column" className={classes.heading}>
            <Grid item>
            <Typography align={matchesMd?"center":undefined} paragraph variant="h2">Website Development</Typography>
            </Grid>
          <Grid item>
     <Typography align={matchesMd?"center":undefined}  variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto officia animi magni rerum iure! Fugit nobis ullam sapiente earum accusamus? Qui voluptates id nobis dolorem soluta eum corrupti suscipit cumque, temporibus, enim quibusdam at quasi quaerat unde recusandae dolorum veritatis numquam maxime. Explicabo, magni eius sunt illum ipsa ducimus!</Typography>

          </Grid>
        </Grid>
        <Hidden mdDown>
        <Grid style={{ marginLeft: "auto"}} className={classes.arrowContainer} item>
      <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/mobileapps" onClick={()=>props.setSelectedIndex(2)}>
          {/* <img src= alt=""/> */}
          <img  src={forwardArrow} alt='Forwart to ios android development'/>
      </IconButton>
        </Grid>
        </Hidden>
        </Grid>
        <Grid container alignItems="center" item direction="row" >
          <Grid item>
              <Grid container direction="column">
           <Grid item>
           <Typography variant="h4"gutterBottom>Analytics</Typography>
       </Grid>
       <Grid item>
           <img style={{marginLeft:"-2.75em"}} src={Analytics} alt="analytics"/>
       </Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Typography className={classes.paragraphContainer} variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque voluptas tenetur fugiat deleniti consectetur, amet nobis sit culpa voluptates?</Typography>
              </Grid>
        </Grid>
        <Grid justify="flex-end" container alignItems="center" item direction="row" >
          <Grid item>
              <Grid container direction="column">
           <Grid item>
           <Typography align="center" variant="h4"gutterBottom>E-commerce</Typography>
       </Grid>
       <Grid item>
           <img  src={ecommerce} alt="ecommerce"/>
       </Grid>
              </Grid>
          </Grid>
          <Grid item style={{marginLeft:"1em"}}> 
              <Typography className={classes.paragraphContainer} variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque voluptas tenetur fugiat deleniti consectetur, amet nobis sit culpa voluptates?</Typography>
              </Grid>
        </Grid>
        

        {/* /// */}
        <Grid container alignItems="center" item direction="row" >
          <Grid item>
              <Grid container direction="column">
           <Grid item>
           <Typography variant="h4"gutterBottom>Out Reach</Typography>
       </Grid>
       <Grid item>
           <img  src={outreach} alt="analytics"/>
       </Grid>
              </Grid>
          </Grid>
          <Grid item>
              <Typography className={classes.paragraphContainer} variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque voluptas tenetur fugiat deleniti consectetur, amet nobis sit culpa voluptates?</Typography>
              </Grid>
        </Grid>
        <Grid justify="flex-end" container alignItems="center" item direction="row" >
          <Grid item>
              <Grid container direction="column">
           <Grid item>
           <Typography align="center" variant="h4"gutterBottom>SEO</Typography>
       </Grid>
       <Grid item>
           <img  src={Seo} alt="ecommerce"/>
       </Grid>
              </Grid>
          </Grid>
          <Grid item style={{marginLeft:"1em"}}> 
              <Typography className={classes.paragraphContainer} variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque voluptas tenetur fugiat deleniti consectetur, amet nobis sit culpa voluptates?</Typography>
              </Grid>
        </Grid>
        <Grid item>
            <CallToAction setValue={props.setValue}/>
        </Grid>
        </Grid>
    )
}