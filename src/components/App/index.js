import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {PrivatePerson} from '_components/PrivatePerson';
import {Login} from "_components/Login";

// === [redux]
import {Provider} from 'react-redux';
import {store} from '_redux/store';

// === [styles]
import '_styles/globals.scss';


export const App = () => (
    <Provider store={store}>
        <Link to="/">Home</Link>

        <Link to="/catalog">dashboard</Link>


        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="catalog" element={<PrivatePerson/>}/>
        </Routes>
    </Provider>
)
