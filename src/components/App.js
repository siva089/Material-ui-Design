import React,{useState} from 'react';
import Header from "./ui/header"
import {ThemeProvider} from "@material-ui/styles"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import theme from "./ui/Theme"
import Footer from "./ui/footer"
import LandingPage from "./LandingPage"

function App() {
  const [selectedIndex,setSelectedIndex]=useState(0)
  const [value, setvalue] = useState(0)
  return (
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header value={value} setvalue={setvalue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
<Switch>
  <Route exact  path="/" component={LandingPage} />
  <Route exact  path="/services" component={()=><div>services</div>}  />
  <Route exact  path="/customsoftware" component={()=><div>Custom Software</div>}  />
  <Route exact  path="/revolution" component={()=><div>Revolution</div>}  />
  <Route exact  path="/mobileapps" component={()=><div>mobileapps</div>}  />
  <Route exact  path="/websites" component={()=><div>websites</div>}  />
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
