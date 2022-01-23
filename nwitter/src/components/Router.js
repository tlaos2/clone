import React, { useState } from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () =>{
    const [isLoggiedIn, setIsLoggdIn] = useState(false);
    return (
        <Router>
            <switch>
                {isLoggiedIn ? (
                 <>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                 </> ): (
                    <Route exact path='/'> 
                        <Auth/> 
                    </Route>

                 )}
            </switch>
        </Router>
    )
}
export default AppRouter;




