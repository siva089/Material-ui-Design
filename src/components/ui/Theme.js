import { createMuiTheme } from '@material-ui/core/styles';

const arcblue="#0b72b9"
const arcGrey="#868686"
const arcOrange="#FFBA60"
export default createMuiTheme({
    "palette":{
          common:{
              blue:`${arcblue}`,
              orange:`${arcOrange}`
          },
        primary:{
            main:`${arcblue}`
        },
        secondary:{
            main:`${arcOrange}`
        }
    },

    typography:{
      tab:{
        fontFamily:"Raleway",
        textTransform:"none",
        fontWeight:700,
        color:"white",
        fontSize:"1rem"
        
      },
      h2:{
        fontFamily:"Raleway",
        fontWeight:700,
        fontSize:"2rem",
        color:arcblue,
        lineHeight:1.5
      },
      h3:{
fontFamily:"Pacifico",
fontSize:"2.5rem",
color:arcblue
      },
      h4:{
        fontFamily:"Raleway",
        fontSize:"1.7rem",
        color:arcblue,
        fontWeight:700
      },
      subtitle1:{
        fontSize:"1.25rem",
        fontWeight:300,
        color:arcGrey
      },
      subtitle2:{
        color:"white",
        fontSize:"1.25rem",
        fontWeight:300
      },
      learnButton:{
        borderColor:arcblue,
        color:arcblue,
        borderWidth:2,
        textTransform:"none",
        borderRadius:50,
        fontFamily:"Roboto",
        fontWeight:'bold',
      },
      estimate:{
        fontFamily:"Pacifico",
        fontSize:"1rem",
        "textTransform":"none",
        "color":"white"
      },body1:{
       color:arcGrey,
       fontWeight:300,
        fontSize:"1.25rem"
      },
     
    },
    overrides:{
      MuiInputLabel:{
        root:{
          color:arcblue,
          fontSize:'1rem'
        }
      },
      MuiInput:{
        underline:{
          "&:before":{
            borderBottom:`2px solid ${arcblue}`
          },
          "&:hover:not($disabled):not($focused):not($error):before":{
            borderBottom:`2px solid ${arcblue}`
          }
        },
        root:{
          color:arcGrey,
          fontWeight:300
        }
      }
    }
})