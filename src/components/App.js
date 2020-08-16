import React,{useState} from 'react';
import Header from "./ui/header"
import {ThemeProvider} from "@material-ui/styles"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import theme from "./ui/Theme"
import Footer from "./ui/footer"
import LandingPage from "./LandingPage"
import Services from "./services"
import CustomSoftware from "./CustomSoftware"
import MobileApps from "./MobileApps"
import Websites from "./websites"
function App() {
  const [selectedIndex,setSelectedIndex]=useState(0)
  const [value, setvalue] = useState(0)
  return (
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header value={value} setvalue={setvalue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
<Switch>
  <Route exact  path="/"  render={props=>(<LandingPage {...props} setvalue={setvalue} setSelectedIndex={setSelectedIndex}/>)} />
  <Route exact  path="/services" render={props=>(<Services {...props} setvalue={setvalue} setSelectedIndex={setSelectedIndex}/>)}  />
  <Route exact  path="/customsoftware" render={props=>(<CustomSoftware {...props} setvalue={setvalue} setSelectedIndex={setSelectedIndex}/>)}  />
  <Route exact  path="/revolution" component={()=><div>Revolution</div>}  />
  <Route exact  path="/mobileapps" render={props=>(<MobileApps {...props} setvalue={setvalue} setSelectedIndex={setSelectedIndex}/>)}  />
  <Route exact  path="/websites" render={props=>(<Websites {...props} setvalue={setvalue} setSelectedIndex={setSelectedIndex}/>)}  />
  <Route exact  path="/about" component={()=><div>About Us</div>}  />
  <Route exact  path="/contact" component={()=><div>Contact Us</div>}  />
  <Route exact  path="/estimate" component={()=><div>estimate Us</div>}  />
</Switch>
<Footer value={value} setvalue={setvalue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
     
    </ThemeProvider>
 
  );
}

export default App;
