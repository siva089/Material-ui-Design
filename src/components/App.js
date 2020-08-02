import React from 'react';
import Header from "./ui/header"
import {ThemeProvider} from "@material-ui/styles"
import theme from "./ui/Theme"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
 Hello
    </ThemeProvider>
  );
}

export default App;
