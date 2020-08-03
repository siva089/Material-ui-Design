import React from 'react';
import Header from "./ui/header"
import {ThemeProvider} from "@material-ui/styles"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import theme from "./ui/Theme"
function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header/>
<Switch>
  <Route exact  path="/" component={()=><div>Home</div>} />
  <Route exact  path="/services" component={()=><div>services</div>}  />
  <Route exact  path="/customsoftware" component={()=><div>Custom Software</div>}  />
  <Route exact  path="/revolution" component={()=><div>Revolution</div>}  />
  <Route exact  path="/mobileapps" component={()=><div>mobileapps</div>}  />
  <Route exact  path="/websites" component={()=><div>websites</div>}  />
  <Route exact  path="/about" component={()=><div>About Us</div>}  />
  <Route exact  path="/contact" component={()=><div>Contact Us</div>}  />
  <Route exact  path="/estimate" component={()=><div>estimate Us</div>}  />
</Switch>
      </BrowserRouter>
     
    </ThemeProvider>
 
  );
}

export default App;
