import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Switch, Route } from 'react-router-dom';
import { MyTemplatesPage, TemplatePage } from './components/pages';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/my-templates' component={MyTemplatesPage} />
        <Route
          exact
          path='/my-templates/:templateId'
          component={TemplatePage}
        />

        <Route exact path='/create-template' component={MyTemplatesPage} />

        <Route path='/' component={MyTemplatesPage} />
      </Switch>
    </div>
  );
}

export default App;
