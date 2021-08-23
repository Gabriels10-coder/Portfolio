import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/aboutmain';
import ProjectsMain from '../pages/projects/projectmain';
import Service  from '../pages/services/servicemain';
import Contato from '../pages/contact/contato';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path= '/' component={Home} />
                    <Route path =  '/about' component={About} />
                    <Route path ='/projects' component={ProjectsMain} />
                    <Route path ='/services' component={Service} />
                    <Route path ='/contact' component={Contato} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;