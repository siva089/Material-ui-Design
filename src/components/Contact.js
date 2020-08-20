import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {makeStyles,useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography, useMediaQuery } from '@material-ui/core';
import background from "../assets/background.jpg"
import PhoneIcon from "../assets/phone.svg"
import emailIcon from  "../assets/email.svg"
import airplane from "../assets/send.svg"
import ButtonArrow from "./ui/ButtonArrow"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"

const useStyles=makeStyles((theme)=>({
// regex
    background:{
        backgroundImage:`url(${background})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"60em",
        paddingBottom:"10em",
        [theme.breakpoints.down("md")]:{
            marginTop:"4em"
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
        message:{
            border:`2px solid ${theme.palette.common.blue}`,
            marginTop:"3em",
            borderRadius:5
        },
        sendButton:{
            ...theme.typography.estimate,
            borderRadius:50,
            height:45,
            width:245,
            fontSize:"1rem",
            backgroundColor:theme.palette.common.orange,
            "&:hover":{
                backgroundColor:theme.palette.secondary.light
            }
        }
}))
export default function Contact(props){
const classes=useStyles()
const theme=useTheme()
const matchesSm=useMediaQuery(theme.breakpoints.down("sm"))
const matchesMd=useMediaQuery(theme.breakpoints.down("md"))
const matchesXs=useMediaQuery(theme.breakpoints.down("xs"))
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')
const [message,setMessage]=useState('')
const [emailHelper,setEmailHelper]=useState('')
const [phoneHelper,setPhoneHelper]=useState('')
const [open,setOpen]=useState(false)
const onChange=event=>{
    let valid;
    switch(event.target.id){
        case 'email':
            setEmail(event.target.value)
            valid=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
            if(!valid){
                setEmailHelper("Invalid Email")
            }
            else{
                setEmailHelper("")
            }
            break;
         case 'phone':
             setPhone(event.target.value)
             valid=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
             if(!valid){
                 setPhoneHelper("Invalid Phone")
             }   
             else{
                 setPhoneHelper("")
             }
             break;
         default:
             break;   
    }
}

    return (
    <Grid  container direction="row">
<Grid item container direction="column"  justify="center" alignItems="center" lg={4} xl={3}>
<Grid item>
    <Grid container direction="column">
    <Grid item>
    <Typography style={{lineHeight:1}} variant="h2">
        Contact Us
    </Typography>
    <Typography style={{color:theme.palette.common.blue}} variant="body1">We're waiting.</Typography>
</Grid>
<Grid item container style={{marginTop:"2em"}}>
    <Grid item><img src={PhoneIcon} alt="phoneicon" style={{marginRight:"0.5em",verticalAlign:"bottom"}}  /></Grid>
    <Grid item>
        <Typography variant="body1" style={{color:theme.palette.common.blue,fontSize:"1rem"}}><a href="tel:8888888888">(888) 888-8888</a></Typography>
    </Grid>
</Grid>
<Grid item container style={{marginTop:"2em"}}>
    <Grid item><img src={emailIcon} alt="envelone" style={{marginRight:"0.5em",verticalAlign:"bottom"}}  /></Grid>
    <Grid item>
        <Typography variant="body1" style={{color:theme.palette.common.blue,fontSize:"1rem"}}><a href="mailto:sivasankar@troopr.io">sivasankar@troopr.io</a></Typography>
    </Grid>
</Grid>
<Grid item container direction="column" style={{maxWidth:"20em"}}>
<Grid item style={{marginBottom:"0.5em"}}>
<TextField  helperText="Please enter a name" fullWidth label="Name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
</Grid>
<Grid item style={{marginBottom:"0.5em"}}>
<TextField error={emailHelper.length!==0} helperText={emailHelper} fullWidth label="Email" id="email" value={email} onChange={onChange}/>
</Grid>
<Grid item style={{marginBottom:"0.5em"}}>
<TextField error={phoneHelper.length!==0} helperText={phoneHelper} fullWidth label="Phone" id="phone" value={phone} onChange={onChange}/>
</Grid>
</Grid>
<Grid item style={{maxWidth:"20em"}}>
    <TextField fullWidth InputProps={{disableUnderline:true}} multiline rows={10} className={classes.message} value={message} id="message" onChange={(e)=>setMessage(e.target.value)}/>
</Grid>
<Grid item container justify="center" style={{marginTop:"2em"}}>
    <Button onClick={()=>setOpen(true)} 
    disabled={name.length==0||phone.length==0||email.length==0||message.length==0||emailHelper.length!==0||phoneHelper.length!==0} 
    className={classes.sendButton} variant="contained">Send Message
    <img src={airplane} alt="paper airplane" style={{marginLeft:"1em"}} />
    </Button>
</Grid>
    </Grid>
</Grid>
</Grid>


<Grid direction={matchesMd?"column":"row"} className={classes.background} alignItems="center" item container lg={8} xl={9}>
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
      <Button  className={classes.learnButton} variant="outlined">
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
<Dialog fullScreen={true} style={{zIndex:1302}} open={open} onClose={()=>setOpen(false)} PaperProps={{style:{padding:matchesXs?"1em 0em":matchesSm?"0.5em 1.5em":"2em 5em",}}} >
<DialogContent>
    <Grid container direction="column">
<Grid item>
    <Typography align="center" variant="h4"> Confirm Message</Typography>
</Grid>

<Grid item style={{marginBottom:"0.5em"}}>
<TextField  helperText="Please enter a name" fullWidth label="Name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
</Grid>
<Grid item style={{marginBottom:"0.5em"}}>
<TextField error={emailHelper.length!==0} helperText={emailHelper} fullWidth label="Email" id="email" value={email} onChange={onChange}/>
</Grid>
<Grid item style={{marginBottom:"0.5em"}}>
<TextField error={phoneHelper.length!==0} helperText={phoneHelper} fullWidth label="Phone" id="phone" value={phone} onChange={onChange}/>
</Grid>
<Grid item style={{maxWidth:"20em"}}>
    <TextField fullWidth InputProps={{disableUnderline:true}} multiline rows={10} className={classes.message} value={message} id="message" onChange={(e)=>setMessage(e.target.value)}/>
</Grid>
<Grid item alignItems="center" container style={{marginTop:"2em"}}>
    <Grid item>
<Button color="primary" onClick={()=>setOpen(false)}>
    Cancel
</Button>
</Grid>
<Grid item>
<Button onClick={()=>setOpen(true)} 
    disabled={name.length==0||phone.length==0||email.length==0||message.length==0||emailHelper.length!==0||phoneHelper.length!==0} 
    className={classes.sendButton} variant="contained">Send Message
    <img src={airplane} alt="paper airplane" style={{marginLeft:"1em"}} />
    </Button>
</Grid>
</Grid>
</Grid>
</DialogContent>
</Dialog>

    </Grid>)

}

{/* <Dialog open={open} onClose={()=>setOpen(false)}>
<DialogContent>
    <Grid container direction="column">
<Grid item>
    <Typography variant="h4"> Confirm Message</Typography>
</Grid>
<Grid item container>
    
<Grid item container direction="column" style={{maxWidth:"20em"}}>
<Grid item style={{marginBottom:"0.5em"}}>
<TextField  helperText="Please enter a name" fullWidth label="Name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
</Grid>
<Grid item style={{marginBottom:"0.5em"}}>
<TextField error={emailHelper.length!==0} helperText={emailHelper} fullWidth label="Email" id="email" value={email} onChange={onChange}/>
</Grid>
<Grid item style={{marginBottom:"0.5em"}}>
<TextField error={phoneHelper.length!==0} helperText={phoneHelper} fullWidth label="Phone" id="phone" value={phone} onChange={onChange}/>
</Grid>
</Grid>
<Grid item style={{maxWidth:"20em"}}>
    <TextField fullWidth InputProps={{disableUnderline:true}} multiline rows={10} className={classes.message} value={message} id="message" onChange={(e)=>setMessage(e.target.value)}/>
</Grid>
</Grid>
    </Grid>
</DialogContent>
</Dialog> */}