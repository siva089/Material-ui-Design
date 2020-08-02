import { createMuiTheme } from '@material-ui/core/styles';

const arcblue="#0b72b9"
const black="#000"
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
        h3:{
            fontSize:"10px"
        }
    }
})