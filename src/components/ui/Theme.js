import { createMuiTheme } from '@material-ui/core/styles';

const arcblue="#0b72b9"
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
        
      }
    }
})