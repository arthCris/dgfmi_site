import React from 'react';
import {Route} from 'react-router-dom';
import Landing from '../src/Page/Landing/index';
import DashBoard from '../src/Page/Dashboard/index';
import Activity from '../src/Page/Activity/index';
import About from '../src/Page/About/index';
import './App.css';

export default function App() {
  return (
    <>
        <Route exact path="/dgfmi" component={Landing} />
        <Route path="dgfmi_site/dashboard" component={DashBoard} />
        <Route path="dgfmi_site/activity" component={Activity} />
        <Route path="dgfmi_site/about" component={About} />
    </>
  );
}
