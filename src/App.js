import React from 'react';
import './App.css';
import Main from './components/main';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette:{
    primary: {main: green[600],},
    secondary: {main: green[700]},
    text:{
      primary: green[600],
      secondary: green[700]
    }
  },
  MuiInputBase:{
    input:{
      color: 'blue'
    }
  }
});

function App() {
  

  
  return (
    <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <div className="App">
    <CssBaseline />
      <Router>
          <Switch>
        
          <Route path='/' exact component={Main}/>
          <Route path='*' component={() => "404 NOT FOUND"}/>
          
          </Switch>
      </Router>
    </div>
    </MuiPickersUtilsProvider> 
       </ThemeProvider>


  );

}

export default App;
