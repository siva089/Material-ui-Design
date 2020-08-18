import React from 'react'
import {makeStyles,useTheme} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import history from "../assets/history.svg"
import profile from "../assets/founder.jpg"
import yearBook from "../assets/yearbook.svg"
import puppy from "../assets/puppy.svg"
const useStyles=makeStyles((theme)=>({
    missionStatement:{
        fontStyle:"italic",
        fontWeight:300,
        fontSize:"1.5rem",
        maxWidth:"50em",
        lineHeight:1.4
    },
    mainContainer:{
        paddingLeft:"5em",
        paddingRight:'5em',
        [theme.breakpoints.down("sm")]:{
            paggingLeft:"1.5em",
            paddingRight:"1.5em"
        }
     },
     avatar:{
         height:"25em",
         width:"25em"
     }
}))
export default function About(props){

    const classes=useStyles()
    const theme=useTheme()
    return (<Grid container direction="column">
        <Grid item className={classes.mainContainer} style={{marginTop:"2em"}}>
            <Typography variant="h2">
                About Us
            </Typography>

        </Grid>
        <Grid item container  justify="center" className={classes.mainContainer} >
            <Typography  variant="h4" className={classes.missionState}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque. Quibusdam culpa blanditiis neque, fugit officiis voluptatem cumque omnis! Odio quibusdam veritatis aperiam natus ratione molestiae debitis consequuntur nemo vel.
            </Typography>
        </Grid>
<Grid style={{marginTop:"2em"}} item container className={classes.mainContainer}>
<Grid item container direction="column" lg style={{maxWidth:"35em"}}>
<Grid item >
    <Typography variant="h4" gutterBottom>History</Typography>
</Grid>
<Grid item >
    <Typography variant="body1" paragraph style={{fontWeight:700,fontStyle:"italic"}}>We are the new kid on the block</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, atque!</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae cum corrupti cumque nulla eligendi. Voluptate, officia assumenda. Dignissimos, non ducimus.</Typography>
    <Typography variant="body1" paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sequi quis qui, quisquam doloribus deleniti doloremque assumenda totam, ipsam perferendis excepturi soluta odit vitae placeat natus possimus. Assumenda, vitae ipsum!</Typography>
</Grid>
</Grid>
<Grid item container justify="center" lg>
    <img src={history} alt="Quilt" />
</Grid>

</Grid>

<Grid item container direction="column" alignItems="center" className={classes.mainContainer}>
<Grid item>
    <Typography align="center" variant="h4" gutterBottom>
          Team
    </Typography>
</Grid>
<Grid item>
    <Typography variant="body1" paragraph align="center">
   Siva, Founder
    </Typography>
    <Typography variant="body1" paragraph align="center">
        I Love to Code
    </Typography>
</Grid>
<Grid item>
    <Avatar alt="founder" src={profile} className={classes.avatar}/>
</Grid>
<Grid item container>
    <Grid lg item container direction="column">
<Grid item>
    <img src={yearBook}/>
</Grid>
<Grid item>
    <Typography variant="caption">
        a page from my sophomore yearbook
    </Typography>
</Grid>
    </Grid>
    <Grid lg item>
        <Typography variant="body1" align="center" paragraph>I am Self taught developer , always just learning</Typography>
    </Grid>
    <Grid lg item container direction="coolumn">
        <Grid item>
            <img src={puppy} />
        </Grid>
        <Grid item>
            <Typography variant="caption">my miniature dapple</Typography>
        </Grid>
    </Grid>
</Grid>
</Grid>
    </Grid>)
}