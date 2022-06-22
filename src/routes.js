import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Main from './pages/home';
import Category from './pages/category';
import Header from './components/Header';


const Routes = () => (
    <BrowserRouter>
            {/* <Route path='/' component={Header} /> */}
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/:url' component={Category} />
        </Switch>
    </BrowserRouter>
)

export default Routes;