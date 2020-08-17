import React from 'react'
import {makeStyles,useTheme} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import Lottie from "react-lottie"
import vision from "../assets/vision.svg"
import consultation from "../assets/consultationIcon.svg"
import mockup from "../assets/mockupIcon.svg"
import review from "../assets/reviewIcon.svg"
import design from "../assets/designIcon.svg"
import build from "../assets/buildIcon.svg"
import maintain from "../assets/maintainIcon.svg"
import iterate from "../assets/iterateIcon.svg"
import technologyAnimation from "../animations/technologyAnimation/data.json"
const useStyles=makeStyles(theme=>({
    mainContainer:{
        paddingLeft:"5em",
        paddingRight:'5em',
        [theme.breakpoints.down("sm")]:{
            paggingLeft:"1.5em",
            paddingRight:"1.5em"
        }
     },
}))

export default function Revolution(){

    const classes=useStyles()
    const theme=useTheme()
    const defaultOptions={
        loop: true,
        autoplay: true, 
        animationData: technologyAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
    return (
        <Grid style={{marginTop:"2em"}} container direction="column">
            
  <Grid item className={classes.mainContainer}>
      <Typography style={{fontFamily:"Pacifico"}} variant="h2">The Revolution</Typography>
  </Grid>
  <Grid lg item container direction="row" alignItems="center" className={classes.mainContainer} style={{marginTop:"5em"}}>
<Grid item>
    <img src={vision} alt="mountain" style={{maxWidth:"40em", marginRight:"5em"}} />
</Grid>
<Grid lg item container direction="column" style={{maxWidth:"40em"}}>
    <Grid item>
<Typography variant="h4" gutterBottom>Vision</Typography>
    </Grid>
<Grid item>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sed voluptatem assumenda eius nesciunt perferendis. Accusantium itaque laudantium, doloremque esse sequi debitis molestias voluptates, nam sapiente ipsam quaerat velit!</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sed voluptatem assumenda eius nesciunt perferendis. Accusantium itaque laudantium, doloremque esse sequi debitis molestias voluptates, nam sapiente ipsam quaerat velit!</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sed voluptatem assumenda eius nesciunt perferendis. Accusantium itaque laudantium, doloremque esse sequi debitis molestias voluptates, nam sapiente ipsam quaerat velit!</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sed voluptatem assumenda eius nesciunt perferendis. Accusantium itaque laudantium, doloremque esse sequi debitis molestias voluptates, nam sapiente ipsam quaerat velit!</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sed voluptatem assumenda eius nesciunt perferendis. Accusantium itaque laudantium, doloremque esse sequi debitis molestias voluptates, nam sapiente ipsam quaerat velit!</Typography>
</Grid>
</Grid>
  </Grid>
  <Grid lg item container direction="row" alignItems="center" className={classes.mainContainer} style={{marginTop:"10em",marginBottom:"5em"}}>

<Grid lg item container direction="column" style={{maxWidth:"40em"}}>
    <Grid item>
<Typography variant="h4" gutterBottom>Technology</Typography>
    </Grid>
<Grid item>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sed voluptatem assumenda eius nesciunt perferendis. Accusantium itaque laudantium, doloremque esse sequi debitis molestias voluptates, nam sapiente ipsam quaerat velit!</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sed voluptatem assumenda eius nesciunt perferendis. Accusantium itaque laudantium, doloremque esse sequi debitis molestias voluptates, nam sapiente ipsam quaerat velit!</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sed voluptatem assumenda eius nesciunt perferendis. Accusantium itaque laudantium, doloremque esse sequi debitis molestias voluptates, nam sapiente ipsam quaerat velit!</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sed voluptatem assumenda eius nesciunt perferendis. Accusantium itaque laudantium, doloremque esse sequi debitis molestias voluptates, nam sapiente ipsam quaerat velit!</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sunt sed voluptatem assumenda eius nesciunt perferendis. Accusantium itaque laudantium, doloremque esse sequi debitis molestias voluptates, nam sapiente ipsam quaerat velit!</Typography>
</Grid>
</Grid>
<Grid item style={{maxWidth:"40em"}}>
   <Lottie options={defaultOptions}/>
</Grid>
  </Grid>
  <Grid item container direction="row" justify="center" className={classes.mainContainer}>
<Grid item>
    <Typography variant="h4" gutterBottom>Process</Typography>
</Grid>
  </Grid>
  <Grid item container direction="row" className={classes.mainContainer} style={{backgroundColor:"#b3b3b3",height:"60em"}}>
<Grid item container direction="column" lg>
<Grid item>
    <Typography variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Consultation</Typography>
</Grid>
<Grid item>
    <Typography style={{color:"#fff",maxWidth:"20em"}}  variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
</Grid>
</Grid>
<Grid item lg style={{alignSelf:"center"}}>
<img src={consultation} alt="handshake"/>
</Grid>
  </Grid>
  <Grid item container direction="row" className={classes.mainContainer} style={{backgroundColor:"#ff7373",height:"60em"}}>
<Grid item container direction="column" lg>
<Grid item>
    <Typography variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Mock up</Typography>
</Grid>
<Grid item>
    <Typography style={{color:"#fff",maxWidth:"20em"}}  variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
</Grid>
</Grid>
<Grid item lg style={{alignSelf:"center"}}>
<img src={mockup} alt="mockup"/>
</Grid>
  </Grid>
  <Grid item container direction="row" className={classes.mainContainer} style={{backgroundColor:"#39b544",height:"60em"}}>
<Grid item container direction="column" lg>
<Grid item>
    <Typography variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Review</Typography>
</Grid>
<Grid item>
    <Typography style={{color:"#fff",maxWidth:"20em"}}  variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
</Grid>
</Grid>
<Grid item lg style={{alignSelf:"center"}}>
<img src={review} alt="handshake"/>
</Grid>
  </Grid>
  <Grid item container direction="row" className={classes.mainContainer} style={{backgroundColor:"#a675c2",height:"60em"}}>
<Grid item container direction="column" lg>
<Grid item>
    <Typography variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Design</Typography>
</Grid>
<Grid item>
    <Typography style={{color:"#fff",maxWidth:"20em"}}  variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
</Grid>
</Grid>
<Grid item lg style={{alignSelf:"center"}}>
<img src={design} alt="design"/>
</Grid>
  </Grid>
  <Grid item container direction="row" className={classes.mainContainer} style={{backgroundColor:"#fbb03b",height:"60em"}}>
<Grid item container direction="column" lg>
<Grid item>
    <Typography variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Review</Typography>
</Grid>
<Grid item>
    <Typography style={{color:"#fff",maxWidth:"20em"}}  variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
</Grid>
</Grid>
<Grid item lg style={{alignSelf:"center"}}>
<img src={review} alt="handshake"/>
</Grid>
  </Grid>
  <Grid item container direction="row" className={classes.mainContainer} style={{backgroundColor:"#c1272d",height:"60em"}}>
<Grid item container direction="column" lg>
<Grid item>
    <Typography variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Build</Typography>
</Grid>
<Grid item>
    <Typography style={{color:"#fff",maxWidth:"20em"}}  variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
</Grid>
</Grid>
<Grid item lg style={{alignSelf:"center"}}>
<img src={build} alt="handshake"/>
</Grid>
  </Grid>
  <Grid item container direction="row" className={classes.mainContainer} style={{backgroundColor:"#8e45ce",height:"60em"}}>
<Grid item container direction="column" lg>
<Grid item>
    <Typography variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Launch</Typography>
</Grid>
<Grid item>
    <Typography style={{color:"#fff",maxWidth:"20em"}}  variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
</Grid>
</Grid>
<Grid item lg style={{alignSelf:"center"}}>
<img src={maintain} alt="handshake"/>
</Grid>
  </Grid>
  <Grid item container direction="row" className={classes.mainContainer} style={{backgroundColor:"#29abe2",height:"60em"}}>
<Grid item container direction="column" lg>
<Grid item>
    <Typography variant="h4" gutterBottom style={{color:"#000",marginTop:"5em"}}>Iterate</Typography>
</Grid>
<Grid item>
    <Typography style={{color:"#fff",maxWidth:"20em"}}  variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
    <Typography style={{color:"#fff",maxWidth:"20em"}} variant="body1" paragraph>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure accusantium laborum ab quaerat quidem consequuntur dicta. Ullam voluptatibus voluptatem porro similique numquam dolores, consequatur modi rem, necessitatibus optio nostrum.
    </Typography>
</Grid>
</Grid>
<Grid item lg style={{alignSelf:"center"}}>
<img src={iterate} alt="handshake"/>
</Grid>
  </Grid>
        </Grid>
    )
}