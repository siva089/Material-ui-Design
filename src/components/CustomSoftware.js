import React from 'react'
import Lottie from "react-lottie";
import {Link} from "react-router-dom";
import {makeStyles,useTheme} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden"
import CallToAction from "./ui/CalltoAction"

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg"
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg"
import animationData from "../animations/documentsAnimation/data"
import scaleAnimation from "../animations/scaleAnimation/data.json"
import automationAnimation from "../animations/automationAnimation/data.json"
import roots from "../assets/root.svg"
import uxanimation from "../animations/uxAnimation/data"
const documentOptions={
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const scaleoptions={
    loop: true,
    autoplay: true, 
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const automationOption={
    loop: true,
    autoplay: true, 
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const uxoption={
    loop: true,
    autoplay: true, 
    animationData: uxanimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
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
itemContainer:{
    maxWidth:"40em"
}
}))

export default function CustomSoftware(props){
const classes=useStyles();
const theme=useTheme()
const matchesMd=useMediaQuery(theme.breakpoints.down("md"))
const matchesSm=useMediaQuery(theme.breakpoints.down("sm"))
return(
    <Grid container direction="column" className={classes.mainContainer}>
        <Grid item container direction="row" justify={matchesMd?"center":undefined}>
            <Hidden mdDown>
  
           <Grid item className={classes.arrowContainer} style={{marginRight:"1em",marginLeft:"-3.5em"}}>
             <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/services" onClick={()=>props.setSelectedIndex(0)}>
                 <img src={backArrow} alt="back to Services page"/>
             </IconButton>
          </Grid>
          </Hidden>
         <Grid item container direction="column" className={classes.heading}>
            <Grid item>
            <Typography align={matchesMd?"center":undefined} paragraph variant="h2">Custom Software Development</Typography>
            </Grid>
          <Grid item>
     <Typography align={matchesMd?"center":undefined}  variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam iusto officia animi magni rerum iure! Fugit nobis ullam sapiente earum accusamus? Qui voluptates id nobis dolorem soluta eum corrupti suscipit cumque, temporibus, enim quibusdam at quasi quaerat unde recusandae dolorum veritatis numquam maxime. Explicabo, magni eius sunt illum ipsa ducimus!</Typography>
       <Typography align={matchesMd?"center":undefined} variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia qui placeat reprehenderit debitis quo fugit in ab deserunt voluptatibus saepe dolorem quam ullam dolorum temporibus error expedita alias a, ducimus tenetur eaque illo consequuntur aut. Alias culpa, officia consectetur natus saepe iure beatae dolores dolorum quos dignissimos, nihil cupiditate?</Typography>
       <Typography align={matchesMd?"center":undefined} variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quia qui placeat reprehenderit debitis quo fugit in ab deserunt voluptatibus saepe dolorem quam ullam dolorum temporibus error expedita alias a, ducimus tenetur eaque illo consequuntur aut. Alias culpa, officia consectetur natus saepe iure beatae dolores dolorum quos dignissimos, nihil cupiditate?</Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
        <Grid style={{ marginLeft: "auto"}} className={classes.arrowContainer} item>
      <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/mobileapps" onClick={()=>props.setSelectedIndex(2)}>
          {/* <img src= alt=""/> */}
          <img src={forwardArrow} alt='Forwart to ios android development'/>
      </IconButton>
        </Grid>
        </Hidden>
        </Grid>
  <Grid item container direction="row" justify="center" style={{marginTop:"15em",marginBottom:"20em"}}>
  <Grid item container direction="column" alignItems="center" md style={{maxWidth:"40em",marginTop:matchesSm?"2em":0,marginBottom:matchesSm?"2em":0}}>
  <Grid item>
  <Typography variant="h4">Save Energy</Typography>     
 </Grid>    
 <Grid item>
     <img src={lightbulb} alt="lightbulb"/>
 </Grid>
  </Grid>    
  <Grid item container alignItems="center" direction="column" md style={{maxWidth:"40em",marginTop:matchesSm?"2em":0,marginBottom:matchesSm?"2em":0}}>
  <Grid item>
  <Typography variant="h4">Save Time</Typography>     
 </Grid>    
 <Grid item>
     <img src={cash} alt="cash"/>
 </Grid>
  </Grid>    
  <Grid item container alignItems="center" direction="column" md style={{maxWidth:"40em",marginTop:matchesSm?"2em":0,marginBottom:matchesSm?"2em":0}}>
  <Grid item>
  <Typography variant="h4">Save Money</Typography>     
 </Grid>    
 <Grid item>
     <img src={stopwatch} alt="stopwatch"/>
 </Grid>
  </Grid>    
  
  </Grid>
  <Grid item alignItems={matchesMd?"true":undefined} container direction={matchesMd?"column":"row"} justify="space-around">
      <Grid style={{marginBottom:matchesMd?"15em":undefined}} item container md className={classes.itemContainer}>
      <Grid item container direction="column" md>
      <Grid item>
<Typography align={matchesSm?"center":undefined}  variant="h4">Digital documents and data</Typography>
      </Grid>
<Grid item>
<Typography align={matchesSm?"center":undefined} paragraph variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deserunt?</Typography>
<Typography align={matchesSm?"center":undefined} paragraph variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, sint doloribus! Ex alias eos commodi libero, fuga asperiores veniam illo voluptatem! Quas odio earum voluptates?</Typography>
<Typography align={matchesSm?"center":undefined} paragraph variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit necessitatibus quisquam, eos vel pariatur eius.</Typography>
</Grid>
</Grid>
<Grid item md>
    <Lottie options={documentOptions} style={{maxHeight:275,maxWidth:275,minHeight:250}}/>
</Grid>
</Grid>
<Grid item container md direction={matchesSm?"column":"row"} className={classes.itemContainer} >
<Grid item md>
    <Lottie options={scaleoptions} style={{maxWidth:280,minHeight:200}}/>
</Grid>
      <Grid item container direction="column" md>
      <Grid item>
<Typography align={matchesSm?"center":"right"} variant="h4">Scale</Typography>
      </Grid>
<Grid item>
<Typography align={matchesSm?"center":"right"} paragraph variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deserunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cum, aut adipisci excepturi possimus placeat debitis expedita blanditiis officia suscipit!</Typography>
</Grid>
</Grid>

</Grid>
</Grid>
<Grid item container direction={matchesSm?"column":"row"} style={{marginTop:"20em",marginBottom:"20em"}}>
<Grid item container direction="column" alignItems="center">
    <Grid item>
        <img src={roots} alt="tree with roots" height={matchesSm?"300em":"450em"} width={matchesSm?"300em":"450em"} />
    </Grid>
    <Grid item className={classes.itemContainer}>
<Typography variant="h4" align="center" gutterBottom>Root Case Analysis</Typography>
<Typography align="center" varinat="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum excepturi neque rerum ad laudantium quo.</Typography>
    </Grid>
</Grid>
</Grid>
<Grid item container alignItems={matchesMd?"true":undefined}  direction={matchesMd?"column":"row"} justify="space-around" style={{marginBottom:"10em"}}>
      <Grid style={{marginBottom:matchesMd?"15em":undefined}} item container md className={classes.itemContainer}>
      <Grid item container direction="column" md>
      <Grid item>
<Typography  variant="h4">Automation</Typography>
      </Grid>
<Grid item>
<Typography align={matchesSm?"center":undefined} paragraph variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deserunt?</Typography>
<Typography align={matchesSm?"center":undefined} paragraph variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, sint doloribus! Ex alias eos commodi libero, fuga asperiores veniam illo voluptatem! Quas odio earum voluptates?</Typography>
<Typography align={matchesSm?"center":undefined} paragraph variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit necessitatibus quisquam, eos vel pariatur eius.</Typography>
</Grid>
</Grid>
<Grid item md>
    <Lottie options={automationOption} style={{maxHeight:290,maxWidth:280}}/>
</Grid>
</Grid>
<Grid item container md className={classes.itemContainer}>
<Grid item md>
    <Lottie options={uxoption} style={{maxWidth:310,minHeight:155}}/>
</Grid>
      <Grid item container direction="column" md>
      <Grid item>
<Typography align={matchesSm?"center":"right"}  variant="h4">User experience design</Typography>
      </Grid>
<Grid item>
<Typography align={matchesSm?"center":"right"} paragraph variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deserunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cum, aut adipisci excepturi possimus placeat debitis expedita blanditiis officia suscipit!</Typography>
<Typography align={matchesSm?"center":"right"} paragraph variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, deserunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cum, aut adipisci excepturi possimus placeat debitis expedita blanditiis officia suscipit!</Typography>

</Grid>
</Grid>

</Grid>
</Grid>
<Grid item>
    <CallToAction setValue={props.setValue}/>
</Grid>
</Grid>
)

}
