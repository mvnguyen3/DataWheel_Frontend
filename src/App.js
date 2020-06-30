import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import NavigationBar from './CommonComponents/Navigation/NavigationBar';
import ReportComponent from './Containers/Report/Report';
import ButtonComponent from './Containers/Button/Button';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
          <Route path='/report' component={ReportComponent}/>
          <Route path='/button' component={ButtonComponent}/>
          <Route path='*' component={ButtonComponent}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
