import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {makeStyles,useTheme} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow"
import Background from "../../assets/background.jpg"
import mobileBackground from "../../assets/mobileBackground.jpg"
import useMediaQuery from "@material-ui/core/useMediaQuery"
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
        background:{
            backgroundImage:`url(${Background})`,
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",
            height:"60em",
            width:"100%",
            [theme.breakpoints.down("md")]:{
                backgroundImage:`url(${mobileBackground})`
            }
        },
        estimateButton:{
            ...theme.typography.estimate,
            borderRadius:50,
            height:80,
            width:205,
            backgroundColor:theme.palette.common.orange,
            fontSize:"1.5rem",
            marginRight:"5em",
            marginLeft:"2em"
        }
}))

export default function CalltoAction(){
    const classes=useStyles()
const theme=useTheme()
const matchesSm=useMediaQuery(theme.breakpoints.down("sm"))
    return <Grid direction={matchesSm?"column":"row"} container justify={matchesSm?"center":"space-between"}  className={classes.background} alignItems="center">
<Grid item style={{marginLeft:"5em"}}>
<Grid container direction="column" >
<Grid item>
<Typography variant="h2">
Simple software.<br/> Revolutionary Results
</Typography>
<Typography variant="subtitle2" style={{fontSize:"1.5rem"}}>
Take Advantage of 21st century
</Typography>
<Grid container item>
      <Button className={classes.learnButton} variant="outlined">
      <span style={{marginRight:5}}>Learn More</span>
      <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
      </Button>
      </Grid>
</Grid>
</Grid>
</Grid>
<Grid item >
<Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
</Grid>

    </Grid>
}